document.addEventListener('DOMContentLoaded', () => {
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
    const ASSETS_PATH = import.meta.env.BASE_URL + 'assets';

    function init() {
        // Sync state with UI
        state.theme = themeSelect.value;
        state.perline = parseInt(perlineSelect.value) || 0;

        // Language detection: localStorage > browser > default zh-CN
        const savedLang = localStorage.getItem('skill-icons-lang');
        const browserLang = navigator.language.startsWith('en') ? 'en-US' : 'zh-CN';
        state.lang = savedLang || browserLang;
        langSelect.value = state.lang;

        updateUIForLanguage();
        renderCategoryFilters();
        renderAllCategories();
        initSortable();
        updatePreview();

        searchInput.addEventListener('input', (e) => filterIcons(e.target.value));

        themeSelect.addEventListener('change', (e) => {
            state.theme = e.target.value;
            handleThemeChange();
        });

        perlineSelect.addEventListener('change', (e) => {
            state.perline = parseInt(e.target.value);
            updatePreview();
        });

        langSelect.addEventListener('change', (e) => {
            state.lang = e.target.value;
            localStorage.setItem('skill-icons-lang', state.lang);
            updateUIForLanguage();
            renderCategoryFilters();
            renderAllCategories();
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
        const categories = ['All', ...Object.keys(iconsData.icons)];
        const allText = iconsData.locales[state.lang].ui.allCategories;
        categoryFilters.innerHTML = '';

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `category-btn ${cat === 'All' && state.activeCategory === 'All' ? 'active' : (cat === state.activeCategory ? 'active' : '')}`;
            btn.innerText = cat === 'All' ? allText : translateCategory(cat);
            btn.onclick = () => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.activeCategory = cat;

                if (cat === 'All') {
                    renderAllCategories();
                } else {
                    renderSingleCategory(cat);
                }

                if (searchInput.value) filterIcons(searchInput.value);
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

    function renderAllCategories() {
        iconsContainer.innerHTML = '';
        Object.keys(iconsData.icons).forEach(cat => {
            if (iconsData.icons[cat].length === 0) return;
            createCategorySection(cat, iconsData.icons[cat]);
        });
    }

    function renderSingleCategory(cat) {
        iconsContainer.innerHTML = '';
        if (iconsData.icons[cat]) {
            createCategorySection(cat, iconsData.icons[cat]);
        }
    }

    function createCategorySection(catName, icons) {
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
        iconsContainer.appendChild(section);
    }

    function toggleCategory(catName, icons, btn) {
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

    function filterIcons(query) {
        const lower = query.toLowerCase();
        const sections = document.querySelectorAll('.category-section');

        sections.forEach(section => {
            let hasVisible = false;
            const items = section.querySelectorAll('.icon-item');

            items.forEach(item => {
                const iconId = item.dataset.icon;
                const iconName = item.dataset.name;
                if (iconId.toLowerCase().includes(lower) || iconName.toLowerCase().includes(lower)) {
                    item.style.display = 'flex';
                    hasVisible = true;
                } else {
                    item.style.display = 'none';
                }
            });
            section.style.display = hasVisible ? 'block' : 'none';
        });
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

    init();
});
