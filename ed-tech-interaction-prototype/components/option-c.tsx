'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ClipboardCheck,
  Sparkles,
  Check,
  X as XIcon,
  FlaskConical,
  CornerDownRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Target,
} from 'lucide-react'
import { SlideChrome } from './slide-chrome'
import { MathText } from './math-text'
import type { SlideData } from '@/lib/lesson-data'

type Mode = 'quiz' | 'socratic' | 'done'

function normalize(v: string) {
  return v.trim().toLowerCase().replace(/\s+/g, '')
}

export function OptionC({ 
  slide, 
  currentIndex, 
  totalSlides 
}: { 
  slide: SlideData
  currentIndex: number
  totalSlides: number 
}) {
  const [mode, setMode] = useState<Mode>('quiz')
  const [answer, setAnswer] = useState('')
  const [failed, setFailed] = useState(false)

  // Socratic wizard state
  const [step, setStep] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({})
  const [accumulatedGaps, setAccumulatedGaps] = useState<string[]>([])

  const diagnosticQuiz = slide.diagnosticQuiz
  const steps = diagnosticQuiz.socratic
  const current = steps[step]

  const submitQuiz = () => {
    const ok = diagnosticQuiz.correctAnswers.some(
      (a) => normalize(a) === normalize(answer),
    )
    if (ok) {
      setMode('done')
    } else {
      setFailed(true)
    }
  }

  const startSocratic = () => {
    setMode('socratic')
    setStep(0)
    setSelectedOptions({})
    setAccumulatedGaps([])
  }

  const pickOption = (optId: string, correct: boolean, gap?: string) => {
    if (selectedOptions[step]) return
    setSelectedOptions((prev) => ({ ...prev, [step]: optId }))
    if (!correct && gap) {
      setAccumulatedGaps((prev) => [...prev, gap])
    }
  }

  const advance = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1)
    } else {
      setMode('done')
    }
  }

  const showFullAnswer = () => setMode('done')

  return (
    <div className="relative">
      <SlideChrome
        slide={slide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        footnote={
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <FlaskConical className="size-3.5 shrink-0" />
            Làm bài kiểm tra nhanh để AI xác định chính xác chỗ bạn còn hổng.
          </p>
        }
      >
        <div className="space-y-3 text-lg leading-relaxed text-foreground">
          {slide.segments.map((seg) => (
            <p key={seg.id}><MathText>{seg.text}</MathText></p>
          ))}
        </div>
      </SlideChrome>

      {/* Khối chẩn đoán */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-sm">
        <div className="flex items-center gap-2 border-b border-border bg-accent px-5 py-3">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/20 text-primary">
            <ClipboardCheck className="size-4" />
          </span>
          <h3 className="font-serif text-base font-bold text-accent-foreground">
            Bài tập kiểm tra nhanh
          </h3>
          {mode === 'socratic' && (
            <span className="ml-auto rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
              Gợi ý {step + 1}/{steps.length}
            </span>
          )}
        </div>

        <div className="px-5 py-5">
          <AnimatePresence mode="wait">
            {/* ---- QUIZ ---- */}
            {mode === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-pretty leading-relaxed text-foreground">
                  <MathText>{diagnosticQuiz.prompt}</MathText>
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <motion.input
                    animate={
                      failed
                        ? { x: [0, -6, 6, -4, 4, 0] }
                        : { x: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value)
                      setFailed(false)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.nativeEvent.isComposing)
                        submitQuiz()
                    }}
                    placeholder={diagnosticQuiz.placeholder}
                    className={`flex-1 rounded-xl border bg-background px-4 py-3 text-base outline-none transition-colors ${
                      failed
                        ? 'border-destructive bg-destructive/5 text-destructive'
                        : 'border-input focus:border-primary'
                    }`}
                  />
                  <button
                    onClick={submitQuiz}
                    className="rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                  >
                    Kiểm tra
                  </button>
                </div>

                <AnimatePresence>
                  {failed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 flex flex-col items-start gap-3 rounded-xl bg-destructive/5 p-3 sm:flex-row sm:items-center">
                        <p className="flex items-center gap-2 text-sm text-destructive">
                          <XIcon className="size-4 shrink-0" />
                          Chưa đúng. Đừng lo — hãy để AI dẫn bạn đi từng bước.
                        </p>
                        <button
                          onClick={startSocratic}
                          className="ml-auto flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
                        >
                          <Sparkles className="size-4" />
                          Gợi ý từng bước
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ---- SOCRATIC ---- */}
            {mode === 'socratic' && current && (
              <motion.div
                key={`s-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress bar */}
                <div className="mb-4 flex gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i < step
                          ? 'bg-primary'
                          : i === step
                            ? 'bg-primary/50'
                            : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <p className="flex items-start gap-2 text-pretty text-base font-medium leading-relaxed text-foreground">
                  <CornerDownRight className="mt-1 size-4 shrink-0 text-primary" />
                  <MathText>{current.question}</MathText>
                </p>

                <div className="mt-4 flex flex-col gap-2.5">
                  {current.options.map((opt) => {
                    const hasAnswered = !!selectedOptions[step]
                    const isPicked = selectedOptions[step] === opt.id
                    const isCorrect = opt.correct

                    let cls = 'border-border bg-background hover:border-primary/50 hover:bg-accent/50'
                    if (hasAnswered) {
                      if (isCorrect) cls = 'border-primary bg-accent text-accent-foreground'
                      else if (isPicked) cls = 'border-destructive bg-destructive/5 text-destructive'
                      else cls = 'border-border bg-background opacity-50'
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={hasAnswered}
                        // @ts-ignore
                        onClick={() => pickOption(opt.id, opt.correct, opt.gap)}
                        className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium tabular-nums transition-all ${cls}`}
                      >
                        <span><MathText>{opt.label}</MathText></span>
                        {hasAnswered && isCorrect && (
                          <Check className="size-4 shrink-0 text-primary" />
                        )}
                        {hasAnswered && isPicked && !isCorrect && (
                          <XIcon className="size-4 shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {selectedOptions[step] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 flex justify-end"
                    >
                      <button
                        onClick={advance}
                        className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
                      >
                        {step < steps.length - 1 ? 'Tiếp tục' : 'Xem tổng kết'}
                        <ArrowRight className="size-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ---- DONE ---- */}
            {mode === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="size-5" />
                  <span className="font-serif text-lg font-bold">Bạn đã nắm vững phần này!</span>
                </div>

                {failed && accumulatedGaps.length > 0 && (
                  <div className="mt-5 rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400">
                      <Target className="size-4" />
                      Tổng hợp lỗ hổng kiến thức
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
                      {accumulatedGaps.map((g, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[10px] font-bold text-orange-600">
                            {idx + 1}
                          </span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {failed && accumulatedGaps.length === 0 && diagnosticQuiz.gapAnalysis && (
                  <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                      <Sparkles className="size-4" />
                      Rất xuất sắc!
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground">
                      Bạn đã không mắc phải lỗ hổng nào trong quá trình AI gợi ý phân tích.
                    </p>
                  </div>
                )}

                <div className="mt-5 text-sm leading-relaxed text-foreground">
                  <h4 className="mb-2 font-semibold text-muted-foreground">Lời giải chi tiết:</h4>
                  <MathText>{diagnosticQuiz.fullAnswer}</MathText>
                </div>
                
                <button
                  onClick={() => {
                    setMode('quiz')
                    setAnswer('')
                    setFailed(false)
                  }}
                  className="mt-5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary"
                >
                  Làm lại bài kiểm tra
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
