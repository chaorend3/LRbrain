# 知星超人 - 个人数字花园

<div align="center">

从超低能耗，到极客提效。

探索物理世界的零碳建筑，与数字边界的 AI 工作流。

**[在线预览](https://github.com/chaorend3/LRbrain)**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)

津ICP备2026005610号

</div>

---

## 🌟 项目简介

个人数字花园网站，采用瑞士现代极简风格。连接可持续建筑实践与 AI 工作流自动化两个领域，探索物理世界与数字边界的协同提效。

### 核心特点

- **瑞士现代极简设计**：清晰的排版、大量留白、严格的网格系统
- **双领域并行**：零碳建筑洞察 + CLI 数据管道工作流
- **响应式布局**：移动优先的渐进式增强
- **本地构建架构**：Markdown/MDX 内容系统，易于扩展
- **公开备案**：津ICP备2026005610号

## 🚀 技术栈

- **框架**: Next.js 15.0 (App Router + Server Components)
- **语言**: TypeScript 5.3
- **样式**: Tailwind CSS 3.4 + PostCSS
- **字体**: IBM Plex Sans / IBM Plex Mono
- **组件**: React 19 (Canary)
- **图标**: Lucide React
- **MDX**: @mdx-js/react + remark-gfm

## 📦 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

\`\`\`bash
npm run build
npm start
\`\`\`

## 🏗️ 项目结构

\`\`\`
src/
├── app/                   # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/
│   │   └── page.tsx       # 关于页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── sections/          # 页面区块
│   ├── ui/                # 基础 UI 组件
│   ├── hero-section.tsx   # Hero 区域
│   ├── header.tsx         # 导航栏
│   └── copy-button.tsx    # 复制按钮
├── content/               # 内容源
│   └── posts.ts           # 文章元数据
└── lib/                   # 工具函数
    └── utils.ts           # cn() 通用类名组合
\`\`\`

## 🎨 设计系统

### 风格特点

- **大量留白**：清晰的视觉呼吸感
- **严格网格**：Grid + Flexbox 布局系统
- **字体层级**：IBM Plex Sans 标题 / Mono 等宽显示
- **色彩对比**：高可读性的灰度系统
- **响应式断点**：移动优先的多设备适配

### 备案信息

- **备案号**：津ICP备2026005610号
- **状态**：审核通过
- **访问提示**：所有页面底部均显示备案信息

## 🔄 部署

### 部署到 Vercel（推荐）

1. 把此仓库导入 Vercel
2. Vercel 自动检测 Next.js 配置
3. 一键部署到你的域名
4. 在项目设置中添加你的自定义域名
5. 根据 Vercel 提示配置 DNS 解析

### 本地服务器部署

使用 `node_modules/.bin/next start` 或导出静态站点至 Nginx/Caddy。

## 📝 文章示例

项目包含两篇示例文章：

- **零碳园区转型战略**：百万级咨询报告大纲解析
- **使用 CLI 打造个人全网数据抓取流**：实现高效的信息过滤与提取

## 🔮 未来计划

- [ ] MDX 内容渲染与富文本编辑
- [ ] 文章详情页与评论系统
- [ ] 图床集成（占位符已预留）
- [ ] SEO 优化
- [ ] 性能优化（Web Vitals）
- [ ] 多语言支持

## 📄 许可证

MIT License

---

<div align="center">

**如果你觉得这个项目有趣，欢迎 ⭐ Star 支持一下！**

[查看源码](https://github.com/chaorend3/LRbrain)

</div>
