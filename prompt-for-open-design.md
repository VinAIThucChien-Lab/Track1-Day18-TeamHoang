# Prompt for GenUI Tool (v0, Lovable, Cursor, etc.)

Copy the entire prompt below and paste it into your AI generator.

---

**Role:** 
You are an Expert UX/UI Engineer and Frontend Developer specializing in React, Tailwind CSS, and Framer Motion. You are building an interactive prototype for an EdTech product to A/B test 3 different AI interaction models (Option A, B, and C).

**Visual Style & Art Direction (Inspired by Brilliant.org):**
- **Typography:** Use a bold, elegant Serif font for primary headings (e.g., Merriweather, Playfair Display) to emulate a premium "Learn by doing" vibe. Use a clean Sans-serif (e.g., Inter or Roboto) for body text and UI controls.
- **Color Palette:** 
  - Background: Clean White (bg-white) or very light gray (bg-gray-50) for the canvas.
  - Primary Action: Vibrant Green (#1DB954 or bg-green-500 / bg-green-600). Heatmap colors for Option B should use gradients of Red (bg-red-200 to bg-red-500).
  - Text: Dark gray/black for high readability.
  - Accents: Subtle grays for borders and soft shadows (shadow-sm, shadow-md).
- **Shapes & Spacing:** Use generous padding. Elements should have soft rounded corners (rounded-xl or rounded-2xl).
- **Animations:** Use Framer Motion for smooth micro-interactions (fade-ins, popovers, color transitions).

**Tech Stack Requirements:**
- React (Next.js or Vite structure).
- Tailwind CSS for all styling.
- Framer Motion for animations.
- Lucide React for icons (use standard lucide icons, do not use emojis).
- Shadcn/UI or Radix UI primitives (if necessary, otherwise custom Tailwind is fine).

**Content Brainstorming & Mock Data Instructions:**
Do NOT use generic placeholders like "Lorem Ipsum". Please brainstorm and generate a realistic educational scenario (e.g., a snippet explaining a complex scientific theory, a programming concept like React useEffect, or an advanced mathematical model) where a crucial explanatory step is intentionally skipped, causing confusion.
Generate the following mock data inside your React component:
1. `lessonContent`: The slide text/content containing the confusing skipped step.
2. `communityQuestions`: A list of 2-3 realistic questions from other students about this exact confusing part.
3. `heatmapData`: Data mapping which words/sentences in the `lessonContent` are most confusing (for Option B's heatmap).
4. `diagnosticQuiz`: A short fill-in-the-blank question and 2 Socratic follow-up multiple-choice questions related to your brainstormed topic (for Option C).

---

### FULL DESIGN SPECIFICATION - HUMAN-AI DESIGN PASS
You must strictly follow these design decisions for the 3 options.

**1. General Requirements**
- Target user: University students reading a slide to solve exercises.
- Situation: Reading a concept that skips an intermediate logical step, and the slide lacks concrete examples for reference.
- Task: Understand the logic of the missing step and see a sample calculation/application to apply to their exercise.

**2. Options Overview & Trade-offs**
- **Option A (On-demand AI):** AI explains individual knowledge segments on-the-spot upon user request. 
  - *Trade-off:* Clean, answers exactly what is asked. Downside: if students don't know where their knowledge gap is, they won't know what to highlight.
- **Option B (Social Learning):** Uses aggregate questions from classmates to warn about difficult spots.
  - *Trade-off:* Reduces hesitation to ask by showing peers share the same confusion. Downside: if no one has asked yet, there is no data to display.
- **Option C (Diagnostic + Socratic Scaffold):** Presents a fill-in-the-blank exercise for quick assessment. When the user fails, AI acts as a tutor, breaking down the problem to guide them.
  - *Trade-off:* Highly effective for deep thinking and precisely identifying knowledge gaps. Downside: long interaction flow, requiring patience to complete a test before getting help.

**3. Human-AI Interaction Rules (Strictly Implement These)**

**Option A Rules:**
- *AI Act/Ask:* Act immediately because the user explicitly specified the knowledge area.
- *Capability Limits:* The "Giải thích phần này" button signals AI only processes the highlighted text.
- *Evidence:* Based on the highlighted text. If the selection is too short or long, AI immediately reports: "Vùng chọn chưa đủ rõ ràng".
- *Control & Recovery:* Click outside to close the pop-up. Highlight a different part to continue learning.

**Option B Rules:**
- *AI Act/Ask:* Act proactively by automatically attaching general explanations to the slide.
- *Capability Limits:* A note saying "Dựa trên thắc mắc của lớp" clarifies this relies on peers.
- *Evidence:* Based on original questions from peers.
- *Control & Recovery:* Click the close button. If the explanation isn't understood, user has the option "Tạo câu hỏi mới" to change the approach.

**Option C Rules:**
- *AI Act/Ask:* Act then Ask. Initially, AI provides a test (Act). When the user fails, AI asks follow-up questions (Ask) to stimulate thinking.
- *Capability Limits:* "Bài tập kiểm tra nhanh" title and progress bar help users know this is a short guiding process.
- *Evidence:* Based on the incorrect result of the initial exercise. 
- *Control & Recovery:* Always has a "Hiển thị toàn bộ đáp án" button to stop the exercise. If answered incorrectly twice on a sub-question, AI auto-fills that step so the user can proceed without getting stuck.

---

### INTERACTIVE FLOW IMPLEMENTATION DETAILS

Create a Single Page Application (SPA) with a top navigation bar to toggle between "Option A", "Option B", and "Option C". The main content area will render the selected option. Maintain local state to reset the interactions when switching between options.

**COMMON CONTEXT (Shared across all 3 Options)**
- **Layout:** A centered lesson card (max-width max-w-4xl) simulating a learning slide.
- **Slide UI (Interactive):** Render the brainstormed `lessonContent`. The text must be structurally selectable so the user can literally drag their cursor to highlight text on the slide, triggering Option A.

**OPTION A: On-Demand AI**
1. **Idle State:** The lesson is displayed normally.
2. **Highlight Action:** User drags their mouse to highlight a portion of the text. Simulate text selection by wrapping words in hoverable/selectable spans.
3. **Trigger:** When text is actively selected, a small floating action button pops up near the cursor: `Giải thích phần này` (Explain this part). Use a Lucide Sparkles icon, no emojis.
4. **AI Act:** Clicking the button opens a clean, floating Pop-up (Popover) right next to the selected area.
5. **Pop-up Content:** Provide a localized, highly specific explanation and a concrete example for the exact text they highlighted.

**OPTION B: Social Learning**
1. **Heatmap Toggle:** At the top right of the slide card, place a toggle switch/button: `Hiển thị thống kê lớp` (Show class statistics). Use a Lucide Eye icon.
2. **Heatmap View:** When toggled ON, the text overlays a heatmap based on `heatmapData`. Parts of the text become highlighted in red. Darker red (e.g., bg-red-500) = many students highlighted. Lighter red (bg-red-200) = fewer highlights.
3. **Modal Trigger:** Clicking on a heavily highlighted area or a floating avatar group icon (`N bạn học viên khác cũng thắc mắc ở đây`) opens a Modal. Use Lucide Users icon.
4. **Modal Content:** 
   - Shows the community questions from `communityQuestions`.
   - Shows the AI aggregated response explaining the confusing concept.
5. **Recovery/Dismiss:** A prominent Close button and a secondary ghost button: `Tạo câu hỏi mới của riêng tôi`.

**OPTION C: Diagnostic + Socratic Scaffold**
1. **Diagnostic State:** Below the lesson, show a box titled `Bài tập kiểm tra nhanh` (Quick Diagnostic). Use your brainstormed `diagnosticQuiz` to show a fill-in-the-blank question and a "Submit" button.
2. **Failure State:** If the user inputs a wrong answer and clicks Submit, the input flashes red, and a bright green primary button appears: `Gợi ý từng bước` (Step-by-step hint).
3. **Socratic Mode:** Clicking the hint replaces the input with a guided wizard.
   - **Header:** Progress indicator `Gợi ý 1/N`.
   - **Sub-questions:** Guide the user through the logical steps they missed using multiple-choice pills based on `diagnosticQuiz`. Clicking the correct pill turns it green and advances to the next hint.
4. **Recovery/Bail-out:** In the Socratic mode, always keep a subtle gray "Bail-out" button at the bottom: `Bỏ qua, hiển thị toàn bộ đáp án` (Skip & show full answer).

**Deliverables:** 
Output a complete, working React code. Do not use generic filler text; brainstorm a brilliant, highly realistic educational scenario. Ensure UI states are perfectly handled with React hooks. Do not use any emojis in the code, use Lucide React icons instead. Keep all button labels and UI text in standard Vietnamese with correct accents (e.g. "Giải thích phần này", "Hiển thị thống kê lớp").
