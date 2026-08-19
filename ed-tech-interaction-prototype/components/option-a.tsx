'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, X, Lightbulb, Info, Send } from 'lucide-react'
import { SlideChrome } from './slide-chrome'
import { MathText } from './math-text'
import type { SlideData } from '@/lib/lesson-data'

type Popup = {
  x: number
  y: number
  text: string
  segId?: string
}

type Explanation = {
  x: number
  y: number
  title: string
  body: string
  example: string
  tooShort: boolean
  tooLong: boolean
}

function buildExplanation(selected: string, slide: SlideData) {
  const words = selected.trim().split(/\s+/).filter(Boolean)
  const tooShort = words.length < 3
  const tooLong = words.length > 45

  // Cố gắng khớp đoạn được chọn với một segment đã có giải thích sâu.
  let matched: SlideData['explanations'][string] | null = null
  for (const seg of slide.segments) {
    const key = seg.text.slice(0, 18)
    if (
      slide.explanations[seg.id] &&
      (selected.includes(key) || seg.text.includes(selected.slice(0, 18)))
    ) {
      matched = slide.explanations[seg.id]
      break
    }
  }
  if (!matched) {
    matched = {
      title: 'Giải thích đoạn đã chọn',
      body: 'Đoạn này mô tả một mắt xích trong chuỗi suy luận. Hãy chú ý xem ý nghĩa thực sự của nó là gì.',
      example:
        'Mẹo: hãy đọc kĩ lại từ đầu phần này để hiểu rõ ngữ cảnh.',
    }
  }
  return { matched, tooShort, tooLong }
}

export function OptionA({ 
  slide, 
  currentIndex, 
  totalSlides 
}: { 
  slide: SlideData
  currentIndex: number
  totalSlides: number 
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [popup, setPopup] = useState<Popup | null>(null)
  const [explanation, setExplanation] = useState<Explanation | null>(null)
  const [followUpText, setFollowUpText] = useState('')
  const [chatLog, setChatLog] = useState<{ role: 'user' | 'ai'; text: string }[]>([])

  const handleMouseUp = useCallback(() => {
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed) {
      setPopup(null)
      return
    }
    const text = sel.toString().trim()
    if (!text) {
      setPopup(null)
      return
    }
    const range = sel.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    const container = containerRef.current?.getBoundingClientRect()
    if (!container) return

    setExplanation(null)
    setPopup({
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top,
      text,
    })
  }, [])

  const openExplanation = () => {
    if (!popup) return
    const { matched, tooShort, tooLong } = buildExplanation(popup.text, slide)
    setExplanation({
      x: popup.x,
      y: popup.y,
      title: matched.title,
      body: matched.body,
      example: matched.example,
      tooShort,
      tooLong,
    })
    setPopup(null)
    setFollowUpText('')
    setChatLog([])
    window.getSelection()?.removeAllRanges()
  }

  const handleSubmitFollowUp = () => {
    if (!followUpText.trim()) return
    setChatLog((prev) => [...prev, { role: 'user', text: followUpText }])
    setFollowUpText('')
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        { role: 'ai', text: 'Đây là câu trả lời phụ trợ từ AI cho câu hỏi của bạn. (Dữ liệu mô phỏng)' },
      ])
    }, 1000)
  }

  // Click ra ngoài để đóng.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-a-ui]')) return
      setExplanation(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <SlideChrome
        slide={slide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        footnote={
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info className="size-3.5 shrink-0" />
            Bôi đen bất kỳ đoạn nào trên slide để AI giải thích đúng phần đó.
          </p>
        }
      >
        <div
          onMouseUp={handleMouseUp}
          className="select-text space-y-3 text-lg leading-relaxed text-foreground [&::selection]:bg-primary/25"
        >
          {slide.segments.map((seg) => (
            <p key={seg.id} className="cursor-text">
              <MathText>{seg.text}</MathText>
            </p>
          ))}
        </div>
      </SlideChrome>

      {/* Floating action button khi có vùng chọn */}
      <AnimatePresence>
        {popup && (
          <motion.button
            data-a-ui
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            onClick={openExplanation}
            style={{
              left: popup.x,
              top: popup.y,
              transform: 'translate(-50%, -120%)',
            }}
            className="absolute z-30 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            <Sparkles className="size-4" />
            Giải thích phần này
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popover giải thích */}
      <AnimatePresence>
        {explanation && (
          <motion.div
            data-a-ui
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              left: `min(max(${explanation.x}px, 200px), calc(100% - 200px))`,
              top: explanation.y + 12,
              transform: 'translate(-50%, 0)',
            }}
            className="absolute z-30 w-[22rem] max-w-[90vw] rounded-xl border border-border bg-popover p-4 shadow-xl"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="size-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Giải thích AI
                </span>
              </div>
              <button
                onClick={() => setExplanation(null)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Đóng"
              >
                <X className="size-4" />
              </button>
            </div>

            {explanation.tooShort || explanation.tooLong ? (
              <div className="rounded-lg bg-[oklch(0.96_0.05_60)] p-3 text-sm text-[oklch(0.45_0.13_50)]">
                <p className="font-semibold">Vùng chọn chưa đủ rõ ràng</p>
                <p className="mt-1 leading-relaxed">
                  {explanation.tooShort
                    ? 'Bạn chọn quá ít chữ. Hãy bôi đen trọn một ý hoặc một câu để AI hiểu ngữ cảnh.'
                    : 'Bạn chọn quá dài. Hãy thu hẹp lại đúng câu đang khiến bạn phân vân.'}
                </p>
              </div>
            ) : (
              <>
                <h4 className="font-serif text-base font-bold text-foreground">
                  {explanation.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  <MathText>{explanation.body}</MathText>
                </p>
                <div className="mt-3 rounded-lg border border-primary/20 bg-accent p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-accent-foreground">
                    <Lightbulb className="size-3.5" />
                    Ví dụ cụ thể
                  </p>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-accent-foreground">
                    <MathText>{explanation.example}</MathText>
                  </p>
                </div>
                
                <div className="mt-4 border-t border-border pt-4">
                  {chatLog.length > 0 && (
                    <div className="mb-4 flex max-h-40 flex-col gap-3 overflow-y-auto">
                      {chatLog.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                            msg.role === 'user' 
                              ? 'bg-foreground text-background' 
                              : 'border border-primary/20 bg-accent text-accent-foreground'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="relative">
                    <input
                      type="text"
                      value={followUpText}
                      onChange={(e) => setFollowUpText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleSubmitFollowUp()
                      }}
                      placeholder="Bạn muốn hỏi gì thêm không?"
                      className="w-full rounded-full border border-border bg-secondary/50 py-2.5 pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      onClick={handleSubmitFollowUp}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-primary transition-colors hover:bg-primary/10"
                    >
                      <Send className="size-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
            <p className="mt-3 text-center text-[10px] text-muted-foreground">
              Nhấp ra ngoài để đóng
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
