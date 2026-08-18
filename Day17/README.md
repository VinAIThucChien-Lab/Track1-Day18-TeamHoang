# Báo cáo lab: Finding and Validating Pain Points (Day 17)

---

## 1. Thông tin cá nhân và nhóm

* **Tên nhóm:** Team Hoang
* **Danh sách thành viên:**
  * Nguyễn Đức Đạt - 2A202601728
  * Kiều Hồng Phong - 2A202601020
  * Đỗ Duy Đức - 2A202602019
* **Case đã chọn:** Case A — AI Tutor: Diagnostic Refresher
  * *Mô tả solution directive:* Thêm nút "Tôi vẫn chưa hiểu" vào bài học. Khi bấm, AI Tutor sử dụng nội dung bài hiện tại, câu trả lời gần đây và lịch sử học tập để đặt 2–3 câu hỏi chẩn đoán ngắn, chọn khái niệm nền để ôn lại, tạo phần giải thích ngắn rồi đưa học viên trở về bài đang học.

---

## 2. Problem hypothesis brief (Kết quả chặng 1 của nhóm)

### 2.1. Capability trung tính (Gỡ bỏ UI và AI)
* **Directive gốc:** Thêm nút "Tôi vẫn chưa hiểu" $\rightarrow$ AI chẩn đoán 2-3 câu ngắn $\rightarrow$ Ôn lại khái niệm nền $\rightarrow$ Quay lại bài học.
* **Capability trung tính:** Khả năng xác định nhanh lỗ hổng kiến thức tiên quyết và cung cấp giải thích bổ trợ đúng ngữ cảnh môn học ngay tại thời điểm người học bị nghẽn đà tiếp thu.

### 2.2. Chuỗi thay đổi kỳ vọng (Change chain)
$$\text{Output của team} \longrightarrow \text{User nhận thức điều gì?} \longrightarrow \text{Hành vi nào thay đổi?} \longrightarrow \text{Outcome đạt được}$$

* **Output của team:** Cung cấp phần giải thích ngắn gọn, đúng trọng tâm và đúng ngữ cảnh bài học ngay lập tức khi học viên gặp bế tắc.
* **Nhận thức thay đổi:** Học viên nhận biết chính xác mình đang bị hổng khái niệm nền tảng nào thay vì cảm thấy mơ hồ bài này khó hiểu.
* **Hành vi thay đổi:** Dành 2-3 phút đọc lướt giải thích bổ trợ và tiếp tục học ngay, thay vì mở nhiều tab tra cứu lan man hoặc nản lòng bỏ dở bài tập.
* **Outcome kỳ vọng:** Duy trì dòng suy nghĩ liền mạch khi học bài, không bị đứt mạch tư duy, hoàn thành bài tập đúng hạn và tự tin vượt qua các bài kiểm tra.

### 2.3. Actor — Xác định các nhóm người có liên quan

* **Phân tích các bên liên quan (Dựa theo câu hỏi dẫn dắt):**
  * *Ai trực tiếp sử dụng solution:* Học viên đang theo dõi bài giảng hoặc làm bài tập.
  * *Ai trực tiếp trải nghiệm pain:* Học viên gặp đoạn slide khó hiểu nhưng không thể hỏi ngay.
  * *Ai phải thay đổi hành vi để outcome xảy ra:* Học viên (chuyển từ việc bỏ dở bài tập sang việc tiếp nhận giải thích bổ trợ để làm tiếp bài).
  * *Ai chịu hậu quả nếu problem không được giải quyết:* Học viên (bị chậm tiến độ, rớt quiz, mất kiến thức nền) và giảng viên/trợ giảng (tốn nhiều thời gian trả lời lặp lại các câu hỏi cơ bản).
  * *Ai hưởng lợi gián tiếp:* Giảng viên và trợ giảng (giảm tải áp lực giải đáp ngoài giờ, nâng cao tỷ lệ hoàn thành môn học của lớp).

* **Bảng phân tích các nhóm Actor:**

