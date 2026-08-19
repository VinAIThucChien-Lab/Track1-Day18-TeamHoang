# Báo cáo Lab Day 18 - Multiple Prototypes: Human-AI Design

---

## 1. Thông tin cá nhân và nhóm

* **Nhóm:** Team Hoang
* **Thành viên & Phân chia công việc:**

| Họ và tên | Mã học viên | Vai trò & Công việc đảm nhận |
| :--- | :--- | :--- |
| **Nguyễn Đức Đạt** | 2A202601728 | Phụ trách phát triển logic cốt lõi. Lên ý tưởng và lập trình luồng tương tác cho Option C (Socratic Quiz), xây dựng thuật toán kích hoạt bài kiểm tra chẩn đoán và chuẩn bị dữ liệu mồi cho Option B. |
| **Kiều Hồng Phong** | 2A202601020 | Đảm nhiệm phần thiết kế giao diện (UI/CSS bằng Tailwind). Xây dựng cơ chế tương tác bôi đen (Option A), biểu đồ nhiệt (Option B) và lập trình tính năng "Bỏ qua" cho Option C. |
| **Đỗ Duy Đức** | 2A202602019 | Phụ trách mảng nghiên cứu người dùng. Thực hiện phỏng vấn, thu thập dữ liệu thô, phân tích chuyên sâu (soạn thảo Feedback Note, Synthesis) và chuẩn bị kịch bản thuyết trình. |
| **Công việc chung (Cả 3 thành viên)** | Chung | - **Chặng 1:** Thảo luận, tổng hợp Evidence và thống nhất Hypothesis Problem.<br>- **Chặng 2:** Phân tích các giải pháp và chốt 3 phương án thiết kế (A, B, C).<br>- **Chặng 3:** Xây dựng bảng Human-AI Decision Table.<br>- **Chặng 6:** Đồng phân tích dữ liệu kiểm thử để định hướng Next Change. |
* **Case nghiên cứu:** Case A - AI Tutor: Diagnostic Refresher
* **Người thực hiện:** *(Điền họ tên & MHV cá nhân)*

---

## 2. Chặng 1 - Tổng hợp Evidence & Chốt Hypothesis Problem

### 2.1. Bằng chứng thực tế thu thập từ Day 17

| Người phỏng vấn | Người được hỏi | Những gì user thực sự đã làm và nói (Facts) | Đội ngũ rút ra điều gì? (Insight) |
| :--- | :--- | :--- | :--- |
| **Phong** | Hiếu | Mở slide xem công thức chỉ thấy định nghĩa và ký hiệu vắn tắt, không có bài mẫu tính toán từng bước với số liệu cụ thể. Muốn làm bài tập nhưng không biết áp dụng từ đâu, đành dừng lại chờ hôm sau lên lớp hỏi. | Slide thiếu ví dụ minh họa từng bước khiến người học bị khựng lại, không biết cách chuyển từ lý thuyết sang làm bài tập thực tế. |
| **Đạt** | Hải | Thầy lướt qua một slide có bước biến đổi công thức khá dài mà không giải thích bước đệm. Nhìn vào không hiểu tại sao ra được công thức đó, ngại hỏi giữa lớp nên cuối buổi không làm được bài thực hành. | Việc slide nhảy cóc kiến thức hoặc thiếu diễn giải trung gian khiến người học không bắt kịp mạch bài và mất gốc ngay tại chỗ. |
| **Đức** | Đăng | Đọc đi đọc lại slide bài giảng và ví dụ 3 lần vẫn thấy mông lung vì slide toàn các gạch đầu dòng cô đọng, không chỉ rõ mối liên kết giữa các khái niệm nền tảng. | Bài giảng quá cô đọng làm người học không thể tự định vị xem mình đang bị hổng kiến thức ở bước nào để tự bù đắp. |

### 2.2. Nhận định sau khi nhóm ngồi lại với nhau

* **Hành vi lặp lại rõ nhất:** Người học mở slide ra nhưng bị tắc ngay tại các đoạn công thức hoặc khái niệm cô đọng, không có bước đệm và ví dụ cụ thể -> dẫn đến việc đọc đi đọc lại nhiều lần trong vô vọng.
* **Điểm nghẽn cốt lõi:** 
  * Slide bài giảng thường được thiết kế để giảng viên trình chiếu trên lớp nên rất nhiều gạch đầu dòng vắn tắt, lược bỏ các bước suy luận trung gian.
  * Khi sinh viên tự học hoặc xem lại để làm bài tập, việc thiếu ví dụ số liệu cụ thể và thiếu diễn giải bước đệm khiến họ không thể tự hiểu bản chất và không biết mình đang bị hổng ở bước nào.

