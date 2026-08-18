Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 1/6

1. Đề bài và cách làm
1. Đề bài và cách làm
Bản đồ Lab

Đọc trước khi bắt đầu
150 phút
Trung cấp
Nhóm nhận một solution directive AI đã được mô tả khá cụ thể. Nhiệm vụ không phải chứng minh solution đó đúng, mà đi ngược để hình thành giả thuyết về user, situation, job và pain; sau đó thiết kế và luyện một problem interview không làm lộ solution.

Bài này đang nói về điều gì?
Reverse-engineering không tìm ra pain point; nó chỉ tạo ra giả thuyết để đi kiểm chứng.

Trong problem interview, hành vi đã xảy ra đáng tin hơn ý kiến, lời khen và dự đoán về tương lai.

Buổi luyện giúp phát hiện lỗi trong cách hỏi và sửa guide; không đủ để tuyên bố pain đã được validated.

Problem Hypothesis
Conversation Guide
Interview Practice
Guide Revision
Buổi Lab diễn ra như thế nào?
0:00–1:00
Cá nhân + Nhóm
Đặt giả thuyết
Chọn một trong ba case, đi qua chuỗi suy luận và chốt Problem Hypothesis.

1:00–1:30
Nhóm
Chuẩn bị phỏng vấn
Chọn ba điều cần học và viết Conversation Guide.

1:30–2:15
Cá nhân
Luyện phỏng vấn
Phỏng vấn chéo hai lượt; mỗi học viên ghi lại lượt mình làm interviewer.

2:15–2:30
Cá nhân + Nhóm
Chỉnh guide và nộp bài
Rút kinh nghiệm, sửa Conversation Guide và hoàn thiện repo cá nhân.

Kết thúc bài, bạn có gì?
Một Problem Hypothesis đủ cụ thể để có thể bị bác bỏ.
Một Conversation Guide đã được chỉnh sau khi luyện, kèm bản ghi và Practice Reflection cá nhân.
Chưa cần lo

Bài này không chấm việc nhóm bảo vệ được ý tưởng ban đầu. Nhận ra câu hỏi của mình dẫn dắt hoặc chưa đào đủ sâu rồi sửa lại là một kết quả tốt.

Nhóm bạn nhận một solution directive: một tính năng AI đã được mô tả tương đối cụ thể. Đừng bắt đầu bằng việc hoàn thiện tính năng đó. Hãy đi ngược để trả lời:

Solution này đang dựa trên giả định nào về user, tình huống, job và pain — và bằng chứng thực tế có ủng hộ giả định đó không?

Trong 150 phút, nhóm đi qua bốn chặng:

Chặng	Thời gian	Câu hỏi trung tâm	Đầu ra
1. Đặt giả thuyết	60 phút	Pain nào có thể đứng phía sau solution?	Problem Hypothesis
2. Chuẩn bị phỏng vấn	30 phút	Cần hỏi gì để tìm được bằng chứng mà không pitch solution?	Conversation Guide
3. Luyện phỏng vấn	45 phút	Mình có hỏi được một câu chuyện thật mà không dẫn dắt không?	Interview Recording + Practice Note
4. Chỉnh guide và nộp bài	15 phút	Sau khi luyện, nhóm cần sửa cách hỏi ở đâu?	Conversation Guide cuối + Practice Reflection
Luật của bài lab
Không cho interviewee xem solution directive. Đây là problem interview, không phải concept interview.
Hỏi về quá khứ cụ thể. Ưu tiên “lần gần nhất” hơn “thường thì” hoặc “bạn có muốn”.
Mỗi người phỏng vấn một người ngoài nhóm. Không dùng câu trả lời của thành viên cùng nhóm làm evidence.
Ghi facts trước, diễn giải sau. Lời nói, hành vi và workaround của user phải được tách khỏi kết luận của nhóm.
Không bảo vệ giả thuyết. Evidence làm giả thuyết yếu đi cũng là evidence có giá trị.
Không tuyên bố validated. Chặng 3 là phần luyện kỹ năng, không phải một vòng field research chính thức.
Cách làm việc nhóm
Ở Chặng 1, mỗi người viết nháp trước khi nhóm hội tụ.
Ở Chặng 2, cả nhóm chốt ba điều cần học, viết và tự rà soát một Conversation Guide chung.
Ở Chặng 3, mỗi người tự phỏng vấn một user khác và mang notes về nhóm.
Ở Chặng 4, nhóm sửa Conversation Guide chung; mỗi người tự hoàn thiện Practice Reflection và repo của mình.
Sử dụng AI trong bài lab
Được dùng AI để gợi ý cách diễn đạt hoặc rà soát câu hỏi dẫn dắt. Không được dùng AI để tạo interview data, bịa quote, suy diễn chi tiết user chưa nói hoặc viết reflection thay cho việc tự nghe lại cuộc phỏng vấn. Mọi cách dùng AI phải được khai báo trong README của repo.

