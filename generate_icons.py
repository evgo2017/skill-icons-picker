
import os
import json
import re

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))

assets_dir = os.path.join(PROJECT_DIR, "public", "assets")
output_file = os.path.join(PROJECT_DIR, "public", "icons.js")

os.makedirs(os.path.dirname(output_file), exist_ok=True)

# 1. Load Categories and Multi-language Locales
config_path = os.path.join(PROJECT_DIR, "config", "categories.json")
locales_dir = os.path.join(PROJECT_DIR, "config", "locales")

categories_map = {}
locales_map = {}

# Load category groupings
with open(config_path, "r", encoding="utf-8") as f:
    config_data = json.load(f)["categories"]
    for item in config_data:
        categories_map[item["id"]] = item["icons"]

# Load all locale files
for filename in os.listdir(locales_dir):
    if filename.endswith(".json"):
        lang_code = filename[:-5]
        with open(os.path.join(locales_dir, filename), "r", encoding="utf-8") as f:
            locales_map[lang_code] = json.load(f)

item_to_category = {}
for cat, items in categories_map.items():
    for item in items:
        if item not in item_to_category:
            item_to_category[item] = cat

# 2. File Scanning
files_list = os.listdir(assets_dir)
files_set = set(files_list)

# 3. Icon Processing
icons_data = {
    "Uncategorized": []
}

for cat in categories_map.keys():
    icons_data[cat] = []

import re

for filename in files_list:
    if not filename.endswith(".svg"):
        continue
    
    # Analyze icon name: id-variant.svg or id.svg
    # Variants: -dark, -light, or none
    # ID: everything before the last hyphen (if updated naming) OR just name
    
    # Simple parsing:
    # 1. Remove .svg
    name_no_ext = filename[:-4]
    
    # 2. Detect variant
    variant = "default"
    icon_id = name_no_ext
    
    if name_no_ext.endswith("-dark"):
        variant = "dark"
        icon_id = name_no_ext[:-5]
    elif name_no_ext.endswith("-light"):
        variant = "light"
        icon_id = name_no_ext[:-6]
    elif name_no_ext.endswith("-auto"):
        # Treat auto as both light/dark if typical, or just default. 
        # For simplicity, let's treat it as base ID if it is unique style, 
        # OR usually people have icon-light and icon-dark. 
        # Check if project uses -auto. Assuming standard format.
        # Actually usually it is `icon.svg` or `icon-dark.svg`.
        pass

    # Better Logic: Group by ID
    # We iterate all files, but we want grouped items.
    pass 

# Refined Logic:
# Iterate distinct IDs found in categories OR scan directory to find IDs
all_ids = set()
files_set = set(files_list)

for filename in files_list:
    if not filename.endswith(".svg"):
        continue
    name = filename[:-4]
    
    # Heuristic for ID
    if name.endswith("-dark"):
        i_id = name[:-5]
    elif name.endswith("-light"):
        i_id = name[:-6]
    elif name.endswith("-auto"):
        i_id = name[:-5]
    else:
        i_id = name
        
    all_ids.add(i_id)

processed_ids = sorted(list(all_ids))

for i_id in processed_ids:
    # Check existence of variants
    has_light = f"{i_id}-light.svg" in files_set
    has_dark = f"{i_id}-dark.svg" in files_set
    has_auto = f"{i_id}-auto.svg" in files_set
    has_default = f"{i_id}.svg" in files_set
    
    files_obj = {}
    if has_light and has_dark:
        files_obj["light"] = f"{i_id}-light.svg"
        files_obj["dark"] = f"{i_id}-dark.svg"
    elif has_auto:
         files_obj["light"] = f"{i_id}-auto.svg"
         files_obj["dark"] = f"{i_id}-auto.svg"
    elif has_default:
         files_obj["light"] = f"{i_id}.svg"
         files_obj["dark"] = f"{i_id}.svg"
    elif has_light:
        files_obj["light"] = f"{i_id}-light.svg"
        files_obj["dark"] = f"{i_id}-light.svg" # Fallback
    elif has_dark:
        files_obj["light"] = f"{i_id}-dark.svg" # Fallback
        files_obj["dark"] = f"{i_id}-dark.svg"
    else:
        files_obj["light"] = f"{i_id}.svg"
        files_obj["dark"] = f"{i_id}.svg"

    # Determine Category
    category = item_to_category.get(i_id, "Uncategorized")
    
    # Object structure
    obj = {
        "id": i_id,
        "name": i_id, # Can be improved with a lookup if needed
        "files": files_obj,
        "category": category
    }
    
    if category in icons_data:
        icons_data[category].append(obj)
    else:
        icons_data["Uncategorized"].append(obj)

# 4. JSON Generation
output_data = {
    "locales": locales_map,
    "icons": icons_data
}
json_content = "const iconsData = " + json.dumps(output_data, indent=2, ensure_ascii=False) + ";"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(json_content)

print(f"Generated {len(processed_ids)} icons with {len(locales_map)} locales.")
