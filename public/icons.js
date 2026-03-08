const iconsData = {
  "locales": {
    "en-US": {
      "ui": {
        "title": "Skill Icons Generator",
        "step1": "Select Icons",
        "step2": "Sort Icons",
        "step3": "Generate Code",
        "searchPlaceholder": "Search icons (e.g., python, react, docker)...",
        "sortPlaceholder": "Drag icons here to sort",
        "themeLabel": "Theme:",
        "perlineLabel": "Icons per line:",
        "copyBtn": "Copy",
        "copied": "Copied!",
        "themeDark": "Dark (Default)",
        "themeLight": "Light",
        "perlineAuto": "Auto",
        "markdownPlaceholder": "Markdown code will appear here...",
        "allCategories": "All",
        "selectAll": "Select All",
        "deselectAll": "Deselect All",
        "previewAlt": "Preview"
      },
      "categories": {
        "Frontend - Languages": "Frontend - Languages",
        "Frontend - Frameworks": "Frontend - Frameworks",
        "Frontend - UI & Styling": "Frontend - UI & Styling",
        "Frontend - State Management": "Frontend - State Management",
        "Frontend - Build Tools": "Frontend - Build Tools",
        "Backend - Languages": "Backend - Languages",
        "Backend - Frameworks - JS/TS": "Backend Frameworks - JS/TS",
        "Backend - Frameworks - Python": "Backend Frameworks - Python",
        "Backend - Frameworks - Java/JVM": "Backend Frameworks - Java/JVM",
        "Backend - Frameworks - PHP": "Backend Frameworks - PHP",
        "Backend - Frameworks - Go": "Backend Frameworks - Go",
        "Backend - Frameworks - Rust": "Backend Frameworks - Rust",
        "Backend - Frameworks - C#/.NET": "Backend Frameworks - C#/.NET",
        "Backend - Frameworks - Ruby": "Backend Frameworks - Ruby",
        "Backend - Database & API": "Backend - Database & API",
        "Cloud - Web Servers": "Web Servers",
        "Cloud Providers": "Cloud Providers",
        "DevOps - Tools": "DevOps - Tools",
        "DevOps - Git & SCM": "DevOps - Git & SCM",
        "DevOps - Monitoring": "DevOps - Monitoring",
        "AI & Machine Learning": "AI & Machine Learning",
        "Data Science & Big Data": "Data Science & Big Data",
        "Databases": "Databases",
        "Mobile Development": "Mobile Development",
        "Game Development": "Game Development",
        "Web3 & Blockchain": "Web3 & Blockchain",
        "Security & Privacy": "Security & Privacy",
        "Design & Creative": "Design & Creative",
        "Editors & IDEs": "Editors & IDEs",
        "Operating Systems": "Operating Systems",
        "Social & Communication": "Social & Communication",
        "Productivity & Office": "Productivity & Office",
        "Testing & Quality": "Testing & Quality",
        "CMS": "CMS",
        "E-commerce & FinTech": "E-commerce & FinTech",
        "Browsers & Engines": "Browsers & Engines",
        "Embedded & Hardware": "Embedded & Hardware",
        "Education & Learning": "Education & Learning",
        "Other": "Other",
        "Uncategorized": "Uncategorized"
      }
    },
    "zh-CN": {
      "ui": {
        "title": "Skill Icons 生成器",
        "step1": "选择图标",
        "step2": "排序图标",
        "step3": "生成代码",
        "searchPlaceholder": "搜索图标 (例如: python, react, docker)...",
        "sortPlaceholder": "在此处拖动图标进行排序",
        "themeLabel": "主题:",
        "perlineLabel": "每行数量:",
        "copyBtn": "复制",
        "copied": "已复制!",
        "themeDark": "Dark (默认)",
        "themeLight": "Light",
        "perlineAuto": "自动",
        "markdownPlaceholder": "Markdown 代码将显示在这里...",
        "allCategories": "全部",
        "selectAll": "全选",
        "deselectAll": "取消全选",
        "previewAlt": "预览"
      },
      "categories": {
        "Frontend - Languages": "前端开发 - 语言",
        "Frontend - Frameworks": "前端开发 - 框架",
        "Frontend - UI & Styling": "前端开发 - UI & 样式",
        "Frontend - State Management": "前端开发 - 状态管理",
        "Frontend - Build Tools": "前端开发 - 构建工具",
        "Backend - Languages": "后端开发 - 语言",
        "Backend - Frameworks - JS/TS": "后端框架 - JS/TS",
        "Backend - Frameworks - Python": "后端框架 - Python",
        "Backend - Frameworks - Java/JVM": "后端框架 - Java/JVM",
        "Backend - Frameworks - PHP": "后端框架 - PHP",
        "Backend - Frameworks - Go": "后端框架 - Go",
        "Backend - Frameworks - Rust": "后端框架 - Rust",
        "Backend - Frameworks - C#/.NET": "后端框架 - C#/.NET",
        "Backend - Frameworks - Ruby": "后端框架 - Ruby",
        "Backend - Database & API": "后端开发 - 数据库 & API",
        "Cloud - Web Servers": "Web 服务器",
        "Cloud Providers": "云平台服务商",
        "DevOps - Tools": "DevOps - 工具",
        "DevOps - Git & SCM": "DevOps - Git & SCM",
        "DevOps - Monitoring": "DevOps - 监控",
        "AI & Machine Learning": "AI & 机器学习",
        "Data Science & Big Data": "数据科学 & 大数据",
        "Databases": "数据库",
        "Mobile Development": "移动开发",
        "Game Development": "游戏开发",
        "Web3 & Blockchain": "Web3 & 区块链",
        "Security & Privacy": "安全 & 隐私",
        "Design & Creative": "设计 & 创意",
        "Editors & IDEs": "编辑器 & IDE",
        "Operating Systems": "操作系统",
        "Social & Communication": "社交 & 沟通",
        "Productivity & Office": "生产力 & 办公",
        "Testing & Quality": "测试 & 质量",
        "CMS": "内容管理系统",
        "E-commerce & FinTech": "电商 & 金融科技",
        "Browsers & Engines": "浏览器 & 引擎",
        "Embedded & Hardware": "嵌入式 & 硬件",
        "Education & Learning": "教育 & 学习",
        "Other Languages & Tools": "语言 & 工具",
        "Other": "其他",
        "Uncategorized": "待分类"
      }
    }
  },
  "icons": {
    "Frontend - Languages": [
      {
        "id": "html",
        "name": "html",
        "files": {
          "light": "html.svg",
          "dark": "html.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "用于创建网页的标准标记语言",
          "en-US": "The standard markup language for documents designed to be displayed in a web browser"
        },
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "id": "css",
        "name": "css",
        "files": {
          "light": "css.svg",
          "dark": "css.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "用于描述网页表现和样式的语言",
          "en-US": "A style sheet language used for describing the presentation of a document written in HTML"
        },
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "id": "javascript",
        "name": "javascript",
        "files": {
          "light": "javascript.svg",
          "dark": "javascript.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种基于原型编程、多范式的动态脚本语言",
          "en-US": "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions"
        },
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "id": "typescript",
        "name": "typescript",
        "files": {
          "light": "typescript.svg",
          "dark": "typescript.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "添加了静态类型系统并可编译为纯JavaScript的超集",
          "en-US": "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
        },
        "url": "https://www.typescriptlang.org/"
      },
      {
        "id": "coffeescript",
        "name": "coffeescript",
        "files": {
          "light": "coffeescript-light.svg",
          "dark": "coffeescript-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一门编译到 JavaScript 的轻量级语言",
          "en-US": "A little language that compiles into JavaScript"
        },
        "url": "https://coffeescript.org/"
      },
      {
        "id": "elm",
        "name": "elm",
        "files": {
          "light": "elm-light.svg",
          "dark": "elm-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种用于浏览器端应用程序的函数式编程语言",
          "en-US": "A delightful language for reliable web applications"
        },
        "url": "https://elm-lang.org/"
      },
      {
        "id": "webassembly",
        "name": "webassembly",
        "files": {
          "light": "webassembly.svg",
          "dark": "webassembly.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种可在现代网络浏览器中运行的类汇编语言",
          "en-US": "A binary instruction format for a stack-based virtual machine"
        },
        "url": "https://webassembly.org/"
      },
      {
        "id": "pug",
        "name": "pug",
        "files": {
          "light": "pug-light.svg",
          "dark": "pug-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一个健壮的、专门为 Node.js 平台开发的模板引擎",
          "en-US": "A robust, elegant, feature rich template engine for Node.js"
        },
        "url": "https://pugjs.org/"
      },
      {
        "id": "ejs",
        "name": "ejs",
        "files": {
          "light": "ejs-light.svg",
          "dark": "ejs-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "高效的嵌入式 JavaScript 模板引擎",
          "en-US": "Embedded JavaScript templating"
        },
        "url": "https://ejs.co/"
      },
      {
        "id": "markdown",
        "name": "markdown",
        "files": {
          "light": "markdown-light.svg",
          "dark": "markdown-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种轻量级标记语言，使用易读易写的纯文本格式编写文档",
          "en-US": "A lightweight markup language with plain-text-formatting syntax"
        },
        "url": "https://daringfireball.net/projects/markdown/"
      },
      {
        "id": "json",
        "name": "json",
        "files": {
          "light": "json-light.svg",
          "dark": "json-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种轻量级的数据交换格式",
          "en-US": "A lightweight data-interchange format"
        },
        "url": "https://www.json.org/"
      },
      {
        "id": "yaml",
        "name": "yaml",
        "files": {
          "light": "yaml-light.svg",
          "dark": "yaml-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种直观的、能够被电脑识别的数据序列化格式",
          "en-US": "A human-friendly data serialization language for all programming languages"
        },
        "url": "https://yaml.org/"
      },
      {
        "id": "toml",
        "name": "toml",
        "files": {
          "light": "toml-light.svg",
          "dark": "toml-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种旨在成为小规模、易于阅读的配置文件的语义",
          "en-US": "A config file format for humans"
        },
        "url": "https://toml.io/"
      },
      {
        "id": "nunjucks",
        "name": "nunjucks",
        "files": {
          "light": "nunjucks.svg",
          "dark": "nunjucks.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "适用于 JavaScript 的强大的模板引擎",
          "en-US": "A rich and powerful templating language for JavaScript"
        },
        "url": "https://mozilla.github.io/nunjucks/"
      },
      {
        "id": "twig",
        "name": "twig",
        "files": {
          "light": "twig-light.svg",
          "dark": "twig-dark.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "为 PHP 打造的极其灵活、快速且安全的模板引擎",
          "en-US": "The flexible, fast, and secure template engine for PHP"
        },
        "url": "https://twig.symfony.com/"
      },
      {
        "id": "cs",
        "name": "cs",
        "files": {
          "light": "cs.svg",
          "dark": "cs.svg"
        },
        "category": "Frontend - Languages",
        "description": {
          "zh-CN": "一种现代的、面向对象的、类型安全的编程语言",
          "en-US": "A modern, object-oriented, and type-safe programming language"
        },
        "url": "https://learn.microsoft.com/en-us/dotnet/csharp/"
      }
    ],
    "Frontend - Frameworks": [
      {
        "id": "react",
        "name": "react",
        "files": {
          "light": "react-light.svg",
          "dark": "react-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "用于构建 Web 和原生交互界面的库",
          "en-US": "The library for web and native user interfaces"
        },
        "url": "https://react.dev/"
      },
      {
        "id": "angular",
        "name": "angular",
        "files": {
          "light": "angular-light.svg",
          "dark": "angular-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个基于 TypeScript 构建的 Web 应用开发框架",
          "en-US": "The web development framework for building the future"
        },
        "url": "https://angular.io/"
      },
      {
        "id": "svelte",
        "name": "svelte",
        "files": {
          "light": "svelte.svg",
          "dark": "svelte.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "放弃虚拟 DOM，在构建时将组件编译为高效原生代码的 Web 框架",
          "en-US": "Cybernetically enhanced web apps"
        },
        "url": "https://svelte.dev/"
      },
      {
        "id": "solidjs",
        "name": "solidjs",
        "files": {
          "light": "solidjs-light.svg",
          "dark": "solidjs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个用于构建用户界面，简单高效、性能卓越的声明式 JavaScript 库",
          "en-US": "Simple and performant reactivity for building user interfaces"
        },
        "url": "https://www.solidjs.com/"
      },
      {
        "id": "preact",
        "name": "preact",
        "files": {
          "light": "preact-light.svg",
          "dark": "preact-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个只有 3kB 大小的 React 替代方案，拥有相同的 ES6 API",
          "en-US": "Fast 3kB alternative to React with the same modern API"
        },
        "url": "https://preactjs.com/"
      },
      {
        "id": "nextjs",
        "name": "nextjs",
        "files": {
          "light": "nextjs-light.svg",
          "dark": "nextjs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "用于构建现代 Web 应用程序的 React 框架",
          "en-US": "The React Framework for the Web"
        },
        "url": "https://nextjs.org/"
      },
      {
        "id": "nuxtjs",
        "name": "nuxtjs",
        "files": {
          "light": "nuxtjs-light.svg",
          "dark": "nuxtjs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "直观的 Web 框架，用于构建高性能的全栈 Vue.js 应用程序",
          "en-US": "The Intuitive Vue Framework"
        },
        "url": "https://nuxt.com/"
      },
      {
        "id": "gatsby",
        "name": "gatsby",
        "files": {
          "light": "gatsby.svg",
          "dark": "gatsby.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "基于 React 的免费开源框架，帮助开发者构建快速的网站和应用程序",
          "en-US": "The fastest frontend for the headless web"
        },
        "url": "https://www.gatsbyjs.com/"
      },
      {
        "id": "astro",
        "name": "astro",
        "files": {
          "light": "astro.svg",
          "dark": "astro.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "为内容驱动的网站构建更快的企业级静态网站",
          "en-US": "The web framework for content-driven websites"
        },
        "url": "https://astro.build/"
      },
      {
        "id": "remix",
        "name": "remix",
        "files": {
          "light": "remix-light.svg",
          "dark": "remix-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "基于 Web 标准的现代全栈 Web 框架",
          "en-US": "Focused on web standards and modern web app UX"
        },
        "url": "https://remix.run/"
      },
      {
        "id": "jquery",
        "name": "jquery",
        "files": {
          "light": "jquery.svg",
          "dark": "jquery.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个快速、小巧、功能丰富的 JavaScript 库",
          "en-US": "A fast, small, and feature-rich JavaScript library"
        },
        "url": "https://jquery.com/"
      },
      {
        "id": "ember",
        "name": "ember",
        "files": {
          "light": "ember.svg",
          "dark": "ember.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个用于创建富有野心的 Web 应用程序的框架",
          "en-US": "A framework for ambitious web developers"
        },
        "url": "https://emberjs.com/"
      },
      {
        "id": "alpinejs",
        "name": "alpinejs",
        "files": {
          "light": "alpinejs-light.svg",
          "dark": "alpinejs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个坚固、轻量级的工具，用于在标记中直接编写行为",
          "en-US": "A rugged, minimal tool for composing behavior directly in your markup"
        },
        "url": "https://alpinejs.dev/"
      },
      {
        "id": "lit",
        "name": "lit",
        "files": {
          "light": "lit-light.svg",
          "dark": "lit-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个轻量的、用于构建快速且轻量级 Web 组件的库",
          "en-US": "Simple. Fast. Web Components."
        },
        "url": "https://lit.dev/"
      },
      {
        "id": "yui",
        "name": "yui",
        "files": {
          "light": "yui-light.svg",
          "dark": "yui-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "用于构建丰富的交互式 Web 应用程序的 JavaScript 和 CSS 库",
          "en-US": "A free, open source JavaScript and CSS library for building richly interactive web applications"
        },
        "url": "https://yui.github.io/yui2/"
      },
      {
        "id": "yew",
        "name": "yew",
        "files": {
          "light": "yew-light.svg",
          "dark": "yew-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个用于创建多线程前端 Web 应用的现代 Rust 框架",
          "en-US": "A framework for creating reliable and efficient web applications"
        },
        "url": "https://yew.rs/"
      },
      {
        "id": "htmx",
        "name": "htmx",
        "files": {
          "light": "htmx-light.svg",
          "dark": "htmx-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "直接使用 HTML 属性来访问现代浏览器功能的库",
          "en-US": "high power tools for HTML"
        },
        "url": "https://htmx.org/"
      },
      {
        "id": "livewire",
        "name": "livewire",
        "files": {
          "light": "livewire-light.svg",
          "dark": "livewire-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "用于 Laravel 的全栈框架，无需编写纯粹的 UI 代码",
          "en-US": "A full-stack framework for Laravel"
        },
        "url": "https://livewire.laravel.com/"
      },
      {
        "id": "blazor",
        "name": "blazor",
        "files": {
          "light": "blazor-light.svg",
          "dark": "blazor-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "允许使用 C# 代替 JavaScript 构建交互式客户端 Web UI",
          "en-US": "Build client web apps with C#"
        },
        "url": "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
      },
      {
        "id": "barbajs",
        "name": "barbajs",
        "files": {
          "light": "barbajs.svg",
          "dark": "barbajs.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "在你的网站页面之间创建流畅平滑的过渡",
          "en-US": "Create fluid and smooth transitions between your website's pages"
        },
        "url": "https://barba.js.org/"
      },
      {
        "id": "animejs",
        "name": "animejs",
        "files": {
          "light": "animejs-light.svg",
          "dark": "animejs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "一个轻量级的 JavaScript 动画库",
          "en-US": "A lightweight JavaScript animation library"
        },
        "url": "https://animejs.com/"
      },
      {
        "id": "authjs",
        "name": "authjs",
        "files": {
          "light": "authjs-light.svg",
          "dark": "authjs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "针对 Web 的完全无特权的认证库 (原 NextAuth.js)",
          "en-US": "Authentication for Web (formerly NextAuth.js)"
        },
        "url": "https://authjs.dev/"
      },
      {
        "id": "vuejs",
        "name": "vuejs",
        "files": {
          "light": "vuejs-light.svg",
          "dark": "vuejs-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "Vue.js (别名)",
          "en-US": "Vue.js (Alias)"
        },
        "url": "https://vuejs.org/"
      },
      {
        "id": "reactivex",
        "name": "reactivex",
        "files": {
          "light": "reactivex-light.svg",
          "dark": "reactivex-dark.svg"
        },
        "category": "Frontend - Frameworks",
        "description": {
          "zh-CN": "使用可观察序列提供异步编程的 API",
          "en-US": "An API for asynchronous programming with observable streams"
        },
        "url": "https://reactivex.io/"
      }
    ],
    "Frontend - UI & Styling": [
      {
        "id": "bootstrap",
        "name": "bootstrap",
        "files": {
          "light": "bootstrap.svg",
          "dark": "bootstrap.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "世界上最流行的构建响应式移动优先网站的框架",
          "en-US": "The most popular HTML, CSS, and JS library in the world"
        },
        "url": "https://getbootstrap.com/"
      },
      {
        "id": "tailwindcss",
        "name": "tailwindcss",
        "files": {
          "light": "tailwindcss-light.svg",
          "dark": "tailwindcss-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "一个功能类优先的 CSS 框架",
          "en-US": "A utility-first CSS framework"
        },
        "url": "https://tailwindcss.com/"
      },
      {
        "id": "sass",
        "name": "sass",
        "files": {
          "light": "sass.svg",
          "dark": "sass.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "世界上最成熟、稳定、强大的专业级 CSS 扩展语言",
          "en-US": "Syntactically Awesome Style Sheets"
        },
        "url": "https://sass-lang.com/"
      },
      {
        "id": "less",
        "name": "less",
        "files": {
          "light": "less-light.svg",
          "dark": "less-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "向后兼容 CSS 的一种语言扩展",
          "en-US": "It's CSS, with just a little more"
        },
        "url": "https://lesscss.org/"
      },
      {
        "id": "stylus",
        "name": "stylus",
        "files": {
          "light": "stylus-light.svg",
          "dark": "stylus-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "富于表现力、动态的、健壮的 CSS 解析语言",
          "en-US": "Expressive, dynamic, robust CSS"
        },
        "url": "https://stylus-lang.com/"
      },
      {
        "id": "materialui",
        "name": "materialui",
        "files": {
          "light": "materialui-light.svg",
          "dark": "materialui-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "MUI (别名)",
          "en-US": "MUI (Alias)"
        },
        "url": "https://mui.com/"
      },
      {
        "id": "vuetify",
        "name": "vuetify",
        "files": {
          "light": "vuetify-light.svg",
          "dark": "vuetify-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 Vue 的 Material Design 框架",
          "en-US": "A Material Design Framework for Vue.js"
        },
        "url": "https://vuetifyjs.com/"
      },
      {
        "id": "chakraui",
        "name": "chakraui",
        "files": {
          "light": "chakraui-light.svg",
          "dark": "chakraui-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "Chakra UI (别名)",
          "en-US": "Chakra UI (Alias)"
        },
        "url": "https://chakra-ui.com/"
      },
      {
        "id": "bulma",
        "name": "bulma",
        "files": {
          "light": "bulma-light.svg",
          "dark": "bulma-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "基于 Flexbox 的现代开源 CSS 框架",
          "en-US": "Free, open source, and modern CSS framework based on Flexbox"
        },
        "url": "https://bulma.io/"
      },
      {
        "id": "styledcomponents",
        "name": "styledcomponents",
        "files": {
          "light": "styledcomponents.svg",
          "dark": "styledcomponents.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 React 的 CSS-in-JS 库库，为组件时代提供视觉原语",
          "en-US": "Visual primitives for the component age"
        },
        "url": "https://styled-components.com/"
      },
      {
        "id": "emotion",
        "name": "emotion",
        "files": {
          "light": "emotion-light.svg",
          "dark": "emotion-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "专注于高性能和灵活性的 CSS-in-JS 库",
          "en-US": "Library designed for writing css styles with JavaScript"
        },
        "url": "https://emotion.sh/"
      },
      {
        "id": "unocss",
        "name": "unocss",
        "files": {
          "light": "unocss-light.svg",
          "dark": "unocss-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "即时按需的原子级 CSS 引擎",
          "en-US": "The Instant On-demand Atomic CSS Engine"
        },
        "url": "https://unocss.dev/"
      },
      {
        "id": "windicss",
        "name": "windicss",
        "files": {
          "light": "windicss-light.svg",
          "dark": "windicss-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "下一代功能类优先的 CSS 框架",
          "en-US": "Next generation utility-first CSS framework"
        },
        "url": "https://windicss.org/"
      },
      {
        "id": "picocss",
        "name": "picocss",
        "files": {
          "light": "picocss-light.svg",
          "dark": "picocss-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "Pico.css (别名)",
          "en-US": "Pico.css (Alias)"
        },
        "url": "https://picocss.com/"
      },
      {
        "id": "daisyui",
        "name": "daisyui",
        "files": {
          "light": "daisyui-light.svg",
          "dark": "daisyui-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "最流行的 Tailwind CSS 组件库",
          "en-US": "The most popular component library for Tailwind CSS"
        },
        "url": "https://daisyui.com/"
      },
      {
        "id": "primeng",
        "name": "primeng",
        "files": {
          "light": "primeng-light.svg",
          "dark": "primeng-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 Angular 的 UI 组件库",
          "en-US": "Angular UI Component Library"
        },
        "url": "https://www.primefaces.org/primeng/"
      },
      {
        "id": "primereact",
        "name": "primereact",
        "files": {
          "light": "primereact-light.svg",
          "dark": "primereact-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 React 的 UI 组件库",
          "en-US": "React UI Component Library"
        },
        "url": "https://www.primefaces.org/primereact/"
      },
      {
        "id": "primevue",
        "name": "primevue",
        "files": {
          "light": "primevue-light.svg",
          "dark": "primevue-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 Vue 的 UI 组件库",
          "en-US": "Vue UI Component Library"
        },
        "url": "https://www.primefaces.org/primevue/"
      },
      {
        "id": "radix",
        "name": "radix",
        "files": {
          "light": "radix-light.svg",
          "dark": "radix-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "无样式的可访问组件，用于构建设计系统",
          "en-US": "Unstyled, accessible components for building design systems"
        },
        "url": "https://www.radix-ui.com/"
      },
      {
        "id": "shadcn",
        "name": "shadcn",
        "files": {
          "light": "shadcn-light.svg",
          "dark": "shadcn-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "使用 Radix UI 和 Tailwind CSS 构建的设计精美的组件库",
          "en-US": "Beautifully designed components built with Radix UI and Tailwind CSS"
        },
        "url": "https://ui.shadcn.com/"
      },
      {
        "id": "element",
        "name": "element",
        "files": {
          "light": "element-light.svg",
          "dark": "element-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
          "en-US": "Vue.js 2 Desktop UI Toolkit"
        },
        "url": "https://element.eleme.io/"
      },
      {
        "id": "elementplus",
        "name": "elementplus",
        "files": {
          "light": "elementplus-light.svg",
          "dark": "elementplus-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "基于 Vue 3 的前端组件库",
          "en-US": "A Vue 3 based component library"
        },
        "url": "https://element-plus.org/"
      },
      {
        "id": "antdesign",
        "name": "antdesign",
        "files": {
          "light": "antdesign-light.svg",
          "dark": "antdesign-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "Ant Design (别名)",
          "en-US": "Ant Design (Alias)"
        },
        "url": "https://ant.design/"
      },
      {
        "id": "skeletonui",
        "name": "skeletonui",
        "files": {
          "light": "skeletonui-light.svg",
          "dark": "skeletonui-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "使用 Svelte 和 Tailwind 构建响应式界面的 UI 库",
          "en-US": "UI library for building reactive interfaces"
        },
        "url": "https://www.skeleton.dev/"
      },
      {
        "id": "postcss",
        "name": "postcss",
        "files": {
          "light": "postcss-light.svg",
          "dark": "postcss-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "一个用 JavaScript 转换 CSS 的工具",
          "en-US": "A tool for transforming CSS with JavaScript"
        },
        "url": "https://postcss.org/"
      },
      {
        "id": "framer",
        "name": "framer",
        "files": {
          "light": "framer-light.svg",
          "dark": "framer-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "用于团队设计和发布站点的无代码 Web 构建器",
          "en-US": "The web builder for creative pros"
        },
        "url": "https://www.framer.com/"
      },
      {
        "id": "lottielab",
        "name": "lottielab",
        "files": {
          "light": "lottielab.svg",
          "dark": "lottielab.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "在浏览器中创建具有交互性的 Lottie 动画",
          "en-US": "Create Lottie animations in your browser"
        },
        "url": "https://www.lottielab.com/"
      },
      {
        "id": "gsap",
        "name": "gsap",
        "files": {
          "light": "gsap-light.svg",
          "dark": "gsap-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "为现代 Web 打造的专业级 JavaScript 动画库",
          "en-US": "Professional-grade JavaScript animation for the modern web"
        },
        "url": "https://gsap.com/"
      },
      {
        "id": "threejs",
        "name": "threejs",
        "files": {
          "light": "threejs-light.svg",
          "dark": "threejs-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "一个易于使用、轻量级的基于 WebGL 的 3D 库",
          "en-US": "JavaScript 3D Library"
        },
        "url": "https://threejs.org/"
      },
      {
        "id": "d3",
        "name": "d3",
        "files": {
          "light": "d3-light.svg",
          "dark": "d3-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "用动态的、基于数据的图形使数据栩栩如生的数据驱动文档",
          "en-US": "Data-Driven Documents"
        },
        "url": "https://d3js.org/"
      },
      {
        "id": "chartjs",
        "name": "chartjs",
        "files": {
          "light": "chartjs-light.svg",
          "dark": "chartjs-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "为设计师和开发者准备的简单且灵活的 JavaScript 图表库",
          "en-US": "Simple yet flexible JavaScript charting for designers & developers"
        },
        "url": "https://www.chartjs.org/"
      },
      {
        "id": "leaflet",
        "name": "leaflet",
        "files": {
          "light": "leaflet-light.svg",
          "dark": "leaflet-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于移动端交互式地图的开源 JavaScript 库",
          "en-US": "An open-source JavaScript library for mobile-friendly interactive maps"
        },
        "url": "https://leafletjs.com/"
      },
      {
        "id": "apexcharts",
        "name": "apexcharts",
        "files": {
          "light": "apexcharts-light.svg",
          "dark": "apexcharts-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "现代且交互式的开源图表库",
          "en-US": "Modern & Interactive Open-source Charts"
        },
        "url": "https://apexcharts.com/"
      },
      {
        "id": "axios",
        "name": "axios",
        "files": {
          "light": "axios-light.svg",
          "dark": "axios-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "基于 Promise 的 HTTP 客户端，适用于浏览器和 Node.js",
          "en-US": "Promise based HTTP client for the browser and node.js"
        },
        "url": "https://axios-http.com/"
      },
      {
        "id": "elementor",
        "name": "elementor",
        "files": {
          "light": "elementor-light.svg",
          "dark": "elementor-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "适用于 WordPress 的可视化网站构建器",
          "en-US": "Elementor Website Builder for WordPress"
        },
        "url": "https://elementor.com/"
      },
      {
        "id": "mjml",
        "name": "mjml",
        "files": {
          "light": "mjml-light.svg",
          "dark": "mjml-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "唯一让编写响应式电子邮件变得简单的框架",
          "en-US": "The only framework that makes responsive-email easy"
        },
        "url": "https://mjml.io/"
      },
      {
        "id": "reactbootstrap",
        "name": "reactbootstrap",
        "files": {
          "light": "reactbootstrap-light.svg",
          "dark": "reactbootstrap-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "为 React 重构的最受欢迎的前端框架",
          "en-US": "The most popular front-end framework Rebuilt for React"
        },
        "url": "https://react-bootstrap.netlify.app/"
      },
      {
        "id": "storybook",
        "name": "storybook",
        "files": {
          "light": "storybook-light.svg",
          "dark": "storybook-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "隔离构建 UI 组件和页面的前端工作台",
          "en-US": "Frontend workshop for building UI components and pages in isolation"
        },
        "url": "https://storybook.js.org/"
      },
      {
        "id": "webstudio",
        "name": "webstudio",
        "files": {
          "light": "webstudio-light.svg",
          "dark": "webstudio-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "Webflow 的开源替代方案",
          "en-US": "The open source alternative to Webflow"
        },
        "url": "https://webstudio.is/"
      },
      {
        "id": "codepen",
        "name": "codepen",
        "files": {
          "light": "codepen-light.svg",
          "dark": "codepen-dark.svg"
        },
        "category": "Frontend - UI & Styling",
        "description": {
          "zh-CN": "构建、测试和发现前端代码的最佳场所",
          "en-US": "The best place to build, test, and discover front-end code"
        },
        "url": "https://codepen.io/"
      }
    ],
    "Frontend - State Management": [
      {
        "id": "redux",
        "name": "redux",
        "files": {
          "light": "redux.svg",
          "dark": "redux.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "用于 JavaScript 应用的可预测状态容器",
          "en-US": "A Predictable State Container for JS Apps"
        },
        "url": "https://redux.js.org/"
      },
      {
        "id": "mobx",
        "name": "mobx",
        "files": {
          "light": "mobx.svg",
          "dark": "mobx.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "简单、可扩展的状态管理框架",
          "en-US": "Simple, scalable state management"
        },
        "url": "https://mobx.js.org/"
      },
      {
        "id": "zustand",
        "name": "zustand",
        "files": {
          "light": "zustand-light.svg",
          "dark": "zustand-dark.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "一个小型、快速且可扩展的极简状态管理解决方案",
          "en-US": "A small, fast and scalable bearbones state-management solution"
        },
        "url": "https://zustand-demo.pmnd.rs/"
      },
      {
        "id": "pinia",
        "name": "pinia",
        "files": {
          "light": "pinia-light.svg",
          "dark": "pinia-dark.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "适用于 Vue.js 的直观的 Store 库",
          "en-US": "The intuitive store for Vue.js"
        },
        "url": "https://pinia.vuejs.org/"
      },
      {
        "id": "recoil",
        "name": "recoil",
        "files": {
          "light": "recoil.svg",
          "dark": "recoil.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "用于 React 的状态管理库",
          "en-US": "A state management library for React"
        },
        "url": "https://recoiljs.org/"
      },
      {
        "id": "ngrx",
        "name": "ngrx",
        "files": {
          "light": "ngrx-light.svg",
          "dark": "ngrx-dark.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "用于 Angular 的响应式状态管理",
          "en-US": "Reactive State Management for Angular"
        },
        "url": "https://ngrx.io/"
      },
      {
        "id": "tanstack",
        "name": "tanstack",
        "files": {
          "light": "tanstack-light.svg",
          "dark": "tanstack-dark.svg"
        },
        "category": "Frontend - State Management",
        "description": {
          "zh-CN": "为 Web 开发者提供的高质量开源软件 (React Query 等)",
          "en-US": "High-quality open-source software for web developers (React Query, etc.)"
        },
        "url": "https://tanstack.com/"
      }
    ],
    "Frontend - Build Tools": [
      {
        "id": "vite",
        "name": "vite",
        "files": {
          "light": "vite-light.svg",
          "dark": "vite-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "下一代前端开发与构建工具",
          "en-US": "Next Generation Frontend Tooling"
        },
        "url": "https://vitejs.dev/"
      },
      {
        "id": "webpack",
        "name": "webpack",
        "files": {
          "light": "webpack-light.svg",
          "dark": "webpack-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "现代 JavaScript 应用程序的静态模块打包工具",
          "en-US": "A static module bundler for modern JavaScript applications"
        },
        "url": "https://webpack.js.org/"
      },
      {
        "id": "babel",
        "name": "babel",
        "files": {
          "light": "babel.svg",
          "dark": "babel.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个 JavaScript 编译器，主要用于向后兼容",
          "en-US": "A JavaScript compiler"
        },
        "url": "https://babeljs.io/"
      },
      {
        "id": "eslint",
        "name": "eslint",
        "files": {
          "light": "eslint-light.svg",
          "dark": "eslint-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "全面发现并修复 JavaScript 代码中的问题",
          "en-US": "Find and fix problems in your JavaScript code"
        },
        "url": "https://eslint.org/"
      },
      {
        "id": "prettier",
        "name": "prettier",
        "files": {
          "light": "prettier-light.svg",
          "dark": "prettier-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个拥有自身规范的代码格式化工具",
          "en-US": "An opinionated code formatter"
        },
        "url": "https://prettier.io/"
      },
      {
        "id": "pnpm",
        "name": "pnpm",
        "files": {
          "light": "pnpm-light.svg",
          "dark": "pnpm-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "速度快、节省磁盘空间的软件包管理器",
          "en-US": "Fast, disk space efficient package manager"
        },
        "url": "https://pnpm.io/"
      },
      {
        "id": "yarn",
        "name": "yarn",
        "files": {
          "light": "yarn-light.svg",
          "dark": "yarn-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "快速、可靠、安全的依赖管理工具",
          "en-US": "Fast, reliable, and secure dependency management"
        },
        "url": "https://yarnpkg.com/"
      },
      {
        "id": "npm",
        "name": "npm",
        "files": {
          "light": "npm-light.svg",
          "dark": "npm-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "全世界最大的软件注册表，JavaScript 的包管理器",
          "en-US": "The package manager for JavaScript"
        },
        "url": "https://www.npmjs.com/"
      },
      {
        "id": "bun",
        "name": "bun",
        "files": {
          "light": "bun-light.svg",
          "dark": "bun-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个快速的、集成了打包器、测试框架的 JavaScript 运行时",
          "en-US": "A fast all-in-one JavaScript runtime"
        },
        "url": "https://bun.sh/"
      },
      {
        "id": "deno",
        "name": "deno",
        "files": {
          "light": "deno-light.svg",
          "dark": "deno-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个现代的基于 V8 引擎的 JavaScript 和 TypeScript 运行时",
          "en-US": "A modern runtime for JavaScript and TypeScript"
        },
        "url": "https://deno.land/"
      },
      {
        "id": "gulp",
        "name": "gulp",
        "files": {
          "light": "gulp.svg",
          "dark": "gulp.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个基于流的工具包，协助自动化并增强工作流程",
          "en-US": "A toolkit to automate & enhance your workflow"
        },
        "url": "https://gulpjs.com/"
      },
      {
        "id": "grunt",
        "name": "grunt",
        "files": {
          "light": "grunt-light.svg",
          "dark": "grunt-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个用于自动执行前端频繁任务的 JavaScript 任务运行器",
          "en-US": "The JavaScript Task Runner"
        },
        "url": "https://gruntjs.com/"
      },
      {
        "id": "turborepo",
        "name": "turborepo",
        "files": {
          "light": "turborepo-light.svg",
          "dark": "turborepo-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "适用于 JavaScript 和 TypeScript 代码库的高性能构建系统",
          "en-US": "The high-performance build system for JavaScript & TypeScript codebases"
        },
        "url": "https://turbo.build/repo"
      },
      {
        "id": "biome",
        "name": "biome",
        "files": {
          "light": "biome-light.svg",
          "dark": "biome-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "适用于 Web 项目的高性能工具链",
          "en-US": "A toolchain for web projects"
        },
        "url": "https://biomejs.dev/"
      },
      {
        "id": "tauri",
        "name": "tauri",
        "files": {
          "light": "tauri-light.svg",
          "dark": "tauri-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "用于为多平台部署构建优化、安全和独立于前端的应用程序",
          "en-US": "Build an optimized, secure, and frontend-independent application for multi-platform deployment"
        },
        "url": "https://tauri.app/"
      },
      {
        "id": "electron",
        "name": "electron",
        "files": {
          "light": "electron.svg",
          "dark": "electron.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "使用 JavaScript、HTML 和 CSS 构建跨平台桌面应用",
          "en-US": "Build cross-platform desktop apps with JavaScript, HTML, and CSS"
        },
        "url": "https://www.electronjs.org/"
      },
      {
        "id": "cmake",
        "name": "cmake",
        "files": {
          "light": "cmake-light.svg",
          "dark": "cmake-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个开源、跨平台的工具家族，用于构建、测试和打包软件",
          "en-US": "An open-source, cross-platform family of tools designed to build, test and package software"
        },
        "url": "https://cmake.org/"
      },
      {
        "id": "gradle",
        "name": "gradle",
        "files": {
          "light": "gradle-light.svg",
          "dark": "gradle-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个用于多语言软件开发的构建自动化工具",
          "en-US": "A build automation tool for multi-language software development"
        },
        "url": "https://gradle.org/"
      },
      {
        "id": "maven",
        "name": "maven",
        "files": {
          "light": "maven-light.svg",
          "dark": "maven-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "Apache Maven 项目管理和理解工具",
          "en-US": "A software project management and comprehension tool"
        },
        "url": "https://maven.apache.org/"
      },
      {
        "id": "composer",
        "name": "composer",
        "files": {
          "light": "composer-light.svg",
          "dark": "composer-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "PHP 的依赖管理器",
          "en-US": "A Dependency Manager for PHP"
        },
        "url": "https://getcomposer.org/"
      },
      {
        "id": "stylelint",
        "name": "stylelint",
        "files": {
          "light": "stylelint-light.svg",
          "dark": "stylelint-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "强大且现代的代码检查工具，帮助避免错误并强制执行样式约定",
          "en-US": "A mighty, modern linter that helps you avoid errors and enforce conventions in your styles"
        },
        "url": "https://stylelint.io/"
      },
      {
        "id": "pint",
        "name": "pint",
        "files": {
          "light": "pint.svg",
          "dark": "pint.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "为极简主义者准备的 PHP 代码样式修复程序",
          "en-US": "An opinionated PHP code style fixer for minimalists"
        },
        "url": "https://laravel.com/docs/10.x/pint"
      },
      {
        "id": "chromedevtools",
        "name": "chromedevtools",
        "files": {
          "light": "chromedevtools.svg",
          "dark": "chromedevtools.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "直接内置在 Google Chrome 浏览器中的一套 Web 开发者工具",
          "en-US": "A set of web developer tools built directly into the Google Chrome browser"
        },
        "url": "https://developer.chrome.com/docs/devtools/"
      },
      {
        "id": "vitepress",
        "name": "vitepress",
        "files": {
          "light": "vitepress-light.svg",
          "dark": "vitepress-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "由 Vite 和 Vue 驱动的静态站点生成器",
          "en-US": "Vite & Vue Powered Static Site Generator"
        },
        "url": "https://vitepress.dev/"
      },
      {
        "id": "wxt",
        "name": "wxt",
        "files": {
          "light": "wxt-light.svg",
          "dark": "wxt-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "下一代 Web 扩展框架",
          "en-US": "Next-gen Web Extension Framework"
        },
        "url": "https://wxt.dev/"
      },
      {
        "id": "docsify",
        "name": "docsify",
        "files": {
          "light": "docsify-light.svg",
          "dark": "docsify-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "一个神奇的文档站点生成器",
          "en-US": "A magical documentation site generator"
        },
        "url": "https://docsify.js.org/"
      },
      {
        "id": "pwa",
        "name": "pwa",
        "files": {
          "light": "pwa-light.svg",
          "dark": "pwa-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "渐进式 Web 应用 (Progressive Web App)",
          "en-US": "Progressive Web App"
        },
        "url": "https://web.dev/progressive-web-apps/"
      },
      {
        "id": "reactlynx",
        "name": "reactlynx",
        "files": {
          "light": "reactlynx-light.svg",
          "dark": "reactlynx-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "使用 React 构建类原生应用的跨平台高性能框架",
          "en-US": "A high-performance cross-platform framework for building native-like apps with React"
        },
        "url": "https://lynxjs.org/"
      },
      {
        "id": "millionjs",
        "name": "millionjs",
        "files": {
          "light": "millionjs-light.svg",
          "dark": "millionjs-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "让 React 加速 70% 的轻量级虚拟 DOM 库",
          "en-US": "Make React 70% faster"
        },
        "url": "https://million.dev/"
      },
      {
        "id": "reactquery",
        "name": "reactquery",
        "files": {
          "light": "reactquery-light.svg",
          "dark": "reactquery-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "为 TS/JS 提供强大的异步状态管理 (TanStack Query)",
          "en-US": "Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte"
        },
        "url": "https://tanstack.com/query/"
      },
      {
        "id": "reactrouter",
        "name": "reactrouter",
        "files": {
          "light": "reactrouter-light.svg",
          "dark": "reactrouter-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "React 的轻量级、全能路由库",
          "en-US": "A lightweight, fully-featured routing library for the React JavaScript library"
        },
        "url": "https://reactrouter.com/"
      },
      {
        "id": "socketio",
        "name": "socketio",
        "files": {
          "light": "socketio-light.svg",
          "dark": "socketio-dark.svg"
        },
        "category": "Frontend - Build Tools",
        "description": {
          "zh-CN": "为各个平台提供双向通信和低延迟通信的库",
          "en-US": "Bidirectional and low-latency communication for every platform"
        },
        "url": "https://socket.io/"
      }
    ],
    "Backend - Languages": [
      {
        "id": "nodejs",
        "name": "nodejs",
        "files": {
          "light": "nodejs-light.svg",
          "dark": "nodejs-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个基于 Chrome V8 JavaScript 引擎的 JavaScript 运行时",
          "en-US": "A JavaScript runtime built on Chrome's V8 JavaScript engine"
        },
        "url": "https://nodejs.org/"
      },
      {
        "id": "deno",
        "name": "deno",
        "files": {
          "light": "deno-light.svg",
          "dark": "deno-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个现代的 JavaScript 和 TypeScript 运行时",
          "en-US": "A modern runtime for JavaScript and TypeScript"
        },
        "url": "https://deno.land/"
      },
      {
        "id": "bun",
        "name": "bun",
        "files": {
          "light": "bun-light.svg",
          "dark": "bun-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个快速的一体化 JavaScript 运行时",
          "en-US": "A fast all-in-one JavaScript runtime"
        },
        "url": "https://bun.sh/"
      },
      {
        "id": "golang",
        "name": "golang",
        "files": {
          "light": "golang.svg",
          "dark": "golang.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "Go (别名)",
          "en-US": "Go (Alias)"
        },
        "url": "https://go.dev/"
      },
      {
        "id": "rust",
        "name": "rust",
        "files": {
          "light": "rust-light.svg",
          "dark": "rust-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门赋予每个人构建可靠和高效软件能力的语言",
          "en-US": "A language empowering everyone to build reliable and efficient software"
        },
        "url": "https://www.rust-lang.org/"
      },
      {
        "id": "python",
        "name": "python",
        "files": {
          "light": "python-light.svg",
          "dark": "python-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门让你能够快速工作并更有效地集成系统的编程语言",
          "en-US": "A programming language that lets you work quickly and integrate systems more effectively"
        },
        "url": "https://www.python.org/"
      },
      {
        "id": "java",
        "name": "java",
        "files": {
          "light": "java-light.svg",
          "dark": "java-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门高级的、基于类的、面向对象的编程语言",
          "en-US": "A high-level, class-based, object-oriented programming language"
        },
        "url": "https://www.java.com/"
      },
      {
        "id": "cpp",
        "name": "cpp",
        "files": {
          "light": "cpp.svg",
          "dark": "cpp.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "由 Bjarne Stroustrup 创建的通用编程语言",
          "en-US": "A general-purpose programming language created by Bjarne Stroustrup"
        },
        "url": "https://isocpp.org/"
      },
      {
        "id": "c",
        "name": "c",
        "files": {
          "light": "c.svg",
          "dark": "c.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门通用的、过程式的计算机编程语言",
          "en-US": "A general-purpose, procedural computer programming language"
        },
        "url": "https://en.wikipedia.org/wiki/C_(programming_language)"
      },
      {
        "id": "cs",
        "name": "cs",
        "files": {
          "light": "cs.svg",
          "dark": "cs.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门现代的、面向对象的、类型安全的编程语言",
          "en-US": "A modern, object-oriented, and type-safe programming language"
        },
        "url": "https://learn.microsoft.com/en-us/dotnet/csharp/"
      },
      {
        "id": "php",
        "name": "php",
        "files": {
          "light": "php-light.svg",
          "dark": "php-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门流行的通用脚本语言，特别适用于 Web 开发",
          "en-US": "A popular general-purpose scripting language that is especially suited to web development"
        },
        "url": "https://www.php.net/"
      },
      {
        "id": "ruby",
        "name": "ruby",
        "files": {
          "light": "ruby.svg",
          "dark": "ruby.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一种注重简单性和生产力的动态开源编程语言",
          "en-US": "A dynamic, open source programming language with a focus on simplicity and productivity"
        },
        "url": "https://www.ruby-lang.org/"
      },
      {
        "id": "perl",
        "name": "perl",
        "files": {
          "light": "perl.svg",
          "dark": "perl.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门功能丰富、能力强大且拥有 30 多年发展历史的编程语言",
          "en-US": "A highly capable, feature-rich programming language with over 30 years of development"
        },
        "url": "https://www.perl.org/"
      },
      {
        "id": "lua",
        "name": "lua",
        "files": {
          "light": "lua-light.svg",
          "dark": "lua-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门强大、高效、轻量级、可嵌入的脚本语言",
          "en-US": "A powerful, efficient, lightweight, embeddable scripting language"
        },
        "url": "https://www.lua.org/"
      },
      {
        "id": "r",
        "name": "r",
        "files": {
          "light": "r-light.svg",
          "dark": "r-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "用于统计计算和图形的免费软件环境",
          "en-US": "A free software environment for statistical computing and graphics"
        },
        "url": "https://www.r-project.org/"
      },
      {
        "id": "julia",
        "name": "julia",
        "files": {
          "light": "julia-light.svg",
          "dark": "julia-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门用于数值计算的高级、高性能动态编程语言",
          "en-US": "A high-level, high-performance, dynamic programming language for numerical computing"
        },
        "url": "https://julialang.org/"
      },
      {
        "id": "scala",
        "name": "scala",
        "files": {
          "light": "scala-light.svg",
          "dark": "scala-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门拥有强大静态类型系统和函数式编程模型的语言",
          "en-US": "A strong static type system and a functional programming model"
        },
        "url": "https://www.scala-lang.org/"
      },
      {
        "id": "kotlin",
        "name": "kotlin",
        "files": {
          "light": "kotlin-light.svg",
          "dark": "kotlin-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门现代的、跨平台的、静态类型的通用编程语言",
          "en-US": "A modern, cross-platform, statically typed, general-purpose programming language"
        },
        "url": "https://kotlinlang.org/"
      },
      {
        "id": "clojure",
        "name": "clojure",
        "files": {
          "light": "clojure-light.svg",
          "dark": "clojure-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门动态通用编程语言，结合了脚本语言的易用性与强大的多线程编程基础架构",
          "en-US": "A dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming"
        },
        "url": "https://clojure.org/"
      },
      {
        "id": "elixir",
        "name": "elixir",
        "files": {
          "light": "elixir-light.svg",
          "dark": "elixir-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门用于构建可扩展、可维护应用的动态函数式语言",
          "en-US": "A dynamic, functional language for building scalable and maintainable applications"
        },
        "url": "https://elixir-lang.org/"
      },
      {
        "id": "erlang",
        "name": "erlang",
        "files": {
          "light": "erlang-light.svg",
          "dark": "erlang-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "用于构建对高可用性有要求的大规模可扩展软实时系统的编程语言",
          "en-US": "A programming language used to build massively scalable soft real-time systems with requirements on high availability"
        },
        "url": "https://www.erlang.org/"
      },
      {
        "id": "haskell",
        "name": "haskell",
        "files": {
          "light": "haskell-light.svg",
          "dark": "haskell-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门高级纯函数式编程语言",
          "en-US": "An advanced, purely functional programming language"
        },
        "url": "https://www.haskell.org/"
      },
      {
        "id": "ocaml",
        "name": "ocaml",
        "files": {
          "light": "ocaml.svg",
          "dark": "ocaml.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门支持函数式、命令式和面向对象风格的工业级强类型编程语言",
          "en-US": "An industrial strength programming language supporting functional, imperative and object-oriented styles"
        },
        "url": "https://ocaml.org/"
      },
      {
        "id": "swift",
        "name": "swift",
        "files": {
          "light": "swift.svg",
          "dark": "swift.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门强大且直观的编程语言，适用于 Apple 平台",
          "en-US": "A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS"
        },
        "url": "https://swift.org/"
      },
      {
        "id": "dart",
        "name": "dart",
        "files": {
          "light": "dart-light.svg",
          "dark": "dart-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门为针对各种平台提供快速应用而进行客户端优化的语言",
          "en-US": "A client-optimized language for fast apps on any platform"
        },
        "url": "https://dart.dev/"
      },
      {
        "id": "bash",
        "name": "bash",
        "files": {
          "light": "bash-light.svg",
          "dark": "bash-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个 sh 兼容的 shell，融合了 ksh 和 csh 的有用特性",
          "en-US": "An sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh)"
        },
        "url": "https://www.gnu.org/software/bash/"
      },
      {
        "id": "powershell",
        "name": "powershell",
        "files": {
          "light": "powershell-light.svg",
          "dark": "powershell-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个跨平台的任务自动化解决方案，由命令行 shell、脚本语言和配置管理框架组成",
          "en-US": "A cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework"
        },
        "url": "https://learn.microsoft.com/en-us/powershell/"
      },
      {
        "id": "assembly",
        "name": "assembly",
        "files": {
          "light": "assembly.svg",
          "dark": "assembly.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "汇编语言 (Assembly)",
          "en-US": "Assembly Language"
        },
        "url": "https://en.wikipedia.org/wiki/Assembly_language"
      },
      {
        "id": "fortran",
        "name": "fortran",
        "files": {
          "light": "fortran.svg",
          "dark": "fortran.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门通用的编译型命令式编程语言，特别适用于数值和科学计算",
          "en-US": "A general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing"
        },
        "url": "https://fortran-lang.org/"
      },
      {
        "id": "v",
        "name": "v",
        "files": {
          "light": "v-light.svg",
          "dark": "v-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门用于开发可维护软件的简单、快速、安全的编译语言",
          "en-US": "Simple, fast, safe, compiled language for developing maintainable software"
        },
        "url": "https://vlang.io/"
      },
      {
        "id": "zig",
        "name": "zig",
        "files": {
          "light": "zig-light.svg",
          "dark": "zig-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门用于维护稳健、最优和可复用软件的通用编程语言和工具链",
          "en-US": "A general-purpose programming language and toolchain for maintaining robust, optimal and reusable software"
        },
        "url": "https://ziglang.org/"
      },
      {
        "id": "nim",
        "name": "nim",
        "files": {
          "light": "nim-light.svg",
          "dark": "nim-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门静态类型的编译型系统编程语言",
          "en-US": "A statically typed compiled systems programming language"
        },
        "url": "https://nim-lang.org/"
      },
      {
        "id": "crystal",
        "name": "crystal",
        "files": {
          "light": "crystal-light.svg",
          "dark": "crystal-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门为人类和计算机设计的语言，语法类似 Ruby 且速度极快",
          "en-US": "A language for humans and computers"
        },
        "url": "https://crystal-lang.org/"
      },
      {
        "id": "d",
        "name": "d",
        "files": {
          "light": "d.svg",
          "dark": "d.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "D 编程语言",
          "en-US": "The D programming language"
        },
        "url": "https://dlang.org/"
      },
      {
        "id": "forth",
        "name": "forth",
        "files": {
          "light": "forth.svg",
          "dark": "forth.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一种过程式的、面向栈的编程语言和交互式环境",
          "en-US": "A procedural, stack-oriented programming language and interactive environment"
        },
        "url": "https://en.wikipedia.org/wiki/Forth_(programming_language)"
      },
      {
        "id": "odin",
        "name": "odin",
        "files": {
          "light": "odin-light.svg",
          "dark": "odin-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门为追求性能、高效和简单而优化的系统编程语言",
          "en-US": "A systems programming language optimized for performance, efficiency, and simplicity"
        },
        "url": "https://odin-lang.org/"
      },
      {
        "id": "pkl",
        "name": "pkl",
        "files": {
          "light": "pkl-light.svg",
          "dark": "pkl-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门将配置作为代码的语言",
          "en-US": "A configuration-as-code language"
        },
        "url": "https://pkl-lang.org/"
      },
      {
        "id": "gleam",
        "name": "gleam",
        "files": {
          "light": "gleam-light.svg",
          "dark": "gleam-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门用于构建类型安全的、可扩展系统的友好语言",
          "en-US": "A friendly language for building type-safe, scalable systems"
        },
        "url": "https://gleam.run/"
      },
      {
        "id": "scratch",
        "name": "scratch",
        "files": {
          "light": "scratch.svg",
          "dark": "scratch.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "创建故事、游戏和动画。与世界各地的朋友分享",
          "en-US": "Create stories, games, and animations. Share with others around the world"
        },
        "url": "https://scratch.mit.edu/"
      },
      {
        "id": "holyc",
        "name": "holyc",
        "files": {
          "light": "holyc.svg",
          "dark": "holyc.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "由 Terry A. Davis 为 TempleOS 创建的语言",
          "en-US": "A language created by Terry A. Davis for TempleOS"
        },
        "url": "https://templeos.org/"
      },
      {
        "id": "vala",
        "name": "vala",
        "files": {
          "light": "vala.svg",
          "dark": "vala.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一门带有自托管编译器的面向对象编程语言，可生成 C 代码并使用 GObject 系统",
          "en-US": "An object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system"
        },
        "url": "https://vala.dev/"
      },
      {
        "id": "visualbasic",
        "name": "visualbasic",
        "files": {
          "light": "visualbasic-light.svg",
          "dark": "visualbasic-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "微软提供的一门第三代事件驱动编程语言",
          "en-US": "A third-generation event-driven programming language from Microsoft"
        },
        "url": "https://learn.microsoft.com/en-us/dotnet/visual-basic/"
      },
      {
        "id": "haxe",
        "name": "haxe",
        "files": {
          "light": "haxe-light.svg",
          "dark": "haxe-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个跨平台编程语言和工具包",
          "en-US": "The Cross-platform Toolkit"
        },
        "url": "https://haxe.org/"
      },
      {
        "id": "apidog",
        "name": "apidog",
        "files": {
          "light": "apidog-light.svg",
          "dark": "apidog-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一体化 API 开发平台",
          "en-US": "All-in-one API development platform"
        },
        "url": "https://apidog.com/"
      },
      {
        "id": "api",
        "name": "api",
        "files": {
          "light": "api-light.svg",
          "dark": "api-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "应用程序编程接口 (Application Programming Interface)",
          "en-US": "Application Programming Interface"
        },
        "url": "https://en.wikipedia.org/wiki/API"
      },
      {
        "id": "matlab",
        "name": "matlab",
        "files": {
          "light": "matlab-light.svg",
          "dark": "matlab-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "由 MathWorks 开发的多范式数值计算环境和专有编程语言",
          "en-US": "A multi-paradigm numerical computing environment and proprietary programming language developed by MathWorks"
        },
        "url": "https://www.mathworks.com/products/matlab.html"
      },
      {
        "id": "latex",
        "name": "latex",
        "files": {
          "light": "latex-light.svg",
          "dark": "latex-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "包含多项致力于生成技术和科学文档特性的高质量排版系统",
          "en-US": "A high-quality typesetting system; it includes features designed for the production of technical and scientific documentation"
        },
        "url": "https://www.latex-project.org/"
      },
      {
        "id": "regex",
        "name": "regex",
        "files": {
          "light": "regex-light.svg",
          "dark": "regex-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "正则表达式",
          "en-US": "Regular Expression"
        },
        "url": "https://en.wikipedia.org/wiki/Regular_expression"
      },
      {
        "id": "restructuredtext",
        "name": "restructuredtext",
        "files": {
          "light": "restructuredtext-light.svg",
          "dark": "restructuredtext-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一种易于阅读的、所见即所得的纯文本标记语法和解析系统",
          "en-US": "An easy-to-read, what-you-see-is-what-you-get plaintext markup syntax and parser system"
        },
        "url": "https://docutils.sourceforge.io/rst.html"
      },
      {
        "id": "fuse",
        "name": "fuse",
        "files": {
          "light": "fuse.svg",
          "dark": "fuse.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一套功能强大的移动应用设计与开发工具",
          "en-US": "A powerful set of design and development tools for mobile apps"
        },
        "url": "https://fuse-open.github.io/"
      },
      {
        "id": "aiscript",
        "name": "aiscript",
        "files": {
          "light": "aiscript-light.svg",
          "dark": "aiscript-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "为 Misskey 设计的脚本语言",
          "en-US": "A scripting language for Misskey"
        },
        "url": "https://github.com/syuilo/aiscript"
      },
      {
        "id": "ros",
        "name": "ros",
        "files": {
          "light": "ros-light.svg",
          "dark": "ros-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "机器人操作系统 (Robot Operating System)",
          "en-US": "Robot Operating System"
        },
        "url": "https://www.ros.org/"
      },
      {
        "id": "uml",
        "name": "uml",
        "files": {
          "light": "uml-light.svg",
          "dark": "uml-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "统一建模语言 (Unified Modeling Language)",
          "en-US": "Unified Modeling Language"
        },
        "url": "https://www.uml.org/"
      },
      {
        "id": "googleappsscript",
        "name": "googleappsscript",
        "files": {
          "light": "googleappsscript-light.svg",
          "dark": "googleappsscript-dark.svg"
        },
        "category": "Backend - Languages",
        "description": {
          "zh-CN": "一个基于云的 JavaScript 平台，可让您跨 Google 产品集成和自动化任务",
          "en-US": "A cloud-based JavaScript platform that lets you integrate and automate tasks across Google products"
        },
        "url": "https://developers.google.com/apps-script"
      }
    ],
    "Backend - Frameworks - JS/TS": [
      {
        "id": "nestjs",
        "name": "nestjs",
        "files": {
          "light": "nestjs-light.svg",
          "dark": "nestjs-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架",
          "en-US": "A progressive Node.js framework for building efficient, reliable and scalable server-side applications"
        },
        "url": "https://nestjs.com/"
      },
      {
        "id": "meteorjs",
        "name": "meteorjs",
        "files": {
          "light": "meteorjs-light.svg",
          "dark": "meteorjs-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于构建现代 Web 应用的同构平台",
          "en-US": "An open source platform for web, mobile, and desktop"
        },
        "url": "https://www.meteor.com/"
      },
      {
        "id": "adonis",
        "name": "adonis",
        "files": {
          "light": "adonis.svg",
          "dark": "adonis.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "适用于 Node.js 的功能完备的 Web 框架",
          "en-US": "A fully featured web framework for Node.js"
        },
        "url": "https://adonisjs.com/"
      },
      {
        "id": "hono",
        "name": "hono",
        "files": {
          "light": "hono-light.svg",
          "dark": "hono-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "小型、快速、支持多种后端的 Web 框架",
          "en-US": "A small, simple, and ultrafast web framework for the Edges"
        },
        "url": "https://hono.dev/"
      },
      {
        "id": "elysia",
        "name": "elysia",
        "files": {
          "light": "elysia-light.svg",
          "dark": "elysia-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于 Bun 开发的人体工程学框架",
          "en-US": "Ergonomic Framework for Humans"
        },
        "url": "https://elysiajs.com/"
      },
      {
        "id": "inertia",
        "name": "inertia",
        "files": {
          "light": "inertia.svg",
          "dark": "inertia.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "允许你在不编写 API 的情况下构建单页应用",
          "en-US": "Build single-page apps, without building an API"
        },
        "url": "https://inertiajs.com/"
      },
      {
        "id": "dapper",
        "name": "dapper",
        "files": {
          "light": "dapper-light.svg",
          "dark": "dapper-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "适用于 .NET 的简单对象映射器 (ORM)",
          "en-US": "A simple object mapper for .Net"
        },
        "url": "https://github.com/StackExchange/Dapper"
      },
      {
        "id": "discordjs",
        "name": "discordjs",
        "files": {
          "light": "discordjs-light.svg",
          "dark": "discordjs-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "与 Discord API 交互的强大 Node.js 模块",
          "en-US": "A powerful Node.js module that allows you to easily interact with the Discord API"
        },
        "url": "https://discord.js.org/"
      },
      {
        "id": "sail",
        "name": "sail",
        "files": {
          "light": "sail.svg",
          "dark": "sail.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "创建企业级的 Node.js 应用程序 (Sails.js)",
          "en-US": "Realtime MVC Framework for Node.js"
        },
        "url": "https://sailsjs.com/"
      },
      {
        "id": "sanctum",
        "name": "sanctum",
        "files": {
          "light": "sanctum.svg",
          "dark": "sanctum.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 SPA、移动应用和简单的 API 提供羽量级身份验证系统",
          "en-US": "Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs"
        },
        "url": "https://laravel.com/docs/sanctum"
      },
      {
        "id": "scout",
        "name": "scout",
        "files": {
          "light": "scout.svg",
          "dark": "scout.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 Eloquent 模型提供简单的、基于驱动的全文搜索解决方案",
          "en-US": "Laravel Scout provides a simple, driver based solution for adding full-text search to your Eloquent models"
        },
        "url": "https://laravel.com/docs/scout"
      },
      {
        "id": "sentinel",
        "name": "sentinel",
        "files": {
          "light": "sentinel-light.svg",
          "dark": "sentinel-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 PHP 框架等提供全功能的认证和授权系统",
          "en-US": "A fully-featured authentication & authorization system for PHP frameworks"
        },
        "url": "https://cartalyst.com/manual/sentinel"
      },
      {
        "id": "session",
        "name": "session",
        "files": {
          "light": "session-light.svg",
          "dark": "session-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "提供存储用户会话的简单机制",
          "en-US": "A simple mechanism to store user sessions"
        },
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
      },
      {
        "id": "tallyprime",
        "name": "tallyprime",
        "files": {
          "light": "tallyprime.svg",
          "dark": "tallyprime.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "基于业务管理软件的会计软件",
          "en-US": "Business management software for accounting"
        },
        "url": "https://tallysolutions.com/"
      },
      {
        "id": "telescope",
        "name": "telescope",
        "files": {
          "light": "telescope.svg",
          "dark": "telescope.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "优雅的 Laravel 调试助手",
          "en-US": "An elegant debug assistant for the Laravel framework"
        },
        "url": "https://laravel.com/docs/telescope"
      },
      {
        "id": "xtable",
        "name": "xtable",
        "files": {
          "light": "xtable-light.svg",
          "dark": "xtable-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "基于 Vue 的 PC 端表格组件库 (vxe-table)",
          "en-US": "A PC UI library based on Vue"
        },
        "url": "https://vxetable.cn/"
      },
      {
        "id": "zudoku",
        "name": "zudoku",
        "files": {
          "light": "zudoku-light.svg",
          "dark": "zudoku-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "以 API 为中心的文档框架",
          "en-US": "API-centric documentation framework"
        },
        "url": "https://zudoku.dev/"
      },
      {
        "id": "trpc",
        "name": "trpc",
        "files": {
          "light": "trpc.svg",
          "dark": "trpc.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "无需代码生成的端到端类型安全 API",
          "en-US": "End-to-end typesafe APIs made easy"
        },
        "url": "https://trpc.io/"
      },
      {
        "id": "t3",
        "name": "t3",
        "files": {
          "light": "t3-light.svg",
          "dark": "t3-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于构建全栈 Next.js 应用的基础栈",
          "en-US": "The \"T3 Stack\" is a web development stack built tightly around Next.js"
        },
        "url": "https://create.t3.gg/"
      },
      {
        "id": "beeceptor",
        "name": "beeceptor",
        "files": {
          "light": "beeceptor-light.svg",
          "dark": "beeceptor-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于构建无代码 API 和模拟 REST API 的平台",
          "en-US": "Build No-Code APIs & Mock REST APIs"
        },
        "url": "https://beeceptor.com/"
      },
      {
        "id": "drizzle",
        "name": "drizzle",
        "files": {
          "light": "drizzle-light.svg",
          "dark": "drizzle-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "可以同时满足客户端与服务端的 TypeScript ORM",
          "en-US": "TypeScript ORM that is both server and client ready"
        },
        "url": "https://orm.drizzle.team/"
      },
      {
        "id": "dubbo",
        "name": "dubbo",
        "files": {
          "light": "dubbo-light.svg",
          "dark": "dubbo-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "一款高性能、轻量级的开源 Java RPC 框架",
          "en-US": "A high-performance, light weight, open source Java RPC framework"
        },
        "url": "https://dubbo.apache.org/"
      },
      {
        "id": "fabric",
        "name": "fabric",
        "files": {
          "light": "fabric-light.svg",
          "dark": "fabric-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "企业级许可的分布式账本技术 (DLT) 平台",
          "en-US": "Enterprise-grade permissioned distributed ledger technology (DLT) platform"
        },
        "url": "https://www.hyperledger.org/use/fabric"
      },
      {
        "id": "ignite",
        "name": "ignite",
        "files": {
          "light": "ignite-light.svg",
          "dark": "ignite-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "一个分布式数据库和计算平台，用于高性能计算和数据处理",
          "en-US": "A distributed database for high-performance computing with in-memory speed"
        },
        "url": "https://ignite.apache.org/"
      },
      {
        "id": "lightning",
        "name": "lightning",
        "files": {
          "light": "lightning-light.svg",
          "dark": "lightning-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "适用于 Salesforce 的基于组件的应用程序框架",
          "en-US": "A component-based app framework for Salesforce"
        },
        "url": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm"
      },
      {
        "id": "mcp",
        "name": "mcp",
        "files": {
          "light": "mcp-light.svg",
          "dark": "mcp-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "模型上下文协议 (Model Context Protocol)",
          "en-US": "Model Context Protocol (MCP)"
        },
        "url": "https://modelcontextprotocol.io/"
      },
      {
        "id": "openzeppelin",
        "name": "openzeppelin",
        "files": {
          "light": "openzeppelin-light.svg",
          "dark": "openzeppelin-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于安全智能合约开发的库",
          "en-US": "A library for secure smart contract development"
        },
        "url": "https://www.openzeppelin.com/"
      },
      {
        "id": "orchid",
        "name": "orchid",
        "files": {
          "light": "orchid.svg",
          "dark": "orchid.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 Laravel 构建企业级应用的 RAD 平台",
          "en-US": "A platform for building enterprise applications with Laravel"
        },
        "url": "https://orchid.software/"
      },
      {
        "id": "pail",
        "name": "pail",
        "files": {
          "light": "pail-light.svg",
          "dark": "pail-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "用于现代 Laravel 的实用日志尾随工具",
          "en-US": "A modern, CLI-friendly approach to tailing Laravel application logs"
        },
        "url": "https://github.com/laravel/pail"
      },
      {
        "id": "pennant",
        "name": "pennant",
        "files": {
          "light": "pennant.svg",
          "dark": "pennant.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 Laravel 提供简单、轻量级的功能特性标志系统",
          "en-US": "Laravel Pennant offers a simple and light-weight approach to managing feature flags"
        },
        "url": "https://laravel.com/docs/pennant"
      },
      {
        "id": "portfolio",
        "name": "portfolio",
        "files": {
          "light": "portfolio.svg",
          "dark": "portfolio.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "个人作品集与项目展示",
          "en-US": "Personal portfolio and project showcase"
        },
        "url": "#"
      },
      {
        "id": "prelude",
        "name": "prelude",
        "files": {
          "light": "prelude.svg",
          "dark": "prelude.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "软件供应链安全测试",
          "en-US": "Continuous security testing for production environments"
        },
        "url": "https://github.com/standard-ai/prelude"
      },
      {
        "id": "polar",
        "name": "polar",
        "files": {
          "light": "polar-light.svg",
          "dark": "polar-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为开发者和创作者提供资助的平台",
          "en-US": "The funding platform for developers and creators"
        },
        "url": "https://polar.sh/"
      },
      {
        "id": "prompts",
        "name": "prompts",
        "files": {
          "light": "prompts.svg",
          "dark": "prompts.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "轻量级、美观、用户友好的交互式命令行提示工具",
          "en-US": "Lightweight, beautiful and user-friendly interactive prompts"
        },
        "url": "https://github.com/terkelg/prompts"
      },
      {
        "id": "pulse",
        "name": "pulse",
        "files": {
          "light": "pulse-light.svg",
          "dark": "pulse-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "随时了解 Laravel 应用的性能和使用情况的面版",
          "en-US": "A glance at your application's performance and usage"
        },
        "url": "https://laravel.com/docs/pulse"
      },
      {
        "id": "puppygraph",
        "name": "puppygraph",
        "files": {
          "light": "puppygraph-light.svg",
          "dark": "puppygraph-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "由数据仓库驱动的云原生图统一分析引擎",
          "en-US": "Cloud-native graph analytics engine powered by data warehouses"
        },
        "url": "https://www.puppygraph.com/"
      },
      {
        "id": "reverb",
        "name": "reverb",
        "files": {
          "light": "reverb.svg",
          "dark": "reverb.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "为 Laravel 构建的急速扩容的一方 WebSocket 服务器",
          "en-US": "A first-party WebSocket server for Laravel applications"
        },
        "url": "https://reverb.laravel.com/"
      },
      {
        "id": "rubocop",
        "name": "rubocop",
        "files": {
          "light": "rubocop-light.svg",
          "dark": "rubocop-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "Ruby 静态代码分析器和格式化工具",
          "en-US": "A Ruby static code analyzer and formatter"
        },
        "url": "https://rubocop.org/"
      },
      {
        "id": "windmill",
        "name": "windmill",
        "files": {
          "light": "windmill-light.svg",
          "dark": "windmill-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "开源的开发者平台和工作流引擎用于内部工具",
          "en-US": "Open-source developer platform and workflow engine for internal tools"
        },
        "url": "https://www.windmill.dev/"
      },
      {
        "id": "expressjs",
        "name": "expressjs",
        "files": {
          "light": "expressjs-light.svg",
          "dark": "expressjs-dark.svg"
        },
        "category": "Backend - Frameworks - JS/TS",
        "description": {
          "zh-CN": "Express.js (别名)",
          "en-US": "Express.js (Alias)"
        },
        "url": "https://expressjs.com/"
      }
    ],
    "Backend - Frameworks - Python": [
      {
        "id": "django",
        "name": "django",
        "files": {
          "light": "django.svg",
          "dark": "django.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "用于开发 Web 快速和整洁的应用程序的高级 Python Web 框架",
          "en-US": "A high-level Python web framework that encourages rapid development and clean, pragmatic design"
        },
        "url": "https://www.djangoproject.com/"
      },
      {
        "id": "flask",
        "name": "flask",
        "files": {
          "light": "flask.svg",
          "dark": "flask.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "Python 的轻量级 WSGI Web 应用框架",
          "en-US": "A lightweight WSGI web application framework"
        },
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "id": "fastapi",
        "name": "fastapi",
        "files": {
          "light": "fastapi.svg",
          "dark": "fastapi.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "基于标准 Python 类型提示的高性能 Web 框架，用于构建 API",
          "en-US": "A modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints"
        },
        "url": "https://fastapi.tiangolo.com/"
      },
      {
        "id": "litestar",
        "name": "litestar",
        "files": {
          "light": "litestar-light.svg",
          "dark": "litestar-dark.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "强大且灵活的高性能 ASGI Web 框架",
          "en-US": "Powerful, flexible, highly performant ASGI web framework"
        },
        "url": "https://litestar.dev/"
      },
      {
        "id": "sphinx",
        "name": "sphinx",
        "files": {
          "light": "sphinx-light.svg",
          "dark": "sphinx-dark.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "Python 文档生成器",
          "en-US": "A tool that makes it easy to create intelligent and beautiful documentation"
        },
        "url": "https://www.sphinx-doc.org/"
      },
      {
        "id": "djangorestframework",
        "name": "djangorestframework",
        "files": {
          "light": "djangorestframework-light.svg",
          "dark": "djangorestframework-dark.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "用于构建 Web API 的灵活强大的工具包",
          "en-US": "A powerful and flexible toolkit for building Web APIs"
        },
        "url": "https://www.django-rest-framework.org/"
      },
      {
        "id": "aiogram",
        "name": "aiogram",
        "files": {
          "light": "aiogram-light.svg",
          "dark": "aiogram-dark.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "基于 Asyncio 编写的具有完整类型支持的 Telegram Bot API 现代化框架",
          "en-US": "A modern and fully asynchronous framework for Telegram Bot API written in Python with asyncio and aiohttp"
        },
        "url": "https://aiogram.dev/"
      },
      {
        "id": "sqlalchemy",
        "name": "sqlalchemy",
        "files": {
          "light": "sqlalchemy-light.svg",
          "dark": "sqlalchemy-dark.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "Python 的 SQL 工具包和对象关系映射器 (ORM)",
          "en-US": "The Python SQL Toolkit and Object Relational Mapper"
        },
        "url": "https://www.sqlalchemy.org/"
      },
      {
        "id": "pypi",
        "name": "pypi",
        "files": {
          "light": "pypi.svg",
          "dark": "pypi.svg"
        },
        "category": "Backend - Frameworks - Python",
        "description": {
          "zh-CN": "Python 官方的第三方软件库包管理库",
          "en-US": "The Python Package Index (PyPI) is a repository of software for the Python programming language"
        },
        "url": "https://pypi.org/"
      }
    ],
    "Backend - Frameworks - Java/JVM": [
      {
        "id": "spring",
        "name": "spring",
        "files": {
          "light": "spring-light.svg",
          "dark": "spring-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "Java 平台的开源应用框架和控制反转容器实现",
          "en-US": "Provides a comprehensive programming and configuration model for modern Java-based enterprise applications"
        },
        "url": "https://spring.io/"
      },
      {
        "id": "quarkus",
        "name": "quarkus",
        "files": {
          "light": "quarkus-light.svg",
          "dark": "quarkus-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "专为 OpenJDK 和 GraalVM 定制的 Kubernetes 原生 Java 栈",
          "en-US": "A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM"
        },
        "url": "https://quarkus.io/"
      },
      {
        "id": "ktor",
        "name": "ktor",
        "files": {
          "light": "ktor-light.svg",
          "dark": "ktor-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "用于创建异步客户端与服务器构建的框架",
          "en-US": "An asynchronous framework for creating microservices, web applications, and more"
        },
        "url": "https://ktor.io/"
      },
      {
        "id": "springbatch",
        "name": "springbatch",
        "files": {
          "light": "springbatch-light.svg",
          "dark": "springbatch-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "为开发健壮的批处理应用提供轻量级的全面框架",
          "en-US": "A lightweight, comprehensive batch framework designed to enable the development of robust batch applications"
        },
        "url": "https://spring.io/projects/spring-batch"
      },
      {
        "id": "springdatajpa",
        "name": "springdatajpa",
        "files": {
          "light": "springdatajpa-light.svg",
          "dark": "springdatajpa-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "提供基于 JPA 的存储库支持",
          "en-US": "Adds an extra layer of abstraction on the top of the JPA provider"
        },
        "url": "https://spring.io/projects/spring-data-jpa"
      },
      {
        "id": "springsecurity",
        "name": "springsecurity",
        "files": {
          "light": "springsecurity-light.svg",
          "dark": "springsecurity-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "提供身份验证、授权和保护以抵御常见攻击的服务",
          "en-US": "Provides authentication, authorization, and protection against common attacks"
        },
        "url": "https://spring.io/projects/spring-security"
      },
      {
        "id": "gradle",
        "name": "gradle",
        "files": {
          "light": "gradle-light.svg",
          "dark": "gradle-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "基于 Apache Ant 和 Apache Maven 概念的开源构建自动化系统",
          "en-US": "A build automation tool for multi-language software development"
        },
        "url": "https://gradle.org/"
      },
      {
        "id": "maven",
        "name": "maven",
        "files": {
          "light": "maven-light.svg",
          "dark": "maven-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "主要用于 Java 项目的软件项目管理和自动构建工具",
          "en-US": "A software project management and comprehension tool"
        },
        "url": "https://maven.apache.org/"
      },
      {
        "id": "kotlin",
        "name": "kotlin",
        "files": {
          "light": "kotlin-light.svg",
          "dark": "kotlin-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "Kotlin",
          "en-US": "Kotlin"
        },
        "url": "https://kotlinlang.org/"
      },
      {
        "id": "scala",
        "name": "scala",
        "files": {
          "light": "scala-light.svg",
          "dark": "scala-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "Scala",
          "en-US": "Scala"
        },
        "url": "https://www.scala-lang.org/"
      },
      {
        "id": "clojure",
        "name": "clojure",
        "files": {
          "light": "clojure-light.svg",
          "dark": "clojure-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "Lisp 家族的函数式编程语言",
          "en-US": "A robust, practical, and fast programming language"
        },
        "url": "https://clojure.org/"
      },
      {
        "id": "azul",
        "name": "azul",
        "files": {
          "light": "azul.svg",
          "dark": "azul.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "企业级的 Java 部署环境",
          "en-US": "Azul delivers massive scale & performance to Java"
        },
        "url": "https://www.azul.com/"
      },
      {
        "id": "grails",
        "name": "grails",
        "files": {
          "light": "grails.svg",
          "dark": "grails.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "基于 Groovy 的强大 Web 应用框架",
          "en-US": "A powerful web application framework based on the Groovy language"
        },
        "url": "https://grails.org/"
      },
      {
        "id": "querydsl",
        "name": "querydsl",
        "files": {
          "light": "querydsl-light.svg",
          "dark": "querydsl-dark.svg"
        },
        "category": "Backend - Frameworks - Java/JVM",
        "description": {
          "zh-CN": "建立静态类型 SQL 的类查询框架",
          "en-US": "A framework which enables the construction of statically typed SQL-like queries"
        },
        "url": "http://querydsl.com/"
      }
    ],
    "Backend - Frameworks - PHP": [
      {
        "id": "laravel",
        "name": "laravel",
        "files": {
          "light": "laravel-light.svg",
          "dark": "laravel-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "为 Web 工匠构建的 PHP 框架",
          "en-US": "The PHP Framework for Web Artisans"
        },
        "url": "https://laravel.com/"
      },
      {
        "id": "symfony",
        "name": "symfony",
        "files": {
          "light": "symfony-light.svg",
          "dark": "symfony-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "一组可重用的 PHP 组件和一个用于 Web 项目的 PHP 框架",
          "en-US": "A set of reusable PHP components and a PHP framework for web projects"
        },
        "url": "https://symfony.com/"
      },
      {
        "id": "codeigniter",
        "name": "codeigniter",
        "files": {
          "light": "codeigniter-light.svg",
          "dark": "codeigniter-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "专为需要简单而雅致的工具包创建功能齐全 Web 应用程序而构建的 PHP 框架",
          "en-US": "A powerful PHP framework with a very small footprint"
        },
        "url": "https://codeigniter.com/"
      },
      {
        "id": "joomla",
        "name": "joomla",
        "files": {
          "light": "joomla-light.svg",
          "dark": "joomla-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "开源内容管理系统",
          "en-US": "Free and open-source content management system"
        },
        "url": "https://www.joomla.org/"
      },
      {
        "id": "drupal",
        "name": "drupal",
        "files": {
          "light": "drupal-light.svg",
          "dark": "drupal-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "自由开源的 PHP 内容管理系统",
          "en-US": "Open source content management system"
        },
        "url": "https://www.drupal.org/"
      },
      {
        "id": "wordpress",
        "name": "wordpress",
        "files": {
          "light": "wordpress.svg",
          "dark": "wordpress.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "免费的开源内容管理系统",
          "en-US": "Free and open-source content management system"
        },
        "url": "https://wordpress.org/"
      },
      {
        "id": "filament",
        "name": "filament",
        "files": {
          "light": "filament.svg",
          "dark": "filament.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "包含 Laravel 优雅界面的美丽技术集合",
          "en-US": "A collection of beautiful full-stack components for Laravel"
        },
        "url": "https://filamentphp.com/"
      },
      {
        "id": "cashier",
        "name": "cashier",
        "files": {
          "light": "cashier.svg",
          "dark": "cashier.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "为 Stripe 和 Paddle 提供的订阅计费接口",
          "en-US": "An expressive, fluent interface to Stripe's and Paddle's subscription billing services"
        },
        "url": "https://laravel.com/docs/billing"
      },
      {
        "id": "horizon",
        "name": "horizon",
        "files": {
          "light": "horizon.svg",
          "dark": "horizon.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "Laravel 队列仪表板",
          "en-US": "A beautiful dashboard and code-driven configuration for your Laravel powered Redis queues"
        },
        "url": "https://laravel.com/docs/horizon"
      },
      {
        "id": "jetstream",
        "name": "jetstream",
        "files": {
          "light": "jetstream.svg",
          "dark": "jetstream.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "Laravel 应用程序启动套件",
          "en-US": "A beautifully designed application starter kit for Laravel"
        },
        "url": "https://jetstream.laravel.com/"
      },
      {
        "id": "laravelspark",
        "name": "laravelspark",
        "files": {
          "light": "laravelspark-light.svg",
          "dark": "laravelspark-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "Laravel 计费门户",
          "en-US": "A billing portal for Laravel applications"
        },
        "url": "https://spark.laravel.com/"
      },
      {
        "id": "octane",
        "name": "octane",
        "files": {
          "light": "octane.svg",
          "dark": "octane.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "提升 Laravel 性能的高性能应用程序服务器",
          "en-US": "Supercharge your application's performance by serving your application using high-powered application servers"
        },
        "url": "https://laravel.com/docs/octane"
      },
      {
        "id": "livewire",
        "name": "livewire",
        "files": {
          "light": "livewire-light.svg",
          "dark": "livewire-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "让构建动态 UI 变得简单的 Laravel 全栈框架",
          "en-US": "A full-stack framework for Laravel that makes building dynamic interfaces simple"
        },
        "url": "https://livewire.laravel.com/"
      },
      {
        "id": "vapor",
        "name": "vapor",
        "files": {
          "light": "vapor.svg",
          "dark": "vapor.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "由 AWS 驱动的无服务器部署平台",
          "en-US": "A serverless deployment platform for Laravel, powered by AWS"
        },
        "url": "https://vapor.laravel.com/"
      },
      {
        "id": "resend",
        "name": "resend",
        "files": {
          "light": "resend-light.svg",
          "dark": "resend-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "适合开发者的邮件 API",
          "en-US": "Email API for developers"
        },
        "url": "https://resend.com/"
      },
      {
        "id": "frankenphp",
        "name": "frankenphp",
        "files": {
          "light": "frankenphp-light.svg",
          "dark": "frankenphp-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "现代的 PHP 应用程序服务器",
          "en-US": "A modern PHP app server"
        },
        "url": "https://frankenphp.dev/"
      },
      {
        "id": "fresh",
        "name": "fresh",
        "files": {
          "light": "fresh-light.svg",
          "dark": "fresh-dark.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "专为 Deno 打造的 Web 框架",
          "en-US": "The next-gen web framework for Deno"
        },
        "url": "https://fresh.deno.dev/"
      },
      {
        "id": "herd",
        "name": "herd",
        "files": {
          "light": "herd.svg",
          "dark": "herd.svg"
        },
        "category": "Backend - Frameworks - PHP",
        "description": {
          "zh-CN": "用于 macOS 和 Windows 的闪电般快速的 Laravel 和 PHP 开发环境",
          "en-US": "Blazing fast, native Laravel and PHP development environment"
        },
        "url": "https://herd.laravel.com/"
      }
    ],
    "Backend - Frameworks - Go": [
      {
        "id": "gin",
        "name": "gin",
        "files": {
          "light": "gin-light.svg",
          "dark": "gin-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "用 Go 编写的 HTTP Web 框架",
          "en-US": "HTTP web framework written in Go (Golang)"
        },
        "url": "https://gin-gonic.com/"
      },
      {
        "id": "echo",
        "name": "echo",
        "files": {
          "light": "echo.svg",
          "dark": "echo.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "高性能、极简的 Go Web 框架",
          "en-US": "High performance, minimalist Go web framework"
        },
        "url": "https://echo.labstack.com/"
      },
      {
        "id": "fiber",
        "name": "fiber",
        "files": {
          "light": "fiber-light.svg",
          "dark": "fiber-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "受 Express 启发，基于 Fasthttp 构建的 Web 框架",
          "en-US": "An Express inspired web framework built on top of Fasthttp"
        },
        "url": "https://gofiber.io/"
      },
      {
        "id": "wails",
        "name": "wails",
        "files": {
          "light": "wails-light.svg",
          "dark": "wails-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "使用 Go 和 Web 技术构建桌面应用程序",
          "en-US": "Build desktop applications using Go & Web Technologies"
        },
        "url": "https://wails.io/"
      },
      {
        "id": "hugo",
        "name": "hugo",
        "files": {
          "light": "hugo-light.svg",
          "dark": "hugo-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "世界上最快的构建网站的框架",
          "en-US": "The world’s fastest framework for building websites"
        },
        "url": "https://gohugo.io/"
      },
      {
        "id": "gorm",
        "name": "gorm",
        "files": {
          "light": "gorm-light.svg",
          "dark": "gorm-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "Golang 优秀的 ORM 库",
          "en-US": "The fantastic ORM library for Golang"
        },
        "url": "https://gorm.io/"
      },
      {
        "id": "chi",
        "name": "chi",
        "files": {
          "light": "chi-light.svg",
          "dark": "chi-dark.svg"
        },
        "category": "Backend - Frameworks - Go",
        "description": {
          "zh-CN": "轻量级、惯用的、可组合的 Go HTTP 路由",
          "en-US": "A lightweight, idiomatic and composable router for building Go HTTP services"
        },
        "url": "https://go-chi.io/"
      }
    ],
    "Backend - Frameworks - Rust": [
      {
        "id": "actix",
        "name": "actix",
        "files": {
          "light": "actix-light.svg",
          "dark": "actix-dark.svg"
        },
        "category": "Backend - Frameworks - Rust",
        "description": {
          "zh-CN": "强大、实用且速度极快的 Rust Web 框架",
          "en-US": "A powerful, pragmatic, and extremely fast web framework for Rust"
        },
        "url": "https://actix.rs/"
      },
      {
        "id": "rocket",
        "name": "rocket",
        "files": {
          "light": "rocket.svg",
          "dark": "rocket.svg"
        },
        "category": "Backend - Frameworks - Rust",
        "description": {
          "zh-CN": "Rust 的 Web 框架，专注于易用性、表达力和速度",
          "en-US": "A web framework for Rust that makes it simple to write fast, secure web applications"
        },
        "url": "https://rocket.rs/"
      },
      {
        "id": "tauri",
        "name": "tauri",
        "files": {
          "light": "tauri-light.svg",
          "dark": "tauri-dark.svg"
        },
        "category": "Backend - Frameworks - Rust",
        "description": {
          "zh-CN": "使用 Web 技术构建更小、更快的桌面和移动跨端应用",
          "en-US": "Build smaller, faster, and more secure desktop applications with a web frontend"
        },
        "url": "https://tauri.app/"
      },
      {
        "id": "tokiors",
        "name": "tokiors",
        "files": {
          "light": "tokiors-light.svg",
          "dark": "tokiors-dark.svg"
        },
        "category": "Backend - Frameworks - Rust",
        "description": {
          "zh-CN": "使用 Rust 编写的异步运行时",
          "en-US": "An asynchronous run-time for the Rust programming language"
        },
        "url": "https://tokio.rs/"
      },
      {
        "id": "yew",
        "name": "yew",
        "files": {
          "light": "yew-light.svg",
          "dark": "yew-dark.svg"
        },
        "category": "Backend - Frameworks - Rust",
        "description": {
          "zh-CN": "用于创建多线程前端 Web 应用程序的 Rust 现代框架",
          "en-US": "A modern Rust framework for creating multi-threaded front-end web apps with WebAssembly"
        },
        "url": "https://yew.rs/"
      }
    ],
    "Backend - Frameworks - C#/.NET": [
      {
        "id": "dotnet",
        "name": "dotnet",
        "files": {
          "light": "dotnet.svg",
          "dark": "dotnet.svg"
        },
        "category": "Backend - Frameworks - C#/.NET",
        "description": {
          "zh-CN": ".NET",
          "en-US": ".NET"
        },
        "url": "https://dotnet.microsoft.com/"
      },
      {
        "id": "blazor",
        "name": "blazor",
        "files": {
          "light": "blazor-light.svg",
          "dark": "blazor-dark.svg"
        },
        "category": "Backend - Frameworks - C#/.NET",
        "description": {
          "zh-CN": "用于使用 .NET 的交互式客户端 Web UI 框架",
          "en-US": "An interactive web UI framework with .NET"
        },
        "url": "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
      },
      {
        "id": "unity",
        "name": "unity",
        "files": {
          "light": "unity-light.svg",
          "dark": "unity-dark.svg"
        },
        "category": "Backend - Frameworks - C#/.NET",
        "description": {
          "zh-CN": "领先的实时 3D 内容创作平台",
          "en-US": "The world’s leading platform for creating and operating interactive, real-time 3D content"
        },
        "url": "https://unity.com/"
      },
      {
        "id": "avaloniaui",
        "name": "avaloniaui",
        "files": {
          "light": "avaloniaui.svg",
          "dark": "avaloniaui.svg"
        },
        "category": "Backend - Frameworks - C#/.NET",
        "description": {
          "zh-CN": "跨平台的基于 XAML 的 .NET UI 框架",
          "en-US": "A cross-platform XAML-based UI framework for .NET"
        },
        "url": "https://avaloniaui.net/"
      }
    ],
    "Backend - Frameworks - Ruby": [
      {
        "id": "rails",
        "name": "rails",
        "files": {
          "light": "rails.svg",
          "dark": "rails.svg"
        },
        "category": "Backend - Frameworks - Ruby",
        "description": {
          "zh-CN": "一个基于 MVC 模式开发带有数据库的 Web 应用程序框架",
          "en-US": "A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern"
        },
        "url": "https://rubyonrails.org/"
      }
    ],
    "Backend - Database & API": [
      {
        "id": "graphql",
        "name": "graphql",
        "files": {
          "light": "graphql-light.svg",
          "dark": "graphql-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "API 查询语言以及通过现有数据来完成这些查询的运行时",
          "en-US": "A query language for APIs and a runtime for fulfilling those queries with your existing data"
        },
        "url": "https://graphql.org/"
      },
      {
        "id": "apollo",
        "name": "apollo",
        "files": {
          "light": "apollo.svg",
          "dark": "apollo.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "GraphQL API 和开发者工具",
          "en-US": "The graph API and developer tools"
        },
        "url": "https://www.apollographql.com/"
      },
      {
        "id": "trpc",
        "name": "trpc",
        "files": {
          "light": "trpc.svg",
          "dark": "trpc.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "无需代码生成的端到端类型安全 API",
          "en-US": "End-to-end typesafe APIs made easy"
        },
        "url": "https://trpc.io/"
      },
      {
        "id": "prisma",
        "name": "prisma",
        "files": {
          "light": "prisma.svg",
          "dark": "prisma.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "Node.js 和 TypeScript 的下一代 ORM",
          "en-US": "Next-generation ORM for Node.js & TypeScript"
        },
        "url": "https://www.prisma.io/"
      },
      {
        "id": "sequelize",
        "name": "sequelize",
        "files": {
          "light": "sequelize-light.svg",
          "dark": "sequelize-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "适用于现代 Node.js 和 TypeScript 的功能丰富的 ORM",
          "en-US": "Feature-rich ORM for modern Node.js and TypeScript"
        },
        "url": "https://sequelize.org/"
      },
      {
        "id": "typeorm",
        "name": "typeorm",
        "files": {
          "light": "typeorm-light.svg",
          "dark": "typeorm-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于 TypeScript 和 JavaScript 的 ORM",
          "en-US": "ORM for TypeScript and JavaScript"
        },
        "url": "https://typeorm.io/"
      },
      {
        "id": "mongoose",
        "name": "mongoose",
        "files": {
          "light": "mongoose.svg",
          "dark": "mongoose.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于 Node.js 的优雅的 MongoDB 对象建模工具",
          "en-US": "Elegant MongoDB object modeling for Node.js"
        },
        "url": "https://mongoosejs.com/"
      },
      {
        "id": "supabase",
        "name": "supabase",
        "files": {
          "light": "supabase-light.svg",
          "dark": "supabase-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "开源的 Firebase 替代方案",
          "en-US": "The open source Firebase alternative"
        },
        "url": "https://supabase.com/"
      },
      {
        "id": "firebase",
        "name": "firebase",
        "files": {
          "light": "firebase-light.svg",
          "dark": "firebase-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "帮助您构建和发展用户喜爱的应用和游戏的应用开发平台",
          "en-US": "App development platform that helps you build and grow apps and games users love"
        },
        "url": "https://firebase.google.com/"
      },
      {
        "id": "appwrite",
        "name": "appwrite",
        "files": {
          "light": "appwrite-light.svg",
          "dark": "appwrite-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "开源后端即服务平台",
          "en-US": "Open-source backend-as-a-service platform"
        },
        "url": "https://appwrite.io/"
      },
      {
        "id": "pocketbase",
        "name": "pocketbase",
        "files": {
          "light": "pocketbase-light.svg",
          "dark": "pocketbase-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "一个文件中的开源后端，适用于您的下一个 SaaS 和移动应用",
          "en-US": "Open Source backend for your next SaaS and Mobile app in 1 file"
        },
        "url": "https://pocketbase.io/"
      },
      {
        "id": "strapi",
        "name": "strapi",
        "files": {
          "light": "strapi.svg",
          "dark": "strapi.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "领先的开源无头 CMS",
          "en-US": "The leading open-source headless CMS"
        },
        "url": "https://strapi.io/"
      },
      {
        "id": "directus",
        "name": "directus",
        "files": {
          "light": "directus.svg",
          "dark": "directus.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "开放数据平台",
          "en-US": "Open Data Platform"
        },
        "url": "https://directus.io/"
      },
      {
        "id": "payload",
        "name": "payload",
        "files": {
          "light": "payload-light.svg",
          "dark": "payload-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "现代化的开源无头 CMS",
          "en-US": "The modern, open-source Headless CMS"
        },
        "url": "https://payloadcms.com/"
      },
      {
        "id": "dremio",
        "name": "dremio",
        "files": {
          "light": "dremio.svg",
          "dark": "dremio.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "数据湖仓平台",
          "en-US": "The data lakehouse platform"
        },
        "url": "https://www.dremio.com/"
      },
      {
        "id": "duckdb",
        "name": "duckdb",
        "files": {
          "light": "duckdb.svg",
          "dark": "duckdb.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "进程内 SQL OLAP 数据库管理系统",
          "en-US": "An in-process SQL OLAP database management system"
        },
        "url": "https://duckdb.org/"
      },
      {
        "id": "swagger",
        "name": "swagger",
        "files": {
          "light": "swagger-light.svg",
          "dark": "swagger-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "面向所有人的 API 开发工具",
          "en-US": "API development for everyone"
        },
        "url": "https://swagger.io/"
      },
      {
        "id": "postman",
        "name": "postman",
        "files": {
          "light": "postman.svg",
          "dark": "postman.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于构建和使用 API 的平台",
          "en-US": "An API platform for building and using APIs"
        },
        "url": "https://www.postman.com/"
      },
      {
        "id": "insomnia",
        "name": "insomnia",
        "files": {
          "light": "insomnia.svg",
          "dark": "insomnia.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于 GraphQL、REST 和 gRPC 的开源跨平台 API 客户端",
          "en-US": "The open-source, cross-platform API client for GraphQL, REST, and gRPC"
        },
        "url": "https://insomnia.rest/"
      },
      {
        "id": "api",
        "name": "api",
        "files": {
          "light": "api-light.svg",
          "dark": "api-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "应用程序编程接口（API）",
          "en-US": "Application Programming Interface"
        },
        "url": "#"
      },
      {
        "id": "apigateway",
        "name": "apigateway",
        "files": {
          "light": "apigateway.svg",
          "dark": "apigateway.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于统一路由、鉴权和管理 API 的网关模式",
          "en-US": "Gateway pattern for routing, securing, and managing APIs"
        },
        "url": "#"
      },
      {
        "id": "grpc",
        "name": "grpc",
        "files": {
          "light": "grpc-light.svg",
          "dark": "grpc-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "高性能、开源的通用 RPC 框架",
          "en-US": "A high-performance, open source universal RPC framework"
        },
        "url": "https://grpc.io/"
      },
      {
        "id": "jwt",
        "name": "jwt",
        "files": {
          "light": "jwt-light.svg",
          "dark": "jwt-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于在两方之间安全表示声明的开放的行业标准 (RFC 7519)",
          "en-US": "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties"
        },
        "url": "https://jwt.io/"
      },
      {
        "id": "gorm",
        "name": "gorm",
        "files": {
          "light": "gorm-light.svg",
          "dark": "gorm-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "Golang 优秀的 ORM 库",
          "en-US": "The fantastic ORM library for Golang"
        },
        "url": "https://gorm.io/"
      },
      {
        "id": "hibernate",
        "name": "hibernate",
        "files": {
          "light": "hibernate-light.svg",
          "dark": "hibernate-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "用于 Java 环境的对象关系映射系统",
          "en-US": "Idiomatic persistence for Java and relational databases"
        },
        "url": "https://hibernate.org/"
      },
      {
        "id": "doctrine",
        "name": "doctrine",
        "files": {
          "light": "doctrine-light.svg",
          "dark": "doctrine-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "主要专注于提供持久化服务和相关功能的 PHP 库的集合",
          "en-US": "The Doctrine Project is a set of PHP libraries primarily focused on providing persistence services and related functionality"
        },
        "url": "https://www.doctrine-project.org/"
      },
      {
        "id": "pydantic",
        "name": "pydantic",
        "files": {
          "light": "pydantic-light.svg",
          "dark": "pydantic-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "使用 Python 类型提示进行数据验证的库",
          "en-US": "Data validation and settings management using Python type hints"
        },
        "url": "https://docs.pydantic.dev/"
      },
      {
        "id": "rabbitmq",
        "name": "rabbitmq",
        "files": {
          "light": "rabbitmq-light.svg",
          "dark": "rabbitmq-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "部署最广泛的开源消息代理",
          "en-US": "The most widely deployed open source message broker"
        },
        "url": "https://www.rabbitmq.com/"
      },
      {
        "id": "kafka",
        "name": "kafka",
        "files": {
          "light": "kafka.svg",
          "dark": "kafka.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "开源分布式事件流平台",
          "en-US": "Open-source distributed event streaming platform"
        },
        "url": "https://kafka.apache.org/"
      },
      {
        "id": "redis",
        "name": "redis",
        "files": {
          "light": "redis-light.svg",
          "dark": "redis-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "开源的内存数据存储",
          "en-US": "The open source, in-memory data store"
        },
        "url": "https://redis.io/"
      },
      {
        "id": "elasticsearch",
        "name": "elasticsearch",
        "files": {
          "light": "elasticsearch-light.svg",
          "dark": "elasticsearch-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "分布式、RESTful 风格的搜索和分析引擎",
          "en-US": "A distributed, RESTful search and analytics engine"
        },
        "url": "https://www.elastic.co/elasticsearch/"
      },
      {
        "id": "celery",
        "name": "celery",
        "files": {
          "light": "celery-light.svg",
          "dark": "celery-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "分布式任务队列",
          "en-US": "Distributed Task Queue"
        },
        "url": "https://docs.celeryq.dev/"
      },
      {
        "id": "airflow",
        "name": "airflow",
        "files": {
          "light": "airflow-light.svg",
          "dark": "airflow-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "以编程方式编写、调度和监控工作流的平台",
          "en-US": "Platform to programmatically author, schedule, and monitor workflows"
        },
        "url": "https://airflow.apache.org/"
      },
      {
        "id": "seata",
        "name": "seata",
        "files": {
          "light": "seata-light.svg",
          "dark": "seata-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "易于使用的高性能开源分布式事务解决方案",
          "en-US": "Easy-to-use, high-performance, open source distributed transaction solution"
        },
        "url": "https://seata.io/"
      },
      {
        "id": "rocketmq",
        "name": "rocketmq",
        "files": {
          "light": "rocketmq-light.svg",
          "dark": "rocketmq-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "云原生的消息和流处理平台",
          "en-US": "A cloud native messaging and streaming platform"
        },
        "url": "https://rocketmq.apache.org/"
      },
      {
        "id": "tomcat",
        "name": "tomcat",
        "files": {
          "light": "tomcat-light.svg",
          "dark": "tomcat-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "Java Servlet, JSP 等技术的开源实现",
          "en-US": "The Apache Tomcat® software is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies"
        },
        "url": "https://tomcat.apache.org/"
      },
      {
        "id": "websocket",
        "name": "websocket",
        "files": {
          "light": "websocket-light.svg",
          "dark": "websocket-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "在用户浏览器和服务器之间打开双向交互式通信会话的 API",
          "en-US": "API that makes it possible to open a two-way interactive communication session between the user's browser and a server"
        },
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
      },
      {
        "id": "yii",
        "name": "yii",
        "files": {
          "light": "yii-light.svg",
          "dark": "yii-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "快速、安全和高效的 PHP 框架",
          "en-US": "Fast, secure, and efficient PHP framework"
        },
        "url": "https://www.yiiframework.com/"
      },
      {
        "id": "plsql",
        "name": "plsql",
        "files": {
          "light": "plsql-light.svg",
          "dark": "plsql-dark.svg"
        },
        "category": "Backend - Database & API",
        "description": {
          "zh-CN": "SQL 的过程语言扩展",
          "en-US": "Procedural Language extensions to SQL"
        },
        "url": "https://www.oracle.com/database/technologies/appdev/plsql.html"
      }
    ],
    "Cloud - Web Servers": [
      {
        "id": "nginx",
        "name": "nginx",
        "files": {
          "light": "nginx.svg",
          "dark": "nginx.svg"
        },
        "category": "Cloud - Web Servers",
        "description": {
          "zh-CN": "高性能 HTTP 和反向代理服务器",
          "en-US": "High-performance HTTP server and reverse proxy"
        },
        "url": "https://www.nginx.com/"
      },
      {
        "id": "apache",
        "name": "apache",
        "files": {
          "light": "apache-light.svg",
          "dark": "apache-dark.svg"
        },
        "category": "Cloud - Web Servers",
        "description": {
          "zh-CN": "世界上最流行的 Web 服务器软件",
          "en-US": "Apache HTTP Server Project"
        },
        "url": "https://httpd.apache.org/"
      },
      {
        "id": "caddy",
        "name": "caddy",
        "files": {
          "light": "caddy-light.svg",
          "dark": "caddy-dark.svg"
        },
        "category": "Cloud - Web Servers",
        "description": {
          "zh-CN": "具有自动 HTTPS 功能的企业级开源 Web 服务器",
          "en-US": "The ultimate server for the ultimate site"
        },
        "url": "https://caddyserver.com/"
      },
      {
        "id": "tomcat",
        "name": "tomcat",
        "files": {
          "light": "tomcat-light.svg",
          "dark": "tomcat-dark.svg"
        },
        "category": "Cloud - Web Servers",
        "description": {
          "zh-CN": "Java Servlet 的开源实现",
          "en-US": "Apache Tomcat application server"
        },
        "url": "https://tomcat.apache.org/"
      },
      {
        "id": "celerdata",
        "name": "celerdata",
        "files": {
          "light": "celerdata-light.svg",
          "dark": "celerdata-dark.svg"
        },
        "category": "Cloud - Web Servers",
        "description": {
          "zh-CN": "基于 StarRocks 构建的分析型数据库服务",
          "en-US": "Open source analytical database"
        },
        "url": "https://www.celerdata.com/"
      }
    ],
    "Cloud Providers": [
      {
        "id": "aws",
        "name": "aws",
        "files": {
          "light": "aws-light.svg",
          "dark": "aws-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "全面且广泛采用的云平台",
          "en-US": "Amazon Web Services (AWS) comprehensive and broadly adopted cloud platform"
        },
        "url": "https://aws.amazon.com/"
      },
      {
        "id": "gcp",
        "name": "gcp",
        "files": {
          "light": "gcp-light.svg",
          "dark": "gcp-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "Google 提供的云计算服务套件",
          "en-US": "Google Cloud Platform (GCP) suite of cloud computing services"
        },
        "url": "https://cloud.google.com/"
      },
      {
        "id": "azure",
        "name": "azure",
        "files": {
          "light": "azure-light.svg",
          "dark": "azure-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "微软创建的云计算服务",
          "en-US": "Microsoft Azure cloud computing service created by Microsoft"
        },
        "url": "https://azure.microsoft.com/"
      },
      {
        "id": "digitalocean",
        "name": "digitalocean",
        "files": {
          "light": "digitalocean-light.svg",
          "dark": "digitalocean-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "面向开发者的云计算供应商",
          "en-US": "DigitalOcean Cloud computing vendor"
        },
        "url": "https://www.digitalocean.com/"
      },
      {
        "id": "heroku",
        "name": "heroku",
        "files": {
          "light": "heroku.svg",
          "dark": "heroku.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "支持多种编程语言的云平台即服务 (PaaS)",
          "en-US": "Heroku Platform as a service (PaaS)"
        },
        "url": "https://www.heroku.com/"
      },
      {
        "id": "vercel",
        "name": "vercel",
        "files": {
          "light": "vercel-light.svg",
          "dark": "vercel-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "面向前端开发者的平台，适用于静态站点和前端框架",
          "en-US": "Vercel Next.js platform"
        },
        "url": "https://vercel.com/"
      },
      {
        "id": "netlify",
        "name": "netlify",
        "files": {
          "light": "netlify-light.svg",
          "dark": "netlify-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "提供静态网站托管和无服务器后端服务的平台",
          "en-US": "Netlify Web development platform"
        },
        "url": "https://www.netlify.com/"
      },
      {
        "id": "cloudflare",
        "name": "cloudflare",
        "files": {
          "light": "cloudflare-light.svg",
          "dark": "cloudflare-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "提供内容交付网络 (CDN)、DDoS 缓解等服务的公司",
          "en-US": "Cloudflare Web performance and security company"
        },
        "url": "https://www.cloudflare.com/"
      },
      {
        "id": "railway",
        "name": "railway",
        "files": {
          "light": "railway-light.svg",
          "dark": "railway-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "帮助开发者在几分钟内推送、构建和部署应用的平台",
          "en-US": "Railway Infrastructure platform"
        },
        "url": "https://railway.app/"
      },
      {
        "id": "render",
        "name": "render",
        "files": {
          "light": "render-light.svg",
          "dark": "render-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "用于构建和运行所有应用和网站的统一云平台",
          "en-US": "Render unified cloud to build and run all your apps and websites"
        },
        "url": "https://render.com/"
      },
      {
        "id": "flyio",
        "name": "flyio",
        "files": {
          "light": "flyio.svg",
          "dark": "flyio.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "Fly.io (别名)",
          "en-US": "Fly.io (Alias)"
        },
        "url": "https://fly.io/"
      },
      {
        "id": "openstack",
        "name": "openstack",
        "files": {
          "light": "openstack-light.svg",
          "dark": "openstack-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "用于云计算的开源软件平台",
          "en-US": "OpenStack Open-source software platform for cloud computing"
        },
        "url": "https://www.openstack.org/"
      },
      {
        "id": "s3",
        "name": "s3",
        "files": {
          "light": "s3-light.svg",
          "dark": "s3-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "对象存储服务 (Amazon S3)",
          "en-US": "Amazon S3 Object storage built to retrieve any amount of data from anywhere"
        },
        "url": "https://aws.amazon.com/s3/"
      },
      {
        "id": "rds",
        "name": "rds",
        "files": {
          "light": "rds.svg",
          "dark": "rds.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "托管式关系数据库服务 (Amazon RDS)",
          "en-US": "Amazon RDS Set up, operate, and scale a relational database in the cloud"
        },
        "url": "https://aws.amazon.com/rds/"
      },
      {
        "id": "sqs",
        "name": "sqs",
        "files": {
          "light": "sqs.svg",
          "dark": "sqs.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "完全托管的消息队列服务 (Amazon SQS)",
          "en-US": "Amazon SQS Fully managed message queuing for microservices, distributed systems, and serverless applications"
        },
        "url": "https://aws.amazon.com/sqs/"
      },
      {
        "id": "ec2",
        "name": "ec2",
        "files": {
          "light": "ec2.svg",
          "dark": "ec2.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "提供可调整的云端计算能力 (Amazon EC2)",
          "en-US": "Amazon EC2 Secure and resizable compute capacity in the cloud"
        },
        "url": "https://aws.amazon.com/ec2/"
      },
      {
        "id": "ecr",
        "name": "ecr",
        "files": {
          "light": "ecr.svg",
          "dark": "ecr.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "完全托管的容器镜像注册表 (Amazon ECR)",
          "en-US": "Amazon ECR Fully managed container registry"
        },
        "url": "https://aws.amazon.com/ecr/"
      },
      {
        "id": "ecs",
        "name": "ecs",
        "files": {
          "light": "ecs.svg",
          "dark": "ecs.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "高度安全、可靠且可扩展的运行容器的方式 (Amazon ECS)",
          "en-US": "Amazon ECS Highly secure, reliable, and scalable way to run containers"
        },
        "url": "https://aws.amazon.com/ecs/"
      },
      {
        "id": "eks",
        "name": "eks",
        "files": {
          "light": "eks.svg",
          "dark": "eks.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "启动、运行和扩展 Kubernetes 的托管服务 (Amazon EKS)",
          "en-US": "Amazon EKS The most trusted way to start, run, and scale Kubernetes"
        },
        "url": "https://aws.amazon.com/eks/"
      },
      {
        "id": "elasticbeanstalk",
        "name": "elasticbeanstalk",
        "files": {
          "light": "elasticbeanstalk.svg",
          "dark": "elasticbeanstalk.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "用于部署和扩展 Web 应用程序和服务的易于使用的服务",
          "en-US": "AWS Elastic Beanstalk Easy-to-use service for deploying and scaling web applications and services"
        },
        "url": "https://aws.amazon.com/elasticbeanstalk/"
      },
      {
        "id": "elb",
        "name": "elb",
        "files": {
          "light": "elb.svg",
          "dark": "elb.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "自动在多个目标分配传入的应用程序流量 (AWS ELB)",
          "en-US": "AWS ELB Automatically distributes incoming application traffic across multiple targets"
        },
        "url": "https://aws.amazon.com/elasticloadbalancing/"
      },
      {
        "id": "emr",
        "name": "emr",
        "files": {
          "light": "emr.svg",
          "dark": "emr.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "云大数据平台 (Amazon EMR)",
          "en-US": "Amazon EMR Cloud big data platform for processing vast amounts of data using open source tools"
        },
        "url": "https://aws.amazon.com/emr/"
      },
      {
        "id": "eventbridge",
        "name": "eventbridge",
        "files": {
          "light": "eventbridge.svg",
          "dark": "eventbridge.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "无服务器事件总线 (Amazon EventBridge)",
          "en-US": "Amazon EventBridge Serverless event bus that makes it easier to build event-driven applications at scale"
        },
        "url": "https://aws.amazon.com/eventbridge/"
      },
      {
        "id": "fargate",
        "name": "fargate",
        "files": {
          "light": "fargate.svg",
          "dark": "fargate.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "为容器提供的无服务器计算 (AWS Fargate)",
          "en-US": "AWS Fargate Serverless compute for containers"
        },
        "url": "https://aws.amazon.com/fargate/"
      },
      {
        "id": "cloudformation",
        "name": "cloudformation",
        "files": {
          "light": "cloudformation.svg",
          "dark": "cloudformation.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "使用基础设施即代码加快云预置速度",
          "en-US": "AWS CloudFormation Speed up cloud provisioning with infrastructure as code"
        },
        "url": "https://aws.amazon.com/cloudformation/"
      },
      {
        "id": "cloudfront",
        "name": "cloudfront",
        "files": {
          "light": "cloudfront-light.svg",
          "dark": "cloudfront-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "快速、高度安全且可编程的内容分发网络 (CDN)",
          "en-US": "Amazon CloudFront Fast, highly secure and programmable content delivery network (CDN)"
        },
        "url": "https://aws.amazon.com/cloudfront/"
      },
      {
        "id": "cloudwatch",
        "name": "cloudwatch",
        "files": {
          "light": "cloudwatch.svg",
          "dark": "cloudwatch.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "AWS 资源和应用程序的可观测性服务",
          "en-US": "Amazon CloudWatch Observability of your AWS resources and applications"
        },
        "url": "https://aws.amazon.com/cloudwatch/"
      },
      {
        "id": "amplify",
        "name": "amplify",
        "files": {
          "light": "amplify.svg",
          "dark": "amplify.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "用于构建全栈 Web 和移动应用程序的一套工具和服务",
          "en-US": "AWS Amplify A set of tools and services that can be used to build scalable full stack applications"
        },
        "url": "https://aws.amazon.com/amplify/"
      },
      {
        "id": "ses",
        "name": "ses",
        "files": {
          "light": "ses.svg",
          "dark": "ses.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "Amazon 简单电子邮件服务 (SES)",
          "en-US": "Amazon SES High-scale inbound and outbound cloud email service"
        },
        "url": "https://aws.amazon.com/ses/"
      },
      {
        "id": "aurora",
        "name": "aurora",
        "files": {
          "light": "aurora.svg",
          "dark": "aurora.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "专为云打造的关系数据库 (Amazon Aurora)",
          "en-US": "Amazon Aurora Relational database built for the cloud"
        },
        "url": "https://aws.amazon.com/rds/aurora/"
      },
      {
        "id": "apigateway",
        "name": "apigateway",
        "files": {
          "light": "apigateway.svg",
          "dark": "apigateway.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "Amazon API 网关",
          "en-US": "Amazon API Gateway Fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs"
        },
        "url": "https://aws.amazon.com/api-gateway/"
      },
      {
        "id": "appactive",
        "name": "appactive",
        "files": {
          "light": "appactive-light.svg",
          "dark": "appactive-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "应用多活的开源中间件",
          "en-US": "AppActive is an open source multi-active middleware"
        },
        "url": "https://appactive.io/"
      },
      {
        "id": "neon",
        "name": "neon",
        "files": {
          "light": "neon-light.svg",
          "dark": "neon-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "无服务器 Postgres 数据库",
          "en-US": "Serverless Postgres database"
        },
        "url": "https://neon.tech/"
      },
      {
        "id": "planetscale",
        "name": "planetscale",
        "files": {
          "light": "planetscale-light.svg",
          "dark": "planetscale-dark.svg"
        },
        "category": "Cloud Providers",
        "description": {
          "zh-CN": "与 MySQL 兼容的无服务器数据库平台",
          "en-US": "The advanced Serverless MySQL Platform"
        },
        "url": "https://planetscale.com/"
      }
    ],
    "DevOps - Git & SCM": [
      {
        "id": "git",
        "name": "git",
        "files": {
          "light": "git-light.svg",
          "dark": "git-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "分布式版本控制系统",
          "en-US": "Free and open source distributed version control system"
        },
        "url": "https://git-scm.com/"
      },
      {
        "id": "gitbash",
        "name": "gitbash",
        "files": {
          "light": "gitbash-light.svg",
          "dark": "gitbash-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "为 Windows 提供 Git 命令行体验",
          "en-US": "Git Bash brings a command line experience to Windows"
        },
        "url": "https://gitforwindows.org/"
      },
      {
        "id": "gitea",
        "name": "gitea",
        "files": {
          "light": "gitea-light.svg",
          "dark": "gitea-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "通过 Go 编写的代码托管与版本控制 Git 服务平台",
          "en-US": "A painless self-hosted Git service"
        },
        "url": "https://gitea.io/"
      },
      {
        "id": "github",
        "name": "github",
        "files": {
          "light": "github-light.svg",
          "dark": "github-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "代码托管平台",
          "en-US": "A provider of Internet hosting for software development and version control using Git"
        },
        "url": "https://github.com/"
      },
      {
        "id": "githubdesktop",
        "name": "githubdesktop",
        "files": {
          "light": "githubdesktop-light.svg",
          "dark": "githubdesktop-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "GitHub 桌面版",
          "en-US": "Simple collaboration from your desktop"
        },
        "url": "https://desktop.github.com/"
      },
      {
        "id": "gitkraken",
        "name": "gitkraken",
        "files": {
          "light": "gitkraken-light.svg",
          "dark": "gitkraken-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "全平台的 Git 客户端工具",
          "en-US": "The legendary Git GUI client for Windows, Mac & Linux"
        },
        "url": "https://www.gitkraken.com/"
      },
      {
        "id": "gitlab",
        "name": "gitlab",
        "files": {
          "light": "gitlab-light.svg",
          "dark": "gitlab-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "基于网络的 Git 仓库管理工具",
          "en-US": "Web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration/continuous deployment pipeline features"
        },
        "url": "https://about.gitlab.com/"
      },
      {
        "id": "bitbucket",
        "name": "bitbucket",
        "files": {
          "light": "bitbucket-light.svg",
          "dark": "bitbucket-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "适用于团队的 Git 代码托管方案",
          "en-US": "Git code management"
        },
        "url": "https://bitbucket.org/"
      },
      {
        "id": "azuredevops",
        "name": "azuredevops",
        "files": {
          "light": "azuredevops-light.svg",
          "dark": "azuredevops-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "提供版本控制、项目管理、自动化构建等服务的云平台",
          "en-US": "Plan, build, and deploy apps using DevOps tools"
        },
        "url": "https://azure.microsoft.com/en-us/products/devops/"
      },
      {
        "id": "githubcopilot",
        "name": "githubcopilot",
        "files": {
          "light": "githubcopilot-light.svg",
          "dark": "githubcopilot-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "AI 辅助编程工具",
          "en-US": "Your AI pair programmer"
        },
        "url": "https://github.com/features/copilot"
      },
      {
        "id": "githubpages",
        "name": "githubpages",
        "files": {
          "light": "githubpages-light.svg",
          "dark": "githubpages-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "直接从 GitHub 存储库托管的静态网站",
          "en-US": "Websites for you and your projects, hosted directly from your GitHub repository"
        },
        "url": "https://pages.github.com/"
      },
      {
        "id": "githubactions",
        "name": "githubactions",
        "files": {
          "light": "githubactions-light.svg",
          "dark": "githubactions-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "使用 GitHub 持续集成和部署软件工作流",
          "en-US": "Automate your workflow from idea to production"
        },
        "url": "https://github.com/features/actions"
      },
      {
        "id": "forge",
        "name": "forge",
        "files": {
          "light": "forge.svg",
          "dark": "forge.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "用于在云端配置和部署 PHP 应用程序的服务器管理平台",
          "en-US": "Laravel Forge Server Management platform"
        },
        "url": "https://forge.laravel.com/"
      },
      {
        "id": "forgejo",
        "name": "forgejo",
        "files": {
          "light": "forgejo-light.svg",
          "dark": "forgejo-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "自主托管的轻量级软件铸造厂平台 (Gitea 的一个分支)",
          "en-US": "A self-hosted lightweight software forge"
        },
        "url": "https://forgejo.org/"
      },
      {
        "id": "codeberg",
        "name": "codeberg",
        "files": {
          "light": "codeberg-light.svg",
          "dark": "codeberg-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "为自由和开源项目提供的基于 Git 的云托管平台",
          "en-US": "A free collaborative software development platform"
        },
        "url": "https://codeberg.org/"
      },
      {
        "id": "svn",
        "name": "svn",
        "files": {
          "light": "svn.svg",
          "dark": "svn.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "集中的版本控制系统",
          "en-US": "Enterprise-class centralized version control for the masses"
        },
        "url": "https://subversion.apache.org/"
      },
      {
        "id": "breeze",
        "name": "breeze",
        "files": {
          "light": "breeze.svg",
          "dark": "breeze.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "简单的项目管理工具",
          "en-US": "Simple project management software"
        },
        "url": "https://www.breeze.pm/"
      },
      {
        "id": "chaosblade",
        "name": "chaosblade",
        "files": {
          "light": "chaosblade-light.svg",
          "dark": "chaosblade-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "简单易用的开源混沌工程实验工具",
          "en-US": "An easy to use and powerful chaos engineering experiment toolkit"
        },
        "url": "https://chaosblade.io/"
      },
      {
        "id": "graphite",
        "name": "graphite",
        "files": {
          "light": "graphite-light.svg",
          "dark": "graphite-dark.svg"
        },
        "category": "DevOps - Git & SCM",
        "description": {
          "zh-CN": "为软件工程团队提供的堆叠和代码审查工具",
          "en-US": "The fast, code review workflow for modern engineering teams"
        },
        "url": "https://graphite.dev/"
      }
    ],
    "DevOps - Tools": [
      {
        "id": "docker",
        "name": "docker",
        "files": {
          "light": "docker.svg",
          "dark": "docker.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开源的应用容器引擎",
          "en-US": "A platform designed to help developers build, share, and run modern applications"
        },
        "url": "https://www.docker.com/"
      },
      {
        "id": "kubernetes",
        "name": "kubernetes",
        "files": {
          "light": "kubernetes.svg",
          "dark": "kubernetes.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开源的容器编排系统",
          "en-US": "An open-source system for automating deployment, scaling, and management of containerized applications"
        },
        "url": "https://kubernetes.io/"
      },
      {
        "id": "openshift",
        "name": "openshift",
        "files": {
          "light": "openshift.svg",
          "dark": "openshift.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "基于 Kubernetes 的企业级容器云平台",
          "en-US": "Enterprise Kubernetes container platform"
        },
        "url": "https://www.redhat.com/en/technologies/cloud-computing/openshift"
      },
      {
        "id": "podman",
        "name": "podman",
        "files": {
          "light": "podman-light.svg",
          "dark": "podman-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "无守护进程的容器引擎",
          "en-US": "A daemonless container engine for developing, managing, and running OCI Containers on your Linux System"
        },
        "url": "https://podman.io/"
      },
      {
        "id": "vagrant",
        "name": "vagrant",
        "files": {
          "light": "vagrant-light.svg",
          "dark": "vagrant-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "用于构建及配置虚拟开发环境的软件",
          "en-US": "A tool for building and distributing development environments"
        },
        "url": "https://www.vagrantup.com/"
      },
      {
        "id": "ansible",
        "name": "ansible",
        "files": {
          "light": "ansible.svg",
          "dark": "ansible.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开源的自动化工具，用于软件提供、配置管理和应用程序部署",
          "en-US": "Open source IT automation tool that automates provisioning, configuration management, application deployment, orchestration, and many other manual IT processes"
        },
        "url": "https://www.ansible.com/"
      },
      {
        "id": "terraform",
        "name": "terraform",
        "files": {
          "light": "terraform-light.svg",
          "dark": "terraform-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开源的基础设施即代码软件工具",
          "en-US": "An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services"
        },
        "url": "https://www.terraform.io/"
      },
      {
        "id": "pulumi",
        "name": "pulumi",
        "files": {
          "light": "pulumi-light.svg",
          "dark": "pulumi-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开发者优先的基础设施即代码平台",
          "en-US": "Developer-First Infrastructure as Code"
        },
        "url": "https://www.pulumi.com/"
      },
      {
        "id": "helm",
        "name": "helm",
        "files": {
          "light": "helm-light.svg",
          "dark": "helm-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "Kubernetes 的包管理器",
          "en-US": "The package manager for Kubernetes"
        },
        "url": "https://helm.sh/"
      },
      {
        "id": "jenkins",
        "name": "jenkins",
        "files": {
          "light": "jenkins-light.svg",
          "dark": "jenkins-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "开源的自动化服务器",
          "en-US": "The leading open source automation server"
        },
        "url": "https://www.jenkins.io/"
      },
      {
        "id": "circleci",
        "name": "circleci",
        "files": {
          "light": "circleci-light.svg",
          "dark": "circleci-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "持续集成和交付平台",
          "en-US": "Continuous integration and delivery platform"
        },
        "url": "https://circleci.com/"
      },
      {
        "id": "argocd",
        "name": "argocd",
        "files": {
          "light": "argocd-light.svg",
          "dark": "argocd-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "Kubernetes 的声明式 GitOps 持续交付工具",
          "en-US": "Declarative, GitOps continuous delivery tool for Kubernetes"
        },
        "url": "https://argoproj.github.io/cd/"
      },
      {
        "id": "rancher",
        "name": "rancher",
        "files": {
          "light": "rancher-light.svg",
          "dark": "rancher-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "企业级 Kubernetes 管理平台",
          "en-US": "Enterprise Kubernetes Management"
        },
        "url": "https://www.rancher.com/"
      },
      {
        "id": "consul",
        "name": "consul",
        "files": {
          "light": "consul-light.svg",
          "dark": "consul-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "服务网格解决方案",
          "en-US": "Service mesh solution providing a full featured control plane with service discovery, configuration, and segmentation functionality"
        },
        "url": "https://www.consul.io/"
      },
      {
        "id": "portainer",
        "name": "portainer",
        "files": {
          "light": "portainer-light.svg",
          "dark": "portainer-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "云原生应用管理工具",
          "en-US": "Cloud native management made easy"
        },
        "url": "https://www.portainer.io/"
      },
      {
        "id": "lando",
        "name": "lando",
        "files": {
          "light": "lando-light.svg",
          "dark": "lando-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "面向开发者的本地开发环境和 DevOps 工具",
          "en-US": "A local development environment and DevOps tool built on Docker container technology"
        },
        "url": "https://lando.dev/"
      },
      {
        "id": "pm2",
        "name": "pm2",
        "files": {
          "light": "pm2-light.svg",
          "dark": "pm2-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "Node.js 应用程序的进程管理器",
          "en-US": "Production process manager for Node.js apps with a built-in load balancer"
        },
        "url": "https://pm2.keymetrics.io/"
      },
      {
        "id": "docksal",
        "name": "docksal",
        "files": {
          "light": "docksal-light.svg",
          "dark": "docksal-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "基于 Docker 的本地开发环境构建工具",
          "en-US": "Web development environments for Mac, Windows, and Linux"
        },
        "url": "https://docksal.io/"
      },
      {
        "id": "envoyer",
        "name": "envoyer",
        "files": {
          "light": "envoyer.svg",
          "dark": "envoyer.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "PHP 零停机部署工具",
          "en-US": "Zero downtime PHP deployment"
        },
        "url": "https://envoyer.io/"
      },
      {
        "id": "etcd",
        "name": "etcd",
        "files": {
          "light": "etcd-light.svg",
          "dark": "etcd-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "分布式的、可靠的键值存储用于最关键的数据",
          "en-US": "A distributed, reliable key-value store for the most critical data of a distributed system"
        },
        "url": "https://etcd.io/"
      },
      {
        "id": "apptainer",
        "name": "apptainer",
        "files": {
          "light": "apptainer-light.svg",
          "dark": "apptainer-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "一种主要支持高性能计算系统（HPC）的容器系统",
          "en-US": "The container system for secure high performance computing"
        },
        "url": "https://apptainer.org/"
      },
      {
        "id": "integrations",
        "name": "integrations",
        "files": {
          "light": "integrations-light.svg",
          "dark": "integrations-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "系统集成与服务连接",
          "en-US": "System integrations and service connectivity"
        },
        "url": "#"
      },
      {
        "id": "dn42",
        "name": "dn42",
        "files": {
          "light": "dn42-light.svg",
          "dark": "dn42-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "分散式的去中心化虚拟专用网络",
          "en-US": "Decentralized Network 42"
        },
        "url": "https://dn42.dev/"
      },
      {
        "id": "replit",
        "name": "replit",
        "files": {
          "light": "replit-light.svg",
          "dark": "replit-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "在线编程环境与计算平台",
          "en-US": "Build software collaboratively from anywhere in the world"
        },
        "url": "https://replit.com/"
      },
      {
        "id": "nextflow",
        "name": "nextflow",
        "files": {
          "light": "nextflow-light.svg",
          "dark": "nextflow-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "用于数据驱动的计算管道的响应式应用流框架",
          "en-US": "A reactive workflow framework and a programming DSL that eases the writing of data-intensive computational pipelines"
        },
        "url": "https://www.nextflow.io/"
      },
      {
        "id": "rclone",
        "name": "rclone",
        "files": {
          "light": "rclone-light.svg",
          "dark": "rclone-dark.svg"
        },
        "category": "DevOps - Tools",
        "description": {
          "zh-CN": "管理云存储的文件同步程序",
          "en-US": "A command line program to manage files on cloud storage"
        },
        "url": "https://rclone.org/"
      }
    ],
    "DevOps - Monitoring": [
      {
        "id": "grafana",
        "name": "grafana",
        "files": {
          "light": "grafana-light.svg",
          "dark": "grafana-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的分析和交互式可视化 Web 应用程序",
          "en-US": "The open observability platform"
        },
        "url": "https://grafana.com/"
      },
      {
        "id": "prometheus",
        "name": "prometheus",
        "files": {
          "light": "prometheus.svg",
          "dark": "prometheus.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源系统监控和报警工具套件",
          "en-US": "An open-source systems monitoring and alerting toolkit"
        },
        "url": "https://prometheus.io/"
      },
      {
        "id": "sentry",
        "name": "sentry",
        "files": {
          "light": "sentry.svg",
          "dark": "sentry.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的应用错误监控告警平台",
          "en-US": "Developer-first error tracking and performance monitoring"
        },
        "url": "https://sentry.io/"
      },
      {
        "id": "datadog",
        "name": "datadog",
        "files": {
          "light": "datadog.svg",
          "dark": "datadog.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "针对云端应用程式的监控服务",
          "en-US": "Monitoring and security platform for cloud applications"
        },
        "url": "https://www.datadoghq.com/"
      },
      {
        "id": "jaeger",
        "name": "jaeger",
        "files": {
          "light": "jaeger-light.svg",
          "dark": "jaeger-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的端到端分布式追踪",
          "en-US": "Open source, end-to-end distributed tracing"
        },
        "url": "https://www.jaegertracing.io/"
      },
      {
        "id": "zabbix",
        "name": "zabbix",
        "files": {
          "light": "zabbix.svg",
          "dark": "zabbix.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "企业级的开源分布式监控解决方案",
          "en-US": "Enterprise-class open source distributed monitoring solution"
        },
        "url": "https://www.zabbix.com/"
      },
      {
        "id": "skywalking",
        "name": "skywalking",
        "files": {
          "light": "skywalking-light.svg",
          "dark": "skywalking-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "面向分布式架构的 APM（应用性能管理）系统",
          "en-US": "Application performance monitor tool for distributed systems"
        },
        "url": "https://skywalking.apache.org/"
      },
      {
        "id": "papertrail",
        "name": "papertrail",
        "files": {
          "light": "papertrail.svg",
          "dark": "papertrail.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "基于云的日志管理平台",
          "en-US": "Cloud-hosted log management"
        },
        "url": "https://www.papertrail.com/"
      },
      {
        "id": "kibana",
        "name": "kibana",
        "files": {
          "light": "kibana-light.svg",
          "dark": "kibana-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的数据可视化仪表板",
          "en-US": "Your window into the Elastic Stack"
        },
        "url": "https://www.elastic.co/kibana"
      },
      {
        "id": "opensergo",
        "name": "opensergo",
        "files": {
          "light": "opensergo-light.svg",
          "dark": "opensergo-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "云原生微服务治理规范",
          "en-US": "Open Microservice Governance standard"
        },
        "url": "https://opensergo.io/"
      },
      {
        "id": "opentelemetry",
        "name": "opentelemetry",
        "files": {
          "light": "opentelemetry-light.svg",
          "dark": "opentelemetry-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的可观测性框架集",
          "en-US": "High-quality, ubiquitous, and portable telemetry to enable effective observability"
        },
        "url": "https://opentelemetry.io/"
      },
      {
        "id": "litmus",
        "name": "litmus",
        "files": {
          "light": "litmus-light.svg",
          "dark": "litmus-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "云原生的混沌工程工具集",
          "en-US": "Chaos engineering platform for Kubernetes"
        },
        "url": "https://litmuschaos.io/"
      },
      {
        "id": "workers",
        "name": "workers",
        "files": {
          "light": "workers-light.svg",
          "dark": "workers-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "Cloudflare Workers (别名)",
          "en-US": "Cloudflare Workers (Alias)"
        },
        "url": "https://workers.cloudflare.com/"
      },
      {
        "id": "lambda",
        "name": "lambda",
        "files": {
          "light": "lambda.svg",
          "dark": "lambda.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "无服务器、事件驱动型计算服务",
          "en-US": "Run code without thinking about servers or clusters"
        },
        "url": "https://aws.amazon.com/lambda/"
      },
      {
        "id": "kong",
        "name": "kong",
        "files": {
          "light": "kong-light.svg",
          "dark": "kong-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "云原生 API 网关",
          "en-US": "The world’s most popular open source API gateway"
        },
        "url": "https://konghq.com/"
      },
      {
        "id": "higress",
        "name": "higress",
        "files": {
          "light": "higress-light.svg",
          "dark": "higress-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "云原生下一代 API 网关",
          "en-US": "A cloud-native next-generation API gateway"
        },
        "url": "https://higress.io/"
      },
      {
        "id": "k3s",
        "name": "k3s",
        "files": {
          "light": "k3s-light.svg",
          "dark": "k3s-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "轻量级 Kubernetes",
          "en-US": "Lightweight Kubernetes"
        },
        "url": "https://k3s.io/"
      },
      {
        "id": "kubevela",
        "name": "kubevela",
        "files": {
          "light": "kubevela-light.svg",
          "dark": "kubevela-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "易用且高可扩展的云原生应用管理工具",
          "en-US": "The Modern Application Platform"
        },
        "url": "https://kubevela.io/"
      },
      {
        "id": "n8n",
        "name": "n8n",
        "files": {
          "light": "n8n-light.svg",
          "dark": "n8n-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "公平代码的自动化工作流系统",
          "en-US": "Free and open fair-code licensed node based Workflow Automation Tool"
        },
        "url": "https://n8n.io/"
      },
      {
        "id": "nacos",
        "name": "nacos",
        "files": {
          "light": "nacos-light.svg",
          "dark": "nacos-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "用于动态服务发现、配置和服务管理",
          "en-US": "An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native applications."
        },
        "url": "https://nacos.io/"
      },
      {
        "id": "ngrok",
        "name": "ngrok",
        "files": {
          "light": "ngrok.svg",
          "dark": "ngrok.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "为本地应用提供安全的外网隧道",
          "en-US": "The programmable network edge that adds connectivity, security, and observability to your apps"
        },
        "url": "https://ngrok.com/"
      },
      {
        "id": "proxmox",
        "name": "proxmox",
        "files": {
          "light": "proxmox-light.svg",
          "dark": "proxmox-dark.svg"
        },
        "category": "DevOps - Monitoring",
        "description": {
          "zh-CN": "开源的虚拟化企业平台",
          "en-US": "Open-source virtualization platform"
        },
        "url": "https://www.proxmox.com/"
      }
    ],
    "AI & Machine Learning": [
      {
        "id": "tensorflow",
        "name": "tensorflow",
        "files": {
          "light": "tensorflow-light.svg",
          "dark": "tensorflow-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "开源机器学习框架",
          "en-US": "An end-to-end open source machine learning platform"
        },
        "url": "https://www.tensorflow.org/"
      },
      {
        "id": "pytorch",
        "name": "pytorch",
        "files": {
          "light": "pytorch-light.svg",
          "dark": "pytorch-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "开源机器学习库",
          "en-US": "An open source machine learning framework that accelerates the path from research prototyping to production deployment"
        },
        "url": "https://pytorch.org/"
      },
      {
        "id": "scikitlearn",
        "name": "scikitlearn",
        "files": {
          "light": "scikitlearn-light.svg",
          "dark": "scikitlearn-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "基于 Python 语言的机器学习工具",
          "en-US": "Machine Learning in Python"
        },
        "url": "https://scikit-learn.org/"
      },
      {
        "id": "opencv",
        "name": "opencv",
        "files": {
          "light": "opencv-light.svg",
          "dark": "opencv-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "开源计算机视觉库",
          "en-US": "Open Source Computer Vision Library"
        },
        "url": "https://opencv.org/"
      },
      {
        "id": "huggingface",
        "name": "huggingface",
        "files": {
          "light": "huggingface-light.svg",
          "dark": "huggingface-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "机器学习模型托管与分享社区",
          "en-US": "The AI community building the future. Build, train and deploy state of the art models powered by the reference open source in machine learning"
        },
        "url": "https://huggingface.co/"
      },
      {
        "id": "gemini",
        "name": "gemini",
        "files": {
          "light": "gemini-light.svg",
          "dark": "gemini-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "Google Gemini",
          "en-US": "Google Gemini"
        },
        "url": "https://gemini.google.com/"
      },
      {
        "id": "chatgpt",
        "name": "chatgpt",
        "files": {
          "light": "chatgpt-light.svg",
          "dark": "chatgpt-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "OpenAI 的对话语言模型",
          "en-US": "A conversational AI system that listens, learns, and challenges"
        },
        "url": "https://chatgpt.com/"
      },
      {
        "id": "claude",
        "name": "claude",
        "files": {
          "light": "claude-light.svg",
          "dark": "claude-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "Anthropic 开发的人工智能模型",
          "en-US": "Claude is an AI assistant created by Anthropic"
        },
        "url": "https://claude.ai/"
      },
      {
        "id": "mistral",
        "name": "mistral",
        "files": {
          "light": "mistral-light.svg",
          "dark": "mistral-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "Mistral AI 开发的开源语言模型",
          "en-US": "Frontier AI in your hands"
        },
        "url": "https://mistral.ai/"
      },
      {
        "id": "ollama",
        "name": "ollama",
        "files": {
          "light": "ollama-light.svg",
          "dark": "ollama-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "在本地启动并在本地运行大型语言模型的工具",
          "en-US": "Get up and running with large language models locally"
        },
        "url": "https://ollama.com/"
      },
      {
        "id": "langchain",
        "name": "langchain",
        "files": {
          "light": "langchain-light.svg",
          "dark": "langchain-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "用于开发由语言模型支持的应用程序的框架",
          "en-US": "Building applications with LLMs through composability"
        },
        "url": "https://www.langchain.com/"
      },
      {
        "id": "llamaindex",
        "name": "llamaindex",
        "files": {
          "light": "llamaindex-light.svg",
          "dark": "llamaindex-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "LLM 用户连接数据的简单、灵活的数据框架",
          "en-US": "The leading data framework for building LLM applications"
        },
        "url": "https://www.llamaindex.ai/"
      },
      {
        "id": "ml5",
        "name": "ml5",
        "files": {
          "light": "ml5-light.svg",
          "dark": "ml5-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "在网页浏览器中友好使用机器学习的模型",
          "en-US": "Friendly machine learning for the web"
        },
        "url": "https://ml5js.org/"
      },
      {
        "id": "mlflow",
        "name": "mlflow",
        "files": {
          "light": "mlflow-light.svg",
          "dark": "mlflow-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "管理机器学习生命周期的开源平台",
          "en-US": "Open source platform for the machine learning lifecycle"
        },
        "url": "https://mlflow.org/"
      },
      {
        "id": "mojo",
        "name": "mojo",
        "files": {
          "light": "mojo-light.svg",
          "dark": "mojo-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "用于 AI 开发者的新编程语言",
          "en-US": "A new programming language for AI developers"
        },
        "url": "https://www.modular.com/mojo"
      },
      {
        "id": "microsoftcopilot",
        "name": "microsoftcopilot",
        "files": {
          "light": "microsoftcopilot-light.svg",
          "dark": "microsoftcopilot-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "微软智能副驾",
          "en-US": "Your everyday AI companion"
        },
        "url": "https://copilot.microsoft.com/"
      },
      {
        "id": "grok",
        "name": "grok",
        "files": {
          "light": "grok-light.svg",
          "dark": "grok-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "xAI 开发的聊天机器人",
          "en-US": "An AI modeled after the Hitchhiker’s Guide to the Galaxy"
        },
        "url": "https://x.ai/"
      },
      {
        "id": "crewai",
        "name": "crewai",
        "files": {
          "light": "crewai-light.svg",
          "dark": "crewai-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "用于编排角色扮演自主 AI 代理的框架",
          "en-US": "Framework for orchestrating role-playing, autonomous AI agents"
        },
        "url": "https://www.crewai.com/"
      },
      {
        "id": "deepseek",
        "name": "deepseek",
        "files": {
          "light": "deepseek-light.svg",
          "dark": "deepseek-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "深度求索",
          "en-US": "DeepSeek"
        },
        "url": "https://www.deepseek.com/"
      },
      {
        "id": "wandb",
        "name": "wandb",
        "files": {
          "light": "wandb-light.svg",
          "dark": "wandb-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "记录实验进度并进行追踪及可视化的工具",
          "en-US": "The developer-first MLOps platform"
        },
        "url": "https://wandb.ai/"
      },
      {
        "id": "tecton",
        "name": "tecton",
        "files": {
          "light": "tecton-light.svg",
          "dark": "tecton-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "专注于企业级特征存储管理系统的创业公司",
          "en-US": "Enterprise Feature Store"
        },
        "url": "https://www.tecton.ai/"
      },
      {
        "id": "unstructured",
        "name": "unstructured",
        "files": {
          "light": "unstructured.svg",
          "dark": "unstructured.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "用于将非结构化数据导入大型语言模型的工具",
          "en-US": "Open source libraries and APIs to build custom preprocessing pipelines for labeling, training, or production machine learning pipelines"
        },
        "url": "https://unstructured.io/"
      },
      {
        "id": "fastai",
        "name": "fastai",
        "files": {
          "light": "fastai-light.svg",
          "dark": "fastai-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "使神经网络变得更易于使用的深度学习库",
          "en-US": "The fastai deep learning library"
        },
        "url": "https://www.fast.ai/"
      },
      {
        "id": "groq",
        "name": "groq",
        "files": {
          "light": "groq-light.svg",
          "dark": "groq-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "专门用于人工智能任务加速的硬件计算公司",
          "en-US": "The LPU™ Inference Engine"
        },
        "url": "https://groq.com/"
      },
      {
        "id": "aiogram",
        "name": "aiogram",
        "files": {
          "light": "aiogram-light.svg",
          "dark": "aiogram-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "完全异步的 Telegram Bot API Python 框架",
          "en-US": "A fully asynchronous framework for Telegram Bot API written in Python 3.9+"
        },
        "url": "https://aiogram.dev/"
      },
      {
        "id": "agno",
        "name": "agno",
        "files": {
          "light": "agno.svg",
          "dark": "agno.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "构建拥有记忆的 AI 代理工具包",
          "en-US": "A toolkit for building AI Agents with memory"
        },
        "url": "https://agno.ai/"
      },
      {
        "id": "cairo",
        "name": "cairo",
        "files": {
          "light": "cairo-light.svg",
          "dark": "cairo-dark.svg"
        },
        "category": "AI & Machine Learning",
        "description": {
          "zh-CN": "用于创建和验证可计算证明的语言",
          "en-US": "A Turing-complete language for creating provable programs for general computation"
        },
        "url": "https://www.cairo-lang.org/"
      }
    ],
    "Data Science & Big Data": [
      {
        "id": "pandas",
        "name": "pandas",
        "files": {
          "light": "pandas-light.svg",
          "dark": "pandas-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于 Python 的数据分析和操作工具",
          "en-US": "Fast, powerful, flexible and easy to use open source data analysis and manipulation tool"
        },
        "url": "https://pandas.pydata.org/"
      },
      {
        "id": "numpy",
        "name": "numpy",
        "files": {
          "light": "numpy-light.svg",
          "dark": "numpy-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Python 科学计算的基础包",
          "en-US": "The fundamental package for scientific computing with Python"
        },
        "url": "https://numpy.org/"
      },
      {
        "id": "scipy",
        "name": "scipy",
        "files": {
          "light": "scipy-light.svg",
          "dark": "scipy-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于数学、科学和工程的开源软件",
          "en-US": "Open-source software for mathematics, science, and engineering"
        },
        "url": "https://scipy.org/"
      },
      {
        "id": "matplotlib",
        "name": "matplotlib",
        "files": {
          "light": "matplotlib-light.svg",
          "dark": "matplotlib-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Python 2D 绘图库",
          "en-US": "A comprehensive library for creating static, animated, and interactive visualizations in Python"
        },
        "url": "https://matplotlib.org/"
      },
      {
        "id": "seaborn",
        "name": "seaborn",
        "files": {
          "light": "seaborn-light.svg",
          "dark": "seaborn-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于 matplotlib 的统计数据可视化库",
          "en-US": "Statistical data visualization"
        },
        "url": "https://seaborn.pydata.org/"
      },
      {
        "id": "plotly",
        "name": "plotly",
        "files": {
          "light": "plotly-light.svg",
          "dark": "plotly-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "交互式图表和仪表板开源库",
          "en-US": "Interactive graphing library"
        },
        "url": "https://plotly.com/"
      },
      {
        "id": "bokeh",
        "name": "bokeh",
        "files": {
          "light": "bokeh-light.svg",
          "dark": "bokeh-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于现代 Web 浏览器的交互式可视化库",
          "en-US": "Interactive visualization library for modern web browsers"
        },
        "url": "https://bokeh.org/"
      },
      {
        "id": "streamlit",
        "name": "streamlit",
        "files": {
          "light": "streamlit-light.svg",
          "dark": "streamlit-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源应用框架，专为机器学习和数据科学团队定制",
          "en-US": "The fastest way to build and share data apps"
        },
        "url": "https://streamlit.io/"
      },
      {
        "id": "gradio",
        "name": "gradio",
        "files": {
          "light": "gradio-light.svg",
          "dark": "gradio-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "为机器学习模型快速构建 Web 界面的开源 Python 包",
          "en-US": "Build and share delightful machine learning apps, all in Python"
        },
        "url": "https://gradio.app/"
      },
      {
        "id": "jupyter",
        "name": "jupyter",
        "files": {
          "light": "jupyter-light.svg",
          "dark": "jupyter-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源的交互式计算和数据科学环境",
          "en-US": "Free software, open standards, and web services for interactive computing across all programming languages"
        },
        "url": "https://jupyter.org/"
      },
      {
        "id": "anaconda",
        "name": "anaconda",
        "files": {
          "light": "anaconda-light.svg",
          "dark": "anaconda-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于科学计算的 Python 和 R 数据科学平台",
          "en-US": "The World's Most Popular Data Science Platform"
        },
        "url": "https://www.anaconda.com/"
      },
      {
        "id": "kaggle",
        "name": "kaggle",
        "files": {
          "light": "kaggle-light.svg",
          "dark": "kaggle-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "数据科学和机器学习竞赛平台",
          "en-US": "Machine Learning and Data Science Community"
        },
        "url": "https://www.kaggle.com/"
      },
      {
        "id": "dask",
        "name": "dask",
        "files": {
          "light": "dask-light.svg",
          "dark": "dask-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "为 Python 提供高级并行分析能力的开源库",
          "en-US": "Scale the Python tools you love"
        },
        "url": "https://dask.org/"
      },
      {
        "id": "polars",
        "name": "polars",
        "files": {
          "light": "polars.svg",
          "dark": "polars.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "快速的多线程 DataFrame 库",
          "en-US": "Blazingly fast DataFrames in Rust, Python, Node.js, and Ruby"
        },
        "url": "https://www.pola.rs/"
      },
      {
        "id": "spark",
        "name": "spark",
        "files": {
          "light": "spark-light.svg",
          "dark": "spark-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于大规模数据处理的统一分析引擎",
          "en-US": "Unified engine for large-scale data analytics"
        },
        "url": "https://spark.apache.org/"
      },
      {
        "id": "hadoop",
        "name": "hadoop",
        "files": {
          "light": "hadoop-light.svg",
          "dark": "hadoop-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "分布式系统基础架构",
          "en-US": "Open-source software for reliable, scalable, distributed computing"
        },
        "url": "https://hadoop.apache.org/"
      },
      {
        "id": "flink",
        "name": "flink",
        "files": {
          "light": "flink.svg",
          "dark": "flink.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源流处理框架",
          "en-US": "Stateful Computations over Data Streams"
        },
        "url": "https://flink.apache.org/"
      },
      {
        "id": "kafka",
        "name": "kafka",
        "files": {
          "light": "kafka.svg",
          "dark": "kafka.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源流处理平台",
          "en-US": "Open-source distributed event streaming platform"
        },
        "url": "https://kafka.apache.org/"
      },
      {
        "id": "hive",
        "name": "hive",
        "files": {
          "light": "hive.svg",
          "dark": "hive.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于 Hadoop 的数据仓库工具",
          "en-US": "The Apache Hive data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL"
        },
        "url": "https://hive.apache.org/"
      },
      {
        "id": "impala",
        "name": "impala",
        "files": {
          "light": "impala-light.svg",
          "dark": "impala-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于处理存储在 Hadoop 集群中的大量数据的开源大规模并行处理 (MPP) SQL 查询引擎",
          "en-US": "The open source, native analytic database for Apache Hadoop"
        },
        "url": "https://impala.apache.org/"
      },
      {
        "id": "trino",
        "name": "trino",
        "files": {
          "light": "trino-light.svg",
          "dark": "trino-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "分布式 SQL 查询引擎",
          "en-US": "Fast distributed SQL query engine for big data analytics that helps you explore your data universe"
        },
        "url": "https://trino.io/"
      },
      {
        "id": "presto",
        "name": "presto",
        "files": {
          "light": "presto-light.svg",
          "dark": "presto-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源分布式 SQL 查询引擎",
          "en-US": "Open source distributed SQL query engine for running interactive analytic queries against data sources of all sizes ranging from gigabytes to petabytes"
        },
        "url": "https://prestodb.io/"
      },
      {
        "id": "databricks",
        "name": "databricks",
        "files": {
          "light": "databricks-light.svg",
          "dark": "databricks-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "统一的数据分析平台",
          "en-US": "Unified Data Analytics Platform"
        },
        "url": "https://www.databricks.com/"
      },
      {
        "id": "airflow",
        "name": "airflow",
        "files": {
          "light": "airflow-light.svg",
          "dark": "airflow-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于工作流管理的开源平台",
          "en-US": "Platform to programmatically author, schedule, and monitor workflows"
        },
        "url": "https://airflow.apache.org/"
      },
      {
        "id": "tableau",
        "name": "tableau",
        "files": {
          "light": "tableau-light.svg",
          "dark": "tableau-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "商业智能和数据可视化软件",
          "en-US": "Business intelligence and data visualization software"
        },
        "url": "https://www.tableau.com/"
      },
      {
        "id": "looker",
        "name": "looker",
        "files": {
          "light": "looker-light.svg",
          "dark": "looker-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于云的商业智能和数据分析平台",
          "en-US": "Enterprise platform for BI, data applications, and embedded analytics"
        },
        "url": "https://cloud.google.com/looker"
      },
      {
        "id": "metabase",
        "name": "metabase",
        "files": {
          "light": "metabase-light.svg",
          "dark": "metabase-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源的数据分析和商业智能工具",
          "en-US": "The easy, open source way for everyone in your company to ask questions and learn from data"
        },
        "url": "https://www.metabase.com/"
      },
      {
        "id": "informatica",
        "name": "informatica",
        "files": {
          "light": "informatica-light.svg",
          "dark": "informatica-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "企业云数据管理平台",
          "en-US": "Enterprise Cloud Data Management"
        },
        "url": "https://www.informatica.com/"
      },
      {
        "id": "airbyte",
        "name": "airbyte",
        "files": {
          "light": "airbyte-light.svg",
          "dark": "airbyte-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开源数据集成平台",
          "en-US": "Open-source data integration platform for modern data teams"
        },
        "url": "https://airbyte.com/"
      },
      {
        "id": "beam",
        "name": "beam",
        "files": {
          "light": "beam-light.svg",
          "dark": "beam-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "统一且可移植的数据处理编程模型",
          "en-US": "An advanced unified programming model"
        },
        "url": "https://beam.apache.org/"
      },
      {
        "id": "unitycatalog",
        "name": "unitycatalog",
        "files": {
          "light": "unitycatalog-light.svg",
          "dark": "unitycatalog-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Databricks 的统一治理解决方案",
          "en-US": "Unified governance solution for all data and AI assets"
        },
        "url": "https://www.unitycatalog.io/"
      },
      {
        "id": "starrocks",
        "name": "starrocks",
        "files": {
          "light": "starrocks-light.svg",
          "dark": "starrocks-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "新一代极速全场景 MPP 数据库",
          "en-US": "Next-Gen Sub-Second MPP Database for Full Analytics Scenarios"
        },
        "url": "https://www.starrocks.io/"
      },
      {
        "id": "starburst",
        "name": "starburst",
        "files": {
          "light": "starburst-light.svg",
          "dark": "starburst-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于 Trino 的企业级数据湖分析平台",
          "en-US": "The Analytics Engine for the Data Mesh"
        },
        "url": "https://www.starburst.io/"
      },
      {
        "id": "pyspark",
        "name": "pyspark",
        "files": {
          "light": "pyspark-light.svg",
          "dark": "pyspark-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Apache Spark 的 Python API",
          "en-US": "The Python API for Apache Spark"
        },
        "url": "https://spark.apache.org/docs/latest/api/python/"
      },
      {
        "id": "sparksql",
        "name": "sparksql",
        "files": {
          "light": "sparksql-light.svg",
          "dark": "sparksql-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于结构化数据处理的 Spark 模块",
          "en-US": "Spark module for structured data processing"
        },
        "url": "https://spark.apache.org/sql/"
      },
      {
        "id": "doris",
        "name": "doris",
        "files": {
          "light": "doris-light.svg",
          "dark": "doris-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "易用、高性能和统一的分析数据库",
          "en-US": "An easy-to-use, high-performance and unified analytical database"
        },
        "url": "https://doris.apache.org/"
      },
      {
        "id": "fivetran",
        "name": "fivetran",
        "files": {
          "light": "fivetran-light.svg",
          "dark": "fivetran-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "自动化数据集成平台",
          "en-US": "Automated data movement"
        },
        "url": "https://www.fivetran.com/"
      },
      {
        "id": "glue",
        "name": "glue",
        "files": {
          "light": "glue.svg",
          "dark": "glue.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "全托管的无服务器数据集成服务",
          "en-US": "Serverless data integration service"
        },
        "url": "https://aws.amazon.com/glue/"
      },
      {
        "id": "confluent",
        "name": "confluent",
        "files": {
          "light": "confluent-light.svg",
          "dark": "confluent-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "基于 Apache Kafka 的云原生流数据平台",
          "en-US": "Data streaming platform based on Apache Kafka"
        },
        "url": "https://www.confluent.io/"
      },
      {
        "id": "iceberg",
        "name": "iceberg",
        "files": {
          "light": "iceberg-light.svg",
          "dark": "iceberg-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于海量分析数据集的开放表格格式",
          "en-US": "An open table format for huge analytic datasets"
        },
        "url": "https://iceberg.apache.org/"
      },
      {
        "id": "onehouse",
        "name": "onehouse",
        "files": {
          "light": "onehouse-light.svg",
          "dark": "onehouse-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "云原生数据湖仓平台构建工具",
          "en-US": "The universal data lakehouse"
        },
        "url": "https://www.onehouse.ai/"
      },
      {
        "id": "pbi",
        "name": "pbi",
        "files": {
          "light": "pbi-light.svg",
          "dark": "pbi-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Power BI (别名)",
          "en-US": "Power BI (Alias)"
        },
        "url": "https://powerbi.microsoft.com/"
      },
      {
        "id": "delta",
        "name": "delta",
        "files": {
          "light": "delta-light.svg",
          "dark": "delta-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "构建数据湖仓的开源存储框架 (Delta Lake)",
          "en-US": "An open-source storage framework that enables building a Lakehouse architecture"
        },
        "url": "https://delta.io/"
      },
      {
        "id": "redshift",
        "name": "redshift",
        "files": {
          "light": "redshift-light.svg",
          "dark": "redshift-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "完全托管的数据仓库服务",
          "en-US": "Fast, simple, cost-effective data warehousing"
        },
        "url": "https://aws.amazon.com/redshift/"
      },
      {
        "id": "celerdata",
        "name": "celerdata",
        "files": {
          "light": "celerdata-light.svg",
          "dark": "celerdata-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "企业级统一数据分析平台",
          "en-US": "Unified Data Analytics Platform"
        },
        "url": "https://www.celerdata.com/"
      },
      {
        "id": "arrow",
        "name": "arrow",
        "files": {
          "light": "arrow-light.svg",
          "dark": "arrow-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "内存数据分析开发平台",
          "en-US": "A cross-language development platform for in-memory analytics"
        },
        "url": "https://arrow.apache.org/"
      },
      {
        "id": "athena",
        "name": "athena",
        "files": {
          "light": "athena.svg",
          "dark": "athena.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "交互式查询服务",
          "en-US": "Interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL"
        },
        "url": "https://aws.amazon.com/athena/"
      },
      {
        "id": "sas",
        "name": "sas",
        "files": {
          "light": "sas-light.svg",
          "dark": "sas-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "数据分析工具软件",
          "en-US": "Statistical software suite developed by SAS Institute for data management, advanced analytics, multivariate analysis, business intelligence, criminal investigation, and predictive analytics"
        },
        "url": "https://www.sas.com/"
      },
      {
        "id": "jax",
        "name": "jax",
        "files": {
          "light": "jax-light.svg",
          "dark": "jax-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于高性能数值计算和机器学习研究的库",
          "en-US": "Composable transformations of Python+NumPy programs: differentiate, vectorize, JIT to GPU/TPU, and more"
        },
        "url": "https://github.com/google/jax"
      },
      {
        "id": "jamovi",
        "name": "jamovi",
        "files": {
          "light": "jamovi.svg",
          "dark": "jamovi.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "免费、开放的数据科学研究工具",
          "en-US": "Free and open statistical software to bridge the gap between researcher and statistician"
        },
        "url": "https://www.jamovi.org/"
      },
      {
        "id": "openmm",
        "name": "openmm",
        "files": {
          "light": "openmm-light.svg",
          "dark": "openmm-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于分子模拟的工具包",
          "en-US": "A toolkit for molecular simulation using high performance GPU code"
        },
        "url": "https://openmm.org/"
      },
      {
        "id": "mindsdb",
        "name": "mindsdb",
        "files": {
          "light": "mindsdb-light.svg",
          "dark": "mindsdb-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "允许在数据库内部进行机器学习的开源工具",
          "en-US": "Open Source Machine Learning Platform embedded within databases"
        },
        "url": "https://mindsdb.com/"
      },
      {
        "id": "granica",
        "name": "granica",
        "files": {
          "light": "granica.svg",
          "dark": "granica.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "AI 数据平台",
          "en-US": "The AI Data Platform"
        },
        "url": "https://www.granica.ai/"
      },
      {
        "id": "googlecolab",
        "name": "googlecolab",
        "files": {
          "light": "googlecolab-light.svg",
          "dark": "googlecolab-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "在云端编写和执行 Python 代码的工具",
          "en-US": "Write and execute Python in your browser"
        },
        "url": "https://colab.research.google.com/"
      },
      {
        "id": "googleanalytics",
        "name": "googleanalytics",
        "files": {
          "light": "googleanalytics-light.svg",
          "dark": "googleanalytics-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Google 提供的网站和应用分析服务",
          "en-US": "Web analytics service offered by Google"
        },
        "url": "https://analytics.google.com/"
      },
      {
        "id": "ray",
        "name": "ray",
        "files": {
          "light": "ray-light.svg",
          "dark": "ray-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于构建和扩展分布式应用程序的快速、简单的框架",
          "en-US": "An open source framework that provides a simple, universal API for building distributed applications"
        },
        "url": "https://www.ray.io/"
      },
      {
        "id": "gromacs",
        "name": "gromacs",
        "files": {
          "light": "gromacs-light.svg",
          "dark": "gromacs-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "用于分子动力学模拟的软件包",
          "en-US": "A free and open-source software suite for high-performance molecular dynamics and output analysis"
        },
        "url": "https://www.gromacs.org/"
      },
      {
        "id": "dbtlabs",
        "name": "dbtlabs",
        "files": {
          "light": "dbtlabs-light.svg",
          "dark": "dbtlabs-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "开发和维护 dbt 的公司",
          "en-US": "The makers of dbt"
        },
        "url": "https://www.getdbt.com/"
      },
      {
        "id": "deltars",
        "name": "deltars",
        "files": {
          "light": "deltars-light.svg",
          "dark": "deltars-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "Delta Lake 的 Rust 实现",
          "en-US": "A native Rust library for Delta Lake"
        },
        "url": "https://delta-io.github.io/delta-rs/"
      },
      {
        "id": "stan",
        "name": "stan",
        "files": {
          "light": "stan-light.svg",
          "dark": "stan-dark.svg"
        },
        "category": "Data Science & Big Data",
        "description": {
          "zh-CN": "统计推断软件平台",
          "en-US": "A state-of-the-art platform for statistical modeling and high-performance statistical computation"
        },
        "url": "https://mc-stan.org/"
      }
    ],
    "Databases": [
      {
        "id": "mysql",
        "name": "mysql",
        "files": {
          "light": "mysql-light.svg",
          "dark": "mysql-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开源的关系型数据库管理系统",
          "en-US": "The world's most popular open source database"
        },
        "url": "https://www.mysql.com/"
      },
      {
        "id": "postgresql",
        "name": "postgresql",
        "files": {
          "light": "postgresql-light.svg",
          "dark": "postgresql-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "PostgreSQL (别名)",
          "en-US": "PostgreSQL (Alias)"
        },
        "url": "https://www.postgresql.org/"
      },
      {
        "id": "sqlite",
        "name": "sqlite",
        "files": {
          "light": "sqlite.svg",
          "dark": "sqlite.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "实现自包容、无服务器、零配置的事务性 SQL 数据库引擎的 C 语言库",
          "en-US": "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine"
        },
        "url": "https://www.sqlite.org/"
      },
      {
        "id": "sqlserver",
        "name": "sqlserver",
        "files": {
          "light": "sqlserver-light.svg",
          "dark": "sqlserver-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "微软 SQL Server (别名)",
          "en-US": "Microsoft SQL Server (Alias)"
        },
        "url": "https://www.microsoft.com/sql-server/"
      },
      {
        "id": "mariadb",
        "name": "mariadb",
        "files": {
          "light": "mariadb-light.svg",
          "dark": "mariadb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开源的关系型数据库服务器",
          "en-US": "One of the most popular open source relational databases"
        },
        "url": "https://mariadb.org/"
      },
      {
        "id": "oracle",
        "name": "oracle",
        "files": {
          "light": "oracle-light.svg",
          "dark": "oracle-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "甲骨文公司提供的多模型数据库管理系统",
          "en-US": "Multi-model database management system produced and marketed by Oracle Corporation"
        },
        "url": "https://www.oracle.com/database/"
      },
      {
        "id": "cockroachdb",
        "name": "cockroachdb",
        "files": {
          "light": "cockroachdb-light.svg",
          "dark": "cockroachdb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "商业开源的云原生分布式 SQL 数据库",
          "en-US": "The cloud-native, distributed SQL database that provides next-level consistency, ultra-resilience, data locality, and massive scale"
        },
        "url": "https://www.cockroachlabs.com/"
      },
      {
        "id": "tidb",
        "name": "tidb",
        "files": {
          "light": "tidb-light.svg",
          "dark": "tidb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开源分布式 SQL 数据库",
          "en-US": "An open-source, distributed, NewSQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads"
        },
        "url": "https://www.pingcap.com/tidb/"
      },
      {
        "id": "mongodb",
        "name": "mongodb",
        "files": {
          "light": "mongodb.svg",
          "dark": "mongodb.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "基于分布式文件存储的数据库",
          "en-US": "The most popular platform for modern, data-driven applications"
        },
        "url": "https://www.mongodb.com/"
      },
      {
        "id": "cassandra",
        "name": "cassandra",
        "files": {
          "light": "cassandra-light.svg",
          "dark": "cassandra-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开源的分布式 NoSQL 数据库系统",
          "en-US": "An open source NoSQL distributed database trusted by thousands of companies for scalability and high availability without compromising performance"
        },
        "url": "https://cassandra.apache.org/"
      },
      {
        "id": "dynamodb",
        "name": "dynamodb",
        "files": {
          "light": "dynamodb-light.svg",
          "dark": "dynamodb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "完全托管的 NoSQL 数据库服务",
          "en-US": "Key-value and document database that delivers single-digit millisecond performance at any scale"
        },
        "url": "https://aws.amazon.com/dynamodb/"
      },
      {
        "id": "neo4j",
        "name": "neo4j",
        "files": {
          "light": "neo4j-light.svg",
          "dark": "neo4j-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "图形数据库管理系统",
          "en-US": "Graph database management system"
        },
        "url": "https://neo4j.com/"
      },
      {
        "id": "elasticsearch",
        "name": "elasticsearch",
        "files": {
          "light": "elasticsearch-light.svg",
          "dark": "elasticsearch-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "Elasticsearch (别名)",
          "en-US": "Elasticsearch (Alias)"
        },
        "url": "https://www.elastic.co/"
      },
      {
        "id": "clickhouse",
        "name": "clickhouse",
        "files": {
          "light": "clickhouse-light.svg",
          "dark": "clickhouse-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "用于在线分析处理查询（OLAP）的列式数据库管理系统",
          "en-US": "A fast open-source column-oriented database management system that allows generating analytical data reports in real-time"
        },
        "url": "https://clickhouse.com/"
      },
      {
        "id": "snowflake",
        "name": "snowflake",
        "files": {
          "light": "snowflake-light.svg",
          "dark": "snowflake-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "云上的数据仓库平台",
          "en-US": "The Data Cloud company"
        },
        "url": "https://www.snowflake.com/"
      },
      {
        "id": "bigquery",
        "name": "bigquery",
        "files": {
          "light": "bigquery-light.svg",
          "dark": "bigquery-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "完全托管的、无服务器的数据仓库",
          "en-US": "A fully managed, serverless data warehouse that enables scalable analysis over petabytes of data"
        },
        "url": "https://cloud.google.com/bigquery"
      },
      {
        "id": "surrealdb",
        "name": "surrealdb",
        "files": {
          "light": "surrealdb-light.svg",
          "dark": "surrealdb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "用于实时 Web 的可扩展数据库",
          "en-US": "A scalable database for the real-time web"
        },
        "url": "https://surrealdb.com/"
      },
      {
        "id": "qdrant",
        "name": "qdrant",
        "files": {
          "light": "qdrant-light.svg",
          "dark": "qdrant-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "面向下一代 AI 应用程序的向量相似性搜索引擎",
          "en-US": "Vector Similarity Search Engine and Database"
        },
        "url": "https://qdrant.tech/"
      },
      {
        "id": "milvus",
        "name": "milvus",
        "files": {
          "light": "milvus-light.svg",
          "dark": "milvus-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开源向量数据库系统",
          "en-US": "An open-source vector database built to power embedding similarity search and AI applications"
        },
        "url": "https://milvus.io/"
      },
      {
        "id": "keydb",
        "name": "keydb",
        "files": {
          "light": "keydb-light.svg",
          "dark": "keydb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "多线程的 Redis 替代品",
          "en-US": "A multithreaded fork of Redis"
        },
        "url": "https://keydb.dev/"
      },
      {
        "id": "lancedb",
        "name": "lancedb",
        "files": {
          "light": "lancedb-light.svg",
          "dark": "lancedb-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "开发者友好的面向 AI 的无服务器向量数据库",
          "en-US": "Developer-friendly, serverless vector database for AI applications"
        },
        "url": "https://lancedb.com/"
      },
      {
        "id": "hudi",
        "name": "hudi",
        "files": {
          "light": "hudi-light.svg",
          "dark": "hudi-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "用于处理数据湖中数据的开源流式数据处理框架",
          "en-US": "Data Lake storage platform"
        },
        "url": "https://hudi.apache.org/"
      },
      {
        "id": "turso",
        "name": "turso",
        "files": {
          "light": "turso-light.svg",
          "dark": "turso-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "基于 libSQL 开发的边缘数据库系统",
          "en-US": "SQLite for Production"
        },
        "url": "https://turso.tech/"
      },
      {
        "id": "pinecone",
        "name": "pinecone",
        "files": {
          "light": "pinecone-light.svg",
          "dark": "pinecone-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "完全托管的应用于向量搜寻的云原生数据库",
          "en-US": "The vector database for machine learning"
        },
        "url": "https://www.pinecone.io/"
      },
      {
        "id": "dbeaver",
        "name": "dbeaver",
        "files": {
          "light": "dbeaver-light.svg",
          "dark": "dbeaver-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "通用的数据库管理工具",
          "en-US": "Universal Database Tool"
        },
        "url": "https://dbeaver.io/"
      },
      {
        "id": "libsql",
        "name": "libsql",
        "files": {
          "light": "libsql.svg",
          "dark": "libsql.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "SQLite 的开源替代方案",
          "en-US": "Open source decentralized SQLite"
        },
        "url": "https://libsql.org/"
      },
      {
        "id": "immuta",
        "name": "immuta",
        "files": {
          "light": "immuta-light.svg",
          "dark": "immuta-dark.svg"
        },
        "category": "Databases",
        "description": {
          "zh-CN": "数据安全平台",
          "en-US": "Data Security Platform"
        },
        "url": "https://www.immuta.com/"
      }
    ],
    "Mobile Development": [
      {
        "id": "android",
        "name": "android",
        "files": {
          "light": "android-light.svg",
          "dark": "android-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "基于 Linux 的自由及开放源代码的操作系统",
          "en-US": "The modern, approachable, and declarative UI toolkit for Android"
        },
        "url": "https://www.android.com/"
      },
      {
        "id": "androidstudio",
        "name": "androidstudio",
        "files": {
          "light": "androidstudio-light.svg",
          "dark": "androidstudio-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "Android 的官方集成开发环境",
          "en-US": "The official Integrated Development Environment (IDE) for Android app development"
        },
        "url": "https://developer.android.com/studio"
      },
      {
        "id": "swift",
        "name": "swift",
        "files": {
          "light": "swift.svg",
          "dark": "swift.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "苹果公司开发的编程语言",
          "en-US": "A general-purpose, multi-paradigm, compiled programming language developed by Apple Inc."
        },
        "url": "https://swift.org/"
      },
      {
        "id": "flutter",
        "name": "flutter",
        "files": {
          "light": "flutter-light.svg",
          "dark": "flutter-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "Google 的开源 UI 软件开发工具包",
          "en-US": "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase"
        },
        "url": "https://flutter.dev/"
      },
      {
        "id": "reactnative",
        "name": "reactnative",
        "files": {
          "light": "reactnative-light.svg",
          "dark": "reactnative-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "使用 React 构建原生应用程序的框架",
          "en-US": "A framework for building native applications using React"
        },
        "url": "https://reactnative.dev/"
      },
      {
        "id": "dart",
        "name": "dart",
        "files": {
          "light": "dart-light.svg",
          "dark": "dart-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "用于客户端开发的编程语言",
          "en-US": "A client-optimized language for fast apps on any platform"
        },
        "url": "https://dart.dev/"
      },
      {
        "id": "kotlin",
        "name": "kotlin",
        "files": {
          "light": "kotlin-light.svg",
          "dark": "kotlin-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "现代化的静态类型编程语言",
          "en-US": "A modern programming language that makes developers happier"
        },
        "url": "https://kotlinlang.org/"
      },
      {
        "id": "expo",
        "name": "expo",
        "files": {
          "light": "expo-light.svg",
          "dark": "expo-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "基于 React Native 的应用开发平台",
          "en-US": "An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React"
        },
        "url": "https://expo.dev/"
      },
      {
        "id": "capacitor",
        "name": "capacitor",
        "files": {
          "light": "capacitor-light.svg",
          "dark": "capacitor-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "跨平台应用程序运行时",
          "en-US": "A cross-platform native runtime for web apps"
        },
        "url": "https://capacitorjs.com/"
      },
      {
        "id": "jetpackcompose",
        "name": "jetpackcompose",
        "files": {
          "light": "jetpackcompose-light.svg",
          "dark": "jetpackcompose-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "用于构建原生 Android UI 的现代工具包",
          "en-US": "Android’s modern toolkit for building native UI"
        },
        "url": "https://developer.android.com/jetpack/compose"
      },
      {
        "id": "thunkable",
        "name": "thunkable",
        "files": {
          "light": "thunkable.svg",
          "dark": "thunkable.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "用于构建跨平台移动应用程序的无代码平台",
          "en-US": "The No-Code Platform to Build Powerful, Native Mobile Apps"
        },
        "url": "https://thunkable.com/"
      },
      {
        "id": "fastlane",
        "name": "fastlane",
        "files": {
          "light": "fastlane-light.svg",
          "dark": "fastlane-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "用于 iOS 和 Android 应用自动化发布和部署的工具",
          "en-US": "The easiest way to automate building and releasing your iOS and Android apps"
        },
        "url": "https://fastlane.tools/"
      },
      {
        "id": "flutterflow",
        "name": "flutterflow",
        "files": {
          "light": "flutterflow-light.svg",
          "dark": "flutterflow-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "基于浏览器的 Flutter 可视化构建器",
          "en-US": "Build applications faster than ever"
        },
        "url": "https://flutterflow.io/"
      },
      {
        "id": "googleplay",
        "name": "googleplay",
        "files": {
          "light": "googleplay-light.svg",
          "dark": "googleplay-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "Google Play 应用商店",
          "en-US": "Google Play Store"
        },
        "url": "https://play.google.com/"
      },
      {
        "id": "googleplayconsole",
        "name": "googleplayconsole",
        "files": {
          "light": "googleplayconsole-light.svg",
          "dark": "googleplayconsole-dark.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "Google Play 管理中心",
          "en-US": "Google Play Console"
        },
        "url": "https://play.google.com/console"
      },
      {
        "id": "appstore",
        "name": "appstore",
        "files": {
          "light": "appstore.svg",
          "dark": "appstore.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "Apple 应用商店",
          "en-US": "App Store"
        },
        "url": "https://www.apple.com/app-store/"
      },
      {
        "id": "avaloniaui",
        "name": "avaloniaui",
        "files": {
          "light": "avaloniaui.svg",
          "dark": "avaloniaui.svg"
        },
        "category": "Mobile Development",
        "description": {
          "zh-CN": "基于 WPF 的跨平台 XAML UI 框架",
          "en-US": "The Cross-Platform .NET UI Framework"
        },
        "url": "https://avaloniaui.net/"
      }
    ],
    "Game Development": [
      {
        "id": "unity",
        "name": "unity",
        "files": {
          "light": "unity-light.svg",
          "dark": "unity-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "跨平台游戏引擎",
          "en-US": "The world's leading platform for creating and operating interactive, real-time 3D (RT3D) content"
        },
        "url": "https://unity.com/"
      },
      {
        "id": "godot",
        "name": "godot",
        "files": {
          "light": "godot-light.svg",
          "dark": "godot-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "开源跨平台游戏引擎",
          "en-US": "Free and open source 2D and 3D game engine"
        },
        "url": "https://godotengine.org/"
      },
      {
        "id": "robloxstudio",
        "name": "robloxstudio",
        "files": {
          "light": "robloxstudio.svg",
          "dark": "robloxstudio.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "Roblox 游戏开发引擎",
          "en-US": "The tool that lets you create experiences for Roblox"
        },
        "url": "https://create.roblox.com/docs/studio"
      },
      {
        "id": "pygame",
        "name": "pygame",
        "files": {
          "light": "pygame-light.svg",
          "dark": "pygame-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "跨平台 Python 模块，专为编写视频游戏设计",
          "en-US": "A set of Python modules designed for writing video games"
        },
        "url": "https://www.pygame.org/"
      },
      {
        "id": "phaser",
        "name": "phaser",
        "files": {
          "light": "phaser-light.svg",
          "dark": "phaser-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "开源的 HTML5 游戏框架",
          "en-US": "A fast, free, and fun open source HTML5 game framework"
        },
        "url": "https://phaser.io/"
      },
      {
        "id": "bevy",
        "name": "bevy",
        "files": {
          "light": "bevy-light.svg",
          "dark": "bevy-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "使用 Rust 构建的数据驱动的游戏引擎",
          "en-US": "A refreshingly simple data-driven game engine built in Rust"
        },
        "url": "https://bevyengine.org/"
      },
      {
        "id": "defold",
        "name": "defold",
        "files": {
          "light": "defold-light.svg",
          "dark": "defold-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "免费开源的游戏引擎",
          "en-US": "A free and open game engine"
        },
        "url": "https://defold.com/"
      },
      {
        "id": "gamemakerstudio",
        "name": "gamemakerstudio",
        "files": {
          "light": "gamemakerstudio.svg",
          "dark": "gamemakerstudio.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "跨平台游戏开发引擎",
          "en-US": "Game creation tool"
        },
        "url": "https://gamemaker.io/"
      },
      {
        "id": "pyxel",
        "name": "pyxel",
        "files": {
          "light": "pyxel-light.svg",
          "dark": "pyxel-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "Python 的复古游戏引擎",
          "en-US": "A retro game engine for Python"
        },
        "url": "https://github.com/kitao/pyxel"
      },
      {
        "id": "p5js",
        "name": "p5js",
        "files": {
          "light": "p5js.svg",
          "dark": "p5js.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "为艺术家和设计师设计的 JavaScript 库",
          "en-US": "A JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!"
        },
        "url": "https://p5js.org/"
      },
      {
        "id": "haxeflixel",
        "name": "haxeflixel",
        "files": {
          "light": "haxeflixel-light.svg",
          "dark": "haxeflixel-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "基于 Haxe 的免费开源 2D 游戏引擎",
          "en-US": "Free, open source 2D game engine written in Haxe"
        },
        "url": "https://haxeflixel.com/"
      },
      {
        "id": "itchio",
        "name": "itchio",
        "files": {
          "light": "itchio-light.svg",
          "dark": "itchio-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "独立数字创作者分发平台",
          "en-US": "An open marketplace for independent digital creators with a focus on independent video games"
        },
        "url": "https://itch.io/"
      },
      {
        "id": "gdevelop",
        "name": "gdevelop",
        "files": {
          "light": "gdevelop-light.svg",
          "dark": "gdevelop-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "开源社区驱动的 2D 游戏引擎",
          "en-US": "A full-featured, open-source game development software, allowing to create HTML5 and native games without any knowledge in a specific programming language"
        },
        "url": "https://gdevelop.io/"
      },
      {
        "id": "renpy",
        "name": "renpy",
        "files": {
          "light": "renpy-light.svg",
          "dark": "renpy-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "视觉小说引擎",
          "en-US": "A visual novel engine that helps you use words, images, and sounds to tell interactive stories that run on computers and mobile devices"
        },
        "url": "https://www.renpy.org/"
      },
      {
        "id": "steam",
        "name": "steam",
        "files": {
          "light": "steam.svg",
          "dark": "steam.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "数字游戏发行平台",
          "en-US": "Digital distribution platform"
        },
        "url": "https://store.steampowered.com/"
      },
      {
        "id": "playcanvas",
        "name": "playcanvas",
        "files": {
          "light": "playcanvas.svg",
          "dark": "playcanvas.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "基于 WebGL 的开源游戏引擎",
          "en-US": "A free and open source 3D game engine/interactive 3D application engine alongside a proprietary cloud-hosted creation platform"
        },
        "url": "https://playcanvas.com/"
      },
      {
        "id": "processing",
        "name": "processing",
        "files": {
          "light": "processing-light.svg",
          "dark": "processing-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "用于学习如何编码视觉艺术的灵活软件脚本语言",
          "en-US": "A flexible software sketchbook and a language for learning how to code within the context of the visual arts"
        },
        "url": "https://processing.org/"
      },
      {
        "id": "fabricmc",
        "name": "fabricmc",
        "files": {
          "light": "fabricmc-light.svg",
          "dark": "fabricmc-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "轻量级的 Minecraft 模组加载器",
          "en-US": "A lightweight, experimental modding toolchain for Minecraft"
        },
        "url": "https://fabricmc.net/"
      },
      {
        "id": "forgemc",
        "name": "forgemc",
        "files": {
          "light": "forgemc-light.svg",
          "dark": "forgemc-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "Minecraft 模组开发 API",
          "en-US": "A free, open-source modding API for Minecraft"
        },
        "url": "https://files.minecraftforge.net/"
      },
      {
        "id": "neoforge",
        "name": "neoforge",
        "files": {
          "light": "neoforge-light.svg",
          "dark": "neoforge-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "由社区推动的灵活的 Minecraft 模组加载器",
          "en-US": "Community-driven, modern, and flexible mod loader for Minecraft"
        },
        "url": "https://neoforged.net/"
      },
      {
        "id": "quiltmc",
        "name": "quiltmc",
        "files": {
          "light": "quiltmc-light.svg",
          "dark": "quiltmc-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "由社区驱动的开源模组加载器",
          "en-US": "The Quilt Project is an open-source, community-driven modding toolchain"
        },
        "url": "https://quiltmc.org/"
      },
      {
        "id": "playfab",
        "name": "playfab",
        "files": {
          "light": "playfab-light.svg",
          "dark": "playfab-dark.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "适用于实时游戏的完整后端平台",
          "en-US": "A complete backend platform for live games"
        },
        "url": "https://playfab.com/"
      },
      {
        "id": "unrealengine",
        "name": "unrealengine",
        "files": {
          "light": "unrealengine.svg",
          "dark": "unrealengine.svg"
        },
        "category": "Game Development",
        "description": {
          "zh-CN": "虚幻引擎 (别名)",
          "en-US": "Unreal Engine (Alias)"
        },
        "url": "https://www.unrealengine.com/"
      }
    ],
    "Web3 & Blockchain": [
      {
        "id": "solana",
        "name": "solana",
        "files": {
          "light": "solana-light.svg",
          "dark": "solana-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "高性能区块链",
          "en-US": "Powerful for developers. Fast for everyone"
        },
        "url": "https://solana.com/"
      },
      {
        "id": "ethereum",
        "name": "ethereum",
        "files": {
          "light": "ethereum-light.svg",
          "dark": "ethereum-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "开源的、基于区块链技术的分布式计算平台",
          "en-US": "A decentralized open-source blockchain with smart contract functionality"
        },
        "url": "https://ethereum.org/"
      },
      {
        "id": "alchemy",
        "name": "alchemy",
        "files": {
          "light": "alchemy-light.svg",
          "dark": "alchemy-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "面向开发者的 Web3 开源框架",
          "en-US": "The web3 development platform"
        },
        "url": "https://www.alchemy.com/"
      },
      {
        "id": "chainlink",
        "name": "chainlink",
        "files": {
          "light": "chainlink-light.svg",
          "dark": "chainlink-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "去中心化的预言机网络",
          "en-US": "Decentralized Oracle Networks"
        },
        "url": "https://chain.link/"
      },
      {
        "id": "uniswap",
        "name": "uniswap",
        "files": {
          "light": "uniswap-light.svg",
          "dark": "uniswap-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "去中心化加密货币交易所",
          "en-US": "Swap, earn, and build on the leading decentralized crypto trading protocol"
        },
        "url": "https://uniswap.org/"
      },
      {
        "id": "sushiswap",
        "name": "sushiswap",
        "files": {
          "light": "sushiswap-light.svg",
          "dark": "sushiswap-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "自动化做市商加密货币交易所",
          "en-US": "A decentralized finance (DeFi) protocol with its own custom automated market maker (AMM)"
        },
        "url": "https://www.sushi.com/"
      },
      {
        "id": "pancakeswap",
        "name": "pancakeswap",
        "files": {
          "light": "pancakeswap-light.svg",
          "dark": "pancakeswap-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "去中心化交易所",
          "en-US": "The most popular AMM on BSC by user count!"
        },
        "url": "https://pancakeswap.finance/"
      },
      {
        "id": "hardhat",
        "name": "hardhat",
        "files": {
          "light": "hardhat-light.svg",
          "dark": "hardhat-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "以太坊开发环境",
          "en-US": "Ethereum development environment for professionals"
        },
        "url": "https://hardhat.org/"
      },
      {
        "id": "truffle",
        "name": "truffle",
        "files": {
          "light": "truffle-light.svg",
          "dark": "truffle-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "以太坊的开发环境、测试框架和资产通道",
          "en-US": "A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)"
        },
        "url": "https://trufflesuite.com/"
      },
      {
        "id": "ganache",
        "name": "ganache",
        "files": {
          "light": "ganache-light.svg",
          "dark": "ganache-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "用于以太坊开发的个人本地区块链",
          "en-US": "A personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests"
        },
        "url": "https://trufflesuite.com/ganache/"
      },
      {
        "id": "foundry",
        "name": "foundry",
        "files": {
          "light": "foundry-light.svg",
          "dark": "foundry-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "基于 Rust 的以太坊智能合约开发工具链",
          "en-US": "A blazing fast, portable and modular toolkit for Ethereum application development written in Rust"
        },
        "url": "https://book.getfoundry.sh/"
      },
      {
        "id": "ipfs",
        "name": "ipfs",
        "files": {
          "light": "ipfs-light.svg",
          "dark": "ipfs-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "星际文件系统",
          "en-US": "A peer-to-peer hypermedia protocol"
        },
        "url": "https://ipfs.tech/"
      },
      {
        "id": "infura",
        "name": "infura",
        "files": {
          "light": "infura.svg",
          "dark": "infura.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "Web3 和以太坊 API 服务商",
          "en-US": "The world's most powerful Web3 development platform"
        },
        "url": "https://www.infura.io/"
      },
      {
        "id": "aave",
        "name": "aave",
        "files": {
          "light": "aave-light.svg",
          "dark": "aave-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "开源且非托管的流动性协议",
          "en-US": "An open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets"
        },
        "url": "https://aave.com/"
      },
      {
        "id": "activitypub",
        "name": "activitypub",
        "files": {
          "light": "activitypub-light.svg",
          "dark": "activitypub-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "去中心化的社交网络交互协议",
          "en-US": "A decentralized social networking protocol based upon the Pump.io's ActivityPump protocol"
        },
        "url": "https://www.w3.org/TR/activitypub/"
      },
      {
        "id": "vyper",
        "name": "vyper",
        "files": {
          "light": "vyper-light.svg",
          "dark": "vyper-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "面向以太坊虚拟机的智能合约编程语言",
          "en-US": "Contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM)"
        },
        "url": "https://docs.vyperlang.org/"
      },
      {
        "id": "solidity",
        "name": "solidity",
        "files": {
          "light": "solidity.svg",
          "dark": "solidity.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "用于实现智能合约的面向对象的高级编程语言",
          "en-US": "An object-oriented, high-level language for implementing smart contracts"
        },
        "url": "https://soliditylang.org/"
      },
      {
        "id": "apeworx",
        "name": "apeworx",
        "files": {
          "light": "apeworx-light.svg",
          "dark": "apeworx-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "适用于 Python 开发者的 Web3 开发工具",
          "en-US": "The Smart Contract Development Tool for Pythonistas, Data Scientists, and Security Professionals"
        },
        "url": "https://apeworx.io/"
      },
      {
        "id": "balancer",
        "name": "balancer",
        "files": {
          "light": "balancer-light.svg",
          "dark": "balancer-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "去中心化交易所",
          "en-US": "A decentralized automated market maker (AMM) protocol built on Ethereum"
        },
        "url": "https://balancer.fi/"
      },
      {
        "id": "helia",
        "name": "helia",
        "files": {
          "light": "helia-light.svg",
          "dark": "helia-dark.svg"
        },
        "category": "Web3 & Blockchain",
        "description": {
          "zh-CN": "轻量级星际文件系统和 libp2p 的 JavaScript 实现",
          "en-US": "A lean, lightweight, and modular implementation of IPFS in JavaScript"
        },
        "url": "https://helia.io/"
      }
    ],
    "Security & Privacy": [
      {
        "id": "burpsuite",
        "name": "burpsuite",
        "files": {
          "light": "burpsuite-light.svg",
          "dark": "burpsuite-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "用于测试 Web 应用程序安全的图形化工具",
          "en-US": "The world's most widely used web app security scanner"
        },
        "url": "https://portswigger.net/burp"
      },
      {
        "id": "wireshark",
        "name": "wireshark",
        "files": {
          "light": "wireshark-light.svg",
          "dark": "wireshark-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "免费开源的网络数据包分析软件",
          "en-US": "The world's foremost and widely-used network protocol analyzer"
        },
        "url": "https://www.wireshark.org/"
      },
      {
        "id": "snyk",
        "name": "snyk",
        "files": {
          "light": "snyk-light.svg",
          "dark": "snyk-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "开源安全测试和应用程序监控平台",
          "en-US": "Developer security platform"
        },
        "url": "https://snyk.io/"
      },
      {
        "id": "keycloak",
        "name": "keycloak",
        "files": {
          "light": "keycloak.svg",
          "dark": "keycloak.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "开源身份和访问管理解决方案",
          "en-US": "Open Source Identity and Access Management"
        },
        "url": "https://www.keycloak.org/"
      },
      {
        "id": "clerk",
        "name": "clerk",
        "files": {
          "light": "clerk.svg",
          "dark": "clerk.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "专为 React、Next.js 构建的完整身份验证系统",
          "en-US": "More than authentication. Complete user management"
        },
        "url": "https://clerk.com/"
      },
      {
        "id": "betterauth",
        "name": "betterauth",
        "files": {
          "light": "betterauth-light.svg",
          "dark": "betterauth-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "全栈开源授权及身份验证框架",
          "en-US": "The most comprehensive authentication framework for TypeScript"
        },
        "url": "https://www.better-auth.com/"
      },
      {
        "id": "authenticator",
        "name": "authenticator",
        "files": {
          "light": "authenticator-light.svg",
          "dark": "authenticator-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "谷歌身份验证器",
          "en-US": "Google Authenticator"
        },
        "url": "https://safety.google/authentication/"
      },
      {
        "id": "tailscale",
        "name": "tailscale",
        "files": {
          "light": "tailscale-light.svg",
          "dark": "tailscale-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "一种基于 WireGuard 的虚拟网络，零配置的 VPN",
          "en-US": "Zero config VPN. Installs on any device in minutes, manages firewall rules for you, and works from anywhere"
        },
        "url": "https://tailscale.com/"
      },
      {
        "id": "tor",
        "name": "tor",
        "files": {
          "light": "tor-light.svg",
          "dark": "tor-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "洋葱路由器浏览器",
          "en-US": "Protect yourself against tracking, surveillance, and censorship"
        },
        "url": "https://www.torproject.org/"
      },
      {
        "id": "brave",
        "name": "brave",
        "files": {
          "light": "brave-light.svg",
          "dark": "brave-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "基于 Chromium 网页浏览器及其 Blink 排版引擎的自由及开源网页浏览器",
          "en-US": "The browser that puts you first"
        },
        "url": "https://brave.com/"
      },
      {
        "id": "proton",
        "name": "proton",
        "files": {
          "light": "proton-light.svg",
          "dark": "proton-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "提供安全的电子邮件和日历等服务的公司",
          "en-US": "Privacy by default"
        },
        "url": "https://proton.me/"
      },
      {
        "id": "hackthebox",
        "name": "hackthebox",
        "files": {
          "light": "hackthebox-light.svg",
          "dark": "hackthebox-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "网络安全培训平台",
          "en-US": "Cybersecurity Training Platform"
        },
        "url": "https://www.hackthebox.com/"
      },
      {
        "id": "tryhackme",
        "name": "tryhackme",
        "files": {
          "light": "tryhackme-light.svg",
          "dark": "tryhackme-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "网络安全学习平台",
          "en-US": "The bite-sized way to learn cyber security"
        },
        "url": "https://tryhackme.com/"
      },
      {
        "id": "logto",
        "name": "logto",
        "files": {
          "light": "logto-light.svg",
          "dark": "logto-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "面向开发者的身份验证和用户管理平台",
          "en-US": "Better Auth, Faster Build"
        },
        "url": "https://logto.io/"
      },
      {
        "id": "duckduckgo",
        "name": "duckduckgo",
        "files": {
          "light": "duckduckgo.svg",
          "dark": "duckduckgo.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "互联网隐私保护公司及搜索引擎",
          "en-US": "The internet privacy company that empowers you to seamlessly take control of your personal information online"
        },
        "url": "https://duckduckgo.com/"
      },
      {
        "id": "btlo",
        "name": "btlo",
        "files": {
          "light": "btlo-light.svg",
          "dark": "btlo-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "蓝队网络安全在线培训平台",
          "en-US": "Blue Team Labs Online"
        },
        "url": "https://blueteamlabs.online/"
      },
      {
        "id": "burn",
        "name": "burn",
        "files": {
          "light": "burn-light.svg",
          "dark": "burn-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "Burn：基于 Rust 的深度学习框架",
          "en-US": "Burn: a deep learning framework for Rust"
        },
        "url": "https://burn.dev/"
      },
      {
        "id": "aqua",
        "name": "aqua",
        "files": {
          "light": "aqua-light.svg",
          "dark": "aqua-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "云原生安全平台",
          "en-US": "Cloud Native Security"
        },
        "url": "https://www.aquasec.com/"
      },
      {
        "id": "arcjet",
        "name": "arcjet",
        "files": {
          "light": "arcjet-light.svg",
          "dark": "arcjet-dark.svg"
        },
        "category": "Security & Privacy",
        "description": {
          "zh-CN": "面向开发人员的安全平台",
          "en-US": "Security for developers"
        },
        "url": "https://arcjet.com/"
      }
    ],
    "Design & Creative": [
      {
        "id": "figma",
        "name": "figma",
        "files": {
          "light": "figma-light.svg",
          "dark": "figma-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "协作式 UI/UX 设计工具",
          "en-US": "The collaborative interface design tool"
        },
        "url": "https://www.figma.com/"
      },
      {
        "id": "xd",
        "name": "xd",
        "files": {
          "light": "xd.svg",
          "dark": "xd.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 的 UI/UX 设计和原型制作工具",
          "en-US": "UI/UX design and collaboration tool from Adobe"
        },
        "url": "https://www.adobe.com/products/xd.html"
      },
      {
        "id": "canva",
        "name": "canva",
        "files": {
          "light": "canva-light.svg",
          "dark": "canva-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "在线图形设计平台",
          "en-US": "Visual communication platform for everyone"
        },
        "url": "https://www.canva.com/"
      },
      {
        "id": "photoshop",
        "name": "photoshop",
        "files": {
          "light": "photoshop.svg",
          "dark": "photoshop.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业图像编辑与图形设计软件",
          "en-US": "Professional image editing and graphic design software"
        },
        "url": "https://www.adobe.com/products/photoshop.html"
      },
      {
        "id": "illustrator",
        "name": "illustrator",
        "files": {
          "light": "illustrator.svg",
          "dark": "illustrator.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业矢量图形编辑软件",
          "en-US": "Professional vector graphics editor"
        },
        "url": "https://www.adobe.com/products/illustrator.html"
      },
      {
        "id": "indesign",
        "name": "indesign",
        "files": {
          "light": "indesign.svg",
          "dark": "indesign.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业排版和页面设计软件",
          "en-US": "Professional page design and layout software"
        },
        "url": "https://www.adobe.com/products/indesign.html"
      },
      {
        "id": "aftereffects",
        "name": "aftereffects",
        "files": {
          "light": "aftereffects.svg",
          "dark": "aftereffects.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业视频合成及动态图形软件",
          "en-US": "Professional motion graphics and visual effects software"
        },
        "url": "https://www.adobe.com/products/aftereffects.html"
      },
      {
        "id": "premiere",
        "name": "premiere",
        "files": {
          "light": "premiere.svg",
          "dark": "premiere.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业视频剪辑软件",
          "en-US": "Professional video editing software"
        },
        "url": "https://www.adobe.com/products/premiere.html"
      },
      {
        "id": "lightroom",
        "name": "lightroom",
        "files": {
          "light": "lightroom.svg",
          "dark": "lightroom.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业照片编辑和管理软件",
          "en-US": "Professional photo editing and organizing software"
        },
        "url": "https://www.adobe.com/products/photoshop-lightroom.html"
      },
      {
        "id": "blender",
        "name": "blender",
        "files": {
          "light": "blender-light.svg",
          "dark": "blender-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源的三维创作套件",
          "en-US": "Free and open source 3D creation suite"
        },
        "url": "https://www.blender.org/"
      },
      {
        "id": "inkscape",
        "name": "inkscape",
        "files": {
          "light": "inkscape-light.svg",
          "dark": "inkscape-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源矢量图形编辑器",
          "en-US": "Free and open-source vector graphics editor"
        },
        "url": "https://inkscape.org/"
      },
      {
        "id": "gimp",
        "name": "gimp",
        "files": {
          "light": "gimp-light.svg",
          "dark": "gimp-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源图像编辑软件",
          "en-US": "Free & Open Source image editor"
        },
        "url": "https://www.gimp.org/"
      },
      {
        "id": "aseprite",
        "name": "aseprite",
        "files": {
          "light": "aseprite-light.svg",
          "dark": "aseprite-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业像素绘图与动画创作工具",
          "en-US": "Animated sprite editor & pixel art tool"
        },
        "url": "https://www.aseprite.org/"
      },
      {
        "id": "ableton",
        "name": "ableton",
        "files": {
          "light": "ableton-light.svg",
          "dark": "ableton-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业音乐制作软件",
          "en-US": "Software for music creation and performance"
        },
        "url": "https://www.ableton.com/"
      },
      {
        "id": "audacity",
        "name": "audacity",
        "files": {
          "light": "audacity-light.svg",
          "dark": "audacity-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源的音频编辑软件",
          "en-US": "Free, open source, cross-platform audio software"
        },
        "url": "https://www.audacityteam.org/"
      },
      {
        "id": "audition",
        "name": "audition",
        "files": {
          "light": "audition.svg",
          "dark": "audition.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 专业音频编辑软件",
          "en-US": "Professional audio workstation from Adobe"
        },
        "url": "https://www.adobe.com/products/audition.html"
      },
      {
        "id": "obs",
        "name": "obs",
        "files": {
          "light": "obs-light.svg",
          "dark": "obs-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源的直播和录屏软件",
          "en-US": "Free and open source software for video recording and live streaming"
        },
        "url": "https://obsproject.com/"
      },
      {
        "id": "kdenlive",
        "name": "kdenlive",
        "files": {
          "light": "kdenlive-light.svg",
          "dark": "kdenlive-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源的视频编辑软件",
          "en-US": "Free and open source video editor"
        },
        "url": "https://kdenlive.org/"
      },
      {
        "id": "davinci",
        "name": "davinci",
        "files": {
          "light": "davinci.svg",
          "dark": "davinci.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业视频剪辑与调色软件",
          "en-US": "Professional video editing, color correction, visual effects and audio post production"
        },
        "url": "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        "id": "mediaencoder",
        "name": "mediaencoder",
        "files": {
          "light": "mediaencoder.svg",
          "dark": "mediaencoder.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 媒体编码软件",
          "en-US": "Adobe media encoding software for video and audio"
        },
        "url": "https://www.adobe.com/products/mediaencoder.html"
      },
      {
        "id": "animate",
        "name": "animate",
        "files": {
          "light": "animate.svg",
          "dark": "animate.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 二维动画制作工具",
          "en-US": "Create interactive animations and multimedia content"
        },
        "url": "https://www.adobe.com/products/animate.html"
      },
      {
        "id": "capture",
        "name": "capture",
        "files": {
          "light": "capture.svg",
          "dark": "capture.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 移动端创意素材采集工具",
          "en-US": "Turn your surroundings into unique assets"
        },
        "url": "https://www.adobe.com/products/capture.html"
      },
      {
        "id": "incopy",
        "name": "incopy",
        "files": {
          "light": "incopy.svg",
          "dark": "incopy.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 协作文字编辑工具",
          "en-US": "Adobe's professional writing and editing tool"
        },
        "url": "https://www.adobe.com/products/incopy.html"
      },
      {
        "id": "bridge",
        "name": "bridge",
        "files": {
          "light": "bridge.svg",
          "dark": "bridge.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 数字资产管理工具",
          "en-US": "Creative asset management tool from Adobe"
        },
        "url": "https://www.adobe.com/products/bridge.html"
      },
      {
        "id": "affinity",
        "name": "affinity",
        "files": {
          "light": "affinity.svg",
          "dark": "affinity.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业创意设计软件套件",
          "en-US": "Professional creative software suite"
        },
        "url": "https://affinity.serif.com/"
      },
      {
        "id": "lightroomclassic",
        "name": "lightroomclassic",
        "files": {
          "light": "lightroomclassic.svg",
          "dark": "lightroomclassic.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe Lightroom 本地版专业照片编辑管理工具",
          "en-US": "Desktop-focused professional photo editing and organizing software"
        },
        "url": "https://www.adobe.com/products/photoshop-lightroom-classic.html"
      },
      {
        "id": "lunacy",
        "name": "lunacy",
        "files": {
          "light": "lunacy.svg",
          "dark": "lunacy.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费的 Sketch 文件 UI 设计工具",
          "en-US": "Free design software that works with Sketch files"
        },
        "url": "https://icons8.com/lunacy"
      },
      {
        "id": "manim",
        "name": "manim",
        "files": {
          "light": "manim-light.svg",
          "dark": "manim-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "用于创建数学动画的 Python 库",
          "en-US": "Mathematical animation engine for creating explanatory videos"
        },
        "url": "https://www.manim.community/"
      },
      {
        "id": "photoshopclassic",
        "name": "photoshopclassic",
        "files": {
          "light": "photoshopclassic.svg",
          "dark": "photoshopclassic.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe Photoshop (别名)",
          "en-US": "Adobe Photoshop (Alias)"
        },
        "url": "https://www.adobe.com/products/photoshop.html"
      },
      {
        "id": "photoshopexpress",
        "name": "photoshopexpress",
        "files": {
          "light": "photoshopexpress.svg",
          "dark": "photoshopexpress.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe Photoshop 移动端快速图片编辑应用",
          "en-US": "Fast and easy photo editing for mobile devices"
        },
        "url": "https://www.adobe.com/products/photoshop-express.html"
      },
      {
        "id": "premiererush",
        "name": "premiererush",
        "files": {
          "light": "premiererush.svg",
          "dark": "premiererush.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 移动端快速视频编辑软件",
          "en-US": "Fast and easy video editing from Adobe"
        },
        "url": "https://www.adobe.com/products/premiere-rush.html"
      },
      {
        "id": "sketchup",
        "name": "sketchup",
        "files": {
          "light": "sketchup-light.svg",
          "dark": "sketchup-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "三维建模软件",
          "en-US": "3D modeling software for architecture, interior design and more"
        },
        "url": "https://www.sketchup.com/"
      },
      {
        "id": "touchdesigner",
        "name": "touchdesigner",
        "files": {
          "light": "touchdesigner-light.svg",
          "dark": "touchdesigner-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "实时视觉创作与交互媒体软件",
          "en-US": "A visual development platform for real-time projects"
        },
        "url": "https://derivative.ca/"
      },
      {
        "id": "vegaspro",
        "name": "vegaspro",
        "files": {
          "light": "vegaspro.svg",
          "dark": "vegaspro.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业视频编辑软件",
          "en-US": "Professional video editing software"
        },
        "url": "https://www.vegascreativesoftware.com/us/vegas-pro/"
      },
      {
        "id": "svg",
        "name": "svg",
        "files": {
          "light": "svg-light.svg",
          "dark": "svg-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "可缩放矢量图形格式",
          "en-US": "Scalable Vector Graphics, an XML-based vector image format"
        },
        "url": "https://en.wikipedia.org/wiki/SVG"
      },
      {
        "id": "stock",
        "name": "stock",
        "files": {
          "light": "stock.svg",
          "dark": "stock.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 正版图片素材库",
          "en-US": "High-quality photos, videos, and other creative assets from Adobe"
        },
        "url": "https://stock.adobe.com/"
      },
      {
        "id": "ffmpeg",
        "name": "ffmpeg",
        "files": {
          "light": "ffmpeg-light.svg",
          "dark": "ffmpeg-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "跨平台的音视频处理工具与库",
          "en-US": "A complete, cross-platform solution to record, convert and stream audio and video"
        },
        "url": "https://ffmpeg.org/"
      },
      {
        "id": "filmora",
        "name": "filmora",
        "files": {
          "light": "filmora-light.svg",
          "dark": "filmora-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "易用的视频编辑软件",
          "en-US": "Easy-to-use video editing software"
        },
        "url": "https://filmora.wondershare.com/"
      },
      {
        "id": "flameshot",
        "name": "flameshot",
        "files": {
          "light": "flameshot.svg",
          "dark": "flameshot.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "功能强大且易用的截图工具",
          "en-US": "Powerful yet simple to use screenshot software"
        },
        "url": "https://flameshot.org/"
      },
      {
        "id": "dimension",
        "name": "dimension",
        "files": {
          "light": "dimension.svg",
          "dark": "dimension.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 三维合成与渲染工具",
          "en-US": "Create high-quality, photorealistic 3D imagery from Adobe"
        },
        "url": "https://www.adobe.com/products/dimension.html"
      },
      {
        "id": "fonts",
        "name": "fonts",
        "files": {
          "light": "fonts.svg",
          "dark": "fonts.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 字体服务，提供海量高质量字体",
          "en-US": "A subscription font service from Adobe with thousands of fonts"
        },
        "url": "https://fonts.adobe.com/"
      },
      {
        "id": "fresco",
        "name": "fresco",
        "files": {
          "light": "fresco.svg",
          "dark": "fresco.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 自然媒介绘画应用",
          "en-US": "Painting and drawing app from Adobe for iPad and iPhone"
        },
        "url": "https://www.adobe.com/products/fresco.html"
      },
      {
        "id": "freecad",
        "name": "freecad",
        "files": {
          "light": "freecad-light.svg",
          "dark": "freecad-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "免费开源的参数化三维 CAD 建模软件",
          "en-US": "Free and open-source parametric 3D CAD modeler"
        },
        "url": "https://www.freecad.org/"
      },
      {
        "id": "catppuccin",
        "name": "catppuccin",
        "files": {
          "light": "catppuccin-light.svg",
          "dark": "catppuccin-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "社区驱动的柔和色彩主题",
          "en-US": "Community-driven pastel theme for various apps"
        },
        "url": "https://github.com/catppuccin/catppuccin"
      },
      {
        "id": "liquidsoap",
        "name": "liquidsoap",
        "files": {
          "light": "liquidsoap-light.svg",
          "dark": "liquidsoap-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "用于音频流媒体的编程语言和工具",
          "en-US": "A powerful and flexible streaming language for audio and video"
        },
        "url": "https://www.liquidsoap.info/"
      },
      {
        "id": "max8",
        "name": "max8",
        "files": {
          "light": "max8.svg",
          "dark": "max8.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "交互式音乐与媒体软件",
          "en-US": "Interactive music and media development environment"
        },
        "url": "https://cycling74.com/products/max"
      },
      {
        "id": "max9",
        "name": "max9",
        "files": {
          "light": "max9.svg",
          "dark": "max9.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "交互式音乐与媒体软件",
          "en-US": "Interactive music and media development environment"
        },
        "url": "https://cycling74.com/products/max"
      },
      {
        "id": "mux",
        "name": "mux",
        "files": {
          "light": "mux-light.svg",
          "dark": "mux-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "面向开发者的视频数据和流媒体平台",
          "en-US": "API-first video platform for developers"
        },
        "url": "https://www.mux.com/"
      },
      {
        "id": "daft",
        "name": "daft",
        "files": {
          "light": "daft-light.svg",
          "dark": "daft-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Daft 设计工具",
          "en-US": "A design toolkit"
        },
        "url": "https://www.daft.design/"
      },
      {
        "id": "ansys",
        "name": "ansys",
        "files": {
          "light": "ansys-light.svg",
          "dark": "ansys-dark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "工程仿真与数字孪生软件",
          "en-US": "Engineering simulation and digital twin software"
        },
        "url": "https://www.ansys.com/"
      },
      {
        "id": "aero",
        "name": "aero",
        "files": {
          "light": "aero.svg",
          "dark": "aero.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 增强现实创作工具",
          "en-US": "Create and share immersive augmented reality experiences"
        },
        "url": "https://www.adobe.com/products/aero.html"
      },
      {
        "id": "adobespark",
        "name": "adobespark",
        "files": {
          "light": "adobespark.svg",
          "dark": "adobespark.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 在线图形设计与内容创作工具（现名 Adobe Express）",
          "en-US": "Adobe's quick content creation tool (now Adobe Express)"
        },
        "url": "https://www.adobe.com/express/"
      },
      {
        "id": "behance",
        "name": "behance",
        "files": {
          "light": "behance.svg",
          "dark": "behance.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "专业创意作品展示与社交平台",
          "en-US": "Adobe's online platform to showcase and discover creative work"
        },
        "url": "https://www.behance.net/"
      },
      {
        "id": "characteranimator",
        "name": "characteranimator",
        "files": {
          "light": "characteranimator.svg",
          "dark": "characteranimator.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 实时角色动画软件",
          "en-US": "Real-time character animation software from Adobe"
        },
        "url": "https://www.adobe.com/products/character-animator.html"
      },
      {
        "id": "creativecloud",
        "name": "creativecloud",
        "files": {
          "light": "creativecloud.svg",
          "dark": "creativecloud.svg"
        },
        "category": "Design & Creative",
        "description": {
          "zh-CN": "Adobe 创意云服务，提供全套创意应用的订阅服务",
          "en-US": "Adobe's subscription service for all creative applications"
        },
        "url": "https://www.adobe.com/creativecloud.html"
      }
    ],
    "Editors & IDEs": [
      {
        "id": "vscode",
        "name": "vscode",
        "files": {
          "light": "vscode-light.svg",
          "dark": "vscode-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "微软轻量级代码编辑器",
          "en-US": "Code editing, redefined. Free, built on open source. Runs everywhere."
        },
        "url": "https://code.visualstudio.com/"
      },
      {
        "id": "visualstudio",
        "name": "visualstudio",
        "files": {
          "light": "visualstudio-light.svg",
          "dark": "visualstudio-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "微软全功能集成开发环境",
          "en-US": "IDE for .NET and C++ developers on Windows"
        },
        "url": "https://visualstudio.microsoft.com/"
      },
      {
        "id": "pycharm",
        "name": "pycharm",
        "files": {
          "light": "pycharm-light.svg",
          "dark": "pycharm-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains Python 集成开发环境",
          "en-US": "The Python IDE for Professional Developers"
        },
        "url": "https://www.jetbrains.com/pycharm/"
      },
      {
        "id": "webstorm",
        "name": "webstorm",
        "files": {
          "light": "webstorm-light.svg",
          "dark": "webstorm-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains Javascript 和 TypeScript 集成开发环境",
          "en-US": "The smartest JavaScript IDE"
        },
        "url": "https://www.jetbrains.com/webstorm/"
      },
      {
        "id": "phpstorm",
        "name": "phpstorm",
        "files": {
          "light": "phpstorm-light.svg",
          "dark": "phpstorm-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains PHP 集成开发环境",
          "en-US": "The Lightning-Smart IDE for PHP Development"
        },
        "url": "https://www.jetbrains.com/phpstorm/"
      },
      {
        "id": "rider",
        "name": "rider",
        "files": {
          "light": "rider-light.svg",
          "dark": "rider-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains .NET 和 C# 集成开发环境",
          "en-US": "The .NET and GameDev IDE"
        },
        "url": "https://www.jetbrains.com/rider/"
      },
      {
        "id": "goland",
        "name": "goland",
        "files": {
          "light": "goland-light.svg",
          "dark": "goland-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains Go 语言集成开发环境",
          "en-US": "The complete IDE for Go development"
        },
        "url": "https://www.jetbrains.com/go/"
      },
      {
        "id": "clion",
        "name": "clion",
        "files": {
          "light": "clion-light.svg",
          "dark": "clion-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains C 和 C++ 集成开发环境",
          "en-US": "Smart cross-platform IDE for C and C++"
        },
        "url": "https://www.jetbrains.com/clion/"
      },
      {
        "id": "androidstudio",
        "name": "androidstudio",
        "files": {
          "light": "androidstudio-light.svg",
          "dark": "androidstudio-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "谷歌 Android 官方集成开发环境",
          "en-US": "The official IDE for Android app development"
        },
        "url": "https://developer.android.com/studio"
      },
      {
        "id": "xcode",
        "name": "xcode",
        "files": {
          "light": "xcode-light.svg",
          "dark": "xcode-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "Apple macOS/iOS 官方集成开发环境",
          "en-US": "The essential tool for building Apple platform apps"
        },
        "url": "https://developer.apple.com/xcode/"
      },
      {
        "id": "sublime",
        "name": "sublime",
        "files": {
          "light": "sublime-light.svg",
          "dark": "sublime-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "轻量级代码编辑器",
          "en-US": "A sophisticated text editor for code, markup and prose"
        },
        "url": "https://www.sublimetext.com/"
      },
      {
        "id": "atom",
        "name": "atom",
        "files": {
          "light": "atom.svg",
          "dark": "atom.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "GitHub 开源代码编辑器（已归档）",
          "en-US": "A hackable text editor for the 21st Century (Archived)"
        },
        "url": "https://atom-editor.cc/"
      },
      {
        "id": "vim",
        "name": "vim",
        "files": {
          "light": "vim-light.svg",
          "dark": "vim-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "高度可配置的终端文本编辑器",
          "en-US": "The ubiquitous text editor"
        },
        "url": "https://www.vim.org/"
      },
      {
        "id": "neovim",
        "name": "neovim",
        "files": {
          "light": "neovim-light.svg",
          "dark": "neovim-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "Vim 的现代化扩展版本",
          "en-US": "Hyperextensible Vim-based text editor"
        },
        "url": "https://neovim.io/"
      },
      {
        "id": "emacs",
        "name": "emacs",
        "files": {
          "light": "emacs.svg",
          "dark": "emacs.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "可高度扩展的文本编辑器",
          "en-US": "An extensible, customizable, free/libre text editor"
        },
        "url": "https://www.gnu.org/software/emacs/"
      },
      {
        "id": "notepadpp",
        "name": "notepadpp",
        "files": {
          "light": "notepadpp-light.svg",
          "dark": "notepadpp-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "Windows 上的免费代码编辑器",
          "en-US": "Free source code editor and Notepad replacement"
        },
        "url": "https://notepad-plus-plus.org/"
      },
      {
        "id": "eclipse",
        "name": "eclipse",
        "files": {
          "light": "eclipse-light.svg",
          "dark": "eclipse-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "开源 Java 集成开发环境",
          "en-US": "The Leading Open Platform for Professional Developers"
        },
        "url": "https://www.eclipse.org/"
      },
      {
        "id": "zed",
        "name": "zed",
        "files": {
          "light": "zed-light.svg",
          "dark": "zed-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "高性能多人协作代码编辑器",
          "en-US": "High-performance, multiplayer code editor"
        },
        "url": "https://zed.dev/"
      },
      {
        "id": "cursor",
        "name": "cursor",
        "files": {
          "light": "cursor-light.svg",
          "dark": "cursor-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "AI 驱动的代码编辑器",
          "en-US": "The AI code editor"
        },
        "url": "https://www.cursor.com/"
      },
      {
        "id": "fleet",
        "name": "fleet",
        "files": {
          "light": "fleet-light.svg",
          "dark": "fleet-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains 下一代代码编辑器",
          "en-US": "Next-generation IDE by JetBrains"
        },
        "url": "https://www.jetbrains.com/fleet/"
      },
      {
        "id": "helix",
        "name": "helix",
        "files": {
          "light": "helix-light.svg",
          "dark": "helix-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "后现代终端文本编辑器",
          "en-US": "A post-modern modal text editor"
        },
        "url": "https://helix-editor.com/"
      },
      {
        "id": "qt",
        "name": "qt",
        "files": {
          "light": "qt-light.svg",
          "dark": "qt-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "跨平台 C++ 应用开发框架",
          "en-US": "The cross-platform C++ application framework"
        },
        "url": "https://www.qt.io/"
      },
      {
        "id": "kakoune",
        "name": "kakoune",
        "files": {
          "light": "kakoune-light.svg",
          "dark": "kakoune-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "面向 Unix 哲学的模式文本编辑器",
          "en-US": "Mode-based text editor inspired by Vim with a Unix philosophy"
        },
        "url": "https://kakoune.org/"
      },
      {
        "id": "lazyvim",
        "name": "lazyvim",
        "files": {
          "light": "lazyvim-light.svg",
          "dark": "lazyvim-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "开箱即用的 Neovim 配置",
          "en-US": "A Neovim setup powered by lazy.nvim"
        },
        "url": "https://www.lazyvim.org/"
      },
      {
        "id": "idea",
        "name": "idea",
        "files": {
          "light": "idea-light.svg",
          "dark": "idea-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "IntelliJ IDEA (别名)",
          "en-US": "IntelliJ IDEA (Alias)"
        },
        "url": "https://www.jetbrains.com/idea/"
      },
      {
        "id": "pulsar",
        "name": "pulsar",
        "files": {
          "light": "pulsar-light.svg",
          "dark": "pulsar-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "社区主导的 Atom 继任代码编辑器",
          "en-US": "A Community-led Hyper-Hackable Text Editor"
        },
        "url": "https://pulsar-edit.dev/"
      },
      {
        "id": "resharper",
        "name": "resharper",
        "files": {
          "light": "resharper-light.svg",
          "dark": "resharper-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "Visual Studio 的 .NET 代码质量工具",
          "en-US": "The Visual Studio Extension for .NET Developers by JetBrains"
        },
        "url": "https://www.jetbrains.com/resharper/"
      },
      {
        "id": "rubymine",
        "name": "rubymine",
        "files": {
          "light": "rubymine-light.svg",
          "dark": "rubymine-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains Ruby 和 Rails 集成开发环境",
          "en-US": "The Most Intelligent Ruby and Rails IDE"
        },
        "url": "https://www.jetbrains.com/ruby/"
      },
      {
        "id": "rustrover",
        "name": "rustrover",
        "files": {
          "light": "rustrover-light.svg",
          "dark": "rustrover-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains Rust 集成开发环境",
          "en-US": "JetBrains IDE for Rust development"
        },
        "url": "https://www.jetbrains.com/rust/"
      },
      {
        "id": "vscodeinsiders",
        "name": "vscodeinsiders",
        "files": {
          "light": "vscodeinsiders-light.svg",
          "dark": "vscodeinsiders-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "VS Code 的每日构建预览版本",
          "en-US": "Daily builds of Visual Studio Code with new features and bug fixes"
        },
        "url": "https://code.visualstudio.com/insiders/"
      },
      {
        "id": "vscodium",
        "name": "vscodium",
        "files": {
          "light": "vscodium-light.svg",
          "dark": "vscodium-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "VS Code 的免费开源二进制版本（去除遥测）",
          "en-US": "Free/Libre Open Source Software Binaries of VSCode without telemetry"
        },
        "url": "https://vscodium.com/"
      },
      {
        "id": "datagrip",
        "name": "datagrip",
        "files": {
          "light": "datagrip-light.svg",
          "dark": "datagrip-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains 数据库和 SQL 开发工具",
          "en-US": "Many databases, one tool by JetBrains"
        },
        "url": "https://www.jetbrains.com/datagrip/"
      },
      {
        "id": "dataspell",
        "name": "dataspell",
        "files": {
          "light": "dataspell-light.svg",
          "dark": "dataspell-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains 数据科学集成开发环境",
          "en-US": "IDE for Data Scientists by JetBrains"
        },
        "url": "https://www.jetbrains.com/dataspell/"
      },
      {
        "id": "dreamweaver",
        "name": "dreamweaver",
        "files": {
          "light": "dreamweaver.svg",
          "dark": "dreamweaver.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "Adobe 可视化 Web 开发工具",
          "en-US": "Professional web design and development tool from Adobe"
        },
        "url": "https://www.adobe.com/products/dreamweaver.html"
      },
      {
        "id": "codeblocks",
        "name": "codeblocks",
        "files": {
          "light": "codeblocks-light.svg",
          "dark": "codeblocks-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "免费的 C/C++ 集成开发环境",
          "en-US": "Free C/C++ and Fortran IDE"
        },
        "url": "https://www.codeblocks.org/"
      },
      {
        "id": "nova",
        "name": "nova",
        "files": {
          "light": "nova.svg",
          "dark": "nova.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "为 macOS 打造的原生代码编辑器",
          "en-US": "The native Mac code editor"
        },
        "url": "https://nova.app/"
      },
      {
        "id": "appcode",
        "name": "appcode",
        "files": {
          "light": "appcode-light.svg",
          "dark": "appcode-dark.svg"
        },
        "category": "Editors & IDEs",
        "description": {
          "zh-CN": "JetBrains iOS/macOS 集成开发环境（已归档）",
          "en-US": "JetBrains IDE for iOS/macOS development (Archived)"
        },
        "url": "https://www.jetbrains.com/objc/"
      }
    ],
    "Operating Systems": [
      {
        "id": "linux",
        "name": "linux",
        "files": {
          "light": "linux-light.svg",
          "dark": "linux-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "开源 Linux 内核",
          "en-US": "The open-source Linux kernel"
        },
        "url": "https://www.kernel.org/"
      },
      {
        "id": "ubuntu",
        "name": "ubuntu",
        "files": {
          "light": "ubuntu.svg",
          "dark": "ubuntu.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "流行的桌面/服务器 Linux 发行版",
          "en-US": "Popular Linux distribution for desktops and servers"
        },
        "url": "https://ubuntu.com/"
      },
      {
        "id": "debian",
        "name": "debian",
        "files": {
          "light": "debian.svg",
          "dark": "debian.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "稳定的 Linux 发行版",
          "en-US": "The universal operating system"
        },
        "url": "https://www.debian.org/"
      },
      {
        "id": "arch",
        "name": "arch",
        "files": {
          "light": "arch-light.svg",
          "dark": "arch-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "轻量级滚动更新 Linux 发行版",
          "en-US": "A lightweight rolling-release Linux distribution"
        },
        "url": "https://archlinux.org/"
      },
      {
        "id": "centos",
        "name": "centos",
        "files": {
          "light": "centos-light.svg",
          "dark": "centos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "基于 Red Hat 的 Linux 服务器发行版",
          "en-US": "Community Enterprise Operating System"
        },
        "url": "https://www.centos.org/"
      },
      {
        "id": "fedora",
        "name": "fedora",
        "files": {
          "light": "fedora-light.svg",
          "dark": "fedora-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "由 Red Hat 赞助的 Linux 发行版",
          "en-US": "Linux-based operating system sponsored by Red Hat"
        },
        "url": "https://fedoraproject.org/"
      },
      {
        "id": "kali",
        "name": "kali",
        "files": {
          "light": "kali-light.svg",
          "dark": "kali-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "专为渗透测试设计的 Linux 发行版",
          "en-US": "Linux distribution for penetration testing and security research"
        },
        "url": "https://www.kali.org/"
      },
      {
        "id": "windows",
        "name": "windows",
        "files": {
          "light": "windows-light.svg",
          "dark": "windows-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "微软 Windows 操作系统",
          "en-US": "Microsoft's widely-used operating system"
        },
        "url": "https://www.microsoft.com/windows/"
      },
      {
        "id": "macos",
        "name": "macos",
        "files": {
          "light": "macos-light.svg",
          "dark": "macos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Apple Mac 电脑操作系统",
          "en-US": "Apple's Unix-based operating system for Mac computers"
        },
        "url": "https://www.apple.com/macos/"
      },
      {
        "id": "gnome",
        "name": "gnome",
        "files": {
          "light": "gnome-light.svg",
          "dark": "gnome-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Linux 常用桌面环境",
          "en-US": "Free and open-source desktop environment for Linux"
        },
        "url": "https://www.gnome.org/"
      },
      {
        "id": "kde",
        "name": "kde",
        "files": {
          "light": "kde-light.svg",
          "dark": "kde-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "功能丰富的 Linux 桌面环境",
          "en-US": "Feature-rich desktop environment and platform"
        },
        "url": "https://kde.org/"
      },
      {
        "id": "i3",
        "name": "i3",
        "files": {
          "light": "i3-light.svg",
          "dark": "i3-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "平铺式 Linux 窗口管理器",
          "en-US": "A tiling window manager for Linux"
        },
        "url": "https://i3wm.org/"
      },
      {
        "id": "hyprland",
        "name": "hyprland",
        "files": {
          "light": "hyprland-light.svg",
          "dark": "hyprland-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "基于 Wayland 的动态平铺窗口管理器",
          "en-US": "A dynamic tiling Wayland compositor"
        },
        "url": "https://hyprland.org/"
      },
      {
        "id": "popos",
        "name": "popos",
        "files": {
          "light": "popos.svg",
          "dark": "popos.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "System76 开发的 Linux 发行版",
          "en-US": "Linux distribution designed for developers by System76"
        },
        "url": "https://pop.system76.com/"
      },
      {
        "id": "nixos",
        "name": "nixos",
        "files": {
          "light": "nixos-light.svg",
          "dark": "nixos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "基于 Nix 包管理器的声明式 Linux 发行版",
          "en-US": "Linux distribution based on the Nix package manager"
        },
        "url": "https://nixos.org/"
      },
      {
        "id": "mint",
        "name": "mint",
        "files": {
          "light": "mint-light.svg",
          "dark": "mint-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "面向新用户的 Linux 发行版",
          "en-US": "User-friendly Linux distribution based on Ubuntu"
        },
        "url": "https://linuxmint.com/"
      },
      {
        "id": "manjaro",
        "name": "manjaro",
        "files": {
          "light": "manjaro.svg",
          "dark": "manjaro.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "基于 Arch Linux 的用户友好发行版",
          "en-US": "User-friendly Linux distribution based on Arch"
        },
        "url": "https://manjaro.org/"
      },
      {
        "id": "gentoo",
        "name": "gentoo",
        "files": {
          "light": "gentoo-light.svg",
          "dark": "gentoo-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "源代码编译安装的 Linux 发行版",
          "en-US": "Highly flexible, source-based Linux distribution"
        },
        "url": "https://www.gentoo.org/"
      },
      {
        "id": "bsd",
        "name": "bsd",
        "files": {
          "light": "bsd-light.svg",
          "dark": "bsd-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "伯克利软件套件，类 Unix 操作系统",
          "en-US": "Berkeley Software Distribution, a Unix-like operating system"
        },
        "url": "https://en.wikipedia.org/wiki/Berkeley_Software_Distribution"
      },
      {
        "id": "wsl",
        "name": "wsl",
        "files": {
          "light": "wsl-light.svg",
          "dark": "wsl-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Windows 下的 Linux 子系统",
          "en-US": "Run Linux environments directly in Windows"
        },
        "url": "https://learn.microsoft.com/en-us/windows/wsl/"
      },
      {
        "id": "warp",
        "name": "warp",
        "files": {
          "light": "warp-light.svg",
          "dark": "warp-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "现代终端工具",
          "en-US": "The terminal reimagined with AI and collaborative tools"
        },
        "url": "https://www.warp.dev/"
      },
      {
        "id": "wezterm",
        "name": "wezterm",
        "files": {
          "light": "wezterm-light.svg",
          "dark": "wezterm-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "GPU 加速跨平台终端模拟器",
          "en-US": "A GPU-accelerated cross-platform terminal emulator"
        },
        "url": "https://wezfurlong.org/wezterm/"
      },
      {
        "id": "alacritty",
        "name": "alacritty",
        "files": {
          "light": "alacritty-light.svg",
          "dark": "alacritty-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "GPU 加速终端模拟器",
          "en-US": "A cross-platform, GPU-accelerated terminal emulator"
        },
        "url": "https://alacritty.org/"
      },
      {
        "id": "kitty",
        "name": "kitty",
        "files": {
          "light": "kitty-light.svg",
          "dark": "kitty-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "快速、功能丰富的 GPU 加速终端",
          "en-US": "Fast, feature-rich, GPU based terminal emulator"
        },
        "url": "https://sw.kovidgoyal.net/kitty/"
      },
      {
        "id": "tmux",
        "name": "tmux",
        "files": {
          "light": "tmux-light.svg",
          "dark": "tmux-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "终端复用器，允许在多个终端窗口间切换",
          "en-US": "Terminal multiplexer"
        },
        "url": "https://github.com/tmux/tmux"
      },
      {
        "id": "zellij",
        "name": "zellij",
        "files": {
          "light": "zellij-light.svg",
          "dark": "zellij-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "现代化终端工作区与复用器",
          "en-US": "A terminal workspace with batteries included"
        },
        "url": "https://zellij.dev/"
      },
      {
        "id": "htop",
        "name": "htop",
        "files": {
          "light": "htop-light.svg",
          "dark": "htop-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "交互式系统进程监视器",
          "en-US": "Interactive process viewer for Unix systems"
        },
        "url": "https://htop.dev/"
      },
      {
        "id": "lxc",
        "name": "lxc",
        "files": {
          "light": "lxc-light.svg",
          "dark": "lxc-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Linux 系统级容器技术",
          "en-US": "Linux Containers, an OS-level virtualization technology"
        },
        "url": "https://linuxcontainers.org/"
      },
      {
        "id": "systemd",
        "name": "systemd",
        "files": {
          "light": "systemd-light.svg",
          "dark": "systemd-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Linux 系统初始化和服务管理器",
          "en-US": "System and service manager for Linux"
        },
        "url": "https://systemd.io/"
      },
      {
        "id": "putty",
        "name": "putty",
        "files": {
          "light": "putty-light.svg",
          "dark": "putty-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Windows 上的 SSH/Telnet 客户端",
          "en-US": "Free SSH and Telnet client for Windows"
        },
        "url": "https://www.putty.org/"
      },
      {
        "id": "qemu",
        "name": "qemu",
        "files": {
          "light": "qemu-light.svg",
          "dark": "qemu-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "通用的开源机器仿真和虚拟化软件",
          "en-US": "Generic and open source machine emulator and virtualizer"
        },
        "url": "https://www.qemu.org/"
      },
      {
        "id": "qubesos",
        "name": "qubesos",
        "files": {
          "light": "qubesos-light.svg",
          "dark": "qubesos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "以安全为核心的操作系统",
          "en-US": "A security-focused desktop operating system"
        },
        "url": "https://www.qubes-os.org/"
      },
      {
        "id": "reactos",
        "name": "reactos",
        "files": {
          "light": "reactos-light.svg",
          "dark": "reactos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "兼容 Windows 的开源操作系统",
          "en-US": "A free and open-source operating system compatible with Windows"
        },
        "url": "https://reactos.org/"
      },
      {
        "id": "redhat",
        "name": "redhat",
        "files": {
          "light": "redhat-light.svg",
          "dark": "redhat-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "Red Hat 企业 Linux 发行版和服务提供商",
          "en-US": "Enterprise Linux open source provider"
        },
        "url": "https://www.redhat.com/"
      },
      {
        "id": "plan9",
        "name": "plan9",
        "files": {
          "light": "plan9-light.svg",
          "dark": "plan9-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "贝尔实验室开发的分布式操作系统",
          "en-US": "Distributed operating system from Bell Labs"
        },
        "url": "https://plan9.io/"
      },
      {
        "id": "virtualbox",
        "name": "virtualbox",
        "files": {
          "light": "virtualbox-light.svg",
          "dark": "virtualbox-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "跨平台的开源虚拟机软件",
          "en-US": "Free and open-source virtualization software"
        },
        "url": "https://www.virtualbox.org/"
      },
      {
        "id": "vmwareworkstation",
        "name": "vmwareworkstation",
        "files": {
          "light": "vmwareworkstation-light.svg",
          "dark": "vmwareworkstation-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "专业虚拟机软件",
          "en-US": "Professional desktop virtualization by VMware"
        },
        "url": "https://www.vmware.com/products/workstation-pro.html"
      },
      {
        "id": "terminal",
        "name": "terminal",
        "files": {
          "light": "terminal-light.svg",
          "dark": "terminal-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "命令行终端界面",
          "en-US": "Command-line terminal interface"
        },
        "url": "https://en.wikipedia.org/wiki/Command-line_interface"
      },
      {
        "id": "tailsos",
        "name": "tailsos",
        "files": {
          "light": "tailsos.svg",
          "dark": "tailsos.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "注重隐私保护的可引导 Linux 系统",
          "en-US": "Privacy-focused live operating system"
        },
        "url": "https://tails.net/"
      },
      {
        "id": "gtk",
        "name": "gtk",
        "files": {
          "light": "gtk-light.svg",
          "dark": "gtk-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "跨平台图形用户界面工具包",
          "en-US": "The GIMP Toolkit, a multi-platform GUI toolkit"
        },
        "url": "https://www.gtk.org/"
      },
      {
        "id": "ghostty",
        "name": "ghostty",
        "files": {
          "light": "ghostty-light.svg",
          "dark": "ghostty-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "快速、功能丰富的终端模拟器",
          "en-US": "A fast, feature-rich, and native terminal emulator"
        },
        "url": "https://ghostty.org/"
      },
      {
        "id": "cachyos",
        "name": "cachyos",
        "files": {
          "light": "cachyos-light.svg",
          "dark": "cachyos-dark.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "高性能 Arch Linux 发行版",
          "en-US": "Performance-optimized Arch Linux distribution"
        },
        "url": "https://cachyos.org/"
      },
      {
        "id": "powertoys",
        "name": "powertoys",
        "files": {
          "light": "powertoys.svg",
          "dark": "powertoys.svg"
        },
        "category": "Operating Systems",
        "description": {
          "zh-CN": "微软 Windows 效率工具集",
          "en-US": "Windows system utilities to maximize productivity"
        },
        "url": "https://learn.microsoft.com/en-us/windows/powertoys/"
      }
    ],
    "Social & Communication": [
      {
        "id": "discord",
        "name": "discord",
        "files": {
          "light": "discord.svg",
          "dark": "discord.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "面向游戏玩家和社群的即时通信平台",
          "en-US": "VoIP, instant messaging and digital distribution platform"
        },
        "url": "https://discord.com/"
      },
      {
        "id": "telegram",
        "name": "telegram",
        "files": {
          "light": "telegram.svg",
          "dark": "telegram.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "注重安全和速度的即时通信应用",
          "en-US": "Cloud-based instant messaging service"
        },
        "url": "https://telegram.org/"
      },
      {
        "id": "slack",
        "name": "slack",
        "files": {
          "light": "slack-light.svg",
          "dark": "slack-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "面向团队的工作通信平台",
          "en-US": "Business communication platform"
        },
        "url": "https://slack.com/"
      },
      {
        "id": "twitch",
        "name": "twitch",
        "files": {
          "light": "twitch.svg",
          "dark": "twitch.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "游戏和创意内容直播平台",
          "en-US": "Live streaming platform for gaming and entertainment"
        },
        "url": "https://www.twitch.tv/"
      },
      {
        "id": "youtube",
        "name": "youtube",
        "files": {
          "light": "youtube.svg",
          "dark": "youtube.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "全球最大的视频分享平台",
          "en-US": "Video sharing and streaming platform"
        },
        "url": "https://www.youtube.com/"
      },
      {
        "id": "facebook",
        "name": "facebook",
        "files": {
          "light": "facebook.svg",
          "dark": "facebook.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "全球最大的社交网络平台",
          "en-US": "Social networking service"
        },
        "url": "https://www.facebook.com/"
      },
      {
        "id": "instagram",
        "name": "instagram",
        "files": {
          "light": "instagram.svg",
          "dark": "instagram.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "图片和视频分享社交平台",
          "en-US": "Photo and video sharing social platform"
        },
        "url": "https://www.instagram.com/"
      },
      {
        "id": "linkedin",
        "name": "linkedin",
        "files": {
          "light": "linkedin.svg",
          "dark": "linkedin.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "职业社交与求职平台",
          "en-US": "Professional networking and job search platform"
        },
        "url": "https://www.linkedin.com/"
      },
      {
        "id": "x",
        "name": "x",
        "files": {
          "light": "x-light.svg",
          "dark": "x-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "X（原 Twitter）社交平台",
          "en-US": "X (formerly Twitter), a social media platform"
        },
        "url": "https://x.com/"
      },
      {
        "id": "mastodon",
        "name": "mastodon",
        "files": {
          "light": "mastodon-light.svg",
          "dark": "mastodon-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "去中心化的开源社交网络",
          "en-US": "Decentralized, open-source social network"
        },
        "url": "https://joinmastodon.org/"
      },
      {
        "id": "misskey",
        "name": "misskey",
        "files": {
          "light": "misskey-light.svg",
          "dark": "misskey-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开源去中心化微博客平台",
          "en-US": "Open source federated microblogging platform"
        },
        "url": "https://misskey-hub.net/"
      },
      {
        "id": "bluesky",
        "name": "bluesky",
        "files": {
          "light": "bluesky-light.svg",
          "dark": "bluesky-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "去中心化社交媒体网络",
          "en-US": "Decentralized social media network"
        },
        "url": "https://bsky.app/"
      },
      {
        "id": "teams",
        "name": "teams",
        "files": {
          "light": "teams-light.svg",
          "dark": "teams-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "微软企业通信和协作平台",
          "en-US": "Microsoft's business communication platform"
        },
        "url": "https://www.microsoft.com/microsoft-teams/"
      },
      {
        "id": "reddit",
        "name": "reddit",
        "files": {
          "light": "reddit.svg",
          "dark": "reddit.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "社交新闻聚合与讨论网站",
          "en-US": "Social news aggregation, content rating, and discussion website"
        },
        "url": "https://www.reddit.com/"
      },
      {
        "id": "medium",
        "name": "medium",
        "files": {
          "light": "medium-light.svg",
          "dark": "medium-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开放的写作出版平台",
          "en-US": "Online publishing platform for readers and writers"
        },
        "url": "https://medium.com/"
      },
      {
        "id": "devto",
        "name": "devto",
        "files": {
          "light": "devto-light.svg",
          "dark": "devto-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开发者社区与博客平台",
          "en-US": "Community of software developers sharing ideas and helping each other grow"
        },
        "url": "https://dev.to/"
      },
      {
        "id": "yammer",
        "name": "yammer",
        "files": {
          "light": "yammer-light.svg",
          "dark": "yammer-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "微软企业社交网络（Viva Engage）",
          "en-US": "Microsoft's enterprise social networking service (Viva Engage)"
        },
        "url": "https://www.microsoft.com/en-us/microsoft-365/yammer/yammer-overview"
      },
      {
        "id": "signal",
        "name": "signal",
        "files": {
          "light": "signal.svg",
          "dark": "signal.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "以隐私保护著称的加密即时通信应用",
          "en-US": "Privacy-focused encrypted messaging application"
        },
        "url": "https://signal.org/"
      },
      {
        "id": "socialite",
        "name": "socialite",
        "files": {
          "light": "socialite.svg",
          "dark": "socialite.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "Laravel 的社交登录（OAuth）认证库",
          "en-US": "Laravel social login and OAuth authentication library"
        },
        "url": "https://laravel.com/docs/socialite"
      },
      {
        "id": "stackoverflow",
        "name": "stackoverflow",
        "files": {
          "light": "stackoverflow-light.svg",
          "dark": "stackoverflow-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "程序员问答社区",
          "en-US": "Q&A platform for developers"
        },
        "url": "https://stackoverflow.com/"
      },
      {
        "id": "thunderbird",
        "name": "thunderbird",
        "files": {
          "light": "thunderbird-light.svg",
          "dark": "thunderbird-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "Mozilla 开源电子邮件客户端",
          "en-US": "Free and open-source email client by Mozilla"
        },
        "url": "https://www.thunderbird.net/"
      },
      {
        "id": "upwork",
        "name": "upwork",
        "files": {
          "light": "upwork-light.svg",
          "dark": "upwork-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "全球自由职业者和雇主平台",
          "en-US": "Freelancing platform connecting businesses with remote talent"
        },
        "url": "https://www.upwork.com/"
      },
      {
        "id": "dailydev",
        "name": "dailydev",
        "files": {
          "light": "dailydev-light.svg",
          "dark": "dailydev-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开发者技术资讯聚合平台",
          "en-US": "News aggregator platform for developers"
        },
        "url": "https://daily.dev/"
      },
      {
        "id": "fediverse",
        "name": "fediverse",
        "files": {
          "light": "fediverse-light.svg",
          "dark": "fediverse-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "基于开放协议的去中心化社交网络联合体",
          "en-US": "Ensemble of federated social networks using open protocols"
        },
        "url": "https://fediverse.party/"
      },
      {
        "id": "fiverr",
        "name": "fiverr",
        "files": {
          "light": "fiverr.svg",
          "dark": "fiverr.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "在线自由职业服务市场",
          "en-US": "Online marketplace for freelance services"
        },
        "url": "https://www.fiverr.com/"
      },
      {
        "id": "freelancer",
        "name": "freelancer",
        "files": {
          "light": "freelancer-light.svg",
          "dark": "freelancer-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "在线外包和众包平台",
          "en-US": "Freelancing and crowdsourcing marketplace"
        },
        "url": "https://www.freelancer.com/"
      },
      {
        "id": "gmail",
        "name": "gmail",
        "files": {
          "light": "gmail-light.svg",
          "dark": "gmail-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "Google 提供的电子邮件服务",
          "en-US": "Email service developed by Google"
        },
        "url": "https://mail.google.com/"
      },
      {
        "id": "gmx",
        "name": "gmx",
        "files": {
          "light": "gmx-light.svg",
          "dark": "gmx-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "GMX 免费电子邮件服务",
          "en-US": "Free email service"
        },
        "url": "https://www.gmx.com/"
      },
      {
        "id": "opensource",
        "name": "opensource",
        "files": {
          "light": "opensource-light.svg",
          "dark": "opensource-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开源软件运动与倡议",
          "en-US": "Open Source Initiative"
        },
        "url": "https://opensource.org/"
      },
      {
        "id": "revolt",
        "name": "revolt",
        "files": {
          "light": "revolt-light.svg",
          "dark": "revolt-dark.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "开源的 Discord 替代即时通信平台",
          "en-US": "Open-source alternative to Discord"
        },
        "url": "https://revolt.chat/"
      },
      {
        "id": "discordbots",
        "name": "discordbots",
        "files": {
          "light": "discordbots.svg",
          "dark": "discordbots.svg"
        },
        "category": "Social & Communication",
        "description": {
          "zh-CN": "Discord 机器人开发平台",
          "en-US": "Platform for building Discord bots"
        },
        "url": "https://discord.com/developers/docs/intro"
      }
    ],
    "Productivity & Office": [
      {
        "id": "word",
        "name": "word",
        "files": {
          "light": "word-light.svg",
          "dark": "word-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软 Word 文字处理软件",
          "en-US": "Microsoft's word processing application"
        },
        "url": "https://www.microsoft.com/microsoft-365/word"
      },
      {
        "id": "excel",
        "name": "excel",
        "files": {
          "light": "excel-light.svg",
          "dark": "excel-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软 Excel 电子表格软件",
          "en-US": "Microsoft's spreadsheet application"
        },
        "url": "https://www.microsoft.com/microsoft-365/excel"
      },
      {
        "id": "powerpoint",
        "name": "powerpoint",
        "files": {
          "light": "powerpoint-light.svg",
          "dark": "powerpoint-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软 PowerPoint 演示文稿软件",
          "en-US": "Microsoft's presentation application"
        },
        "url": "https://www.microsoft.com/microsoft-365/powerpoint"
      },
      {
        "id": "onenote",
        "name": "onenote",
        "files": {
          "light": "onenote-light.svg",
          "dark": "onenote-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软 OneNote 数字笔记本",
          "en-US": "Microsoft's digital note-taking application"
        },
        "url": "https://www.microsoft.com/microsoft-365/onenote"
      },
      {
        "id": "outlook",
        "name": "outlook",
        "files": {
          "light": "outlook-light.svg",
          "dark": "outlook-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软 Outlook 邮件和日历管理工具",
          "en-US": "Microsoft's email and calendar management application"
        },
        "url": "https://www.microsoft.com/microsoft-365/outlook"
      },
      {
        "id": "notion",
        "name": "notion",
        "files": {
          "light": "notion-light.svg",
          "dark": "notion-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "多功能笔记和知识管理平台",
          "en-US": "All-in-one workspace for notes, docs, and collaboration"
        },
        "url": "https://www.notion.so/"
      },
      {
        "id": "confluence",
        "name": "confluence",
        "files": {
          "light": "confluence-light.svg",
          "dark": "confluence-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "Atlassian 团队协作文档平台",
          "en-US": "Team workspace and collaboration platform by Atlassian"
        },
        "url": "https://www.atlassian.com/software/confluence"
      },
      {
        "id": "jira",
        "name": "jira",
        "files": {
          "light": "jira-light.svg",
          "dark": "jira-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "Atlassian 项目管理和问题跟踪工具",
          "en-US": "Project management and issue tracking tool by Atlassian"
        },
        "url": "https://www.atlassian.com/software/jira"
      },
      {
        "id": "miro",
        "name": "miro",
        "files": {
          "light": "miro.svg",
          "dark": "miro.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "在线协作白板和可视化工具",
          "en-US": "Online visual collaboration platform"
        },
        "url": "https://miro.com/"
      },
      {
        "id": "lucidchart",
        "name": "lucidchart",
        "files": {
          "light": "lucidchart-light.svg",
          "dark": "lucidchart-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "在线图表和流程图工具",
          "en-US": "Web-based diagramming and charting tool"
        },
        "url": "https://www.lucidchart.com/"
      },
      {
        "id": "winedt",
        "name": "winedt",
        "files": {
          "light": "winedt-light.svg",
          "dark": "winedt-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "Windows 上的 LaTeX 编辑器",
          "en-US": "Text editor and LaTeX environment for Windows"
        },
        "url": "https://www.winedt.com/"
      },
      {
        "id": "libreoffice",
        "name": "libreoffice",
        "files": {
          "light": "libreoffice-light.svg",
          "dark": "libreoffice-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "免费开源的办公套件",
          "en-US": "Free and open-source office suite"
        },
        "url": "https://www.libreoffice.org/"
      },
      {
        "id": "onedrive",
        "name": "onedrive",
        "files": {
          "light": "onedrive-light.svg",
          "dark": "onedrive-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软云存储和文件共享服务",
          "en-US": "Microsoft's cloud storage service"
        },
        "url": "https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage"
      },
      {
        "id": "overleaf",
        "name": "overleaf",
        "files": {
          "light": "overleaf-light.svg",
          "dark": "overleaf-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "在线 LaTeX 协作编辑器",
          "en-US": "Online LaTeX editor for collaborative writing"
        },
        "url": "https://www.overleaf.com/"
      },
      {
        "id": "acrobat",
        "name": "acrobat",
        "files": {
          "light": "acrobat.svg",
          "dark": "acrobat.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "Adobe PDF 创建和编辑工具",
          "en-US": "PDF creation and editing software from Adobe"
        },
        "url": "https://www.adobe.com/acrobat.html"
      },
      {
        "id": "salesforce",
        "name": "salesforce",
        "files": {
          "light": "salesforce-light.svg",
          "dark": "salesforce-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "全球领先的 CRM 和云计算平台",
          "en-US": "Cloud-based CRM and enterprise applications platform"
        },
        "url": "https://www.salesforce.com/"
      },
      {
        "id": "sharepoint",
        "name": "sharepoint",
        "files": {
          "light": "sharepoint-light.svg",
          "dark": "sharepoint-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软企业内容管理和协作平台",
          "en-US": "Microsoft's web-based collaborative platform"
        },
        "url": "https://www.microsoft.com/microsoft-365/sharepoint/online-collaboration"
      },
      {
        "id": "visio",
        "name": "visio",
        "files": {
          "light": "visio-light.svg",
          "dark": "visio-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软流程图和图表绘制工具",
          "en-US": "Microsoft's diagramming and vector graphics application"
        },
        "url": "https://www.microsoft.com/microsoft-365/visio/flowchart-software"
      },
      {
        "id": "texmaker",
        "name": "texmaker",
        "files": {
          "light": "texmaker-light.svg",
          "dark": "texmaker-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "跨平台 LaTeX 编辑器",
          "en-US": "Cross-platform LaTeX editor"
        },
        "url": "https://www.xm1math.net/texmaker/"
      },
      {
        "id": "typst",
        "name": "typst",
        "files": {
          "light": "typst-light.svg",
          "dark": "typst-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "现代化的标记语言文档排版系统",
          "en-US": "A modern markup-based typesetting system"
        },
        "url": "https://typst.app/"
      },
      {
        "id": "powerautomate",
        "name": "powerautomate",
        "files": {
          "light": "powerautomate-light.svg",
          "dark": "powerautomate-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "微软低代码工作流自动化平台",
          "en-US": "Microsoft's cloud-based workflow automation service"
        },
        "url": "https://powerautomate.microsoft.com/"
      },
      {
        "id": "mdbook",
        "name": "mdbook",
        "files": {
          "light": "mdbook-light.svg",
          "dark": "mdbook-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "将 Markdown 文件生成在线图书的工具",
          "en-US": "Create books from Markdown files"
        },
        "url": "https://rust-lang.github.io/mdBook/"
      },
      {
        "id": "miktex",
        "name": "miktex",
        "files": {
          "light": "miktex-light.svg",
          "dark": "miktex-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "Windows 上的 TeX/LaTeX 发行版",
          "en-US": "TeX/LaTeX distribution for Windows"
        },
        "url": "https://miktex.org/"
      },
      {
        "id": "bitrix24",
        "name": "bitrix24",
        "files": {
          "light": "bitrix24-light.svg",
          "dark": "bitrix24-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "企业协作和 CRM 平台",
          "en-US": "Business collaboration and CRM platform"
        },
        "url": "https://www.bitrix24.com/"
      },
      {
        "id": "taiga",
        "name": "taiga",
        "files": {
          "light": "taiga-light.svg",
          "dark": "taiga-dark.svg"
        },
        "category": "Productivity & Office",
        "description": {
          "zh-CN": "开源的敏捷项目管理工具",
          "en-US": "Open source project management tool for agile teams"
        },
        "url": "https://taiga.io/"
      }
    ],
    "Testing & Quality": [
      {
        "id": "jest",
        "name": "jest",
        "files": {
          "light": "jest.svg",
          "dark": "jest.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "JavaScript 测试框架",
          "en-US": "Delightful JavaScript Testing Framework"
        },
        "url": "https://jestjs.io/"
      },
      {
        "id": "cypress",
        "name": "cypress",
        "files": {
          "light": "cypress-light.svg",
          "dark": "cypress-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "前端端到端测试框架",
          "en-US": "Front-end testing tool for web applications"
        },
        "url": "https://www.cypress.io/"
      },
      {
        "id": "playwright",
        "name": "playwright",
        "files": {
          "light": "playwright-light.svg",
          "dark": "playwright-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "跨浏览器端到端测试框架",
          "en-US": "Cross-browser end-to-end testing framework"
        },
        "url": "https://playwright.dev/"
      },
      {
        "id": "vitest",
        "name": "vitest",
        "files": {
          "light": "vitest-light.svg",
          "dark": "vitest-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "由 Vite 驱动的快速单元测试框架",
          "en-US": "Vite-native unit test framework"
        },
        "url": "https://vitest.dev/"
      },
      {
        "id": "mocha",
        "name": "mocha",
        "files": {
          "light": "mocha-light.svg",
          "dark": "mocha-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "运行在 Node.js 上的 JavaScript 测试框架",
          "en-US": "JavaScript test framework running on Node.js"
        },
        "url": "https://mochajs.org/"
      },
      {
        "id": "selenium",
        "name": "selenium",
        "files": {
          "light": "selenium.svg",
          "dark": "selenium.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Web 浏览器自动化测试框架",
          "en-US": "Browser automation framework for web testing"
        },
        "url": "https://www.selenium.dev/"
      },
      {
        "id": "sonarqube",
        "name": "sonarqube",
        "files": {
          "light": "sonarqube-light.svg",
          "dark": "sonarqube-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "代码质量和安全静态分析平台",
          "en-US": "Continuous code quality and security analysis platform"
        },
        "url": "https://www.sonarqube.org/"
      },
      {
        "id": "phpstan",
        "name": "phpstan",
        "files": {
          "light": "phpstan-light.svg",
          "dark": "phpstan-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "PHP 静态分析工具",
          "en-US": "PHP static analysis tool"
        },
        "url": "https://phpstan.org/"
      },
      {
        "id": "behat",
        "name": "behat",
        "files": {
          "light": "behat-light.svg",
          "dark": "behat-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "PHP 行为驱动测试框架",
          "en-US": "PHP BDD testing framework"
        },
        "url": "https://behat.org/"
      },
      {
        "id": "testinglibrary",
        "name": "testinglibrary",
        "files": {
          "light": "testinglibrary-light.svg",
          "dark": "testinglibrary-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "用于测试 UI 组件的工具库",
          "en-US": "Simple and complete testing utilities for UI components"
        },
        "url": "https://testing-library.com/"
      },
      {
        "id": "lighthouse",
        "name": "lighthouse",
        "files": {
          "light": "lighthouse.svg",
          "dark": "lighthouse.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "网页性能和质量评估工具",
          "en-US": "Automated tool for improving web page quality"
        },
        "url": "https://developers.google.com/web/tools/lighthouse"
      },
      {
        "id": "qodana",
        "name": "qodana",
        "files": {
          "light": "qodana-light.svg",
          "dark": "qodana-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "JetBrains 的代码质量扫描平台",
          "en-US": "Code quality platform by JetBrains"
        },
        "url": "https://www.jetbrains.com/qodana/"
      },
      {
        "id": "pytest",
        "name": "pytest",
        "files": {
          "light": "pytest-light.svg",
          "dark": "pytest-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Python 功能强大的测试框架",
          "en-US": "Python testing framework"
        },
        "url": "https://docs.pytest.org/"
      },
      {
        "id": "gherkin",
        "name": "gherkin",
        "files": {
          "light": "gherkin-light.svg",
          "dark": "gherkin-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "用于描述测试行为的业务可读语言",
          "en-US": "Business-readable domain specific language for BDD"
        },
        "url": "https://cucumber.io/docs/gherkin/"
      },
      {
        "id": "junit",
        "name": "junit",
        "files": {
          "light": "junit-light.svg",
          "dark": "junit-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Java 的单元测试框架",
          "en-US": "Java unit testing framework"
        },
        "url": "https://junit.org/"
      },
      {
        "id": "karma",
        "name": "karma",
        "files": {
          "light": "karma-light.svg",
          "dark": "karma-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "JavaScript 测试运行器",
          "en-US": "JavaScript test runner for browsers"
        },
        "url": "https://karma-runner.github.io/"
      },
      {
        "id": "puppeteer",
        "name": "puppeteer",
        "files": {
          "light": "puppeteer-light.svg",
          "dark": "puppeteer-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Chrome 无头浏览器控制库",
          "en-US": "Node.js library for controlling Chrome via DevTools Protocol"
        },
        "url": "https://pptr.dev/"
      },
      {
        "id": "dusk",
        "name": "dusk",
        "files": {
          "light": "dusk.svg",
          "dark": "dusk.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Laravel 的浏览器自动化测试工具",
          "en-US": "Browser automation and testing API for Laravel"
        },
        "url": "https://laravel.com/docs/dusk"
      },
      {
        "id": "autocad",
        "name": "autocad",
        "files": {
          "light": "autocad-light.svg",
          "dark": "autocad-dark.svg"
        },
        "category": "Testing & Quality",
        "description": {
          "zh-CN": "Autodesk 专业 CAD 绘图软件",
          "en-US": "Professional CAD design and drafting software by Autodesk"
        },
        "url": "https://www.autodesk.com/products/autocad/overview"
      }
    ],
    "CMS": [
      {
        "id": "wordpress",
        "name": "wordpress",
        "files": {
          "light": "wordpress.svg",
          "dark": "wordpress.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "最流行的开源内容管理系统",
          "en-US": "Open-source content management system"
        },
        "url": "https://wordpress.org/"
      },
      {
        "id": "drupal",
        "name": "drupal",
        "files": {
          "light": "drupal-light.svg",
          "dark": "drupal-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "开源企业级内容管理框架",
          "en-US": "Open source content management framework"
        },
        "url": "https://www.drupal.org/"
      },
      {
        "id": "joomla",
        "name": "joomla",
        "files": {
          "light": "joomla-light.svg",
          "dark": "joomla-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "流行的开源内容管理系统",
          "en-US": "Open-source content management system"
        },
        "url": "https://www.joomla.org/"
      },
      {
        "id": "contentful",
        "name": "contentful",
        "files": {
          "light": "contentful-light.svg",
          "dark": "contentful-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "Headless CMS 内容平台",
          "en-US": "Headless content management platform"
        },
        "url": "https://www.contentful.com/"
      },
      {
        "id": "sanity",
        "name": "sanity",
        "files": {
          "light": "sanity-light.svg",
          "dark": "sanity-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "实时协作的结构化内容平台",
          "en-US": "Platform for structured content and real-time collaboration"
        },
        "url": "https://www.sanity.io/"
      },
      {
        "id": "strapi",
        "name": "strapi",
        "files": {
          "light": "strapi.svg",
          "dark": "strapi.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "开源的无头 CMS 框架",
          "en-US": "Open-source headless CMS built with Node.js"
        },
        "url": "https://strapi.io/"
      },
      {
        "id": "directus",
        "name": "directus",
        "files": {
          "light": "directus.svg",
          "dark": "directus.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "无头 CMS 与数据平台",
          "en-US": "Open-source headless CMS and data platform"
        },
        "url": "https://directus.io/"
      },
      {
        "id": "payload",
        "name": "payload",
        "files": {
          "light": "payload-light.svg",
          "dark": "payload-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "Next.js 原生的无头 CMS",
          "en-US": "The most powerful TypeScript-first headless CMS"
        },
        "url": "https://payloadcms.com/"
      },
      {
        "id": "storyblok",
        "name": "storyblok",
        "files": {
          "light": "storyblok-light.svg",
          "dark": "storyblok-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "可视化编辑器的无头 CMS",
          "en-US": "Headless CMS with visual editor"
        },
        "url": "https://www.storyblok.com/"
      },
      {
        "id": "webflow",
        "name": "webflow",
        "files": {
          "light": "webflow.svg",
          "dark": "webflow.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "可视化无代码网站构建平台",
          "en-US": "No-code visual web design tool and CMS"
        },
        "url": "https://webflow.com/"
      },
      {
        "id": "hexo",
        "name": "hexo",
        "files": {
          "light": "hexo-light.svg",
          "dark": "hexo-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "基于 Node.js 的静态博客框架",
          "en-US": "Fast, simple, and powerful blog framework built with Node.js"
        },
        "url": "https://hexo.io/"
      },
      {
        "id": "hugo",
        "name": "hugo",
        "files": {
          "light": "hugo-light.svg",
          "dark": "hugo-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "超快速的静态网站生成器",
          "en-US": "The world's fastest framework for building websites"
        },
        "url": "https://gohugo.io/"
      },
      {
        "id": "jekyll",
        "name": "jekyll",
        "files": {
          "light": "jekyll-light.svg",
          "dark": "jekyll-dark.svg"
        },
        "category": "CMS",
        "description": {
          "zh-CN": "基于 Ruby 的静态网站生成器",
          "en-US": "Simple, blog-aware, static site generator built with Ruby"
        },
        "url": "https://jekyllrb.com/"
      }
    ],
    "E-commerce & FinTech": [
      {
        "id": "shopify",
        "name": "shopify",
        "files": {
          "light": "shopify-light.svg",
          "dark": "shopify-dark.svg"
        },
        "category": "E-commerce & FinTech",
        "description": {
          "zh-CN": "一站式电子商务平台",
          "en-US": "Commerce platform for building online stores"
        },
        "url": "https://www.shopify.com/"
      },
      {
        "id": "stripe",
        "name": "stripe",
        "files": {
          "light": "stripe-light.svg",
          "dark": "stripe-dark.svg"
        },
        "category": "E-commerce & FinTech",
        "description": {
          "zh-CN": "面向开发者的在线支付平台",
          "en-US": "Online payment processing for internet businesses"
        },
        "url": "https://stripe.com/"
      },
      {
        "id": "commercetools",
        "name": "commercetools",
        "files": {
          "light": "commercetools-light.svg",
          "dark": "commercetools-dark.svg"
        },
        "category": "E-commerce & FinTech",
        "description": {
          "zh-CN": "API 优先的无头商业平台",
          "en-US": "Cloud-native headless commerce platform"
        },
        "url": "https://commercetools.com/"
      },
      {
        "id": "hydrogen",
        "name": "hydrogen",
        "files": {
          "light": "hydrogen-light.svg",
          "dark": "hydrogen-dark.svg"
        },
        "category": "E-commerce & FinTech",
        "description": {
          "zh-CN": "Shopify 的 React 电商框架",
          "en-US": "Shopify's React-based framework for headless commerce"
        },
        "url": "https://hydrogen.shopify.dev/"
      },
      {
        "id": "pinescript",
        "name": "pinescript",
        "files": {
          "light": "pinescript-light.svg",
          "dark": "pinescript-dark.svg"
        },
        "category": "E-commerce & FinTech",
        "description": {
          "zh-CN": "TradingView 专用量化交易脚本语言",
          "en-US": "Domain-specific language for TradingView indicators and strategies"
        },
        "url": "https://www.tradingview.com/pine-script-docs/en/v5/Introduction.html"
      }
    ],
    "Browsers & Engines": [
      {
        "id": "chrome",
        "name": "chrome",
        "files": {
          "light": "chrome-light.svg",
          "dark": "chrome-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "谷歌 Chrome 浏览器",
          "en-US": "Google Chrome: fast and secure web browser"
        },
        "url": "https://www.google.com/chrome/"
      },
      {
        "id": "firefox",
        "name": "firefox",
        "files": {
          "light": "firefox-light.svg",
          "dark": "firefox-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "Mozilla Firefox 开源浏览器",
          "en-US": "Free and open-source web browser by Mozilla"
        },
        "url": "https://www.mozilla.org/firefox/"
      },
      {
        "id": "safari",
        "name": "safari",
        "files": {
          "light": "safari-light.svg",
          "dark": "safari-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "Apple Safari 浏览器",
          "en-US": "Apple's web browser for Mac and iOS"
        },
        "url": "https://www.apple.com/safari/"
      },
      {
        "id": "edge",
        "name": "edge",
        "files": {
          "light": "edge-light.svg",
          "dark": "edge-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "微软 Edge 浏览器",
          "en-US": "Microsoft's Chromium-based web browser"
        },
        "url": "https://www.microsoft.com/edge"
      },
      {
        "id": "opera",
        "name": "opera",
        "files": {
          "light": "opera-light.svg",
          "dark": "opera-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "Opera 网页浏览器",
          "en-US": "Feature-rich web browser"
        },
        "url": "https://www.opera.com/"
      },
      {
        "id": "brave",
        "name": "brave",
        "files": {
          "light": "brave-light.svg",
          "dark": "brave-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "注重隐私的 Brave 浏览器",
          "en-US": "Privacy-focused web browser with built-in ad blocking"
        },
        "url": "https://brave.com/"
      },
      {
        "id": "arcbrowser",
        "name": "arcbrowser",
        "files": {
          "light": "arcbrowser-light.svg",
          "dark": "arcbrowser-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "Arc 创新设计浏览器",
          "en-US": "Browser with a redesigned, innovative interface"
        },
        "url": "https://arc.net/"
      },
      {
        "id": "chromium",
        "name": "chromium",
        "files": {
          "light": "chromium-light.svg",
          "dark": "chromium-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "谷歌开源浏览器项目",
          "en-US": "Open-source browser project behind Chrome"
        },
        "url": "https://www.chromium.org/"
      },
      {
        "id": "zen",
        "name": "zen",
        "files": {
          "light": "zen-light.svg",
          "dark": "zen-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "基于 Firefox 的简洁浏览器",
          "en-US": "Minimalist, privacy-focused browser based on Firefox"
        },
        "url": "https://zen-browser.app/"
      },
      {
        "id": "librewolf",
        "name": "librewolf",
        "files": {
          "light": "librewolf-light.svg",
          "dark": "librewolf-dark.svg"
        },
        "category": "Browsers & Engines",
        "description": {
          "zh-CN": "注重隐私的 Firefox 分叉浏览器",
          "en-US": "Privacy-focused Firefox fork"
        },
        "url": "https://librewolf.net/"
      }
    ],
    "Embedded & Hardware": [
      {
        "id": "arduino",
        "name": "arduino",
        "files": {
          "light": "arduino.svg",
          "dark": "arduino.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "开源微控制器开发平台",
          "en-US": "Open-source electronics platform for prototyping"
        },
        "url": "https://www.arduino.cc/"
      },
      {
        "id": "raspberrypi",
        "name": "raspberrypi",
        "files": {
          "light": "raspberrypi-light.svg",
          "dark": "raspberrypi-dark.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "低成本功能完整的单板计算机",
          "en-US": "Low-cost, credit-card sized single-board computer"
        },
        "url": "https://www.raspberrypi.com/"
      },
      {
        "id": "nvidia",
        "name": "nvidia",
        "files": {
          "light": "nvidia-light.svg",
          "dark": "nvidia-dark.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "NVIDIA GPU 和 AI 计算芯片制造商",
          "en-US": "GPU and AI computing hardware manufacturer"
        },
        "url": "https://www.nvidia.com/"
      },
      {
        "id": "apple",
        "name": "apple",
        "files": {
          "light": "apple-light.svg",
          "dark": "apple-dark.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "Apple 公司",
          "en-US": "Apple Inc., consumer electronics and software company"
        },
        "url": "https://www.apple.com/"
      },
      {
        "id": "platformio",
        "name": "platformio",
        "files": {
          "light": "platformio-light.svg",
          "dark": "platformio-dark.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "嵌入式开发的专业 IDE 和构建工具",
          "en-US": "Professional collaborative platform for embedded development"
        },
        "url": "https://platformio.org/"
      },
      {
        "id": "cuda",
        "name": "cuda",
        "files": {
          "light": "cuda-light.svg",
          "dark": "cuda-dark.svg"
        },
        "category": "Embedded & Hardware",
        "description": {
          "zh-CN": "NVIDIA GPU 并行计算平台",
          "en-US": "NVIDIA's parallel computing platform and API"
        },
        "url": "https://developer.nvidia.com/cuda-zone"
      }
    ],
    "Education & Learning": [
      {
        "id": "anki",
        "name": "anki",
        "files": {
          "light": "anki-light.svg",
          "dark": "anki-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "基于间隔重复算法的记忆闪卡工具",
          "en-US": "Spaced repetition flashcard program for memorization"
        },
        "url": "https://apps.ankiweb.net/"
      },
      {
        "id": "leetcode",
        "name": "leetcode",
        "files": {
          "light": "leetcode-light.svg",
          "dark": "leetcode-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "算法题库和技术面试准备平台",
          "en-US": "Platform for coding interview preparation and practice"
        },
        "url": "https://leetcode.com/"
      },
      {
        "id": "hackerrank",
        "name": "hackerrank",
        "files": {
          "light": "hackerrank-light.svg",
          "dark": "hackerrank-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "在线编程挑战和技术招聘平台",
          "en-US": "Coding challenges and technical hiring platform"
        },
        "url": "https://www.hackerrank.com/"
      },
      {
        "id": "hackthebox",
        "name": "hackthebox",
        "files": {
          "light": "hackthebox-light.svg",
          "dark": "hackthebox-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "网络安全渗透测试练习平台",
          "en-US": "Cybersecurity training and pentesting practice platform"
        },
        "url": "https://www.hackthebox.com/"
      },
      {
        "id": "freecodecamp",
        "name": "freecodecamp",
        "files": {
          "light": "freecodecamp-light.svg",
          "dark": "freecodecamp-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "免费的 Web 开发在线编程学习平台",
          "en-US": "Free web development curriculum and coding certifications"
        },
        "url": "https://www.freecodecamp.org/"
      },
      {
        "id": "tryhackme",
        "name": "tryhackme",
        "files": {
          "light": "tryhackme-light.svg",
          "dark": "tryhackme-dark.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "网络安全在线学习和CTF平台",
          "en-US": "Online platform for learning cybersecurity through labs"
        },
        "url": "https://tryhackme.com/"
      },
      {
        "id": "desmos",
        "name": "desmos",
        "files": {
          "light": "desmos.svg",
          "dark": "desmos.svg"
        },
        "category": "Education & Learning",
        "description": {
          "zh-CN": "在线交互式数学图形计算器",
          "en-US": "Online graphing calculator and math education tools"
        },
        "url": "https://www.desmos.com/"
      }
    ],
    "Other Languages & Tools": [
      {
        "id": "c",
        "name": "c",
        "files": {
          "light": "c.svg",
          "dark": "c.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "C 编程语言",
          "en-US": "General-purpose procedural programming language"
        },
        "url": "https://en.wikipedia.org/wiki/C_(programming_language)"
      },
      {
        "id": "cpp",
        "name": "cpp",
        "files": {
          "light": "cpp.svg",
          "dark": "cpp.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "C++ 编程语言",
          "en-US": "General-purpose programming language with low-level memory manipulation"
        },
        "url": "https://isocpp.org/"
      },
      {
        "id": "assembly",
        "name": "assembly",
        "files": {
          "light": "assembly.svg",
          "dark": "assembly.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "汇编语言，低级机器指令",
          "en-US": "Low-level programming language for processor instructions"
        },
        "url": "https://en.wikipedia.org/wiki/Assembly_language"
      },
      {
        "id": "matlab",
        "name": "matlab",
        "files": {
          "light": "matlab-light.svg",
          "dark": "matlab-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "数学计算和数值分析编程语言",
          "en-US": "Numerical computing and programming environment by MathWorks"
        },
        "url": "https://www.mathworks.com/products/matlab.html"
      },
      {
        "id": "r",
        "name": "r",
        "files": {
          "light": "r-light.svg",
          "dark": "r-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "统计计算和数据分析编程语言",
          "en-US": "Statistical computing and graphics programming language"
        },
        "url": "https://www.r-project.org/"
      },
      {
        "id": "julia",
        "name": "julia",
        "files": {
          "light": "julia-light.svg",
          "dark": "julia-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "高性能科学计算编程语言",
          "en-US": "High-performance programming language for scientific computing"
        },
        "url": "https://julialang.org/"
      },
      {
        "id": "latex",
        "name": "latex",
        "files": {
          "light": "latex-light.svg",
          "dark": "latex-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "专业文档排版系统",
          "en-US": "High-quality typesetting system for academic and scientific documents"
        },
        "url": "https://www.latex-project.org/"
      },
      {
        "id": "markdown",
        "name": "markdown",
        "files": {
          "light": "markdown-light.svg",
          "dark": "markdown-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "轻量级标记语言",
          "en-US": "Lightweight markup language for creating formatted text"
        },
        "url": "https://daringfireball.net/projects/markdown/"
      },
      {
        "id": "yaml",
        "name": "yaml",
        "files": {
          "light": "yaml-light.svg",
          "dark": "yaml-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "人类可读的数据序列化格式",
          "en-US": "Human-readable data serialization language"
        },
        "url": "https://yaml.org/"
      },
      {
        "id": "toml",
        "name": "toml",
        "files": {
          "light": "toml-light.svg",
          "dark": "toml-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "简洁的配置文件格式",
          "en-US": "Minimal configuration file format"
        },
        "url": "https://toml.io/"
      },
      {
        "id": "json",
        "name": "json",
        "files": {
          "light": "json-light.svg",
          "dark": "json-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "轻量级数据交换格式",
          "en-US": "Lightweight data-interchange format"
        },
        "url": "https://www.json.org/"
      },
      {
        "id": "graphql",
        "name": "graphql",
        "files": {
          "light": "graphql-light.svg",
          "dark": "graphql-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "API 查询语言和运行时",
          "en-US": "Query language for APIs and runtime for queries"
        },
        "url": "https://graphql.org/"
      },
      {
        "id": "regex",
        "name": "regex",
        "files": {
          "light": "regex-light.svg",
          "dark": "regex-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "正则表达式，用于文本模式匹配",
          "en-US": "Regular expressions for pattern matching in text"
        },
        "url": "https://en.wikipedia.org/wiki/Regular_expression"
      },
      {
        "id": "cmake",
        "name": "cmake",
        "files": {
          "light": "cmake-light.svg",
          "dark": "cmake-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "跨平台构建系统生成工具",
          "en-US": "Cross-platform build system generator"
        },
        "url": "https://cmake.org/"
      },
      {
        "id": "gradle",
        "name": "gradle",
        "files": {
          "light": "gradle-light.svg",
          "dark": "gradle-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "灵活的 JVM 项目构建自动化工具",
          "en-US": "Flexible build automation for JVM projects"
        },
        "url": "https://gradle.org/"
      },
      {
        "id": "maven",
        "name": "maven",
        "files": {
          "light": "maven-light.svg",
          "dark": "maven-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "Apache Maven Java 项目管理和构建工具",
          "en-US": "Java project management and build automation tool"
        },
        "url": "https://maven.apache.org/"
      },
      {
        "id": "powershell",
        "name": "powershell",
        "files": {
          "light": "powershell-light.svg",
          "dark": "powershell-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "微软跨平台任务自动化 Shell",
          "en-US": "Cross-platform task automation and configuration management shell"
        },
        "url": "https://microsoft.com/powershell"
      },
      {
        "id": "bash",
        "name": "bash",
        "files": {
          "light": "bash-light.svg",
          "dark": "bash-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "GNU Bash 命令行 Shell 和脚本语言",
          "en-US": "Unix shell and command language"
        },
        "url": "https://www.gnu.org/software/bash/"
      },
      {
        "id": "haxe",
        "name": "haxe",
        "files": {
          "light": "haxe-light.svg",
          "dark": "haxe-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "跨平台开源编程语言",
          "en-US": "Open-source cross-platform programming language"
        },
        "url": "https://haxe.org/"
      },
      {
        "id": "holyc",
        "name": "holyc",
        "files": {
          "light": "holyc.svg",
          "dark": "holyc.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "TempleOS 专用编程语言",
          "en-US": "Programming language for the TempleOS operating system"
        },
        "url": "https://templeos.org/"
      },
      {
        "id": "luau",
        "name": "luau",
        "files": {
          "light": "luau.svg",
          "dark": "luau.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "Roblox 使用的 Lua 扩展方言",
          "en-US": "Lua dialect used in Roblox game development"
        },
        "url": "https://luau-lang.org/"
      },
      {
        "id": "octave",
        "name": "octave",
        "files": {
          "light": "octave-light.svg",
          "dark": "octave-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "兼容 MATLAB 的免费数值计算语言",
          "en-US": "Free alternative to MATLAB for numerical computation"
        },
        "url": "https://www.gnu.org/software/octave/"
      },
      {
        "id": "p4",
        "name": "p4",
        "files": {
          "light": "p4-light.svg",
          "dark": "p4-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "网络数据包处理领域专用语言",
          "en-US": "Programming language for network packet processing"
        },
        "url": "https://p4.org/"
      },
      {
        "id": "solidity",
        "name": "solidity",
        "files": {
          "light": "solidity.svg",
          "dark": "solidity.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "以太坊智能合约编程语言",
          "en-US": "Object-oriented language for Ethereum smart contracts"
        },
        "url": "https://soliditylang.org/"
      },
      {
        "id": "vala",
        "name": "vala",
        "files": {
          "light": "vala.svg",
          "dark": "vala.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "面向 GNOME 平台的编程语言",
          "en-US": "Programming language for the GNOME ecosystem"
        },
        "url": "https://vala.dev/"
      },
      {
        "id": "visualbasic",
        "name": "visualbasic",
        "files": {
          "light": "visualbasic-light.svg",
          "dark": "visualbasic-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "微软 Visual Basic .NET 编程语言",
          "en-US": "Object-oriented programming language for .NET"
        },
        "url": "https://learn.microsoft.com/en-us/dotnet/visual-basic/"
      },
      {
        "id": "crystal",
        "name": "crystal",
        "files": {
          "light": "crystal-light.svg",
          "dark": "crystal-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "语法类似 Ruby 的静态类型编程语言",
          "en-US": "Statically-typed language with Ruby-like syntax"
        },
        "url": "https://crystal-lang.org/"
      },
      {
        "id": "d",
        "name": "d",
        "files": {
          "light": "d.svg",
          "dark": "d.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "D 系统级编程语言",
          "en-US": "Systems programming language with C-like syntax and modern features"
        },
        "url": "https://dlang.org/"
      },
      {
        "id": "forth",
        "name": "forth",
        "files": {
          "light": "forth.svg",
          "dark": "forth.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "基于栈的低级编程语言",
          "en-US": "Stack-based procedural programming language"
        },
        "url": "https://en.wikipedia.org/wiki/Forth_(programming_language)"
      },
      {
        "id": "odin",
        "name": "odin",
        "files": {
          "light": "odin-light.svg",
          "dark": "odin-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "Odin 系统级编程语言",
          "en-US": "Odin programming language, alternative to C"
        },
        "url": "https://odin-lang.org/"
      },
      {
        "id": "pkl",
        "name": "pkl",
        "files": {
          "light": "pkl-light.svg",
          "dark": "pkl-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "苹果开发的配置语言",
          "en-US": "Configuration language developed by Apple"
        },
        "url": "https://pkl-lang.org/"
      },
      {
        "id": "gleam",
        "name": "gleam",
        "files": {
          "light": "gleam-light.svg",
          "dark": "gleam-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "运行在 Erlang VM 上的函数式语言",
          "en-US": "Friendly functional language for building type-safe systems"
        },
        "url": "https://gleam.run/"
      },
      {
        "id": "scratch",
        "name": "scratch",
        "files": {
          "light": "scratch.svg",
          "dark": "scratch.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "MIT 开发的面向儿童的可视化编程语言",
          "en-US": "Visual programming language for children by MIT"
        },
        "url": "https://scratch.mit.edu/"
      },
      {
        "id": "uml",
        "name": "uml",
        "files": {
          "light": "uml-light.svg",
          "dark": "uml-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "统一建模语言，用于软件系统设计",
          "en-US": "Unified Modeling Language for software system design"
        },
        "url": "https://www.uml.org/"
      },
      {
        "id": "ros",
        "name": "ros",
        "files": {
          "light": "ros-light.svg",
          "dark": "ros-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "机器人操作系统开发框架",
          "en-US": "Robot Operating System, flexible framework for robot software"
        },
        "url": "https://www.ros.org/"
      },
      {
        "id": "restructuredtext",
        "name": "restructuredtext",
        "files": {
          "light": "restructuredtext-light.svg",
          "dark": "restructuredtext-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "可扩展的文本标记语言，常用于 Python 文档",
          "en-US": "Lightweight markup language primarily used in Python documentation"
        },
        "url": "https://docutils.sourceforge.io/rst.html"
      },
      {
        "id": "fuse",
        "name": "fuse",
        "files": {
          "light": "fuse.svg",
          "dark": "fuse.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "UX 设计工具（已归档）",
          "en-US": "UX design and prototyping tool (Archived)"
        },
        "url": "https://fuse-open.github.io/"
      },
      {
        "id": "agno",
        "name": "agno",
        "files": {
          "light": "agno.svg",
          "dark": "agno.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "Python 多模型 AI 智能体框架",
          "en-US": "Python framework for building multi-modal AI agents"
        },
        "url": "https://agno.ai/"
      },
      {
        "id": "aiscript",
        "name": "aiscript",
        "files": {
          "light": "aiscript-light.svg",
          "dark": "aiscript-dark.svg"
        },
        "category": "Other Languages & Tools",
        "description": {
          "zh-CN": "Misskey 平台使用的脚本语言",
          "en-US": "Scripting language used in the Misskey platform"
        },
        "url": "https://github.com/syuilo/aiscript"
      }
    ],
    "Other": [],
    "Uncategorized": [
      {
        "id": "clickup",
        "name": "clickup",
        "files": {
          "light": "clickup-light.svg",
          "dark": "clickup-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "iced",
        "name": "iced",
        "files": {
          "light": "iced.svg",
          "dark": "iced.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "jqlang",
        "name": "jqlang",
        "files": {
          "light": "jqlang-light.svg",
          "dark": "jqlang-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "lynxjs",
        "name": "lynxjs",
        "files": {
          "light": "lynxjs-light.svg",
          "dark": "lynxjs-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "mermaid",
        "name": "mermaid",
        "files": {
          "light": "mermaid.svg",
          "dark": "mermaid.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "modelviewer",
        "name": "modelviewer",
        "files": {
          "light": "modelviewer-light.svg",
          "dark": "modelviewer-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "obsidian",
        "name": "obsidian",
        "files": {
          "light": "obsidian-light.svg",
          "dark": "obsidian-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "ratatui",
        "name": "ratatui",
        "files": {
          "light": "ratatui-light.svg",
          "dark": "ratatui-dark.svg"
        },
        "category": "Uncategorized"
      },
      {
        "id": "rollupjs",
        "name": "rollupjs",
        "files": {
          "light": "rollupjs-light.svg",
          "dark": "rollupjs-dark.svg"
        },
        "category": "Uncategorized"
      }
    ]
  }
};