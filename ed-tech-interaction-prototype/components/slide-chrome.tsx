'use client'

import type { ReactNode } from 'react'
import type { SlideData } from '@/lib/lesson-data'

export function SlideChrome({
  slide,
  currentIndex,
  totalSlides,
  toolbar,
  children,
  footnote,
}: {
  slide: SlideData
  currentIndex: number
  totalSlides: number
  toolbar?: ReactNode
  children: ReactNode
  footnote?: ReactNode
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Slide top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[oklch(0.72_0.17_25)]" />
          <span className="size-3 rounded-full bg-[oklch(0.83_0.16_85)]" />
          <span className="size-3 rounded-full bg-primary" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Bài giảng · Slide {currentIndex + 1} / {totalSlides}
          </span>
        </div>
        {toolbar}
      </div>

      <div className="px-6 py-7 sm:px-9 sm:py-9">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
          {slide.tag}
        </p>
        <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {slide.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {slide.intro}
        </p>

        <div className="mt-6">{children}</div>
      </div>

      {footnote ? (
        <div className="border-t border-border bg-secondary/40 px-6 py-3 sm:px-9">
          {footnote}
        </div>
      ) : null}
    </div>
  )
}
