'use client'

import { Fragment, type ReactNode } from 'react'
import katex from 'katex'

function renderTex(tex: string, displayMode: boolean) {
  // Tạm thời tắt console.warn để ẩn lỗi 'No character metrics' của KaTeX đối với chữ tiếng Việt
  const originalWarn = console.warn
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('No character metrics')) return
    originalWarn(...args)
  }
  
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      output: 'htmlAndMathml',
      strict: 'ignore',
    })
  } finally {
    console.warn = originalWarn
  }
}

// Tách chuỗi thành đoạn văn bản thường và công thức LaTeX.
// Dùng $$...$$ cho công thức khối, $...$ cho công thức nội dòng.
const MATH_RE = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g

export function MathText({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const parts: ReactNode[] = []
  let last = 0
  let key = 0
  let m: RegExpExecArray | null

  MATH_RE.lastIndex = 0
  while ((m = MATH_RE.exec(children)) !== null) {
    if (m.index > last) {
      parts.push(<Fragment key={key++}>{children.slice(last, m.index)}</Fragment>)
    }
    const display = m[1] !== undefined
    const tex = (display ? m[1] : m[2]) as string
    parts.push(
      <span
        key={key++}
        // KaTeX xuất HTML an toàn từ chuỗi LaTeX đã kiểm soát trong lib/lesson-data.
        dangerouslySetInnerHTML={{ __html: renderTex(tex, display) }}
      />,
    )
    last = MATH_RE.lastIndex
  }
  if (last < children.length) {
    parts.push(<Fragment key={key++}>{children.slice(last)}</Fragment>)
  }

  return <span className={className}>{parts}</span>
}