1 / 6
VLearn Codelabs | Học AI thực chiến qua Lab

Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 2/6

2. Ba case để lựa chọn
2. Ba case để lựa chọn
Ba case dưới đây là ba tính năng AI được đề xuất để cải tiến VLearn. Mỗi nhóm chọn một case. Các mô tả chỉ cho biết solution đang được đề xuất; chúng không cung cấp trước customer problem, JTBD hay expected outcome.

Case A — AI Tutor: Diagnostic Refresher
Thêm nút “Tôi vẫn chưa hiểu” vào bài học.

Khi học viên bấm nút, AI Tutor sử dụng nội dung bài hiện tại, các câu trả lời gần đây và lịch sử học tập để:

Đặt 2–3 câu hỏi chẩn đoán ngắn.
Chọn một khái niệm nền để học viên ôn lại.
Tạo một phần giải thích ngắn.
Đưa học viên trở về bài đang học.
Thành phần	Solution đã mô tả
Trigger	Học viên bấm “Tôi vẫn chưa hiểu”
Input	Bài hiện tại, câu trả lời gần đây và lịch sử học tập
AI action	Chẩn đoán và lựa chọn khái niệm nền
Output	Một phần ôn lại ngắn trước khi quay lại bài hiện tại
User control	Học viên chủ động yêu cầu trợ giúp
Người phù hợp để phỏng vấn: trong bảy ngày gần đây đã có lúc không hiểu một phần bài học và phải tìm cách xử lý.

Case B — AI Notes: Personal Learning Notes
Trong khi học, học viên có thể highlight một đoạn nội dung, đánh dấu “Chưa hiểu”, hoặc viết một câu hỏi hay ghi chú ngắn.

Khi bài học kết thúc, AI Notes kết hợp những dấu vết này với nội dung bài để tạo một bản ghi chú có cấu trúc. Học viên có thể chỉnh sửa và xác nhận trước khi lưu.

Thành phần	Solution đã mô tả
Trigger	Học viên hoàn thành bài học
Input	Nội dung bài, highlights, điểm “Chưa hiểu”, câu hỏi và ghi chú cá nhân
AI action	Chọn lọc, nhóm và tổ chức thông tin
Output	Bản ghi chú cá nhân có cấu trúc
User control	Học viên chỉnh sửa và xác nhận trước khi lưu
Người phù hợp để phỏng vấn: trong bảy ngày gần đây đã ghi chú, highlight hoặc lưu lại nội dung để xem sau.

Case C — AI Support Radar
Sau mỗi phiên học, hệ thống phân tích các tín hiệu như di chuyển giữa slide, dừng lâu hoặc xem lại, highlight và ghi chú, đánh dấu “Chưa hiểu”, thay đổi câu trả lời, và nội dung trao đổi với AI Chat.

AI tạo một Support Queue cho giảng viên, gồm:

