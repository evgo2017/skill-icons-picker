import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = __dirname;
const assetsDir = path.join(PROJECT_DIR, 'public', 'assets');
const configPath = path.join(PROJECT_DIR, 'config', 'categories.json');
const localesDir = path.join(PROJECT_DIR, 'config', 'locales');
const targetIconsPerChunk = Number(getArgValue('--target-icons-per-chunk') || 80);
const maxIconsPerCategorySlice = Number(getArgValue('--max-icons-per-category-slice') || 60);

function getArgValue(flag) {
    const index = process.argv.indexOf(flag);
    if (index === -1) return null;
    const value = process.argv[index + 1];
    return value && !value.startsWith('--') ? value : null;
}

const outputDirArg = getArgValue('--out-dir') || 'dist/icons';
const outputDir = path.isAbsolute(outputDirArg)
    ? outputDirArg
    : path.join(PROJECT_DIR, outputDirArg);

// 1. Load Categories
const configData = JSON.parse(fs.readFileSync(configPath, 'utf-8')).categories;

// 2. Load Locales
const localesMap = {};
if (fs.existsSync(localesDir)) {
    const localeFiles = fs.readdirSync(localesDir);
    for (const file of localeFiles) {
        if (file.endsWith('.json')) {
            const langCode = file.replace('.json', '');
            localesMap[langCode] = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf-8'));
        }
    }
}

// 3. Scan Assets
const filesSet = new Set(fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : []);
const allFoundIds = new Set();
for (const file of filesSet) {
    if (!file.endsWith('.svg')) continue;
    const name = file.replace('.svg', '');
    let i_id = name;
    if (name.endsWith('-dark')) i_id = name.slice(0, -5);
    else if (name.endsWith('-light')) i_id = name.slice(0, -6);
    else if (name.endsWith('-auto')) i_id = name.slice(0, -5);
    allFoundIds.add(i_id);
}

function buildIconObj(i_id, catName) {
    const hasLight = filesSet.has(`${i_id}-light.svg`);
    const hasDark = filesSet.has(`${i_id}-dark.svg`);
    const hasAuto = filesSet.has(`${i_id}-auto.svg`);
    const hasDefault = filesSet.has(`${i_id}.svg`);

    const filesObj = {};
    if (hasLight && hasDark) {
        filesObj.light = `${i_id}-light.svg`;
        filesObj.dark = `${i_id}-dark.svg`;
    } else if (hasAuto) {
        filesObj.light = `${i_id}-auto.svg`;
        filesObj.dark = `${i_id}-auto.svg`;
    } else if (hasDefault) {
        filesObj.light = `${i_id}.svg`;
        filesObj.dark = `${i_id}.svg`;
    } else if (hasLight) {
        filesObj.light = `${i_id}-light.svg`;
        filesObj.dark = `${i_id}-light.svg`;
    } else if (hasDark) {
        filesObj.light = `${i_id}-dark.svg`;
        filesObj.dark = `${i_id}-dark.svg`;
    } else {
        filesObj.light = `${i_id}.svg`;
        filesObj.dark = `${i_id}.svg`;
    }

    return {
        id: i_id,
        name: i_id,
        files: filesObj,
        category: catName
    };
}

// 4. Process Categories (Preserving Order)
const iconsData = {};
const assignedIds = new Set();

for (const cat of configData) {
    const catId = cat.id;
    iconsData[catId] = [];
    for (const iconDef of cat.icons) {
        const isObject = typeof iconDef === 'object' && iconDef !== null;
        const i_id = isObject ? iconDef.id : iconDef;
        
        if (allFoundIds.has(i_id)) {
            const iconObj = buildIconObj(i_id, catId);
            if (isObject) {
                if (iconDef.description) iconObj.description = iconDef.description;
                if (iconDef.url) iconObj.url = iconDef.url;
            }
            iconsData[catId].push(iconObj);
            assignedIds.add(i_id);
        }
    }
}

// Handle Uncategorized
const uncategorizedIds = Array.from(allFoundIds).filter(id => !assignedIds.has(id)).sort();
if (uncategorizedIds.length > 0) {
    if (!iconsData["Uncategorized"]) {
        iconsData["Uncategorized"] = [];
    }
    for (const id of uncategorizedIds) {
        iconsData["Uncategorized"].push(buildIconObj(id, "Uncategorized"));
    }
}

// 5. Split Output Generation
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const localesPath = path.join(outputDir, 'locales.json');
fs.writeFileSync(localesPath, JSON.stringify(localesMap, null, 2), 'utf-8');

const chunkPaths = [];
const categoryEntries = Object.entries(iconsData);
const categoryToChunk = {};
const categoryOrder = categoryEntries.map(([categoryName]) => categoryName);
let currentChunk = {};
let currentChunkIconCount = 0;

function flushChunk() {
    if (Object.keys(currentChunk).length === 0) return;
    const chunkIndex = chunkPaths.length + 1;
    const fileName = `chunk-${chunkIndex}.json`;
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify({ icons: currentChunk }, null, 2), 'utf-8');
    chunkPaths.push(`icons/${fileName}`);
    currentChunk = {};
    currentChunkIconCount = 0;
}

for (const [catName, icons] of categoryEntries) {
    for (let i = 0; i < icons.length; i += maxIconsPerCategorySlice) {
        const slice = icons.slice(i, i + maxIconsPerCategorySlice);
        if (
            currentChunkIconCount > 0 &&
            currentChunkIconCount + slice.length > targetIconsPerChunk
        ) {
            flushChunk();
        }

        if (!currentChunk[catName]) {
            currentChunk[catName] = [];
        }
        currentChunk[catName].push(...slice);
        currentChunkIconCount += slice.length;

        const currentChunkPath = `icons/chunk-${chunkPaths.length + 1}.json`;
        if (!categoryToChunk[catName]) {
            categoryToChunk[catName] = [];
        }
        if (!categoryToChunk[catName].includes(currentChunkPath)) {
            categoryToChunk[catName].push(currentChunkPath);
        }
    }
}
flushChunk();

const manifest = {
    version: 3,
    locales: 'icons/locales.json',
    names: 'icons/names.json',
    chunks: chunkPaths,
    categoryOrder,
    categoryToChunk
};
fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8');

const namesData = {};
for (const [categoryName, icons] of Object.entries(iconsData)) {
    namesData[categoryName] = icons.map((icon) => ({
        id: icon.id,
        name: icon.name || icon.id
    }));
}
fs.writeFileSync(path.join(outputDir, 'names.json'), JSON.stringify({ icons: namesData }, null, 2), 'utf-8');

console.log(
    `Generated ${allFoundIds.size} icons with ${Object.keys(localesMap).length} locales across ${chunkPaths.length} chunks to ${outputDir}.`
);