| Actor | Họ đang làm gì? | Pain hoặc hậu quả có thể có | Họ hưởng lợi thế nào? |
| :--- | :--- | :--- | :--- |
| **Học viên (Learner)** | Nghe giảng trên lớp, tự học ở nhà, làm bài tập về nhà theo slide. | Gặp công thức/khái niệm khó không hiểu; ngại hỏi trên lớp; tra mạng bị lệch chuẩn; tốn thời gian và bỏ dở bài tập. | Hiểu đúng bản chất khái niệm ngay lúc gặp khó, hoàn thành bài tập đúng hạn, không bị đứt mạch tư duy. |
| **Giảng viên (Instructor)** | Soạn bài giảng, giảng dạy trên lớp, giao bài tập và chấm điểm. | Cháy giáo trình trên lớp không kịp giải đáp chi tiết; nhận về nhiều bài tập nộp muộn hoặc làm sai quy chuẩn. | Lớp học theo kịp tiến độ, giảm thiểu số lượng sinh viên bị trượt môn hoặc bỏ học giữa chừng. |
| **Trợ giảng (TA / Mentor)** | Hỗ trợ giải đáp thắc mắc, hướng dẫn thực hành và chấm bài tập. | Bị quá tải bởi các câu hỏi giải thích khái niệm nền tảng lặp đi lặp lại từ nhiều sinh viên. | Tiết kiệm thời gian giải thích kiến thức cơ bản, tập trung hỗ trợ chuyên sâu các phần thực hành khó. |
| **Bạn cùng lớp (Peer)** | Cùng học và làm bài tập nhóm. | Bị bạn bè hỏi chen ngang khi bản thân cũng đang chưa hiểu bài, gây phân tâm. | Có môi trường học tập đồng đều, trao đổi bài hiệu quả hơn. |

* **Actor nhóm chọn để điều tra trước:** Học viên (Learner).
* **Lý do chọn nhánh này thay vì actor khác:** Học viên là người trực tiếp đối mặt với rào cản nhận thức, chịu tổn thất trực tiếp về thời gian mò mẫm và là người trực tiếp đưa ra quyết định bỏ dở bài tập nếu không được tháo gỡ kịp thời.

### 2.4. Situation và Jobs-to-be-Done (JTBD)
* **Mô tả situation và job:**
  > Khi đang học bài hoặc làm bài tập có đoạn slide dài, cô đọng nhưng thiếu diễn giải ví dụ, học viên đang cố hiểu được ý nghĩa khái niệm để hoàn thành bài tập bằng cách tra cứu thêm bên ngoài hoặc tìm người hỏi.
* **JTBD hypothesis:**
  > Khi gặp phải nội dung khó hiểu trong bài giảng, tôi muốn nhanh chóng làm rõ bản chất khái niệm đúng theo ngữ cảnh môn học mà không cần chờ người trợ giúp, để có thể tiếp tục làm bài liền mạch và hoàn thành bài tập đúng hạn.

### 2.5. Hai giả thuyết pain cạnh tranh (Pain A vs Pain B)
* **Pain hypothesis A (Giả thuyết rào cản ngữ cảnh và thiếu hỗ trợ tức thì):**
  > Khi học bài hoặc làm bài tập, học viên gặp khó khăn trong việc hiểu bài vì không có ai để hỏi ngay lúc đó và khi tự tìm kiếm bên ngoài thì thông tin quá lan man, không khớp với ngữ cảnh môn học, dẫn đến mất nhiều thời gian mò mẫm vô ích, đứt mạch tư duy và nản lòng bỏ dở bài tập.
* **Pain hypothesis B (Giả thuyết rào cản trình bày tài liệu và nhảy cóc kiến thức):**
  > Khi học bài, học viên gặp khó khăn trong việc nắm bắt kiến thức vì slide bài giảng quá dài nhưng chỉ toàn gạch đầu dòng cô đọng, thiếu ví dụ minh họa và thiếu diễn giải bước đệm, dẫn đến đọc đi đọc lại nhiều lần vẫn không hiểu, không biết mình đang bị hổng ở bước nào.
* **Giả thuyết nhóm chọn kiểm chứng:** Pain hypothesis A.
* **Lý do chọn:** Đánh trúng các điểm nghẽn thực tế nhất của học viên gồm: thiếu người giải đáp đúng lúc, sự cô độc khi làm bài một mình, và việc bị ngợp thông tin phân tán khi tự tra cứu ngoài.

### 2.6. Evidence map (Bản đồ bằng chứng cần tìm)

