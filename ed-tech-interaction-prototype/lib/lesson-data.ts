export type Segment = {
  id: string
  text: string
  heat: 0 | 1 | 2 | 3
}

export type SlideData = {
  id: string
  tag: string
  title: string
  intro: string
  segments: Segment[]
  explanations: Record<string, { title: string; body: string; example: string }>
  communityQuestions: {
    id: string
    author: string
    avatarColor: string
    time: string
    upvotes: number
    text: string
  }[]
  communityAiAnswer: {
    summary: string
    body: string
    steps: string[]
  }
  diagnosticQuiz: {
    prompt: string
    placeholder: string
    correctAnswers: string[]
    socratic: {
      id: string
      question: string
      options: { id: string; label: string; correct: boolean; gap?: string }[]
    }[]
    fullAnswer: string
    gapAnalysis: {
      gap: string
      improvement: string
    }
  }
}

export const slides: SlideData[] = [
  {
    id: 'bayes',
    tag: 'Xác suất Bayes',
    title: 'Định lý Bayes: Cập nhật niềm tin từ bằng chứng',
    intro:
      'Định lý Bayes cho phép chúng ta cập nhật xác suất của một giả thuyết khi có bằng chứng mới. Xét bài toán chẩn đoán y khoa quen thuộc dưới đây.',
    segments: [
      {
        id: 's1',
        text: 'Một căn bệnh hiếm xuất hiện ở 1% dân số, nghĩa là xác suất tiên nghiệm $P(\\text{Bệnh}) = 0{,}01$.',
        heat: 0,
      },
      {
        id: 's2',
        text: 'Xét nghiệm có độ nhạy 90%: nếu thực sự mắc bệnh, kết quả dương tính với xác suất $P(\\text{Dương} \\mid \\text{Bệnh}) = 0{,}9$.',
        heat: 0,
      },
      {
        id: 's3',
        text: 'Xét nghiệm cũng cho 8% dương tính giả ở người khoẻ mạnh: $P(\\text{Dương} \\mid \\text{Khoẻ}) = 0{,}08$.',
        heat: 1,
      },
      {
        id: 's4',
        text: 'Áp dụng công thức, ta có tử số $P(\\text{Dương} \\mid \\text{Bệnh}) \\cdot P(\\text{Bệnh}) = 0{,}9 \\times 0{,}01 = 0{,}009$.',
        heat: 2,
      },
      {
        id: 's5',
        text: 'Do đó xác suất hậu nghiệm $P(\\text{Bệnh} \\mid \\text{Dương}) \\approx 0{,}102$, tức là chỉ khoảng 10%.',
        heat: 3,
      },
      {
        id: 's6',
        text: 'Kết quả này thấp một cách đáng ngạc nhiên và là lý do vì sao không nên hoảng loạn sau một kết quả dương tính đơn lẻ.',
        heat: 1,
      },
    ],
    explanations: {
      s4: {
        title: 'Tử số mới chỉ là một nửa câu chuyện',
        body: 'Tử số $0{,}009$ là xác suất kết hợp "vừa mắc bệnh vừa cho kết quả dương tính". Nhưng để ra xác suất hậu nghiệm, bạn phải chia nó cho TỔNG mọi cách tạo ra kết quả dương tính.',
        example:
          'Trong 10.000 người: $0{,}009 \\times 10000 = 90$ người vừa mắc bệnh vừa dương tính thật.',
      },
      s5: {
        title: 'Bước bị bỏ qua: chuẩn hoá bằng P(Dương)',
        body: 'Slide nhảy thẳng từ tử số $0{,}009$ sang $0{,}102$ mà không cho thấy mẫu số. Mẫu số $P(\\text{Dương}) = P(\\text{Dương} \\mid \\text{Bệnh}) \\cdot P(\\text{Bệnh}) + P(\\text{Dương} \\mid \\text{Khoẻ}) \\cdot P(\\text{Khoẻ})$. Đây chính là bước "chuẩn hoá" (normalization) thường bị lược bỏ.',
        example:
          '$$P(\\text{Dương}) = (0{,}9 \\times 0{,}01) + (0{,}08 \\times 0{,}99) = 0{,}0882$$$$P(\\text{Bệnh} \\mid \\text{Dương}) = \\frac{0{,}009}{0{,}0882} \\approx 0{,}102$$',
      },
      s3: {
        title: 'Dương tính giả kéo mẫu số lên',
        body: 'Vì 99% dân số khoẻ mạnh, ngay cả tỉ lệ dương tính giả nhỏ (8%) cũng tạo ra rất nhiều ca dương tính. Chính khối lượng này làm loãng xác suất mắc bệnh thật.',
        example:
          '$0{,}08 \\times 0{,}99 = 0{,}0792$ — lớn gấp gần 9 lần so với tử số $0{,}009$ của ca bệnh thật.',
      },
    },
    communityQuestions: [
      {
        id: 'q1',
        author: 'Minh Anh',
        avatarColor: 'oklch(0.7 0.15 30)',
        time: '2 ngày trước',
        upvotes: 42,
        text: 'Mình không hiểu tại sao 0,009 lại biến thành 0,102? Con số 0,102 ở đâu ra vậy ạ?',
      },
      {
        id: 'q2',
        author: 'Đức Huy',
        avatarColor: 'oklch(0.65 0.15 250)',
        time: '4 ngày trước',
        upvotes: 31,
        text: 'Slide nhảy từ tử số thẳng sang kết quả cuối. Có phải còn một phép chia bị thiếu không?',
      },
      {
        id: 'q3',
        author: 'Thu Hà',
        avatarColor: 'oklch(0.68 0.15 320)',
        time: '1 tuần trước',
        upvotes: 18,
        text: 'Mẫu số P(Dương) tính thế nào khi đề bài chỉ cho xác suất có điều kiện?',
      },
    ],
    communityAiAnswer: {
      summary:
        'Đa số thắc mắc tập trung vào bước chuẩn hoá bị lược bỏ giữa tử số 0,009 và kết quả 0,102.',
      body: 'Slide đã bỏ qua việc tính mẫu số P(Dương) — tổng xác suất cho ra kết quả dương tính từ CẢ người bệnh lẫn người khoẻ. Đây là bước "chuẩn hoá" biến xác suất kết hợp thành xác suất hậu nghiệm.',
      steps: [
        'Tử số $= P(\\text{Dương} \\mid \\text{Bệnh}) \\cdot P(\\text{Bệnh}) = 0{,}9 \\times 0{,}01 = 0{,}009$',
        'Mẫu số $= 0{,}009 + (0{,}08 \\times 0{,}99) = 0{,}009 + 0{,}0792 = 0{,}0882$',
        'Hậu nghiệm $= \\dfrac{0{,}009}{0{,}0882} \\approx 0{,}102$ (khoảng 10%)',
      ],
    },
    diagnosticQuiz: {
      prompt:
        'Để đi từ tử số $0{,}009$ sang xác suất hậu nghiệm, bạn cần chia cho mẫu số $P(\\text{Dương})$. Giá trị của mẫu số $P(\\text{Dương})$ bằng bao nhiêu?',
      placeholder: 'Nhập giá trị, ví dụ 0,0882',
      correctAnswers: ['0,0882', '0.0882', '0,088', '0.088'],
      socratic: [
        {
          id: 'h1',
          question: 'Có bao nhiêu con đường dẫn tới một kết quả DƯƠNG TÍNH trong bài toán này?',
          options: [
            { id: 'a', label: 'Chỉ 1: người mắc bệnh dương tính', correct: false, gap: 'Không phân tích đủ các nhánh: bỏ quên nhánh dương tính giả' },
            { id: 'b', label: 'Có 2: người bệnh dương tính thật và người khoẻ dương tính giả', correct: true },
            { id: 'c', label: 'Có 3 con đường khác nhau', correct: false, gap: 'Tưởng tượng dư thừa nhánh: bài toán chỉ có 2 trường hợp chính' },
          ],
        },
        {
          id: 'h2',
          question: 'Nhánh "người khoẻ nhưng dương tính giả" đóng góp bao nhiêu?',
          options: [
            { id: 'a', label: '$0{,}08 \\times 0{,}99 = 0{,}0792$', correct: true },
            { id: 'b', label: '$0{,}08 \\times 0{,}01 = 0{,}0008$', correct: false, gap: 'Nhầm lẫn số liệu: nhân tỷ lệ dương tính giả với tỷ lệ người mắc bệnh' },
            { id: 'c', label: '$0{,}9 \\times 0{,}99 = 0{,}891$', correct: false, gap: 'Nhầm lẫn độ nhạy (sensitivity) với tỷ lệ dương tính giả (false positive)' },
          ],
        },
        {
          id: 'h3',
          question: 'Vậy mẫu số P(Dương) — tổng của hai nhánh — bằng bao nhiêu?',
          options: [
            { id: 'a', label: '$0{,}009 + 0{,}0792 = 0{,}0882$', correct: true },
            { id: 'b', label: '$0{,}009 \\times 0{,}0792 = 0{,}00071$', correct: false, gap: 'Sai quy tắc xác suất: dùng phép nhân thay vì phép cộng cho các biến cố xung khắc' },
            { id: 'c', label: '$0{,}0792 - 0{,}009 = 0{,}0702$', correct: false, gap: 'Sai logic toán học: trừ xác suất thay vì tính tổng' },
          ],
        },
      ],
      fullAnswer:
        'Mẫu số là tổng xác suất cho ra kết quả dương tính từ cả hai nhóm:$$P(\\text{Dương}) = P(\\text{Dương} \\mid \\text{Bệnh}) \\cdot P(\\text{Bệnh}) + P(\\text{Dương} \\mid \\text{Khoẻ}) \\cdot P(\\text{Khoẻ})$$$$= (0{,}9 \\times 0{,}01) + (0{,}08 \\times 0{,}99) = 0{,}009 + 0{,}0792 = 0{,}0882$$Từ đó xác suất hậu nghiệm:$$P(\\text{Bệnh} \\mid \\text{Dương}) = \\frac{0{,}009}{0{,}0882} \\approx 0{,}102$$',
      gapAnalysis: {
        gap: 'Bạn đã bỏ quên nhánh "Dương tính giả" (người khoẻ nhưng xét nghiệm sai) khi tính tổng các trường hợp có thể xảy ra.',
        improvement: 'Luôn vẽ sơ đồ cây (Tree Diagram) hoặc liệt kê đầy đủ mọi tình huống có thể dẫn đến bằng chứng đang xét (ở đây là kết quả xét nghiệm) trước khi ráp vào công thức chia.',
      },
    },
  },
  {
    id: 'relu',
    tag: 'Mạng Nơ-ron',
    title: 'Hàm kích hoạt ReLU: Giải quyết vấn đề Vanishing Gradient',
    intro:
      'Trong các mạng nơ-ron sâu, hàm Sigmoid thường gây ra sự cố triệt tiêu đạo hàm (vanishing gradient). Hàm ReLU (Rectified Linear Unit) là một giải pháp đơn giản nhưng cực kỳ hiệu quả để khắc phục rủi ro này.',
    segments: [
      {
        id: 'n1',
        text: 'Hàm Sigmoid có công thức $\\sigma(x) = \\frac{1}{1 + e^{-x}}$, giới hạn đầu ra trong khoảng $(0, 1)$.',
        heat: 0,
      },
      {
        id: 'n2',
        text: 'Đạo hàm của Sigmoid là $\\sigma\'(x) = \\sigma(x)(1 - \\sigma(x))$.',
        heat: 1,
      },
      {
        id: 'n3',
        text: 'Giá trị lớn nhất của đạo hàm này chỉ là $0{,}25$ (đạt được tại $x = 0$).',
        heat: 2,
      },
      {
        id: 'n4',
        text: 'Khi áp dụng thuật toán Backpropagation qua nhiều lớp, các đạo hàm này nhân với nhau dẫn đến hiện tượng Vanishing Gradient.',
        heat: 3,
      },
      {
        id: 'n5',
        text: 'Thay vào đó, hàm ReLU được định nghĩa là $f(x) = \\max(0, x)$.',
        heat: 0,
      },
      {
        id: 'n6',
        text: 'Với $x > 0$, đạo hàm của ReLU luôn là $1$, giúp tín hiệu gradient không bị giảm đi khi truyền ngược.',
        heat: 2,
      },
    ],
    explanations: {
      n3: {
        title: 'Vì sao lớn nhất chỉ là 0.25?',
        body: 'Đạo hàm Sigmoid $\\sigma(x)(1-\\sigma(x))$ là một parabol úp ngược đối với biến $y=\\sigma(x)$ trên miền $(0, 1)$. Giá trị cực đại đạt được tại đỉnh $y = 0{,}5$, khi đó đạo hàm bằng $0{,}5 \\times (1 - 0{,}5) = 0{,}25$.',
        example:
          'Có thể chứng minh nhanh bằng BĐT Cauchy: $y(1-y) \\le \\left(\\frac{y + 1 - y}{2}\\right)^2 = 0{,}25$.',
      },
      n4: {
        title: 'Sự khủng khiếp của quy tắc chuỗi',
        body: 'Trong chuỗi đạo hàm (Chain Rule), nếu bạn nhân liên tục các số nhỏ hơn 1 (ví dụ $0{,}25$), kết quả sẽ tiến cực nhanh về 0. Lớp đầu tiên sẽ nhận được một gradient gần như bằng không, khiến nó ngừng học.',
        example:
          'Ví dụ qua 10 lớp ẩn: Sigmoid gradient sẽ giảm tối đa theo tỉ lệ $0{,}25^{10} \\approx 0{,}0000009$.',
      },
      n6: {
        title: 'Đạo hàm bằng 1 cứu sống mạng sâu',
        body: 'Khác với Sigmoid, đạo hàm của ReLU không bóp nghẹt tín hiệu. Nếu mạng đi qua một loạt các nơ-ron có giá trị dương, gradient sẽ được nhân với $1$ ở mỗi bước, bảo toàn nguyên vẹn giá trị khi truyền về đầu mạng.',
        example: 'Qua 10 lớp với $x > 0$: Gradient tỷ lệ $1^{10} = 1$.',
      },
    },
    communityQuestions: [
      {
        id: 'q1',
        author: 'Tuấn Anh',
        avatarColor: 'oklch(0.6 0.15 150)',
        time: '3 ngày trước',
        upvotes: 28,
        text: 'Tại sao nhân nhiều số nhỏ lại là vấn đề? Máy tính vẫn tính được số thập phân siêu nhỏ mà?',
      },
      {
        id: 'q2',
        author: 'Linh Chi',
        avatarColor: 'oklch(0.65 0.15 280)',
        time: '1 tuần trước',
        upvotes: 15,
        text: 'Cho mình hỏi nếu $x < 0$ thì đạo hàm ReLU bằng 0, vậy trọng số có bị "chết" luôn không?',
      },
    ],
    communityAiAnswer: {
      summary:
        'Nhiều bạn thắc mắc về tác động thực tế của việc nhân đạo hàm nhỏ, và lo ngại hiện tượng "Dead ReLU" khi $x \\le 0$.',
      body: 'Việc gradient quá nhỏ không làm máy tính lỗi, nhưng làm các trọng số ở những lớp đầu tiên gần như không được cập nhật do tốc độ học quá chậm. Khi đó mô hình không hội tụ được. Về vấn đề của ReLU, nhánh âm ($x \\le 0$) thực sự tạo ra rủi ro "Dead ReLU" như Linh Chi nhắc tới.',
      steps: [
        'Khi $x > 0$: $\\dfrac{\\partial f}{\\partial x} = 1$ (Gradient truyền nguyên vẹn)',
        'Khi $x < 0$: $\\dfrac{\\partial f}{\\partial x} = 0$ (Gradient bằng 0, trọng số không học nữa)',
        'Giải pháp nâng cao: Sử dụng Leaky ReLU $f(x) = \\max(0{,}01x, x)$ để giữ lại một gradient nhỏ.',
      ],
    },
    diagnosticQuiz: {
      prompt:
        'Nếu một mạng nơ-ron có 5 lớp ẩn sử dụng hàm Sigmoid, và đạo hàm của mỗi lớp đều đạt mức tối đa là $0{,}25$. Gradient truyền từ lớp cuối về lớp đầu tiên sẽ bị thu nhỏ đi tối đa bao nhiêu lần?',
      placeholder: 'Nhập tỉ lệ, ví dụ: 0.001',
      correctAnswers: ['0,0009765625', '0.000976', '1/1024', '0.001', '0,001', '0.00098'],
      socratic: [
        {
          id: 'h1',
          question:
            'Khi áp dụng Backpropagation (Chain Rule) qua các lớp, các đạo hàm cục bộ được thực hiện phép toán gì với nhau?',
          options: [
            { id: 'a', label: 'Cộng lại', correct: false },
            { id: 'b', label: 'Nhân với nhau', correct: true },
          ],
        },
        {
          id: 'h2',
          question:
            'Vậy truyền ngược qua 5 lớp, ta cần nhân bao nhiêu lần con số cực đại $0{,}25$?',
          options: [
            { id: 'a', label: '$0{,}25 \\times 5 = 1{,}25$', correct: false },
            { id: 'b', label: '$0{,}25^5$', correct: true },
          ],
        },
        {
          id: 'h3',
          question: 'Giá trị của $0{,}25^5$ (hay $(1/4)^5$) xấp xỉ bằng bao nhiêu?',
          options: [
            { id: 'a', label: 'Khoảng $0{,}001$ ($1/1024$)', correct: true },
            { id: 'b', label: 'Khoảng $0{,}05$', correct: false },
          ],
        },
      ],
      fullAnswer:
        'Theo quy tắc chuỗi (Chain Rule) trong Backpropagation, gradient truyền ngược qua 5 lớp ẩn sẽ được nhân với đạo hàm của hàm kích hoạt 5 lần.\nVì đạo hàm cực đại của Sigmoid là $0{,}25$, tỷ lệ gradient tối đa còn lại là:\n$$(0{,}25)^5 = \\left(\\frac{1}{4}\\right)^5 = \\frac{1}{1024} \\approx 0{,}000976$$\nNghĩa là gradient đã bị teo nhỏ gần 1000 lần. Lớp đầu tiên hầu như không nhận được tín hiệu lỗi nào để cập nhật trọng số.',
      gapAnalysis: {
        gap: 'Bạn chưa nhận diện được bản chất của Backpropagation là sự nhân dồn liên tục (Chain Rule) qua nhiều lớp mạng.',
        improvement: 'Khi phân tích luồng thông tin trong mạng nơ-ron sâu, hãy nhớ rằng lan truyền ngược (backward pass) tương đương với phép nhân các ma trận đạo hàm cục bộ. Nhân càng nhiều số < 1 thì hệ số càng tiến nhanh về 0.',
      }
    },
  },
]

export const optionMeta = {
  A: {
    key: 'A' as const,
    name: 'Option A',
    tag: 'AI theo yêu cầu',
    desc: 'AI giải thích đúng đoạn bạn bôi đen — ngay lập tức, không dài dòng.',
  },
  B: {
    key: 'B' as const,
    name: 'Option B',
    tag: 'Học tập cộng đồng',
    desc: 'Tổng hợp thắc mắc của cả lớp để cảnh báo trước những chỗ khó.',
  },
  C: {
    key: 'C' as const,
    name: 'Option C',
    tag: 'Chẩn đoán + Socratic',
    desc: 'Kiểm tra nhanh, rồi dẫn dắt từng bước khi bạn trả lời sai.',
  },
}