Những học viên có thể cần hỗ trợ.
Phần nội dung mà họ có thể đang gặp khó khăn.
Các tín hiệu dẫn đến nhận định đó.
Một hành động hỗ trợ được đề xuất.
Giảng viên xem lại và quyết định có liên hệ với học viên hay không.

Thành phần	Solution đã mô tả
Trigger	Kết thúc một phiên học
Input	Slide navigation, notes, answers và AI Chat
AI action	Suy đoán nhu cầu hỗ trợ và xếp mức ưu tiên
Output	Support Queue cho giảng viên
Human control	Giảng viên quyết định có can thiệp hay không
Người phù hợp để phỏng vấn: ưu tiên hai learners và một coach/instructor. Nếu không có coach/instructor trong giờ lab, nhóm có thể phỏng vấn ba learners nhưng phải ghi rõ: “Vòng này chỉ có learner-side evidence; instructor-side job chưa được kiểm chứng.”

2 / 6
VLearn Codelabs | Học AI thực chiến qua Lab

Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 3/6

3. Chặng 1 — Đặt giả thuyết · 60 phút
3. Chặng 1 — Đặt giả thuyết · 60 phút
Mục tiêu: mở lại toàn bộ logic đang bị nén trong solution directive và biến nó thành một giả thuyết đủ cụ thể để evidence có thể làm thay đổi.

Nhóm đi theo chuỗi:

Solution → Change → Actor → Situation & Job → Pain → Evidence
Copy
Trong 15 phút đầu, mỗi thành viên tự suy luận và chưa dùng AI. Sau đó nhóm so sánh các nhánh, giữ lại những cách giải thích khác nhau và cùng đi tiếp. Mọi nội dung trong chặng này đều là hypothesis, chưa phải fact về user.

Các câu hỏi dưới đây là câu hỏi gợi mở. Nhóm không cần trả lời từng câu. Ở mỗi lớp, chọn những câu giúp làm rõ điểm nhóm còn chưa thống nhất.

1. Solution — Gỡ solution khỏi hình thức cụ thể
Case đã chọn: ........................................................................

Ghi lại directive nguyên văn, sau đó diễn đạt lại dưới dạng một capability trung tính.

Câu hỏi dẫn dắt:

Câu nào trong directive đang mô tả giao diện, tên feature hoặc công nghệ?
Nếu bỏ tên nút, màn hình và AI action, khả năng cần tạo ra là gì?
Nhóm có đang mặc định cách triển khai được giao là cách duy nhất không?
Capability có thể được mô tả mà không dùng tên feature không?
Solution directive:

..........................................................................................

Capability trung tính:

..........................................................................................

2. Change — Làm lộ chuỗi thay đổi được kỳ vọng
Đừng nhảy thẳng từ feature tới outcome. Viết các mắt xích mà team đang ngầm tin sẽ xảy ra.

Câu hỏi dẫn dắt:

User sẽ biết hoặc làm được điều gì khác?
Hành vi nào phải thay đổi để outcome xảy ra?
Trạng thái hoặc kết quả nào được kỳ vọng thay đổi?
Đâu là output team tạo ra, đâu là outcome team chỉ có thể ảnh hưởng?
Nếu user không thay đổi hành vi, solution còn tạo được outcome không?
Solution → ................................ → ................................ → Outcome
Copy
Các thay đổi được kỳ vọng:

........................................................................................
........................................................................................
........................................................................................
3. Actor — Xác định các nhóm người có liên quan
Một solution có thể liên quan đến nhiều nhóm user hoặc stakeholder khác nhau. Người trực tiếp sử dụng feature chưa chắc là người đang gặp pain chính, phải thay đổi hành vi hoặc chịu hậu quả.

Ví dụ với AI Support Radar trên VLearn: learner là người có hành vi học tập được phân tích; instructor là người xem Support Queue và quyết định can thiệp; coach là người có thể trực tiếp hỗ trợ learner. Cả ba đều là actor liên quan nhưng có job, pain và lợi ích khác nhau.

