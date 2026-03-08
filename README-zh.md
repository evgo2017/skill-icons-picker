# 技能图标生成器 (Skill Icons Generator)

[English](README.md) | 简体中文

---

一个现代化、互动式的 Web 工具，帮助你为 [skill-icons](https://github.com/LelouchFR/skill-icons) 挑选、排序并生成 Markdown 代码。

### 🚀 核心功能
- **图标挑选**：浏览并搜索数百个技术栈图标。
- **互动排序**：通过拖拽方式按你喜欢的顺序排列图标。
- **实时预览**：立即查看图标在个人主页上的显示效果。
- **代码生成**：一键复制生成的 Markdown 代码，可直接用于 GitHub Profile。
- **多语言支持**：支持英文和简体中文切换。
- **动态主题**：支持为生成的图标切换亮色 (Light) 和暗色 (Dark) 主题。

### 🔄 更新机制
本项目采用自动化更新与手动分类相结合的模式：
1. **自动化图标同步**：通过 GitHub Actions 每天自动从 `LelouchFR/skill-icons` 官方仓库获取最新图标。
2. **自动待分类**：新同步到的图标会默认放入 **"Uncategorized" (待分类)** 区域。
3. **手动维护分类**：如需将图标移动到特定分组（如“前端”、“后端”），只需修改 `config/categories.json` 文件。
4. **数据生成**：最后通过运行 `generate_icons.py` 脚本根据分类配置和素材库重新生成 `public/icons.js`。构建系统会自动处理此步骤。

### 🛠️ 开发与部署
- **部署**：通过 GitHub Actions 自动构建并发布到 GitHub Pages。

#### 本地开发
1. 克隆仓库。
2. 安装依赖：`npm install`。
3. 启动开发服务器：`npm run dev`。
4. 手动同步图标：`python sync_icons.py`。
5. 手动生成图标数据：`python generate_icons.py`。
