# Group Feedback Synthesis
*(Tổng hợp ý kiến từ 4 tester sau khi kết thúc Chặng 6)*

| Nội dung | Feedback 1 (Tester: Tuấn) | Feedback 2 (Tester: Mai) | Feedback 3 (Tester: Huy) | Feedback 4 (Tester: Vy) | Pattern hoặc khác biệt |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **First action** | Chọn ngay Option A, bôi đen đoạn công thức dài nhất để xem AI giải thích. | Chọn Option B, lướt tìm các đoạn được bôi đỏ đậm (nhiều người hỏi) để bấm vào đọc. | Chọn Option C, làm thử bài Quiz chẩn đoán vì tò mò xem hệ thống đánh giá thế nào. | Mở Option C nhưng bấm nút "Bỏ qua" ngay lập tức vì thấy quá nhiều chữ trong bài quiz. | **Khác biệt rõ rệt theo gu học:** Người muốn nhanh chọn A, cẩn trọng chọn B, hiểu sâu chọn C, sợ chữ nhiều sẽ bấm Skip ở C hoặc chọn B. |
| **Breakdown chính** | Ở Option C, Tuấn thấy nản vì phải trả lời liên tiếp mới ra được vấn đề. | Ở Option A, Mai không biết phải bôi đen từ đâu đến đâu cho đúng cụm từ cần hỏi. | Ở Option B, Huy thấy câu trả lời tổng hợp đôi khi hơi chung chung, không gãi đúng điểm ngứa. | Ở Option A, AI trả lời quá dài (4 dòng) khiến Vy bị ngợp và drop ngay từ nửa câu đầu. | Option A đòi hỏi biết cách hỏi. Option C đòi hỏi kiên nhẫn. Đoạn text quá dài ở bất kỳ Option nào cũng là rào cản lớn với tệp lười đọc. |
| **Cách lấy lại control** | Bấm nút "Bỏ qua" ở Option C để ép hệ thống nhả đáp án nhanh nhất mà không cần làm quiz. | Mở sang Option B để xem người khác bôi đen ở đâu thì bắt chước click theo. | Ở Option C, cố tình chọn lại đáp án sai khác để xem hệ thống bắt lỗi (gap) như thế nào. | Bấm nút "Bỏ qua" liên tục ở Option C để né việc phải đọc hiểu và trả lời câu hỏi dài. | Dù có nút "Bỏ qua" làm phao cứu sinh ở C, tệp lười đọc vẫn có xu hướng lạm dụng nó để học vẹt. |
| **Option được chọn** | **Option A** (Cá nhân hoá chủ động) | **Option B** (Học tập cộng đồng) | **Option C** (Chẩn đoán Socratic) | **Option B** (Chọn đại vì ít chữ nhất) | Không có Option nào "thắng tuyệt đối", mỗi cái giải quyết một pain point cụ thể của từng nhóm tính cách. |
| **Trade-off** | Chấp nhận không ôn lại kiến thức nền, chỉ cần hiểu ngay chỗ bị kẹt. | Chấp nhận câu trả lời chung chung, đổi lại cảm giác an tâm vì không sợ bị chê cười. | Chấp nhận tốn gấp 3 thời gian làm quiz, đổi lại phát hiện ra lỗi sai bản chất. | Chấp nhận học vẹt bản tóm tắt ngắn của AI thay vì phải tự đọc hiểu phân tích dài dòng. | Nhanh gọn (A) vs An toàn (B) vs Hiểu sâu (C) vs Lười đọc (B/Skip). |

---

## Kết luận chung

* **Một Next Change nhóm chốt:** 
  1. Kết hợp Option A và Option C: Mặc định cho phép user hỏi nhanh (A), nhưng nếu hỏi quá nhiều câu cơ bản trên cùng 1 slide, AI sẽ tự động trigger bài test chẩn đoán (C).
  2. Điều chỉnh lối thoát hiểm: Nút "Bỏ qua" (Skip) ở Option C đang bị lạm dụng. Cần thiết kế lại để chỉ hiện nút này sau khi user đã cố gắng chọn sai ít nhất 1 lần, ép họ tư duy trước khi bỏ cuộc. Đồng thời giới hạn độ dài giải thích của AI (ép xuống dòng, dùng bullet points).
* **Evidence nào dẫn tới quyết định này:** Tuấn và Vy đều lạm dụng nút "Bỏ qua" ở Option C để lấy kết quả liền, làm mất đi tính chất chẩn đoán của bài test. Việc hiện nút Bỏ qua có điều kiện sẽ giúp dung hoà được nhu cầu muốn nhanh và mục tiêu học tập.
* **Still Unproven sau bốn feedback:** Việc ép ngắn câu trả lời của AI và ẩn nút Skip lúc đầu có khiến Vy/Tuấn khó chịu đến mức bỏ app không? Hay nó đủ để tạo "ma sát tích cực"? Cần test thêm điểm cân bằng.