Câu hỏi dẫn dắt:

Ai trực tiếp sử dụng solution?
Ai trực tiếp trải nghiệm pain?
Ai phải thay đổi hành vi để outcome xảy ra?
Ai chịu hậu quả nếu problem không được giải quyết?
Ai hưởng lợi gián tiếp?
Người nhận feature có chắc là người sở hữu pain chính không?
Actor	Họ đang làm gì?	Pain hoặc hậu quả có thể có	Họ hưởng lợi thế nào?
Actor nhóm chọn để điều tra trước: ........................................................

Vì sao chọn nhánh này thay vì actor khác: ..................................................

4. Situation & Job — User đang cố làm gì trong tình huống nào?
Chọn một khoảnh khắc cụ thể mà actor có thể đã trải qua. Mô tả hoàn cảnh và việc họ đang cố hoàn thành, chưa kết luận pain nằm ở đâu. Job phải còn tồn tại ngay cả khi bỏ AI và feature khỏi bối cảnh.

Câu hỏi dẫn dắt:

Tình huống bắt đầu khi chuyện gì xảy ra?
Lúc đó user đang cố hoàn thành việc gì?
Vì sao việc đó quan trọng với họ?
Hiện tại họ đang thực hiện việc đó như thế nào?
Họ bắt đầu gặp vướng mắc ở điểm nào?
Tình huống bắt đầu
→ User muốn hoàn thành việc gì
→ Hiện tại họ làm như thế nào
→ Điểm bắt đầu gặp vướng mắc
Copy
Mô tả Situation & Job:

Khi [tình huống/trigger], [actor] đang cố [việc cần hoàn thành] bằng cách [cách họ đang làm hiện tại].

..........................................................................................

JTBD Hypothesis:

Khi [situation], tôi muốn [progress], để có thể [desired outcome].

..........................................................................................

5. Pain — Viết các cách giải thích cạnh tranh
Pain là barrier cản actor hoàn thành job và consequence đi kèm; không phải sự vắng mặt của feature.

Câu hỏi dẫn dắt:

Barrier cụ thể nào đang cản actor hoàn thành job?
Actor thiếu thông tin, kỹ năng, thời gian hay sự hỗ trợ?
Họ có nhận ra mình đang gặp pain không?
Nếu không xử lý, hậu quả thực tế là gì?
Actor có thể sống chung với sự bất tiện này không?
Có cách giải thích nào khác cho cùng hành vi?
Pain có còn tồn tại nếu solution directive biến mất khỏi đầu nhóm không?
Pain Hypothesis A:

Khi [situation], [actor] gặp khó khăn trong việc [job] vì [barrier], dẫn đến [consequence].

..........................................................................................

Pain Hypothesis B — cách giải thích cạnh tranh:

Khi [situation], [actor] gặp khó khăn trong việc [job] vì [barrier], dẫn đến [consequence].

..........................................................................................

Giả thuyết nhóm chọn để điều tra trước: A / B

Lý do chọn: ...............................................................................

6. Evidence — Xác định điều cần tìm trước khi viết câu hỏi
Evidence phải đến từ sự kiện, hành vi, workaround và hậu quả đã xảy ra; một problem statement nghe hợp lý chưa phải evidence.

Câu hỏi dẫn dắt:

User có kể được một sự kiện gần đây với trình tự cụ thể không?
Trong sự kiện đó, họ thực sự đã làm gì?
Họ đã dùng workaround nào và bỏ ra bao nhiêu công sức?
Tình huống có lặp lại không?
Hậu quả quan sát được là gì?
Họ đã chủ động tìm cách xử lý chưa?
Điều gì cho thấy pain không đủ quan trọng?
Evidence nào sẽ khiến nhóm sửa hoặc bác bỏ hypothesis?
Cần kiểm tra	Evidence làm nhóm tin hơn	Evidence làm nhóm nghi ngờ hoặc bác bỏ
Situation có thật		
Pain có ý nghĩa		
Workaround tồn tại		
Consequence tồn tại		
Pattern có lặp		
Chốt Problem Hypothesis và park solution
Problem Hypothesis nhóm mang sang Chặng 2:

