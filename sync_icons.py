import os
import json
import urllib.request
import tempfile
import zipfile
import shutil
import re

# 路径配置 (适配 E:\A_Repos_项目\skill-icons-website 结构)
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
CATEGORIES_JSON_PATH = os.path.join(PROJECT_DIR, "config", "categories.json")

# 上游仓库信息
UPSTREAM_REPO = "LelouchFR/skill-icons"
UPSTREAM_ZIP_URL = f"https://github.com/{UPSTREAM_REPO}/archive/refs/heads/main.zip"

def fetch_upstream_zip():
    print(f"Downloading latest zip from {UPSTREAM_REPO}...")
    temp_zip = tempfile.mktemp(suffix=".zip")
    urllib.request.urlretrieve(UPSTREAM_ZIP_URL, temp_zip)
    return temp_zip

def extract_zip(zip_path):
    print("Extracting zip...")
    extract_dir = tempfile.mkdtemp()
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)
    return os.path.join(extract_dir, "skill-icons-main") # Default extracted folder name

def load_categories():
    with open(CATEGORIES_JSON_PATH, "r", encoding="utf-8") as f:
         return json.load(f)["categories"]

def generate_new_icons_js(extracted_dir):
    print("Processing icons...")
    # 从上游解压的目录拿到的 最新 assets 和 config 规则
    assets_dir = os.path.join(extracted_dir, "assets")
    
    # 1. 加载本地分类来判断哪些是已知的
    with open(CATEGORIES_JSON_PATH, "r", encoding="utf-8") as f:
        categories_root = json.load(f)
        
    local_categories_data = categories_root.get("categories", [])
    item_to_category = {}
    for item in local_categories_data:
        for icon_obj in item["icons"]:
            icon_id = icon_obj["id"] if isinstance(icon_obj, dict) else icon_obj
            item_to_category[icon_id] = item["id"]

    # 扫描最新资源
    files_list = os.listdir(assets_dir)
    files_set = set(files_list)
    all_ids = set()

    for filename in files_list:
        if not filename.endswith(".svg"):
            continue
        name = filename[:-4]
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
    
    new_icons_added = 0
    new_found_ids = []

    for i_id in processed_ids:
        # 判断并归类
        category = item_to_category.get(i_id)
        
        if not category:
            new_icons_added += 1
            new_found_ids.append(i_id)
             
    # 修改 categories.json 的源文件内容
    if new_icons_added > 0:
        new_icons_objs = [{"id": i_id, "description": {"zh-CN": "", "en-US": ""}, "url": ""} for i_id in new_found_ids]
        found_daifenlei = False
        for item in local_categories_data:
            if item["id"] == "Uncategorized":
                item["icons"].extend(new_icons_objs)
                found_daifenlei = True
                break
                
        if not found_daifenlei:
            local_categories_data.insert(0, {
                "id": "Uncategorized",
                "icons": new_icons_objs
            })
            
        with open(CATEGORIES_JSON_PATH, "w", encoding="utf-8") as f:
            json.dump(categories_root, f, indent=2, ensure_ascii=False)

    return new_icons_added

def main():
    try:
        zip_path = fetch_upstream_zip()
        extracted_dir = extract_zip(zip_path)
        
        # 修改：将解压后的上游 assets 内容全部复制到本地 assets/ 目录
        upstream_assets = os.path.join(extracted_dir, "assets")
        local_assets = os.path.join(PROJECT_DIR, "public", "icons")
        
        if not os.path.exists(local_assets):
            os.makedirs(local_assets)
            
        print(f"Copying SVG files to {local_assets}...")
        for filename in os.listdir(upstream_assets):
            if filename.endswith(".svg"):
                shutil.copy2(os.path.join(upstream_assets, filename), os.path.join(local_assets, filename))
        
        new_amount = generate_new_icons_js(extracted_dir)
        print(f"Sync complete. {new_amount} icons marked as 'Uncategorized'.")
        
        # 清理临时文件
        os.remove(zip_path)
        shutil.rmtree(os.path.dirname(extracted_dir))

    except Exception as e:
        print(f"Error during execution: {e}")
        raise

if __name__ == "__main__":
    main()
