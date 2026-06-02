export type Post = {
  slug: string;
  title: string;
  summary: string;
  category: "strategy" | "tool";
  date: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "zero-carbon-campus-strategy",
    title: "零碳园区转型战略：百万级咨询报告大纲解析",
    summary:
      "如何通过全周期前置介入，将分布式能源与超低能耗建筑进行系统级解耦与重构。",
    category: "strategy",
    date: "2026-05-30",
    featured: true,
  },
  {
    slug: "cli-data-pipeline",
    title: "使用 CLI 打造个人全网数据抓取流",
    summary:
      "抛弃臃肿的 GUI，通过命令行接入 API，构建高效的信息过滤与提取流程。",
    category: "tool",
    date: "2026-05-30",
    featured: true,
  },
];
