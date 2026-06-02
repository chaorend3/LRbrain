import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "知星超人 | 个人数字花园",
  description: "从超低能耗，到极客提效。",
};

export default function AboutPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-24 min-h-screen">
      <article className="max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-12">
          关于 知星超人 (Superman)
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              技术与实践的桥梁
            </h2>
            <p className="leading-8 text-gray-600 mb-6">
              我长期关注两个截然不同的领域，并致力于将它们连接起来：传统实体产业的数字化改造，以及现代数字工具的高效应用与实践。
            </p>
            <p className="leading-8 text-gray-600">
              在建筑与可持续发展的领域，深耕零碳园区、被动房设计与超低能耗建筑实践；在数字提效领域，构建自动化工作流和
              CLI 工具，将复杂的信息处理任务转化为简洁的命令行操作。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              连接实际，而非停留在理论
            </h2>
            <p className="leading-8 text-gray-600 mb-6">
              我始终拒绝纸上谈兵。所有的建筑设计理念，都会落实到具体的工程实施方案；所有的
              AI 工具研究，都会通过实际编码与持续迭代来验证有效性。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              数字化的实战经验
            </h2>
            <p className="leading-8 text-gray-600 mb-6">
              熟练使用 Next.js、Tailwind CSS、CLI 工具和脚本自动化构建生产级的
              Web
              应用。通过编写命令行工具，将复杂的工作流程简化为一键执行的脚本，大幅提升团队整体效率。
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-line">
          <p className="text-lg text-ink leading-7 mb-4">
            我始终乐于与探索实体产业数字化的同行者交流。
          </p>
          <p className="text-lg italic text-gray-500">
            如果你在寻找技术落地的最优解，欢迎链接。
          </p>
        </div>
      </article>
    </main>
  );
}