### 2.3. Chốt Hypothesis Problem mang sang Day 18

> **Khi học bài, học viên gặp khó khăn vì slide bài giảng quá dài nhưng chỉ toàn gạch đầu dòng cô đọng, thiếu ví dụ minh họa và thiếu diễn giải bước đệm, dẫn đến đọc đi đọc lại nhiều lần vẫn không hiểu mình bị hổng ở bước nào.**

* **3 bằng chứng thực tế giữ vững giả thuyết:**
  1. Hiếu không thể làm bài tập vì slide chỉ có công thức trừu tượng, hoàn toàn thiếu bài mẫu tính toán số liệu từng bước.
  2. Hải bị đứt mạch tư duy và hỏng cả bài thực hành vì slide nhảy cóc một bước biến đổi công thức mà không có diễn giải đệm.
  3. Đăng đọc đi đọc lại 3 lần vẫn mông lung vì slide toàn gạch đầu dòng cô đọng, không biết mình đang hổng ở khái niệm nào.

* **2 điều nhóm chưa dám khẳng định:**
  1. Nếu hệ thống tự động bóc tách và cung cấp diễn giải bước đệm hoặc ví dụ minh họa ngay cạnh slide, liệu người học có tự hiểu bài ngay mà không cần sự can thiệp của giảng viên/trợ giảng?
  2. Người học cần AI hỗ trợ chẩn đoán xem họ đang hổng ở bước nào, hay họ chỉ cần một khu vực mở rộng hiển thị sẵn ví dụ mẫu và diễn giải chi tiết?

---

## 3. Three Solution Options (Ba phương án thiết kế A/B/C)

- **Option A (Cá nhân hóa chủ động):** Học viên chủ động bôi đen đoạn công thức chưa hiểu. AI sẽ hiển thị pop-up giải thích chi tiết bước đệm kèm theo ví dụ số liệu cụ thể cho riêng đoạn đó.
- **Option B (Dựa trên dữ liệu lớp học):** Sử dụng thắc mắc của lớp học để gợi ý. Học viên bấm vào các vùng highlight "Nhiều bạn cũng kẹt ở đây" để xem câu hỏi của các bạn khác và lời giải chung từ hệ thống.
- **Option C (Gia sư dẫn dắt):** Hệ thống đóng vai trò hướng dẫn. Thay vì đưa ngay lời giải, AI chia nhỏ bài toán thành các câu hỏi phụ để học viên tự suy luận từng bước cho đến khi hiểu logic.
* **Link Prototype chung:** [prototype-link.md](./prototype-link.md)
* **Bảng so sánh cơ chế:** [three-option-design-sheet.md](./three-option-design-sheet.md)

## 4. Đóng góp của tôi trong nhóm
*(Điền chi tiết phần việc bạn đã đảm nhiệm: VD: Thiết kế giao diện Option B, phỏng vấn Tester 2, tổng hợp Feedback Note... Tham khảo bảng phân công ở Mục 1)*

---

## 5. Prototype Feedback & Group Synthesis
*(Đã hoàn thành test với 4 user ở Chặng 5 & 6)*

* **Ghi chép phiên test cá nhân:** [prototype-feedback-note.md](./prototype-feedback-note.md)
* **Tổng hợp ý kiến 4 tester:** [group-feedback-synthesis.md](./group-feedback-synthesis.md)
* **Next Change của nhóm:** Sau test, **Option B được lựa chọn nhiều nhất** (do tâm lý lười đọc và thích sự an toàn của đám đông). Tuy nhiên, để giải quyết tận gốc Hypothesis Problem, nhóm quyết định **kết hợp Option A và Option C**. Mặc định cho hỏi nhanh (Option A), nhưng nếu hỏi lại quá nhiều kiến thức nền sẽ kích hoạt bài test chẩn đoán (Option C). Đặc biệt, **ẩn nút Bỏ qua (Skip)** ở Option C ban đầu, ép người học thử sức và sai ít nhất 1 lần thì mới cho phép xem đáp án để tránh tình trạng lạm dụng nút Skip lấy đáp án như trong buổi test.
* **Điều vẫn chưa chứng minh được sau buổi test:** Việc ẩn nút Skip và ép ngắn câu trả lời của AI có khiến tệp user lười đọc (như Tuấn, Vy) cảm thấy khó chịu đến mức bỏ ứng dụng không, hay nó đủ để tạo "ma sát tích cực" giúp họ ghi nhớ sâu hơn? Cần thử nghiệm thêm về điểm cân bằng UX.

---

## 6. AI Support Log (Nhật ký dùng AI)
*(Xem chi tiết tại [ai-support-log.md](./ai-support-log.md))*
