import os
import json
import urllib.request
import tempfile
import zipfile
import shutil
import re

# 路径配置 (适配 E:\A_Repos_项目\skill-icons-website 结构)
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
ICONS_JS_PATH = os.path.join(PROJECT_DIR, "public", "icons.js")
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

def extract_icons_data_from_js(js_path):
    # 解析 public/icons.js 提取出现的现有 icons_data 字典
    # 该文件格式类似于： const iconsData = { "locales": {...}, "icons": { "Category": [...] } };
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 寻找 JSON 对象部分
    match = re.search(r'const iconsData = ({.*});', content, re.DOTALL)
    if not match:
         raise ValueError("Could not parse iconsData from icons.js")
    return json.loads(match.group(1))

def generate_new_icons_js(extracted_dir):
    print("Processing icons...")
    # 从上游解压的目录拿到的 最新 assets 和 config 规则
    assets_dir = os.path.join(extracted_dir, "assets")
    
    # 1. 加载本地分类来判断哪些是已知的
    local_categories_data = load_categories()
    item_to_category = {}
    for item in local_categories_data:
        for icon_id in item["icons"]:
            item_to_category[icon_id] = item["id"]

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
    
    # 初始化图标数据结构
    icons_data = {
         "待分类": [] # 新增的默认类别
    }
    # 从已有 categories 载入初始结构
    for cat in local_categories_data:
         icons_data[cat["id"]] = []

    new_icons_added = 0

    for i_id in processed_ids:
        # 确定文件是否存在
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
            files_obj["light"] = f"{i_id}.svg"
            files_obj["dark"] = f"{i_id}.svg"

        # 判断类别 (如果在现在的规则里找不到，就是未分类的数据)
        category = item_to_category.get(i_id, "待分类")
        
        if category == "待分类":
            new_icons_added += 1

        obj = {
            "id": i_id,
            "name": i_id,
            "files": files_obj,
            "category": category
        }
        
        if category in icons_data:
            icons_data[category].append(obj)
        else:
             # 安全回退
             if "待分类" not in icons_data:
                 icons_data["待分类"] = []
             icons_data["待分类"].append(obj)

    # 载入现有的 locales
    existing_data = extract_icons_data_from_js(ICONS_JS_PATH)
    locales_map = existing_data.get("locales", {})

    output_data = {
        "locales": locales_map,
        "icons": icons_data
    }
    
    # 保存覆盖写入 public/icons.js
    json_content = "const iconsData = " + json.dumps(output_data, indent=2, ensure_ascii=False) + ";"
    with open(ICONS_JS_PATH, "w", encoding="utf-8") as f:
        f.write(json_content)

    return new_icons_added

def main():
    try:
        zip_path = fetch_upstream_zip()
        extracted_dir = extract_zip(zip_path)
        
        # 修改：将解压后的上游 assets 内容全部复制到本地 assets/ 目录
        upstream_assets = os.path.join(extracted_dir, "assets")
        local_assets = os.path.join(PROJECT_DIR, "assets")
        
        if not os.path.exists(local_assets):
            os.makedirs(local_assets)
            
        print(f"Copying SVG files to {local_assets}...")
        for filename in os.listdir(upstream_assets):
            if filename.endswith(".svg"):
                shutil.copy2(os.path.join(upstream_assets, filename), os.path.join(local_assets, filename))
        
        new_amount = generate_new_icons_js(extracted_dir)
        print(f"Sync complete. {new_amount} icons marked as '待分类'.")
        
        # 清理临时文件
        os.remove(zip_path)
        shutil.rmtree(os.path.dirname(extracted_dir))

    except Exception as e:
        print(f"Error during execution: {e}")
        raise

if __name__ == "__main__":
    main()
