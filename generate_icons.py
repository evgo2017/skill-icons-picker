
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
icons_data = {}
assigned_ids = set()

# Scan assets to know what's available
files_set = set(os.listdir(assets_dir))
all_found_ids = set()
for filename in files_set:
    if not filename.endswith(".svg"):
        continue
    name = filename[:-4]
    if name.endswith("-dark"): i_id = name[:-5]
    elif name.endswith("-light"): i_id = name[:-6]
    elif name.endswith("-auto"): i_id = name[:-5]
    else: i_id = name
    all_found_ids.add(i_id)

def build_icon_obj(i_id, cat_name):
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
        files_obj["dark"] = f"{i_id}-light.svg"
    elif has_dark:
        files_obj["light"] = f"{i_id}-dark.svg"
        files_obj["dark"] = f"{i_id}-dark.svg"
    else:
        # Fallback if somehow we missed it
        files_obj["light"] = f"{i_id}.svg"
        files_obj["dark"] = f"{i_id}.svg"

    return {
        "id": i_id,
        "name": i_id,
        "files": files_obj,
        "category": cat_name
    }

# Process categories in ORDER from config
for item in config_data:
    cat_id = item["id"]
    cat_icons = item["icons"]
    
    # We want to keep the category key even if empty, per config order
    icons_data[cat_id] = []
    
    for i_id in cat_icons:
        if i_id in all_found_ids:
            icons_data[cat_id].append(build_icon_obj(i_id, cat_id))
            assigned_ids.add(i_id)

# Handle Uncategorized (icons in folder but not in config)
uncategorized_ids = sorted(list(all_found_ids - assigned_ids))
if uncategorized_ids:
    if "Uncategorized" not in icons_data:
        icons_data["Uncategorized"] = []
    for i_id in uncategorized_ids:
        icons_data["Uncategorized"].append(build_icon_obj(i_id, "Uncategorized"))

# Clean up empty categories if they are at the end (like the "Other" placeholder if unused)
# But usually we strictly follow categories.json. 
# If a category is empty because icons are missing, we might keep it or hide it in frontend.
# The current script.js hides empty categories.


# 4. JSON Generation
output_data = {
    "locales": locales_map,
    "icons": icons_data
}
json_content = "const iconsData = " + json.dumps(output_data, indent=2, ensure_ascii=False) + ";"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(json_content)

print(f"Generated {len(all_found_ids)} icons with {len(locales_map)} locales.")
