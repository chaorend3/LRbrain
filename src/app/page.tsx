import HeroSection from "@/components/hero-section";
import InsightsSection from "@/components/sections/insights-section";
import EfficiencySection from "@/components/sections/efficiency-section";
import { posts } from "@/content/posts";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-6xl mx-auto min-h-screen">
        <HeroSection />

        <div className="w-full px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <InsightsSection />
          <EfficiencySection />
        </div>

        <section className="w-full px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Latest
              </p>
              <h2 className="text-3xl font-bold mt-3">最新发表</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-gray-500 text-right">
              文章以本地 Markdown / MDX
              维护，后续可直接扩展为内容系统与动态文章页。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {post.category === "strategy" ? "Strategy" : "Tool"}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-7">
                  {post.summary}
                </p>
                <span className="text-sm text-gray-400">{post.date}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 mt-20">
        <div className="w-full max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">
              © 2026 知星超人. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500">寻找技术落地的最优解？</p>
              <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded transition">
                [ 扫码交流 / 复制微信号 ]
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