..........................................................................................

Điều gì phải đúng để giả thuyết đứng vững:

..........................................................................................

Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết:

..........................................................................................

Solution Parking Lot: brainstorm ít nhất năm hướng, trong đó có ít nhất một hướng không sử dụng AI.

Hướng giải quyết có thể có	AI / Không sử dụng AI
1.	
2.	
3.	
4.	
5.	
Tự kiểm
·
CHECKPOINT 1 — Problem Hypothesis
Nhóm qua checkpoint khi lần theo được đủ chuỗi Solution → Change → Actor → Situation & Job → Pain → Evidence; có hai cách giải thích cạnh tranh; và nói rõ điều gì có thể làm giả thuyết được chọn trở nên sai.

3 / 6
VLearn Codelabs | Học AI thực chiến qua Lab

Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 4/6

4. Chặng 2 — Chuẩn bị phỏng vấn · 30 phút
4. Chặng 2 — Chuẩn bị phỏng vấn · 30 phút
Mục tiêu: chuyển Evidence Map thành một Conversation Guide ngắn, đủ để tìm bằng chứng về pain mà không mời user đánh giá solution.

Nội dung	Thời gian
Chốt ba điều quan trọng nhất cần học	10 phút
Viết Conversation Guide	15 phút
Tự rà soát và phân công phỏng vấn	5 phút
1. Chốt Big 3
Quay lại Evidence Map ở Chặng 1 và chọn đúng ba điều quan trọng nhất cần học. Ít nhất một điều phải là câu hỏi “đáng sợ”: câu trả lời có thể làm nhóm thay đổi hướng.

Câu hỏi dẫn dắt:

Giả định lớn nhất trong Problem Hypothesis là gì?
Điều gì phải đúng thì pain này mới đáng giải?
Câu trả lời nào có thể khiến nhóm thay đổi nhận định?
Hành vi quá khứ nào sẽ làm nhóm tin hơn?
Dấu hiệu nào cho thấy đây chỉ là một bất tiện nhỏ?
Ai đã trải qua situation đủ gần đây để nhớ chi tiết?
Điều cần học	Evidence cần tìm	Điều gì khiến nhóm xem lại giả thuyết?
1.		
2.		
3.		
2. Viết Conversation Guide
Tiêu chí tuyển người:

Chúng tôi cần nói chuyện với người đã ................................................................ trong vòng ........ ngày gần đây.

Recruitment check: một câu xác nhận interviewee thực sự từng trải qua situation. Câu này dùng để tuyển đúng người, không được tính là evidence chính.

..........................................................................................

Lời mở đầu: nói mục đích học hỏi, không nhắc solution và không nói “bọn mình muốn xin feedback về tính năng”.

..........................................................................................

Story opener:

Kể mình nghe về lần gần nhất ........................................................................?

Big 3 Questions:

Điều cần học	Câu hỏi sẽ dùng
1.	
2.	
3.	
Probe bank — chỉ dùng khi cần đào sâu câu chuyện:

“Lúc đó chuyện gì xảy ra tiếp theo?”
“Bạn đã làm gì?”
“Vì sao bạn chọn cách đó?”
“Phần nào khó nhất?”
“Bạn đã thử cách nào khác chưa?”
“Việc đó kéo theo hậu quả gì?”
“Lần gần nhất trước đó là khi nào?”
Ba phản xạ khi data bắt đầu lệch:

