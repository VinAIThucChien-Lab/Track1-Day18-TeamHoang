'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MousePointerClick, Users, ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import { OptionA } from '@/components/option-a'
import { OptionB } from '@/components/option-b'
import { OptionC } from '@/components/option-c'
import { optionMeta, slides } from '@/lib/lesson-data'

type Key = 'A' | 'B' | 'C'

const tabs: { key: Key; icon: typeof Users }[] = [
  { key: 'A', icon: MousePointerClick },
  { key: 'B', icon: Users },
  { key: 'C', icon: ClipboardCheck },
]

export default function Page() {
  const [active, setActive] = useState<Key>('A')
  const [slideIndex, setSlideIndex] = useState(0)
  const meta = optionMeta[active]
  const currentSlide = slides[slideIndex]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="size-3 rotate-12 rounded-[3px] bg-primary-foreground" />
            </span>
            <span className="font-serif text-xl font-bold tracking-tight">
              Learn by doing
            </span>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            AI Interaction Lab · A/B
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Intro */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Thử nghiệm 3 mô hình hỗ trợ AI
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Khi tài liệu quá vắn tắt, AI nên giúp bạn thế nào?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Trải nghiệm các nội dung bài giảng khác nhau, trong đó có một bước khó hiểu bị ẩn đi.
            Chọn từng phương án để xem cách AI hỗ trợ bạn khi gặp khó khăn.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-border bg-card p-1.5 sm:flex-row">
          {tabs.map(({ key, icon: Icon }) => {
            const isActive = active === key
            const m = optionMeta[key]
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`relative flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                  isActive ? 'text-primary-foreground' : 'hover:bg-secondary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative flex size-9 shrink-0 items-center justify-center rounded-lg ${
                    isActive ? 'bg-primary-foreground/20' : 'bg-secondary'
                  }`}
                >
                  <Icon className="size-4" />
                </span>
                <span className="relative">
                  <span className="block text-sm font-bold">{m.name}</span>
                  <span
                    className={`block text-xs ${
                      isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {m.tag}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Trade-off note */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-7 text-center text-sm text-muted-foreground"
          >
            {meta.desc}
          </motion.p>
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => setSlideIndex(v => Math.max(0, v - 1))}
            disabled={slideIndex === 0}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary disabled:opacity-50"
          >
            <ChevronLeft className="size-4" />
            Slide trước
          </button>
          
          <div className="hidden items-center gap-1.5 sm:flex">
            {slides.map((s, idx) => (
              <span
                key={s.id}
                className={`h-2 rounded-full transition-all ${
                  idx === slideIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setSlideIndex(v => Math.min(slides.length - 1, v + 1))}
            disabled={slideIndex === slides.length - 1}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary disabled:opacity-50"
          >
            Slide sau
            <ChevronRight className="size-4" />
          </button>
        </div>

        {/* Option content — remount on change to reset interaction state */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${slideIndex}`} // force remount on tab or slide change
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'A' && <OptionA slide={currentSlide} currentIndex={slideIndex} totalSlides={slides.length} />}
            {active === 'B' && <OptionB slide={currentSlide} currentIndex={slideIndex} totalSlides={slides.length} />}
            {active === 'C' && <OptionC slide={currentSlide} currentIndex={slideIndex} totalSlides={slides.length} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