| Cần kiểm tra | Evidence làm nhóm tin hơn (Positive) | Evidence làm nhóm bác bỏ hoặc làm yếu giả thuyết (Negative) |
| :--- | :--- | :--- |
| **Situation có thật** | User kể được chính xác bài học và khái niệm bị tắc trong 7 ngày qua (môn nào, slide mấy, lúc nào). | User nói chung chung: lâu rồi mình không gặp khó, thường mình thấy slide cũng dễ hiểu. |
| **Pain có ý nghĩa** | Bực bội thực sự, stress vì mất 20-50 phút tra cứu nhưng vẫn không hiểu bài. | Coi như chuyện nhỏ, lướt qua luôn không bận tâm, hôm sau hỏi nhẹ là xong. |
| **Workaround tồn tại** | Đã thử nhiều cách: chụp ảnh slide lưu lại, tra Google, hỏi bạn nhưng không giải quyết được. | Không làm gì cả, để trống bài tập mà không thấy áy náy. |
| **Consequence tồn tại** | Bị trễ hạn nộp bài tập, rớt quiz chuyên cần, nản lòng muốn bỏ dở. | Vẫn làm được bài tập bình thường, không ảnh hưởng kết quả hay tiến độ. |
| **Pattern có lặp** | Tình trạng tắc nghẽn lặp lại ở hầu hết các bài học mang tính kỹ thuật hoặc công thức tính toán. | Chỉ bị đúng một lần duy nhất do hôm đó mệt hoặc mất tập trung. |

### 2.7. Chốt problem hypothesis mang sang chặng 2
> Học viên khi gặp slide chứa khái niệm hoặc công thức mới thường bị nghẽn đà tiếp thu vì không có người hỗ trợ tức thì, và khi tự tra cứu bên ngoài thì bị ngợp thông tin lan man không đúng ngữ cảnh môn học ở trường, dẫn đến mất nhiều thời gian mò mẫm, ức chế và dễ bỏ dở bài tập.

* **Điều gì phải đúng để giả thuyết đứng vững:**
  1. Học viên thường xuyên gặp tình huống bị kẹt lại ở các slide công thức hoặc lý thuyết trừu tượng.
  2. Việc tự tra Google hoặc hỏi bạn bè xung quanh bị hạn chế do lệch quy chuẩn môn học hoặc bạn bè cũng chưa hiểu kịp.
  3. Học viên thực sự có hành vi bỏ dở bài tập do bế tắc nhận thức.
* **Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết:**
  1. Học viên thấy Google hoặc ChatGPT giải thích cực kỳ chuẩn xác, nhanh chóng và khớp hoàn toàn yêu cầu của thầy cô.
  2. Rào cản thực sự nằm ở việc đề bài bị lỗi chứ không phải do thiếu diễn giải khái niệm nền.

### 2.8. Solution parking lot (Tạm cất solution directive ban đầu)

* **Sơ đồ phân loại hướng giải quyết:**

```
[PROBLEM ĐƯỢC CHỌN]                      [SOLUTION OPTIONS ĐƯỢC BRAINSTORM]
                                         ┌───────────────────────────────────────────────┐
                                      1  │ [AI] Nút "Tôi chưa hiểu" chẩn đoán 2 câu      │
                                         └───────────────────────────────────────────────┘
                                         ┌───────────────────────────────────────────────┐
                                      2  │ [AI] Chatbot context-aware giải đáp trực tiếp │
                                         │      ngay trên đoạn slide đang mở             │
                                         └───────────────────────────────────────────────┘
Kẹt công thức, không ai hỏi, ────►       ┌───────────────────────────────────────────────┐
slide thiếu giải thích,               3  │ [Non-AI] Bổ sung mục "Thuật ngữ & Ví dụ thực  │
tra mạng bị lệch chuẩn                   │          tế" (Glossary) ghim kèm từng slide   │
                                         └───────────────────────────────────────────────┘
                                         ┌───────────────────────────────────────────────┐
                                      4  │ [Non-AI] Tạo form "Câu hỏi ẩn danh" cuối bài  │
                                         │          cam kết TA trả lời trước 9h sáng mai │
                                         └───────────────────────────────────────────────┘
                                         ┌───────────────────────────────────────────────┐
                                      5  │ [Non-AI] Thêm ví dụ tính toán số liệu cụ thể  │
                                         │          từng bước ngay dưới mỗi slide        │
                                         └───────────────────────────────────────────────┘
```

* **Bảng danh sách các hướng giải quyết (Ít nhất 5 hướng, có giải pháp không dùng AI):**

