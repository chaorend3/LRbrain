'use client'

import Button from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-start">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
        从超低能耗，
        <br />
        <span className="text-gray-400">
          到极客提效
        </span>
      </h1>
      <p className="text-lg text-gray-500 max-w-2xl mb-12">
        From Ultra-Low Energy to Ultra-High Efficiency.
        <br />
        探索物理世界的零碳建筑，与数字边界的 AI 工作流。
      </p>
      <Button
        variant="default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => router.push('/')}
      >
        {hovered ? 'Explore Insights' : 'Explore Insights'}
      </Button>
    </header>
  )
}
