'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Eye, EyeOff, Users, X, Sparkles, MessageSquarePlus, ArrowUp } from 'lucide-react'
import { SlideChrome } from './slide-chrome'
import { MathText } from './math-text'
import type { SlideData } from '@/lib/lesson-data'

const heatClasses: Record<number, string> = {
  0: '',
  1: 'bg-primary/20',
  2: 'bg-primary/40',
  3: 'bg-primary text-primary-foreground',
}

export function OptionB({ 
  slide, 
  currentIndex, 
  totalSlides 
}: { 
  slide: SlideData
  currentIndex: number
  totalSlides: number 
}) {
  const totalAskers = slide.communityQuestions.reduce((n, q) => n + q.upvotes, 0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null)
  
  const [localQuestions, setLocalQuestions] = useState(slide.communityQuestions)
  const [isComposing, setIsComposing] = useState(false)
  const [questionText, setQuestionText] = useState('')

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

    setPopup({
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top,
    })
  }, [])

  // Click ra ngoài để đóng popup bôi đen.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-b-ui]')) return
      setPopup(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const handleAskQuestion = () => {
    setPopup(null)
    window.getSelection()?.removeAllRanges()
    setModalOpen(true)
    setIsComposing(true)
  }

  return (
    <div ref={containerRef} className="relative">
      <SlideChrome
        slide={slide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        toolbar={
          <button
            onClick={() => setShowHeatmap((v) => !v)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              showHeatmap
                ? 'border-primary/30 bg-accent text-accent-foreground'
                : 'border-border bg-card text-muted-foreground hover:bg-secondary'
            }`}
          >
            {showHeatmap ? (
              <Eye className="size-3.5" />
            ) : (
              <EyeOff className="size-3.5" />
            )}
            Hiển thị thống kê lớp
          </button>
        }
        footnote={
          <p className="text-xs text-muted-foreground">
            Vùng tô đỏ đậm là nơi nhiều học viên bôi đen và đặt câu hỏi nhất.
          </p>
        }
      >
        <div 
          onMouseUp={handleMouseUp}
          className="space-y-3 text-lg leading-relaxed text-foreground [&::selection]:bg-primary/25"
        >
          {slide.segments.map((seg) => {
            const hot = showHeatmap && seg.heat >= 2
            return (
              <p key={seg.id}>
                <span
                  onClick={() => hot && setModalOpen(true)}
                  className={`rounded px-0.5 transition-colors duration-500 ${
                    showHeatmap ? heatClasses[seg.heat] : ''
                  } ${hot ? 'cursor-pointer underline decoration-white/50 decoration-dotted underline-offset-4' : ''}`}
                >
                  <MathText>{seg.text}</MathText>
                </span>
              </p>
            )
          })}
        </div>

        {/* Nhóm avatar báo hiệu cộng đồng cũng thắc mắc */}
        <AnimatePresence>
          {showHeatmap && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              onClick={() => setModalOpen(true)}
              className="mt-6 flex w-full items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3 text-left transition-colors hover:bg-primary/10"
            >
              <div className="flex -space-x-2">
                {localQuestions.slice(0, 3).map((q) => (
                  <span
                    key={q.id}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-card text-xs font-bold text-white"
                    style={{ background: q.avatarColor }}
                  >
                    {q.author.charAt(0)}
                  </span>
                ))}
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-foreground text-[10px] font-bold text-background">
                  +{totalAskers + (localQuestions.length - slide.communityQuestions.length)}
                </span>
              </div>
              <span className="flex-1 text-sm font-medium text-primary">
                {totalAskers + (localQuestions.length - slide.communityQuestions.length)} bạn học viên khác cũng thắc mắc ở đây
              </span>
              <Users className="size-4 text-primary/80" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating action button khi có vùng chọn */}
        <AnimatePresence>
          {popup && (
            <motion.button
              data-b-ui
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              onClick={handleAskQuestion}
              style={{
                left: popup.x,
                top: popup.y,
                transform: 'translate(-50%, -120%)',
              }}
              className="absolute z-30 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquarePlus className="size-4" />
              Hỏi về phần này
            </motion.button>
          )}
        </AnimatePresence>
      </SlideChrome>

      {/* Modal cộng đồng */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
            >
              <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Users className="size-4" />
                  </span>
                  <h3 className="font-serif text-lg font-bold">
                    Cả lớp cũng vướng ở đây
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setModalOpen(false)
                    setIsComposing(false)
                  }}
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Đóng"
                >
                  <X className="size-4" />
                </button>
              </div>

              {isComposing ? (
                <div className="px-5 py-4">
                  <textarea
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Nhập câu hỏi của bạn về đoạn nội dung này..."
                    className="h-32 w-full resize-none rounded-xl border border-border bg-secondary/30 p-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    autoFocus
                  />
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        if (!questionText.trim()) return
                        setLocalQuestions([{
                          id: Date.now().toString(),
                          author: 'Bạn',
                          avatarColor: 'var(--primary)',
                          time: 'Vừa xong',
                          upvotes: 1,
                          text: questionText,
                        }, ...localQuestions])
                        setQuestionText('')
                        setIsComposing(false)
                      }}
                      className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                    >
                      Gửi câu hỏi
                    </button>
                    <button
                      onClick={() => setIsComposing(false)}
                      className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="px-5 py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Câu hỏi gốc từ bạn học
                </p>
                <div className="space-y-3">
                  {localQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="rounded-xl border border-border bg-secondary/40 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white"
                          style={{ background: q.avatarColor }}
                        >
                          {q.author.charAt(0)}
                        </span>
                        <span className="text-sm font-semibold">{q.author}</span>
                        <span className="text-xs text-muted-foreground">
                          · {q.time}
                        </span>
                        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-muted-foreground">
                          <ArrowUp className="size-3" />
                          {q.upvotes}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {q.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* AI tổng hợp */}
                <div className="mt-5 rounded-xl border border-primary/25 bg-accent p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Sparkles className="size-3.5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      AI tổng hợp · Dựa trên thắc mắc của lớp
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-accent-foreground">
                    {slide.communityAiAnswer.summary}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-accent-foreground">
                    <MathText>{slide.communityAiAnswer.body}</MathText>
                  </p>
                  <ol className="mt-3 space-y-1.5">
                    {slide.communityAiAnswer.steps.map((s, i) => (
                      <li
                        key={i}
                        className="flex gap-2 rounded-lg bg-card/70 px-3 py-2 font-mono text-xs text-foreground"
                      >
                        <span className="font-bold text-primary">{i + 1}.</span>
                        <MathText>{s}</MathText>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="sticky bottom-0 flex flex-col gap-2 border-t border-border bg-card px-5 py-4 sm:flex-row">
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Đã hiểu, đóng lại
                </button>
                <button
                  onClick={() => setIsComposing(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary"
                >
                  <MessageSquarePlus className="size-4" />
                  Tạo câu hỏi mới của riêng tôi
                </button>
              </div>
            </>
          )}
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