| Hướng giải quyết có thể có | AI / Không sử dụng AI |
| :--- | :--- |
| **1.** Thêm nút chẩn đoán nhanh 2 câu hỏi để gợi ý xem lại khái niệm nền bị hổng | **AI** |
| **2.** Chatbot giải đáp tự động giới hạn ngữ cảnh chỉ theo đúng slide và giáo trình của trường | **AI** |
| **3.** Bổ sung mục "Thuật ngữ & Ví dụ tính toán mẫu từng bước" (Glossary) đính kèm dưới mỗi slide khó | **Không sử dụng AI** |
| **4.** Thêm video ngắn 1–2 phút giải thích trực quan các bước biến đổi công thức đệm | **Không sử dụng AI** |
| **5.** Tạo form "Câu hỏi ẩn danh" cuối mỗi bài học cam kết trợ giảng (TA) phản hồi trước 9h sáng hôm sau | **Không sử dụng AI** |


---

## 3. Conversation guide (Bộ kịch bản phỏng vấn của nhóm)

### 3.1. Chốt Big 3 điều cần học

| Điều cần học | Evidence cần tìm | Điều gì khiến nhóm xem lại giả thuyết? |
| :--- | :--- | :--- |
| **1.** Bối cảnh và mức độ thường xuyên khi gặp bài khó | Tần suất học viên gặp slide khó hiểu hoặc công thức trừu tượng trong tuần qua. | Học viên trả lời rất hiếm khi gặp khó, slide trên lớp dễ hiểu và không có gì vướng mắc. |
| **2. [Câu hỏi đáng sợ]** Workaround và nỗ lực tự xoay xở thực tế | Đã thử tự tra Google/ChatGPT hoặc hỏi bạn bè nhưng bị lệch chuẩn, tốn thời gian. | Học viên tự tra cứu trên mạng rất nhanh và áp dụng được ngay vào bài tập mà không gặp trở ngại gì. |
| **3.** Hậu quả và chi phí thực tế khi bị kẹt | Mức độ thiệt hại về thời gian (20-50 phút), bỏ dở bài tập, mất điểm chuyên cần hoặc tâm lý nản lòng. | Không có hậu quả tiêu cực nào, học viên bỏ qua vẫn làm được bài tập và qua môn bình thường. |

### 3.2. Viết Conversation Guide

* **Tiêu chí tuyển người:**
  > Chúng tôi cần nói chuyện với người đã gặp khó khăn khi đọc slide bài giảng hoặc làm bài tập trong vòng 7 ngày gần đây.

* **Recruitment check (Câu xác nhận interviewee thực sự từng trải qua situation):**
  > Trong 7 ngày qua, bạn có gặp đoạn bài giảng hay bài tập nào trên lớp mà đọc slide cảm thấy khó hiểu chưa làm được ngay không?

* **Lời mở đầu (Nói mục đích học hỏi, không nhắc solution và không xin feedback tính năng):**
  > Chào bạn, mình đang làm một nghiên cứu nhỏ về trải nghiệm học tập để lắng nghe những khó khăn thực tế mà học viên thường gặp phải khi tiếp thu bài mới. Cuộc trò chuyện này hoàn toàn nhằm học hỏi từ trải nghiệm thật của bạn, không bán hàng hay xin đánh giá bất kỳ tính năng hoặc sản phẩm nào.

* **Story opener (Neo vào quá khứ cụ thể):**
  > Kể mình nghe về lần gần nhất bạn gặp một đoạn slide bài giảng hoặc bài tập khó hiểu trên lớp?

* **Big 3 Questions (Bảng câu hỏi chính kết nối với điều cần học):**

| Điều cần học | Câu hỏi sẽ dùng |
| :--- | :--- |
| **1.** Bối cảnh và phản ứng ban đầu khi gặp đoạn khó | Lúc nhận ra mình đọc đoạn slide đó mà không hiểu, phản ứng đầu tiên của bạn là gì (định hỏi ai hay tự làm gì)? |
| **2. [Câu hỏi đáng sợ]** Hành vi workaround và sự lệch chuẩn khi tra cứu | Lúc đó bạn đã làm cách nào để tự xoay xở (tìm kiếm ở đâu, hỏi ai)? Kết quả tra cứu có khớp với cách dạy trên lớp không và bạn mất khoảng bao nhiêu thời gian? |
| **3.** Hậu quả và chi phí thực tế | Sau khi thử cách đó, bạn có giải quyết được bài tập không, hay chuyện đó ảnh hưởng thế nào đến kết quả học và tâm lý của bạn? |

### 3.3. Probe bank & Ba phản xạ khi data bắt đầu lệch

* **Probe bank (Chỉ dùng khi cần đào sâu câu chuyện):**
  * Lúc đó chuyện gì xảy ra tiếp theo?
  * Bạn đã làm gì?
  * Vì sao bạn chọn cách đó?
  * Phần nào khó nhất?
  * Bạn đã thử cách nào khác chưa?
  * Việc đó kéo theo hậu quả gì?
  * Lần gần nhất trước đó là khi nào?