User đưa ra	Phản xạ	Cách quay lại evidence
Lời khen	Deflect	Cảm ơn ngắn rồi quay lại việc họ đang làm hiện tại
Câu chung chung hoặc lời hứa tương lai	Anchor	“Lần gần nhất chuyện đó xảy ra là khi nào?”
Ý tưởng hoặc feature request	Dig	“Điều đó giúp bạn làm được gì? Hiện tại bạn xử lý ra sao?”
3. Tự rà soát và phân công
Có câu nào làm lộ solution không?
Có câu nào hỏi ý kiến hoặc dự đoán tương lai không?
Story opener đã neo vào “lần gần nhất” chưa?
Ba câu hỏi chính có nối với ba điều cần học không?
Có ít nhất một câu hỏi có thể làm giả thuyết yếu đi không?
Interviewee đã đáp ứng tiêu chí tuyển chưa?
Mỗi thành viên đã biết mình sẽ phỏng vấn ai chưa?
Tự kiểm
·
CHECKPOINT 2 — Interview-ready
Guide đạt nếu bắt đầu từ một sự kiện gần đây; ba câu hỏi chính nối trực tiếp với Big 3; probe bank có thể đào hành vi–workaround–hậu quả; và không để lộ solution directive.

4 / 6
VLearn Codelabs | Học AI thực chiến qua Lab

Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 5/6

5. Chặng 3 — Luyện phỏng vấn · 45 phút
5. Chặng 3 — Luyện phỏng vấn · 45 phút
Mục tiêu: luyện cách mở một câu chuyện thật, follow user và đào sâu mà không làm lộ solution hoặc dẫn dắt câu trả lời.

Xin phép và ghi lại interview: Trước khi bắt đầu, hãy nói rõ mục đích ghi âm và xin sự đồng ý của người được phỏng vấn. Chỉ bắt đầu ghi khi họ đồng ý. Bản ghi chỉ được dùng để xem lại, bóc transcript và phục vụ bài học; không chia sẻ công khai.

Ghép cặp với một người ngoài nhóm và không cho nhau xem solution directive. Hai người lần lượt đổi vai: mỗi lượt interview 15 phút. Mỗi học viên ghi lại đúng lượt mình làm interviewer. Mười phút cuối, mỗi người hoàn thiện notes và quay lại nhóm. Nếu người được ghép không đáp ứng tiêu chí tuyển ở Chặng 2, báo giảng viên để đổi cặp.

Trong interview, dùng Conversation Guide làm xương sống nhưng follow câu chuyện của user. Nói ít, hỏi tiếp khi nghe thấy một hành vi, workaround hoặc hậu quả đáng chú ý. Không pitch solution, không hỏi user có muốn feature hay không và không ghi âm nếu chưa xin phép.

Interview Record — mỗi thành viên điền một bản
Mã người tham gia: ............ · Đúng tiêu chí tuyển: Có / Không

Điều cần giữ lại	Ghi chép
Câu chuyện gần nhất: user đang ở đâu và cố làm gì?	
User đã thực sự làm gì?	
Khó khăn và workaround đã dùng	
Hậu quả hoặc chi phí	
Điều bất ngờ, trái giả thuyết hoặc một exact quote	
Tự kiểm
·
CHECKPOINT 3 — Practice completed
Mỗi thành viên hoàn thành một lượt làm interviewer, có Interview Record và bản ghi đã được người tham gia đồng ý. Lời khen hoặc “mình sẽ dùng” không được coi là bằng chứng về pain.

5 / 6
VLearn Codelabs | Học AI thực chiến qua Lab







Track 1 - Day 17 — Finding and Validating Pain Points


Ghi chú
0


Tiếng Việt

2
Bước 6/6

6. Chặng 4 — Chỉnh guide và nộp bài · 15 phút
6. Chặng 4 — Chỉnh guide và nộp bài · 15 phút
Mục tiêu: nhìn lại cách mình vừa phỏng vấn, sửa Conversation Guide và chuẩn bị một repo cá nhân có thể review lại sau buổi học.

