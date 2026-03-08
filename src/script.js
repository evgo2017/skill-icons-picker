document.addEventListener('DOMContentLoaded', async () => {
    let iconsData = null;
    let iconsManifest = null;
    let iconsNames = {};
    let manifestPathPrefix = '';
    const loadedChunks = new Set();
    const loadingChunks = new Map();
    let searchRequestId = 0;
    let allCategoriesObserver = null;
    let allCategoriesLoadToken = 0;

    // State
    const state = {
        selectedIcons: [], // Array of string ids
        theme: 'dark',
        perline: 0,
        iconSize: 48,
        activeCategory: 'All',
        lang: 'zh-CN'
    };

    // Elements
    const searchInput = document.getElementById('search-input');
    const iconsContainer = document.getElementById('icons-container');
    const sortContainer = document.getElementById('sort-container');
    const themeSelect = document.getElementById('theme-select');
    const perlineSelect = document.getElementById('perline-select');
    const previewImg = document.getElementById('preview-img');
    const previewContainer = document.getElementById('preview-container');
    const markdownOutput = document.getElementById('markdown-output');
    const copyBtn = document.getElementById('copy-btn');
    const categoryFilters = document.getElementById('category-filters');
    const langSelect = document.getElementById('lang-select');
    // Vite natively exposes the base path setup in vite.config.js through import.meta.env.BASE_URL
    // The trailing slash matches the base path config, so we append the remaining relative url
    const BASE_PATH = import.meta.env.BASE_URL;
    const ASSETS_PATH = BASE_PATH + 'assets';

    function withBasePath(relativePath) {
        const cleanPath = relativePath.replace(/^\/+/, '');
        return `${BASE_PATH}${cleanPath}`;
    }

    async function fetchJson(relativePath) {
        const response = await fetch(withBasePath(relativePath));
        if (!response.ok) {
            throw new Error(`Failed to fetch ${relativePath}: ${response.status}`);
        }
        return response.json();
    }

    async function fetchJsonFromCandidates(relativePaths) {
        let lastError = null;
        for (const relativePath of relativePaths) {
            try {
                const payload = await fetchJson(relativePath);
                return { payload, relativePath };
            } catch (error) {
                lastError = error;
            }
        }
        throw lastError || new Error('No available JSON candidate path.');
    }

    function resolveManifestPath(pathFromManifest) {
        if (!manifestPathPrefix) return pathFromManifest;
        return `${manifestPathPrefix}${pathFromManifest}`;
    }

    function getOrderedCategories() {
        if (Array.isArray(iconsManifest?.categoryOrder) && iconsManifest.categoryOrder.length > 0) {
            return iconsManifest.categoryOrder;
        }
        return Object.keys(iconsData.icons);
    }

    async function ensureChunkLoaded(chunkPath) {
        if (!chunkPath || loadedChunks.has(chunkPath)) return;
        if (loadingChunks.has(chunkPath)) {
            await loadingChunks.get(chunkPath);
            return;
        }

        const loadPromise = (async () => {
            const chunk = await fetchJson(resolveManifestPath(chunkPath));
            for (const [category, list] of Object.entries(chunk.icons || {})) {
                const existing = iconsData.icons[category] || [];
                iconsData.icons[category] = existing.concat(list);
            }
            loadedChunks.add(chunkPath);
        })();

        loadingChunks.set(chunkPath, loadPromise);
        try {
            await loadPromise;
        } finally {
            loadingChunks.delete(chunkPath);
        }
    }

    async function ensureCategoryLoaded(category) {
        if (category === 'All') {
            await ensureAllCategoriesLoaded();
            return;
        }
        if (iconsData.icons[category]) return;

        const mappedChunk = iconsManifest?.categoryToChunk?.[category];
        if (mappedChunk) {
            const chunkPaths = Array.isArray(mappedChunk) ? mappedChunk : [mappedChunk];
            await Promise.all(chunkPaths.map((chunkPath) => ensureChunkLoaded(chunkPath)));
            return;
        }

        // Backward-compatible fallback if manifest has no category map.
        await ensureAllCategoriesLoaded();
    }

    async function ensureAllCategoriesLoaded() {
        const chunkPaths = Array.isArray(iconsManifest?.chunks) ? iconsManifest.chunks : [];
        for (const chunkPath of chunkPaths) {
            await ensureChunkLoaded(chunkPath);
        }
    }

    function disposeAllCategoriesObserver() {
        if (allCategoriesObserver) {
            allCategoriesObserver.disconnect();
            allCategoriesObserver = null;
        }
    }

    function stopAllCategoriesLazyMode() {
        allCategoriesLoadToken += 1;
        disposeAllCategoriesObserver();
    }

    async function loadIconsData() {
        const manifestCandidates = import.meta.env.DEV
            ? ['generated-icons/manifest.json', 'dist/icons/manifest.json', 'icons/manifest.json']
            : ['icons/manifest.json', 'dist/icons/manifest.json'];
        const { payload: manifestPayload, relativePath: manifestPath } = await fetchJsonFromCandidates(manifestCandidates);
        iconsManifest = manifestPayload;
        const manifestSuffix = 'icons/manifest.json';
        if (manifestPath.endsWith(manifestSuffix)) {
            manifestPathPrefix = manifestPath.slice(0, manifestPath.length - manifestSuffix.length);
        } else {
            manifestPathPrefix = '';
        }

        const locales = await fetchJson(resolveManifestPath(iconsManifest.locales));
        const namesPayload = await fetchJson(resolveManifestPath(iconsManifest.names));
        iconsNames = namesPayload.icons || {};
        return { locales, icons: {} };
    }

    async function renderActiveCategoryView() {
        stopAllCategoriesLazyMode();
        if (state.activeCategory === 'All') {
            renderAllCategoriesLazy();
        } else {
            await ensureCategoryLoaded(state.activeCategory);
            renderSingleCategory(state.activeCategory);
        }
        updateIconsContainerOverflowMode();
    }

    function buildSearchMatches(query) {
        const lower = query.toLowerCase();
        const matches = {};
        for (const category of getOrderedCategories()) {
            const namesList = iconsNames[category] || [];
            const matchedIds = namesList
                .filter((id) => id.toLowerCase().includes(lower));
            if (matchedIds.length > 0) {
                matches[category] = matchedIds;
            }
        }
        return matches;
    }

    async function renderSearchResultsForQuery(query) {
        stopAllCategoriesLazyMode();
        const requestId = ++searchRequestId;
        const matches = buildSearchMatches(query);
        const categories = Object.keys(matches);

        await Promise.all(categories.map((category) => ensureCategoryLoaded(category)));
        if (requestId !== searchRequestId) return;

        iconsContainer.innerHTML = '';
        for (const category of getOrderedCategories()) {
            const matchedIds = matches[category];
            if (!matchedIds || matchedIds.length === 0) continue;

            const fullIcons = iconsData.icons[category] || [];
            const matchSet = new Set(matchedIds);
            const matchedIcons = fullIcons.filter((icon) => matchSet.has(icon.id));
            if (matchedIcons.length === 0) continue;
            createCategorySection(category, matchedIcons);
        }
        updateIconsContainerOverflowMode();
    }

    async function init() {
        // Sync state with UI
        state.theme = themeSelect.value;
        state.perline = parseInt(perlineSelect.value) || 0;

        // Language detection: localStorage > browser > default zh-CN
        const savedLang = localStorage.getItem('skill-icons-lang');
        const browserLang = navigator.language.startsWith('en') ? 'en-US' : 'zh-CN';
        const preferredLang = savedLang || browserLang;
        state.lang = iconsData.locales[preferredLang]
            ? preferredLang
            : (iconsData.locales['zh-CN'] ? 'zh-CN' : Object.keys(iconsData.locales)[0]);
        langSelect.value = state.lang;

        updateUIForLanguage();
        renderCategoryFilters();
        await renderActiveCategoryView();
        window.addEventListener('resize', updateIconsContainerOverflowMode);
        initSortable();
        updatePreview();

        searchInput.addEventListener('input', async (e) => {
            const query = (e.target.value || '').trim();
            if (query) {
                await renderSearchResultsForQuery(query);
            } else {
                await renderActiveCategoryView();
            }
        });

        themeSelect.addEventListener('change', (e) => {
            state.theme = e.target.value;
            handleThemeChange();
        });

        perlineSelect.addEventListener('change', (e) => {
            state.perline = parseInt(e.target.value);
            updatePreview();
        });

        langSelect.addEventListener('change', async (e) => {
            state.lang = e.target.value;
            localStorage.setItem('skill-icons-lang', state.lang);
            updateUIForLanguage();
            renderCategoryFilters();
            const query = (searchInput.value || '').trim();
            if (query) {
                await renderSearchResultsForQuery(query);
            } else {
                await renderActiveCategoryView();
            }
        });

        copyBtn.addEventListener('click', copyToClipboard);
    }

    function handleThemeChange() {
        // 1. Update Preview Container Background
        if (state.theme === 'light') {
            previewContainer.classList.add('light-theme');
            sortContainer.classList.add('light-theme');
            iconsContainer.classList.add('light-theme'); // Optional, if we want grid to match
        } else {
            previewContainer.classList.remove('light-theme');
            sortContainer.classList.remove('light-theme');
            iconsContainer.classList.remove('light-theme');
        }

        // 2. Update Grid Icons (Local Images)
        const allIconImgs = document.querySelectorAll('.icon-item img');
        allIconImgs.forEach(img => {
            // Check if this img belongs to an icon item
            const parent = img.parentElement;
            if (!parent.dataset.icon) return;

            // We need to look up the file path for the current theme
            // But we don't have direct access to the `icons` object here easily unless we look it up.
            // Efficient way: Store the file map in the DOM or look up global ICONS_DATA.
            if (parent.dataset.files) {
                const files = JSON.parse(parent.dataset.files);
                const file = state.theme === 'light' ? files.light : files.dark;
                img.src = `${ASSETS_PATH}/${file}`;
            }
        });

        updatePreview();
    }

    function updateUIForLanguage() {
        const t = iconsData.locales[state.lang].ui;
        document.getElementById('ui-title').innerText = t.title;
        document.title = t.title;
        document.getElementById('ui-step1').innerHTML = `<span class="step-number">1</span> ${t.step1}`;
        document.getElementById('ui-step2').innerHTML = `<span class="step-number">2</span> ${t.step2}`;
        document.getElementById('ui-step3').innerHTML = `<span class="step-number">3</span> ${t.step3}`;

        searchInput.placeholder = t.searchPlaceholder;
        document.getElementById('ui-themeLabel').innerText = t.themeLabel;
        document.getElementById('ui-perlineLabel').innerText = t.perlineLabel;

        // Options (static in HTML, need to update text)
        themeSelect.options[0].text = t.themeDark;
        themeSelect.options[1].text = t.themeLight;
        perlineSelect.options[0].text = t.perlineAuto;

        copyBtn.innerText = t.copyBtn;
        markdownOutput.placeholder = t.markdownPlaceholder;
        previewImg.alt = t.previewAlt;

        const placeholder = sortContainer.querySelector('.sort-placeholder');
        if (placeholder) placeholder.innerText = t.sortPlaceholder;
    }

    // Render Filters
    function renderCategoryFilters() {
        const categories = ['All', ...getOrderedCategories()];
        const allText = iconsData.locales[state.lang].ui.allCategories;
        categoryFilters.innerHTML = '';

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `category-btn ${cat === 'All' && state.activeCategory === 'All' ? 'active' : (cat === state.activeCategory ? 'active' : '')}`;
            btn.innerText = cat === 'All' ? allText : translateCategory(cat);
            btn.onclick = async () => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.activeCategory = cat;
                const query = (searchInput.value || '').trim();
                if (query) {
                    await renderSearchResultsForQuery(query);
                } else {
                    await renderActiveCategoryView();
                }
            };
            categoryFilters.appendChild(btn);
        });
    }

    function translateCategory(cat) {
        const locale = iconsData.locales[state.lang];
        return locale.categories[cat] || cat;
    }

    function getDescription(iconObj) {
        if (!iconObj.description) return iconObj.id;
        if (typeof iconObj.description === 'string') return iconObj.description;
        return iconObj.description[state.lang] || iconObj.description['en-US'] || iconObj.id;
    }

    function updateIconsContainerOverflowMode() {
        window.requestAnimationFrame(() => {
            const hasVerticalOverflow = iconsContainer.scrollHeight > iconsContainer.clientHeight + 1;
            iconsContainer.classList.toggle('no-vertical-overflow', !hasVerticalOverflow);
        });
    }

    function renderAllCategories() {
        iconsContainer.innerHTML = '';
        getOrderedCategories().forEach(cat => {
            const icons = iconsData.icons[cat] || [];
            if (icons.length === 0) return;
            createCategorySection(cat, icons);
        });
        updateIconsContainerOverflowMode();
    }

    function createCategoryPlaceholderSection(catName) {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.dataset.category = catName;

        const header = document.createElement('div');
        header.className = 'category-header';

        const title = document.createElement('h3');
        title.className = 'category-title';
        title.innerText = translateCategory(catName);
        header.appendChild(title);
        section.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'icons-grid';
        grid.innerHTML = '<div class="sort-placeholder">Loading...</div>';
        section.appendChild(grid);
        return section;
    }

    function buildCategorySectionElement(catName, icons) {
        const section = document.createElement('div');
        section.className = 'category-section';

        const header = document.createElement('div');
        header.className = 'category-header';

        const title = document.createElement('h3');
        title.className = 'category-title';
        title.innerText = translateCategory(catName);
        header.appendChild(title);

        const t = iconsData.locales[state.lang].ui;
        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'select-all-btn';
        const allInCatSelected = icons.every(icon => state.selectedIcons.includes(icon.id));
        selectAllBtn.innerText = allInCatSelected ? t.deselectAll : t.selectAll;
        selectAllBtn.onclick = () => toggleCategory(catName, icons, selectAllBtn);
        header.appendChild(selectAllBtn);

        section.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'icons-grid';
        icons.forEach(iconObj => {
            const div = createIconElement(iconObj);
            grid.appendChild(div);
        });

        section.appendChild(grid);
        return section;
    }

    async function loadAndReplaceCategorySection(catName, placeholderSection, token) {
        await ensureCategoryLoaded(catName);
        if (token !== allCategoriesLoadToken) return;
        if (!placeholderSection.isConnected) return;

        const icons = iconsData.icons[catName] || [];
        if (icons.length === 0) {
            placeholderSection.remove();
            return;
        }
        const realSection = buildCategorySectionElement(catName, icons);
        placeholderSection.replaceWith(realSection);
        updateIconsContainerOverflowMode();
    }

    function renderAllCategoriesLazy() {
        iconsContainer.innerHTML = '';
        const token = ++allCategoriesLoadToken;
        disposeAllCategoriesObserver();

        const categories = getOrderedCategories();
        for (const cat of categories) {
            const placeholder = createCategoryPlaceholderSection(cat);
            iconsContainer.appendChild(placeholder);
        }

        allCategoriesObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const section = entry.target;
                const catName = section.dataset.category;
                allCategoriesObserver.unobserve(section);
                loadAndReplaceCategorySection(catName, section, token).catch((error) => {
                    console.error(`Failed to load category ${catName}:`, error);
                });
            });
        }, { root: null, rootMargin: '300px 0px', threshold: 0.01 });

        const placeholders = iconsContainer.querySelectorAll('.category-section[data-category]');
        placeholders.forEach((section) => allCategoriesObserver.observe(section));
        updateIconsContainerOverflowMode();
    }

    function renderSingleCategory(cat) {
        iconsContainer.innerHTML = '';
        if (iconsData.icons[cat]) {
            createCategorySection(cat, iconsData.icons[cat]);
        }
        updateIconsContainerOverflowMode();
    }

    function createCategorySection(catName, icons) {
        const section = buildCategorySectionElement(catName, icons);
        iconsContainer.appendChild(section);
    }

    function toggleCategory(catName, icons, btn) {
        const t = iconsData.locales[state.lang].ui;
        const anyDeselected = icons.some(icon => !state.selectedIcons.includes(icon.id));

        if (anyDeselected) {
            // Select all missing ones
            icons.forEach(icon => {
                if (!state.selectedIcons.includes(icon.id)) {
                    state.selectedIcons.push(icon.id);
                    addToSortList(icon);
                }
            });
            btn.innerText = t.deselectAll;
        } else {
            // Deselect all in this category
            icons.forEach(icon => {
                const index = state.selectedIcons.indexOf(icon.id);
                if (index !== -1) {
                    state.selectedIcons.splice(index, 1);
                    removeFromSortList(icon.id);
                }
            });
            btn.innerText = t.selectAll;
        }

        // Update UI for grid items across all sections (in case of duplicates, though not expected here)
        icons.forEach(icon => {
            const gridItems = document.querySelectorAll(`.icon-item[data-icon="${icon.id}"]`);
            if (state.selectedIcons.includes(icon.id)) {
                gridItems.forEach(el => el.classList.add('selected'));
            } else {
                gridItems.forEach(el => el.classList.remove('selected'));
            }
        });

        updatePreview();
    }

    function createIconElement(iconObj) {
        const div = document.createElement('div');
        div.className = 'icon-item';
        div.dataset.icon = iconObj.id;
        div.dataset.name = iconObj.name || iconObj.id;
        // Store files map for quick theme switching
        div.dataset.files = JSON.stringify(iconObj.files);

        if (state.selectedIcons.includes(iconObj.id)) {
            div.classList.add('selected');
        }

        div.onclick = (e) => {
            // If the click happened on the external link, don't toggle
            if (e.target.closest('.icon-link')) return;
            toggleIcon(iconObj);
        };

        const img = document.createElement('img');
        img.loading = 'lazy';

        // Initial load uses current theme
        const file = state.theme === 'light' ? iconObj.files.light : iconObj.files.dark;
        img.src = `${ASSETS_PATH}/${file}`;
        img.alt = iconObj.id;

        const tooltip = document.createElement('div');
        tooltip.className = 'icon-tooltip';
        tooltip.innerText = iconObj.id;

        const desc = getDescription(iconObj);
        if (desc !== iconObj.id) {
            const descTooltip = document.createElement('div');
            descTooltip.className = 'icon-desc-tooltip';
            descTooltip.innerText = desc;
            div.appendChild(descTooltip);
        }

        div.appendChild(img);
        div.appendChild(tooltip);

        if (iconObj.url) {
            const link = document.createElement('a');
            link.href = iconObj.url;
            link.target = '_blank';
            link.className = 'icon-link';
            link.title = iconObj.url;
            link.innerHTML = `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            `;
            div.appendChild(link);
        }

        // Boundary detection: adjust tooltip position when near container edges
        div.addEventListener('mouseenter', () => {
            const container = iconsContainer;
            const containerRect = container.getBoundingClientRect();
            const iconRect = div.getBoundingClientRect();
            const tooltips = div.querySelectorAll('.icon-tooltip, .icon-desc-tooltip');

            tooltips.forEach(t => {
                t.classList.remove('anchor-left', 'anchor-right');
                // Estimate tooltip width
                const tooltipWidth = t.offsetWidth || 140;
                const iconCenterX = iconRect.left + iconRect.width / 2;
                const spaceLeft = iconCenterX - containerRect.left;
                const spaceRight = containerRect.right - iconCenterX;

                if (spaceLeft < tooltipWidth / 2 + 8) {
                    t.classList.add('anchor-left');
                } else if (spaceRight < tooltipWidth / 2 + 8) {
                    t.classList.add('anchor-right');
                }
            });
        });

        return div;
    }

    function toggleIcon(iconObj) {
        const iconId = iconObj.id;
        const index = state.selectedIcons.indexOf(iconId);

        const gridItems = document.querySelectorAll(`.icon-item[data-icon="${iconId}"]`);

        if (index === -1) {
            state.selectedIcons.push(iconId);
            gridItems.forEach(el => el.classList.add('selected'));
            addToSortList(iconObj);
        } else {
            state.selectedIcons.splice(index, 1);
            gridItems.forEach(el => el.classList.remove('selected'));
            removeFromSortList(iconId);
        }
        updatePreview();
    }

    function addToSortList(iconObj) {
        const placeholder = sortContainer.querySelector('.sort-placeholder');
        if (placeholder) placeholder.remove();

        const div = document.createElement('div');
        div.className = 'icon-item';
        div.dataset.icon = iconObj.id;
        div.dataset.files = JSON.stringify(iconObj.files);

        const img = document.createElement('img');
        const file = state.theme === 'light' ? iconObj.files.light : iconObj.files.dark;
        img.src = `${ASSETS_PATH}/${file}`;

        div.onclick = () => toggleIcon(iconObj);

        div.appendChild(img);
        sortContainer.appendChild(div);
    }

    function removeFromSortList(iconId) {
        // Need to be careful not to remove grid items by selector, only child of sortContainer
        const item = Array.from(sortContainer.children).find(el => el.dataset.icon === iconId);
        if (item && !item.classList.contains('sort-placeholder')) {
            item.remove();
        }

        if (state.selectedIcons.length === 0) {
            const t = iconsData.locales[state.lang].ui;
            sortContainer.innerHTML = `<div class="sort-placeholder">${t.sortPlaceholder}</div>`;
        }
    }

    function initSortable() {
        new Sortable(sortContainer, {
            animation: 150,
            ghostClass: 'sort-ghost',
            onEnd: function (evt) {
                const newOrder = Array.from(sortContainer.children)
                    .map(el => el.dataset.icon)
                    .filter(i => i);
                state.selectedIcons = newOrder;
                updatePreview();
            }
        });
    }

    function updatePreview() {
        if (state.selectedIcons.length === 0) {
            previewImg.style.display = 'none';
            markdownOutput.value = '';
            return;
        }
        previewImg.style.display = 'block';

        const baseUrl = 'https://go-skill-icons.vercel.app/api/icons';
        const params = new URLSearchParams();

        // Ensure icons are set
        params.set('i', state.selectedIcons.join(','));

        // Always include theme parameter explicitly
        if (state.theme === 'light') {
            params.set('theme', 'light');
        } else {
            params.set('theme', 'dark');
        }

        if (state.perline > 0) {
            params.set('perline', state.perline);
        }

        const fullUrl = `${baseUrl}?${params.toString()}`;
        previewImg.src = fullUrl;

        const md = `[![My Skills](${fullUrl})](https://go-skill-icons.vercel.app)`;
        markdownOutput.value = md;
    }

    function copyToClipboard() {
        if (!markdownOutput.value) return;
        markdownOutput.select();
        document.execCommand('copy');

        const t = iconsData.locales[state.lang].ui;
        const originalText = copyBtn.innerText;
        copyBtn.innerText = t.copied;
        setTimeout(() => copyBtn.innerText = originalText, 2000);
    }

    try {
        iconsData = await loadIconsData();
        await init();
    } catch (error) {
        console.error('Failed to load icon data:', error);
        iconsContainer.innerHTML = `
            <div class="category-section">
                <div class="category-header">
                    <h3 class="category-title">Failed to load icon data.</h3>
                </div>
            </div>
        `;
    }
});
