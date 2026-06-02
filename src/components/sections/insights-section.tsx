"use client";

import { CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function InsightsSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="border-l-4 border-black pl-4">
        <h2 className="text-2xl font-bold">知 · 行业洞察</h2>
        <p className="text-sm text-gray-500">零碳园区 / 被动房 / 建筑美学</p>
      </div>

      <article className="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Strategy
        </span>
        <h3 className="text-xl font-bold mt-2 mb-4">
          零碳园区转型战略：百万级咨询报告大纲解析
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-7">
          如何通过全周期前置介入，将分布式能源与超低能耗建筑进行系统级解耦与重构。从能源规划、建筑性能优化到运营管理数字化，构建完整的零碳园区解决方案体系。针对政企客户的决策需求，提供数据驱动的
          ROI 分析与可行性评估。
        </p>
        <CardFooter className="p-0 flex justify-between items-center text-sm pt-4 border-t border-gray-100 mt-6">
          <span className="text-gray-400">2026-05-30</span>
          <div className="space-x-3">
            <button className="text-gray-500 hover:text-black transition flex items-center gap-1">
              <MessageCircle size={14} />
              展开讨论 (3)
            </button>
            <button className="text-blue-600 hover:underline font-medium">
              阅读全文 →
            </button>
          </div>
        </CardFooter>
      </article>
    </section>
  );
}
