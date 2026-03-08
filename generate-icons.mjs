import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = __dirname;
const assetsDir = path.join(PROJECT_DIR, 'public', 'assets');
const outputFile = path.join(PROJECT_DIR, 'public', 'icons.js');
const configPath = path.join(PROJECT_DIR, 'config', 'categories.json');
const localesDir = path.join(PROJECT_DIR, 'config', 'locales');

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
    for (const i_id of cat.icons) {
        if (allFoundIds.has(i_id)) {
            iconsData[catId].push(buildIconObj(i_id, catId));
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

// 5. JSON Generation
const outputData = {
    locales: localesMap,
    icons: iconsData
};

const jsonContent = "const iconsData = " + JSON.stringify(outputData, null, 2) + ";";
fs.writeFileSync(outputFile, jsonContent, 'utf-8');

console.log(`Generated ${allFoundIds.size} icons with ${Object.keys(localesMap).length} locales.`);