* **Ba phản xạ khi data bắt đầu lệch (The Mom Test):**

| User đưa ra | Phản xạ | Cách quay lại evidence |
| :--- | :--- | :--- |
| **Lời khen** *(“Ý tưởng hay đó bạn”)* | **Deflect** | Cảm ơn ngắn rồi quay lại việc họ đang làm hiện tại: *“Cảm ơn bạn! Vậy ở lần học gần nhất vừa rồi, bạn đã xoay xở với đoạn khó hiểu đó ra sao?”* |
| **Câu chung chung hoặc lời hứa tương lai** *(“Thường mình sẽ...”)* | **Anchor** | *“Lần gần nhất chuyện đó xảy ra là khi nào? Lúc đó bạn đang làm bài tập gì?”* |
| **Ý tưởng hoặc feature request** *(“Nếu có nút X thì tốt”)* | **Dig** | *“Điều đó giúp bạn làm được gì? Hiện tại chưa có nó thì bạn xử lý ra sao?”* |

---

## 4. Practice reflection (Đúc kết kinh nghiệm sau phỏng vấn)

1. **Câu hỏi nào đã giúp user kể một tình huống cụ thể?**
   * Câu hỏi mở đầu bám vào sự việc gần nhất: "Kể cho mình nghe về lần gần nhất trong tuần qua bạn gặp một đoạn slide bài giảng hoặc bài tập khó hiểu mà chưa giải quyết được ngay?" đã giúp người tham gia nhớ ngay lại buổi học sáng thứ Ba trên giảng đường và buổi tối ngồi làm bài tập ở nhà, kể chi tiết từng hành động từ lúc nhìn slide đến lúc loay hoay tra cứu.

2. **Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?**
   * Ở phần đầu, người phỏng vấn đôi lúc còn sốt ruột và có xu hướng gợi ý câu trả lời hộ khi thấy người tham gia ngập ngừng vài giây.
   * Cần rèn luyện thêm sự im lặng tích cực để lắng nghe trọn vẹn, kiên trì đào sâu vào các con số thực tế (mất bao nhiêu phút, ảnh chụp màn hình lưu trong máy có bao giờ mở lại xem không) thay vì chuyển câu hỏi quá nhanh.

3. **Sau khi luyện, nhóm đã sửa conversation guide ở đâu và vì sao?**
   * *Before:* Ban đầu câu hỏi mở chỉ tập trung hẹp vào tình huống "tự học online ban đêm", khiến người tham gia khó liên hệ nếu họ chủ yếu học trực tiếp trên lớp.
   * *After:* Nhóm đã mở rộng kịch bản ra cả tình huống học trên lớp và làm bài tập về nhà, đồng thời bổ sung câu hỏi đào sâu về tâm lý e ngại ngắt lời thầy cô và việc tài liệu tra mạng bị lệch chuẩn với bài giảng ở trường.
   * *Lý do sửa:* Thực tế phỏng vấn cho thấy điểm nghẽn lớn nhất không chỉ là thiếu người hỏi ban đêm, mà là rào cản tâm lý ngại hỏi trên lớp và nỗi sợ làm sai barem của thầy cô khi tự tra cứu tài liệu bên ngoài.

---

## 5. AI support log (Minh bạch sử dụng AI)
* Nhóm
  * Nhóm tự chủ trì 100% quá trình thảo luận và brainstorming: toàn bộ chuỗi bóc tách từ directive sang capability trung tính, phân tích mắt xích thay đổi hành vi, xác định JTBD và xây dựng hai giả thuyết pain cạnh tranh đều do các thành viên trong nhóm tự tranh luận và thống nhất.
  * Tự thiết kế khung phỏng vấn bám sát thực tế trải nghiệm học tập của sinh viên, tự ghép cặp phỏng vấn người thật ngoài nhóm và tự ghi chép dữ liệu thực địa.

* AI
  * Sử dụng AI như một người phản biện phụ (sparring partner) để kiểm tra chéo xem câu chữ trong bản nháp conversation guide có vô tình chứa từ ngữ dẫn dắt hay không. Tổng hợp thông tin.

* Cam kết về dữ liệu:
  * Toàn bộ dữ liệu phỏng vấn, trích dẫn exact quotes và bài học reflection đều là trải nghiệm thật từ các buổi phỏng vấn trực tiếp, không sử dụng bất kỳ dữ liệu nhân tạo hay suy diễn nào từ AI.