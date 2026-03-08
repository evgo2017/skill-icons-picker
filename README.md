# Skill Icons Generator

English | [简体中文](README-zh.md)

---

A modern, interactive web tool to help you pick, sort, and generate Markdown code for [skill-icons](https://github.com/LelouchFR/skill-icons).

### 🚀 Key Features
- **Icon Picker**: Browse and search through hundreds of technology icons.
- **Interactive Sorting**: Drag and drop icons to arrange them exactly how you want.
- **Live Preview**: Instantly see how your icons will look on your profile.
- **Code Generation**: One-click to copy the Markdown code for your GitHub profile.
- **Multi-language Support**: Supports English and Simplified Chinese.
- **Dynamic Themes**: Toggle between Light and Dark modes for your generated icons.

### 🔄 Update Mechanism
This project is designed for low-maintenance consistency with the upstream source:
1. **Automated Icon Sync**: A GitHub Action runs daily to fetch the latest icons from the official `LelouchFR/skill-icons` repository.
2. **Auto-Categorization**: Newly discovered icons are automatically added to the **"Uncategorized"** section.
3. **Manual Categorization**: To move icons to specific groups (e.g., "Frontend", "Backend"), simply update the `config/categories.json` file.
4. **Data Generation**: The `generate_icons.py` script is then executed to regenerate `public/icons.js`, which the frontend uses to display the icons. The build process handles this automatically.

### 🛠️ Development & Deployment
- **Deployment**: Automatically built and deployed to GitHub Pages via GitHub Actions.

#### Local Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run dev server: `npm run dev`.
4. Sync icons manually: `python sync_icons.py`.
5. Regenerate icon data: `python generate_icons.py`.