Mỗi thành viên chia sẻ với nhóm một câu hỏi đã mở được câu chuyện thật và một chỗ mình đã dẫn dắt, hỏi quá chung hoặc bỏ lỡ tín hiệu. Từ đó, nhóm sửa Conversation Guide chung. Mỗi người tự hoàn thành Practice Reflection ngắn:

Câu hỏi nào đã giúp user kể một tình huống cụ thể? ........................................
Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật? ........................................
Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao? ..............................
Repo cá nhân cần nộp
Tên repo:

Track1_Day17_MHV_HoVaTen
Copy
Cấu trúc tối thiểu:

Track1_Day17_MHV_HoVaTen/
├── README.md
└── interview/
    ├── notes.md
    └── recording.m4a       # hoặc recording.mp3 / recording.mp4
Copy
Nếu bản ghi được lưu trên Drive hoặc nền tảng gọi trực tuyến, thay file audio/video bằng:

interview/recording-link.md
Copy
Link phải mở được với giảng viên/TA và không để chế độ công khai.

Nội dung README.md
Thông tin cá nhân và nhóm: MHV, họ tên, tên nhóm, thành viên và case đã chọn.
Problem Hypothesis Brief: kết quả Chặng 1 của nhóm.
Conversation Guide phiên bản cuối: bản đã sửa sau khi luyện.
Practice Reflection: ba câu trả lời ở Chặng 4.
AI Support Log: AI đã giúp gì, có điểm nào sai/hời hợt và bạn đã tự sửa thế nào.
interview/notes.md chứa Interview Record của chính lượt bạn làm interviewer. Không bắt buộc nộp transcript trong bài này; bản ghi được giữ lại để có thể bóc transcript và review sau.

Bốn gate đánh giá
Gate	Đạt khi	Dấu hiệu chưa đạt
1. Problem Framing	Đi đủ chuỗi Solution → Evidence; giả thuyết cụ thể và có thể bị bác bỏ	Pain chứa tên feature; actor hoặc situation chung chung
2. Interview Design	Big 3 nối với điều cần học; guide hỏi quá khứ và không làm lộ solution	Hỏi “bạn có muốn/dùng không”; câu hỏi không gắn với hypothesis
3. Interview Practice	Có bản ghi được consent; interviewer follow câu chuyện và đào hành vi	Đọc bảng hỏi máy móc; nói nhiều; pitch solution
4. Reflection & Revision	Chỉ ra lỗi cụ thể và sửa Conversation Guide dựa trên trải nghiệm luyện	Reflection chung chung; guide sau luyện không thay đổi
Kiểm tra trước khi nộp
 Repo đúng tên Track1_Day17_MHV_HoVaTen.
 README.md đủ năm phần.
 interview/notes.md là notes của chính lượt bạn làm interviewer.
 Bản ghi hoặc recording link mở được với giảng viên/TA.
 Người được phỏng vấn đã đồng ý cho ghi lại.
 Conversation Guide không làm lộ solution và đã được sửa sau khi luyện.
Tự kiểm
·
HOÀN TẤT — Repo cá nhân
Bài hoàn tất khi repo cho thấy được ba việc: nhóm đã reverse solution thành giả thuyết như thế nào, bạn đã thực hành problem interview ra sao, và Conversation Guide đã được sửa gì trước khi đi fieldwork thật.

Góp ý cho buổi Lab
Không bắt buộc và không ảnh hưởng việc nộp bài. Giảng viên chỉ xem phản hồi ẩn danh.

Góp ý bài Lab
Nộp bài và đánh giá Lab
Dán link GitHub, Drive hoặc LMS của bài đã nộp. Điểm và nhận xét sẽ không hiển thị tại đây.

Đang tải trạng thái bài nộp…

6 / 6
VLearn Codelabs | Học AI thực chiến qua Lab