"use client";

import CopyButton from "@/components/ui/copy-button";
import { CardFooter } from "@/components/ui/card";
import { Scan } from "lucide-react";

export default function EfficiencySection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="border-l-4 border-green-500 pl-4">
        <h2 className="text-2xl font-bold">行 · 极客提效</h2>
        <p className="text-sm text-gray-500">AI 工作流 / 自动化 / API 抓取</p>
      </div>

      <article className="bg-black text-white p-6 shadow-lg hover:shadow-xl transition">
        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
          Tool / CLI
        </span>
        <h3 className="text-xl font-bold mt-2 mb-4">
          使用 CLI 打造个人全网数据抓取流
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-7">
          抛弃臃肿的 GUI。通过简单的命令行接入 API，实现高效的信息过滤与提取。构建一套轻量级的工作流引擎，支持定时任务、并发请求、错误重试与数据归档。通过 zx 脚本实现跨平台 Shell 调用，将复杂的 HTTP 请求封装为可复用的工具脚本。
        </p>

        <div className="bg-gray-900 p-4 rounded-lg font-mono text-xs text-green-400 mb-6">
          <div className="space-y-2">
            <div>$ npm install zx-scraper fastapi</div>
            <div>$ npm run build</div>
            <div>$ npm run scan:medium</div>
            <div className="text-green-500">
              ✓ Data retrieved: 1,247 records
              <br />
              ✓ Storage: MongoDB optimized
              <br />
              ✓ Analysis: 3.2s total
            </div>
          </div>
        </div>

        <CardFooter className="p-0 flex justify-between items-center text-sm pt-4 border-t border-gray-800 mt-6">
          <div className="flex items-center gap-3">
            <span className="text-gray-500 flex items-center gap-1">
              <Scan size={14} />
              GitHub Repo
            </span>
            <a
              href="https://github.com/example/zx-scraper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline font-medium flex items-center gap-1"
            >
              View on GitHub →
            </a>
          </div>
          <CopyButton contactId="zx-scraper" />
        </CardFooter>
      </article>
    </section>
  );
}
