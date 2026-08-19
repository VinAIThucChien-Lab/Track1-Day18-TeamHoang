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
  community: Record<
    string,
    {
      questions: {
        id: string
        author: string
        avatarColor: string
        time: string
        upvotes: number
        text: string
      }[]
      aiAnswer: {
        summary: string
        body: string
        steps: string[]
      }
    }
  >
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
      s3: {
        title: 'Dương tính giả kéo mẫu số lên',
        body: 'Vì 99% dân số khoẻ mạnh, ngay cả tỉ lệ dương tính giả nhỏ (8%) cũng tạo ra rất nhiều ca dương tính. Chính khối lượng này làm loãng xác suất mắc bệnh thật.',
        example:
          '$0{,}08 \\times 0{,}99 = 0{,}0792$ — lớn gấp gần 9 lần so với tử số $0{,}009$ của ca bệnh thật.',
      },
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
    },
    community: {
      s3: {
        questions: [
          {
            id: 'q_s3',
            author: 'Tuấn Cường',
            avatarColor: 'oklch(0.6 0.1 200)',
            time: '2 giờ trước',
            upvotes: 15,
            text: 'Tại sao lại lấy 8% nhân với 99% vậy ạ?',
          }
        ],
        aiAnswer: {
          summary: 'Thắc mắc về nguồn gốc của nhánh dương tính giả.',
          body: 'Con số 99% (0.99) chính là xác suất một người KHÔNG mắc bệnh (vì chỉ có 1% mắc bệnh). Do đó, tỷ lệ người khoẻ nhưng bị xét nghiệm sai là $0{,}08 \\times 0{,}99$.',
          steps: ['Xác định tỷ lệ người khoẻ: $1 - 0{,}01 = 0{,}99$.', 'Nhân tỷ lệ người khoẻ với tỷ lệ dương tính giả $0{,}08$.']
        }
      },
      s6: {
        questions: [
          {
            id: 'q_s6',
            author: 'Minh Thư',
            avatarColor: 'oklch(0.5 0.2 300)',
            time: '1 ngày trước',
            upvotes: 28,
            text: 'Nếu kết quả chỉ có 10% thì xét nghiệm này vô dụng à?',
          }
        ],
        aiAnswer: {
          summary: 'Một câu hỏi rất hay về ý nghĩa thực tiễn của xét nghiệm.',
          body: 'Xét nghiệm không vô dụng! Nó đã giúp tăng niềm tin (xác suất) từ 1% ban đầu lên 10% (gấp 10 lần). Tuy nhiên, vì căn bệnh này quá hiếm, một xét nghiệm đơn lẻ là chưa đủ để khẳng định bệnh. Bác sĩ thường sẽ yêu cầu làm thêm xét nghiệm thứ 2.',
          steps: ['Xác suất tăng từ 1% lên 10%.', 'Bệnh hiếm cần nhiều bằng chứng hơn để khẳng định.']
        }
      },
      s5: {
        questions: [
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
        aiAnswer: {
          summary: 'Cả lớp đều bị vướng ở bước nhảy từ $0{,}009$ sang $0{,}102$ (chiếm 85% tổng số câu hỏi).',
          body: 'Các bạn nhận xét rất đúng. Slide này đã ẩn đi một bước tính toán quan trọng: Tính mẫu số $P(\\text{Dương}) = 0{,}0882$. Việc giấu mẫu số khiến công thức Bayes trông giống như "từ trên trời rơi xuống", làm đứt gãy mạch suy luận của người học.',
          steps: [
            'Hải Phong, Đức Huy: Đã phát hiện ra sự đứt gãy logic.',
            'Thu Hà: Đặt câu hỏi đi thẳng vào cốt lõi vấn đề.',
            'Bài học rút ra: Luôn đòi hỏi việc hiển thị rõ ràng mẫu số (Tổng xác suất) khi áp dụng định lý Bayes.',
          ],
        },
      },
      s4: {
        questions: [
          {
            id: 'q4',
            author: 'Hải Phong',
            avatarColor: 'oklch(0.6 0.2 150)',
            time: '5 giờ trước',
            upvotes: 21,
            text: 'Dương tính ở đây có nghĩa là chắc chắn mắc bệnh 100% không?',
          },
        ],
        aiAnswer: {
          summary: 'Nhiều bạn thắc mắc về độ chắc chắn của kết quả dương tính.',
          body: 'Kết quả dương tính từ xét nghiệm không bao giờ khẳng định 100% bạn mắc bệnh, vì luôn có tỷ lệ dương tính giả (False Positive) từ máy móc.',
          steps: [
            'Dương tính chỉ là một "bằng chứng" (evidence).',
            'Ta phải kết hợp với xác suất ban đầu (prior) để ra kết luận.',
          ],
        },
      },
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
      n2: {
        title: 'Đạo hàm của Sigmoid có nghĩa là gì?',
        body: 'Hàm số $y = \\sigma(x)$ có đạo hàm được biểu diễn dưới dạng chính $y(1-y)$. Điều này giúp máy tính tính toán gradient rất nhanh trong quá trình huấn luyện bằng cách tái sử dụng giá trị đầu ra của nơ-ron.',
        example: 'Nếu output của Sigmoid là $0{,}8$, thì đạo hàm tại điểm đó là $0{,}8 \\times (1 - 0{,}8) = 0{,}16$.',
      },
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
    community: {
      n2: {
        questions: [
          {
            id: 'q_n2',
            author: 'Hoài An',
            avatarColor: 'oklch(0.6 0.2 100)',
            time: '12 giờ trước',
            upvotes: 12,
            text: 'Làm sao biến đổi ra công thức đạo hàm này được?',
          }
        ],
        aiAnswer: {
          summary: 'Hỏi về cách tính đạo hàm hàm Sigmoid.',
          body: 'Bằng quy tắc đạo hàm hàm hợp, bạn có thể chứng minh được $\\sigma\'(x) = \\sigma(x)(1 - \\sigma(x))$. Đây là một tính chất toán học cực kỳ đẹp của hàm Sigmoid giúp việc tính toán trên máy tính rất hiệu quả.',
          steps: ['Dùng quy tắc đạo hàm phân thức.', 'Rút gọn để xuất hiện lại chính hàm $\\sigma(x)$.']
        }
      },
      n3: {
        questions: [
          {
            id: 'q_n3',
            author: 'Công Danh',
            avatarColor: 'oklch(0.5 0.1 200)',
            time: '3 ngày trước',
            upvotes: 25,
            text: 'Tại sao $0.25$ lại là nguyên nhân gây ra lỗi?',
          }
        ],
        aiAnswer: {
          summary: 'Mối liên hệ giữa số 0.25 và hiện tượng Vanishing Gradient.',
          body: 'Vì 0.25 là một số nhỏ hơn 1. Khi bạn nhân liên tục các số nhỏ hơn 1 với nhau, kết quả sẽ tiến về 0 rất nhanh. Điều này khiến gradient biến mất.',
          steps: ['Đạo hàm tối đa luôn nhỏ hơn 1.', 'Nhân dồn trong Chain Rule làm số càng lúc càng nhỏ.']
        }
      },
      n4: {
        questions: [
          {
            id: 'q1',
            author: 'Gia Linh',
            avatarColor: 'oklch(0.6 0.2 150)',
            time: '3 ngày trước',
            upvotes: 56,
            text: 'Tại sao lại là $0.25^5$ vậy mọi người? Mỗi lớp đều có Sigmoid à?',
          },
          {
            id: 'q1b',
            author: 'Minh Tuấn',
            avatarColor: 'oklch(0.5 0.1 220)',
            time: '2 ngày trước',
            upvotes: 40,
            text: 'Nếu mình dùng 100 lớp ẩn thì con số nó bé tới mức nào? Máy tính có tính nổi không?',
          },
        ],
        aiAnswer: {
          summary: 'Nhiều bạn chưa hiểu tại sao lại lấy $0{,}25$ mũ 5.',
          body: 'Đúng vậy! Trong một mạng Neural sâu 5 lớp dùng Sigmoid, gradient phải truyền ngược qua cả 5 lớp. Mỗi lần đi qua một lớp, nó bị nhân với đạo hàm tối đa là $0{,}25$. Do quy tắc chuỗi (Chain Rule), ta phải nhân 5 lần.',
          steps: [
            'Mỗi lớp ẩn đóng góp 1 đạo hàm cục bộ.',
            'Lan truyền ngược (Backprop) nhân tất cả lại.',
            'Với 100 lớp: $0{,}25^{100}$ cực bé, dính lỗi underflow của máy tính.',
          ],
        },
      },
      n6: {
        questions: [
          {
            id: 'q2',
            author: 'Hải Đăng',
            avatarColor: 'oklch(0.65 0.15 250)',
            time: '1 tuần trước',
            upvotes: 38,
            text: 'Nếu đạo hàm ReLU bằng 1 thì nhân 5 lần cũng bằng 1. Vậy nó truyền nguyên vẹn luôn?',
          },
          {
            id: 'q3',
            author: 'Lan Anh',
            avatarColor: 'oklch(0.7 0.2 300)',
            time: '4 ngày trước',
            upvotes: 22,
            text: 'Nhưng nếu $x < 0$ thì đạo hàm ReLU bằng 0, thế là chết nơ-ron luôn hả mọi người?',
          },
        ],
        aiAnswer: {
          summary: 'Sự khác biệt khi thay Sigmoid bằng ReLU.',
          body: 'Chính xác! Khi đầu vào dương, đạo hàm ReLU luôn là 1. $1 \\times 1 \\times 1\\dots = 1$. Tín hiệu lỗi được bảo toàn nguyên vẹn đến tận lớp đầu tiên. Tuy nhiên, ở nhánh âm đạo hàm bằng $0$, gây hiện tượng Dead ReLU.',
          steps: [
            'Sigmoid: Nhỏ dần qua từng lớp (teo tóp).',
            'ReLU ($x>0$): Bảo toàn nguyên vẹn.',
            'ReLU ($x<0$): Chết nơ ron (Dead ReLU).',
          ],
        },
      },
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
            { id: 'a', label: 'Cộng lại', correct: false, gap: 'Nhầm lẫn với hàm mất mát: Chain Rule là phép nhân liên tục' },
            { id: 'b', label: 'Trừ đi', correct: false, gap: 'Không hiểu về đạo hàm hàm hợp' },
            { id: 'c', label: 'Nhân với nhau', correct: true },
          ],
        },
        {
          id: 'h2',
          question:
            'Vậy truyền ngược qua 5 lớp, ta cần nhân bao nhiêu lần con số cực đại $0{,}25$?',
          options: [
            { id: 'a', label: '$0{,}25 \\times 5 = 1{,}25$', correct: false, gap: 'Sai phép toán cơ bản: lấy số nhân với số lần thay vì phép luỹ thừa' },
            { id: 'b', label: '$0{,}25 / 5 = 0{,}05$', correct: false, gap: 'Sai hoàn toàn bản chất phép nhân dồn' },
            { id: 'c', label: '$0{,}25^5$', correct: true },
          ],
        },
        {
          id: 'h3',
          question: 'Giá trị của $0{,}25^5$ (hay $(1/4)^5$) xấp xỉ bằng bao nhiêu?',
          options: [
            { id: 'a', label: 'Khoảng $0{,}05$', correct: false, gap: 'Tính sai luỹ thừa, nhầm với $(0{,}5)^4$' },
            { id: 'b', label: 'Khoảng $1{,}25$', correct: false, gap: 'Tính sai hoàn toàn: luỹ thừa của số nhỏ hơn 1 không thể lớn hơn 1' },
            { id: 'c', label: 'Khoảng $0{,}001$ ($1/1024$)', correct: true },
          ],
        },
      ],
      fullAnswer:
        'Theo quy tắc chuỗi (Chain Rule) trong Backpropagation, gradient truyền ngược qua 5 lớp ẩn sẽ được nhân với đạo hàm của hàm kích hoạt 5 lần.\nVì đạo hàm cực đại của Sigmoid là $0{,}25$, tỷ lệ gradient tối đa còn lại là:\n$$(0{,}25)^5 = \\left(\\frac{1}{4}\\right)^5 = \\frac{1}{1024} \\approx 0{,}000976$$\nNghĩa là gradient đã bị teo nhỏ gần 1000 lần. Lớp đầu tiên hầu như không nhận được tín hiệu lỗi nào để cập nhật trọng số.',
      gapAnalysis: {
        gap: 'Bạn chưa nhận diện được bản chất của Backpropagation là sự nhân dồn liên tục (Chain Rule) qua nhiều lớp mạng.',
        improvement: 'Khi phân tích luồng thông tin trong mạng nơ-ron sâu, hãy nhớ rằng lan truyền ngược (backward pass) tương đương với phép nhân các ma trận đạo hàm cục bộ. Nhân càng nhiều số nhỏ hơn 1 thì hệ số càng tiến nhanh về 0.',
      }
    },
  },
  {
    id: 'gd',
    tag: 'Tối ưu hoá',
    title: 'Gradient Descent: Tìm kiếm điểm cực tiểu',
    intro: 'Gradient Descent là thuật toán tối ưu hoá cốt lõi dùng để tìm bộ trọng số giúp giảm thiểu hàm mất mát (loss function).',
    segments: [
      { id: 'g1', text: 'Hàm mất mát $L(w)$ đo lường sự chênh lệch giữa dự đoán và thực tế.', heat: 0 },
      { id: 'g2', text: 'Mục tiêu là tìm $w$ sao cho $L(w)$ đạt cực tiểu.', heat: 0 },
      { id: 'g3', text: 'Thuật toán bắt đầu với $w$ ngẫu nhiên và tính đạo hàm $\\nabla L(w)$.', heat: 1 },
      { id: 'g4', text: 'Sau đó, nó cập nhật: $w = w - \\eta \\nabla L(w)$, với $\\eta$ là learning rate.', heat: 3 },
      { id: 'g5', text: 'Nếu $\\eta$ quá lớn, mô hình có thể không bao giờ hội tụ được và liên tục nhảy vọt qua điểm cực tiểu.', heat: 2 }
    ],
    explanations: {
      g3: {
        title: 'Tính đạo hàm để làm gì?',
        body: 'Đạo hàm cho ta biết sự thay đổi của hàm mất mát đối với trọng số. Cụ thể, nó chỉ ra hướng mà hàm số dốc lên nhiều nhất tại điểm hiện tại.',
        example: 'Nếu bạn đang ở sườn đồi, đạo hàm giống như chiếc la bàn chỉ hướng đỉnh đồi.'
      },
      g4: {
        title: 'Tại sao lại trừ đi đạo hàm?',
        body: 'Đạo hàm chỉ hướng dốc lên mạnh nhất của hàm số. Để tìm điểm thấp nhất (cực tiểu), ta phải đi theo hướng ngược lại, do đó ta TRỪ đi đạo hàm.',
        example: 'Nếu đạo hàm là dương (đang dốc lên về bên phải), ta trừ đi một số dương để $w$ giảm (đi sang trái, về phía thung lũng).'
      },
      g5: {
        title: 'Learning rate quá lớn gây hậu quả gì?',
        body: '$\\eta$ quyết định kích thước bước chân. Nếu quá lớn, bước chân sẽ băng qua luôn điểm thấp nhất sang bờ bên kia của thung lũng, dẫn đến phân kỳ (loss tăng dần).',
        example: 'Thử tưởng tượng bạn đang xuống núi nhưng mỗi bước lại dài 1 km, bạn sẽ vô tình nhảy sang ngọn núi bên kia.'
      }
    },
    community: {
      g3: {
        questions: [
          {
            id: 'q_g3',
            author: 'Quốc Bảo',
            avatarColor: 'oklch(0.4 0.2 150)',
            time: '10 giờ trước',
            upvotes: 18,
            text: 'Tại sao lại bắt đầu ngẫu nhiên? Sao không bắt đầu từ 0?',
          }
        ],
        aiAnswer: {
          summary: 'Về việc khởi tạo trọng số ngẫu nhiên.',
          body: 'Nếu khởi tạo tất cả bằng 0, các nơ-ron trong mạng sẽ học giống hệt nhau (tính đối xứng). Bắt đầu ngẫu nhiên giúp phá vỡ tính đối xứng này, để mỗi nơ-ron có thể học các đặc trưng khác nhau.',
          steps: ['Khởi tạo bằng 0 gây ra hiện tượng đối xứng.', 'Ngẫu nhiên giúp mạng phá vỡ đối xứng (Symmetry breaking).']
        }
      },
      g4: {
        questions: [
          {
            id: 'q1',
            author: 'Bảo Trâm',
            avatarColor: 'oklch(0.6 0.15 40)',
            time: '1 ngày trước',
            upvotes: 45,
            text: 'Dấu trừ trong công thức cập nhật có ý nghĩa vật lý như thế nào?',
          },
          {
            id: 'q2',
            author: 'Trung Kiên',
            avatarColor: 'oklch(0.6 0.25 180)',
            time: '15 giờ trước',
            upvotes: 34,
            text: 'Hỏi ngu: sao không cộng cho nó nhanh hội tụ lên trên?',
          }
        ],
        aiAnswer: {
          summary: 'Nhiều bạn thắc mắc vì sao công thức lại dùng dấu trừ chứ không phải dấu cộng.',
          body: 'Đạo hàm (gradient) cho biết hướng dốc lên. Vì chúng ta muốn tìm điểm cực tiểu (thung lũng), ta phải đi ngược hướng dốc lên, tức là đi dốc xuống. Đó là lý do ta trừ đi gradient. Nếu bạn cộng, bạn đang dùng Gradient Ascent (tìm cực đại).',
          steps: ['Gradient = Hướng dốc lên mạnh nhất', 'Mục tiêu = Cực tiểu (thấp nhất)', 'Đi ngược gradient = Trừ đi gradient']
        }
      },
      g5: {
        questions: [
          {
            id: 'q3',
            author: 'Nhật Nam',
            avatarColor: 'oklch(0.5 0.2 120)',
            time: '2 ngày trước',
            upvotes: 30,
            text: 'Làm sao để biết learning rate của mình là quá lớn hay quá nhỏ?',
          },
          {
            id: 'q4',
            author: 'Thu Phương',
            avatarColor: 'oklch(0.65 0.15 350)',
            time: '3 ngày trước',
            upvotes: 19,
            text: 'Nếu learning rate quá bé thì mô hình sẽ đứng im đúng không ạ?',
          }
        ],
        aiAnswer: {
          summary: 'Câu hỏi về cách chọn learning rate phù hợp và hậu quả.',
          body: 'Nếu loss giảm rất chậm hoặc đứng im, learning rate quá nhỏ (Thu Phương). Nếu loss tăng vọt hoặc dao động mạnh, learning rate quá lớn (Nhật Nam). Thường ta bắt đầu với $0{,}1$ hoặc $0{,}01$ và dùng Learning Rate Scheduler để giảm dần.',
          steps: ['Loss giảm chậm: $\\eta$ quá nhỏ', 'Loss nhảy loạn xạ: $\\eta$ quá lớn', 'Kỹ thuật: Dùng scheduler giảm dần $\\eta$']
        }
      }
    },
    diagnosticQuiz: {
      prompt: 'Nếu đạo hàm $\\nabla L(w)$ đang có giá trị DƯƠNG, thì theo công thức Gradient Descent, trọng số $w$ sẽ tăng hay giảm?',
      placeholder: 'Nhập "tăng" hoặc "giảm"',
      correctAnswers: ['giảm', 'giam'],
      socratic: [
        {
          id: 'h1',
          question: 'Công thức cập nhật của Gradient Descent là gì?',
          options: [
            { id: 'a', label: '$w = w + \\eta \\nabla L(w)$', correct: false, gap: 'Nhớ sai công thức: Gradient Descent dùng dấu trừ' },
            { id: 'b', label: '$w = \\eta \\nabla L(w)$', correct: false, gap: 'Thiếu mất trạng thái trọng số hiện tại' },
            { id: 'c', label: '$w = w - \\eta \\nabla L(w)$', correct: true }
          ]
        },
        {
          id: 'h2',
          question: 'Trong biểu thức $-\\eta \\nabla L(w)$, vì $\\eta$ luôn dương, nếu đạo hàm dương thì cụm này sẽ dương hay âm?',
          options: [
            { id: 'a', label: 'Dương', correct: false, gap: 'Sai quy tắc dấu: âm nhân dương ra âm' },
            { id: 'b', label: 'Bằng 0', correct: false, gap: 'Nhầm lẫn với đạo hàm bằng 0 tại cực tiểu' },
            { id: 'c', label: 'Âm', correct: true }
          ]
        },
        {
          id: 'h3',
          question: 'Vậy khi cộng một số âm vào $w$, giá trị của $w$ sẽ thay đổi thế nào?',
          options: [
            { id: 'a', label: 'Tăng lên', correct: false, gap: 'Sai toán học cơ bản' },
            { id: 'b', label: 'Không đổi', correct: false, gap: 'Sai toán học cơ bản' },
            { id: 'c', label: 'Giảm đi', correct: true }
          ]
        }
      ],
      fullAnswer: 'Vì công thức là $w_{mới} = w - \\eta \\nabla L(w)$. Nếu đạo hàm là dương, ta đang trừ đi một lượng dương (vì $\\eta$ cũng dương), do đó $w$ sẽ giảm đi.',
      gapAnalysis: {
        gap: 'Bạn bị nhầm lẫn về dấu trong công thức cập nhật của Gradient Descent.',
        improvement: 'Nhớ kỹ từ "Descent" có nghĩa là "Đi xuống". Để đi xuống, ta luôn đi ngược hướng với Gradient (hướng đi lên). Gradient dương $\\to$ đi ngược lại $\\to$ giá trị biến phải giảm.'
      }
    }
  },
  {
    id: 'overfitting',
    tag: 'Machine Learning Cơ bản',
    title: 'Hiện tượng Overfitting và Kỹ thuật Dropout',
    intro: 'Khi mô hình học quá mức, nó ghi nhớ cả nhiễu thay vì học quy luật chung. Dropout là một kỹ thuật mạnh mẽ để chống lại điều này.',
    segments: [
      { id: 'o1', text: 'Overfitting xảy ra khi mô hình quá phức tạp, có loss trên tập train rất thấp nhưng loss trên tập test lại cao.', heat: 0 },
      { id: 'o2', text: 'Khi đó, mô hình ghi nhớ (memorize) từng điểm dữ liệu học thay vì tổng quát hoá (generalize).', heat: 1 },
      { id: 'o3', text: 'Dropout là một kỹ thuật Regularization. Trong quá trình training, nó tắt ngẫu nhiên một tỷ lệ $p$ các nơ-ron.', heat: 3 },
      { id: 'o4', text: 'Việc này buộc mạng không được phụ thuộc quá nhiều vào bất kỳ một nơ-ron cụ thể nào.', heat: 2 },
      { id: 'o5', text: 'Tuy nhiên, ở bước suy luận (inference / test), ta không dùng Dropout mà sử dụng toàn bộ mạng.', heat: 2 }
    ],
    explanations: {
      o2: {
        title: 'Học thuộc vẹt (Memorization) là gì?',
        body: 'Là khi mạng nơ-ron có quá nhiều tham số, nó học thuộc lòng các đáp án của tập dữ liệu huấn luyện thay vì tìm ra các quy luật chung.',
        example: 'Giống như học sinh học thuộc lòng đề cương nhưng khi gặp bài tập ứng dụng thì không biết giải.'
      },
      o3: {
        title: 'Tắt ngẫu nhiên nơ-ron hoạt động như thế nào?',
        body: 'Mỗi lần lan truyền tiến (forward pass), mỗi nơ-ron có xác suất $p$ bị gán giá trị bằng 0. Cấu trúc mạng vì thế thay đổi liên tục qua từng mini-batch.',
        example: 'Nếu $p=0.5$, một nửa số nơ-ron bị tắt. Mạng phải cố gắng dự đoán đúng với chỉ một nửa năng lực hiện có.'
      },
      o4: {
        title: 'Ngăn chặn sự đồng thích nghi',
        body: 'Khi không thể phụ thuộc vào một nơ-ron cụ thể (vì nó có thể bị tắt bất cứ lúc nào), tất cả các nơ-ron đều phải phân chia công việc độc lập hơn để học các đặc trưng mạnh.',
        example: 'Tránh tình trạng 1 thành viên gánh team, bắt tất cả phải tự nâng cao năng lực.'
      },
      o5: {
        title: 'Tại sao suy luận lại dùng toàn bộ?',
        body: 'Khi inference, ta muốn dùng toàn bộ sức mạnh tổng hợp của mô hình. Tuy nhiên, do lúc test số lượng nơ-ron hoạt động nhiều hơn so với lúc train, ta phải nhân trọng số với $(1-p)$ để giữ nguyên kỳ vọng.',
        example: 'Nếu train với $p=0.5$, lúc test phải nhân outputs với $0.5$ (hoặc dùng Inverted Dropout trong lúc train).'
      }
    },
    community: {
      o2: {
        questions: [
          {
            id: 'q_o2',
            author: 'Thanh Trúc',
            avatarColor: 'oklch(0.7 0.2 50)',
            time: '1 ngày trước',
            upvotes: 15,
            text: 'Làm sao để biết là nó đang học thuộc lòng chứ không phải đang hiểu?',
          }
        ],
        aiAnswer: {
          summary: 'Dấu hiệu nhận biết sự học thuộc lòng.',
          body: 'Dấu hiệu rõ nhất là khi độ lỗi (loss) trên tập Train tiếp tục giảm, nhưng độ lỗi trên tập Test (hoặc Validation) lại bắt đầu tăng lên. Mạng đã quá "khớp" với dữ liệu train nên không thể đoán đúng trên dữ liệu lạ.',
          steps: ['Quan sát đồ thị Loss.', 'Train Loss giảm, Test Loss tăng = Overfitting.']
        }
      },
      o4: {
        questions: [
          {
            id: 'q_o4',
            author: 'Gia Bảo',
            avatarColor: 'oklch(0.5 0.15 150)',
            time: '3 ngày trước',
            upvotes: 29,
            text: 'Vậy là tắt bớt đi để nó đừng phụ thuộc vào mấy cái nơ-ron giỏi?',
          }
        ],
        aiAnswer: {
          summary: 'Chính xác! Đó là mục tiêu của Dropout.',
          body: 'Thay vì để mạng dựa dẫm vào vài nơ-ron quan trọng (hiện tượng đồng thích nghi), Dropout buộc các nơ-ron khác cũng phải tự học cách trích xuất đặc trưng tốt hơn.',
          steps: ['Phá vỡ sự đồng thích nghi (co-adaptation).', 'Tạo ra nhiều mạng con độc lập (Ensemble effect).']
        }
      },
      o3: {
        questions: [
          {
            id: 'q1',
            author: 'Quang Đại',
            avatarColor: 'oklch(0.5 0.2 20)',
            time: '4 giờ trước',
            upvotes: 52,
            text: 'Tắt nơ-ron đi thì mô hình có bị mất thông tin quan trọng không?',
          },
          {
            id: 'q2',
            author: 'Ngọc Dung',
            avatarColor: 'oklch(0.6 0.1 140)',
            time: '2 ngày trước',
            upvotes: 41,
            text: 'Tắt ngẫu nhiên nghĩa là nó sẽ tắt ở những nơ-ron khác nhau mỗi vòng lập đúng không ạ?',
          }
        ],
        aiAnswer: {
          summary: 'Lo ngại về việc Dropout làm mất thông tin hữu ích và cách nó hoạt động.',
          body: 'Đúng như Ngọc Dung nhận xét, mạng sẽ thay đổi cấu trúc qua từng mini-batch. Mục đích chính của việc này là buộc các nơ-ron KHÁC phải học cách trích xuất thông tin đó, thay vì chỉ dựa vào 1-2 nơ-ron "siêu sao" (Quang Đại).',
          steps: ['Ngăn chặn sự đồng thích nghi (co-adaptation).', 'Tạo ra hiệu ứng Ensemble (kết hợp nhiều mạng con).']
        }
      },
      o5: {
        questions: [
          {
            id: 'q3',
            author: 'Mai Trang',
            avatarColor: 'oklch(0.7 0.15 340)',
            time: '1 ngày trước',
            upvotes: 27,
            text: 'Vậy là lúc thực tế chạy (test), hàm Dropout bị vô hiệu hoá hoàn toàn à?',
          },
          {
            id: 'q4',
            author: 'Hoàng Vũ',
            avatarColor: 'oklch(0.6 0.2 190)',
            time: '12 giờ trước',
            upvotes: 14,
            text: 'Có phải nhân (1-p) để cân bằng tỷ lệ tín hiệu không thầy?',
          }
        ],
        aiAnswer: {
          summary: 'Xác nhận về trạng thái của Dropout lúc Test và cách bù đắp tín hiệu.',
          body: 'Đúng vậy! Trong PyTorch chẳng hạn, khi bạn gọi `model.eval()`, cơ chế Dropout sẽ tự động ngưng tắt nơ-ron. Khi đó, như Hoàng Vũ nói, hệ thống phải có cơ chế bù đắp tỷ lệ (scale) bằng $(1-p)$ để đảm bảo độ lớn của tín hiệu không bị đội lên.',
          steps: ['Lúc Train: Dropout chạy, tắt ngẫu nhiên.', 'Lúc Test: Dropout tắt, mở toàn bộ nơ-ron.', 'Nhân tỷ lệ (Scaling) để cân bằng giá trị.']
        }
      }
    },
    diagnosticQuiz: {
      prompt: 'Để bù đắp (scale) tín hiệu lúc Test khi đã dùng Dropout $p=0.5$ lúc Train, ta phải nhân đầu ra của nơ-ron với hệ số bao nhiêu ở quá trình Test (nếu không dùng Inverted Dropout)?',
      placeholder: 'Nhập số, ví dụ: 0.5',
      correctAnswers: ['0.5', '0,5', '1/2'],
      socratic: [
        {
          id: 'h1',
          question: 'Với tỷ lệ loại bỏ $p=0.5$, lúc Train có bao nhiêu % nơ-ron hoạt động?',
          options: [
            { id: 'a', label: '100%', correct: false, gap: 'Chưa hiểu bản chất của Dropout lúc Train' },
            { id: 'b', label: '0%', correct: false, gap: 'Nhầm lẫn giữa tỷ lệ giữ lại và loại bỏ, hoặc hiểu sai hoàn toàn' },
            { id: 'c', label: '50% (hay 0.5)', correct: true }
          ]
        },
        {
          id: 'h2',
          question: 'Lúc Test, bao nhiêu % nơ-ron hoạt động?',
          options: [
            { id: 'a', label: '0%', correct: false, gap: 'Quên nguyên tắc Test của Dropout' },
            { id: 'b', label: '50%', correct: false, gap: 'Quên nguyên tắc Test của Dropout (lúc test luôn bật toàn bộ)' },
            { id: 'c', label: '100% (hay 1.0)', correct: true }
          ]
        },
        {
          id: 'h3',
          question: 'Vì lúc Test số nơ-ron hoạt động GẤP ĐÔI so với kỳ vọng lúc Train, ta phải thu nhỏ kết quả đi bao nhiêu?',
          options: [
            { id: 'a', label: 'Nhân 2', correct: false, gap: 'Sai hướng điều chỉnh: phải thu nhỏ chứ không phải phóng to' },
            { id: 'b', label: 'Không nhân', correct: false, gap: 'Thiếu mất bước Scaling, gây sai lệch kỳ vọng đầu ra' },
            { id: 'c', label: 'Nhân 0.5 (chia đôi)', correct: true }
          ]
        }
      ],
      fullAnswer: 'Trong lúc train với $p=0.5$, chỉ một nửa số nơ-ron đóng góp vào tổng (kỳ vọng là $0.5 \\times \\text{sum}$). Lúc test, vì tất cả cùng bật, tổng sẽ lớn gấp đôi. Do đó, phải nhân các trọng số hoặc kết quả với $(1-p) = 0.5$ để đưa giá trị trở về cùng mức với lúc học.',
      gapAnalysis: {
        gap: 'Bạn chưa hiểu cơ chế scaling (bù đắp tín hiệu) của Dropout trong giai đoạn Inference.',
        improvement: 'Cần phân biệt rõ trạng thái Train (model.train()) và Test (model.eval()). Ở Test, tất cả nơ-ron đều được mở nên tín hiệu tổng sẽ bị đội lên, do đó bắt buộc phải có bước scale.'
      }
    }
  }
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
