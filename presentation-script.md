# Kịch bản Thuyết trình: AI Interaction Lab - Day 18

> **Lưu ý cho người nói:** Kịch bản này được thiết kế theo thời gian 3-5 phút, chú trọng vào quá trình "thử sai và học hỏi" (Learning, not praise) theo đúng tiêu chí của Lab. Hãy nói với giọng điệu tự nhiên, giống như đang kể một câu chuyện.

---

## 1. Mở đầu & Đặt vấn đề (1 phút)

**Người nói:** 
"Chào mọi người, chúng mình là Team Hoang. Hôm nay nhóm xin trình bày về quá trình giải quyết một nỗi đau rất quen thuộc với bất kỳ sinh viên nào ở đây: **Nỗi đau tự học qua slide bài giảng.**

Quay lại Day 17, qua các cuộc phỏng vấn thực tế, nhóm mình đã chốt được một Hypothesis Problem: 
> *Khi ôn thi, sinh viên thường xuyên gặp tình trạng slide bài giảng quá cô đọng, nhảy cóc kiến thức và thiếu các bước diễn giải trung gian. Hậu quả là người học dù đọc đi đọc lại vẫn không hiểu, và cay đắng nhất là không biết mình đang bị hổng kiến thức ở chỗ nào.*

Thay vì chỉ đoán mò giải pháp, nhóm quyết định xây dựng 3 phương án thiết kế (Option A, B, C) hoàn toàn khác nhau để xem người dùng thực sự cần gì."

---

## 2. Giới thiệu 3 Phương án (1 phút)

**Người nói:**
"Đây là 3 cách tiếp cận mà chúng mình đã code thành prototype thực tế:

* **Phương án A - Cá nhân hoá chủ động:** Bạn kẹt ở đâu, bôi đen chỗ đó. AI sẽ ngay lập tức bung ra lời giải thích chi tiết cho đúng cái cụm từ bạn không hiểu. Rất nhanh và trực diện.
* **Phương án B - Học tập cộng đồng:** Tụi mình thiết kế một cái 'Heatmap'. Những chỗ nào trong slide bị nhiều bạn sinh viên khác hỏi nhất sẽ được bôi đỏ. User có thể bấm vào xem AI giải đáp chung cho cả lớp.
* **Phương án C - Chẩn đoán Socratic (Gia sư thông minh):** Thay vì nôn ra đáp án, AI sẽ ngắt bạn lại và đưa ra một bài test trắc nghiệm nhỏ. Khi bạn trả lời sai, AI sẽ dẫn dắt từng bước để phân tích xem lỗ hổng tư duy của bạn nằm ở đâu."

---

## 3. Kết quả Test & Insights bất ngờ (1.5 phút)

**Người nói:**
"Và phần thú vị nhất là khi mang 3 Option này đi test với 4 bạn sinh viên có tính cách hoàn toàn khác nhau. Kết quả làm tụi mình thực sự bất ngờ, vì nó đập tan hoàn toàn những giả định ban đầu của nhóm!

1. **Với tệp 'Thực dụng, ôn thi nước rút' và 'Lười đọc':** Họ tôn thờ Option A vì nhanh gọn. Còn khi thấy Option C, họ phát hoảng! Cảm giác đang mệt mà tự nhiên bị ép làm bài kiểm tra khiến họ rất ác cảm, thậm chí là bỏ ngang.
2. **Với tệp 'Ngại hỏi, sợ quê':** Option B lại là chân ái. Việc thấy một đoạn text đỏ rực (tức là nhiều người cũng dốt giống mình) giúp họ giải tỏa áp lực tâm lý cực kỳ tốt.
3. **Với tệp 'Con ngoan trò giỏi':** Trái ngược hoàn toàn, họ cực kỳ ghiền Option C vì nó đóng vai trò như một gia sư bắt lỗi tư duy tận gốc rễ.

**Insight rút ra:** Không có Option nào 'thắng tuyệt đối'. Nhanh gọn (A), An tâm (B), hay Hiểu sâu (C) hoàn toàn phụ thuộc vào 'gu' học và hoàn cảnh lúc đó của người dùng."

---

## 4. Quyết định cuối cùng - Next Change (0.5 phút)

**Người nói:**
"Dựa trên những bằng chứng rành rành đó, nhóm đã chốt một **Next Change** cực kỳ thực tiễn:

Chúng mình sẽ **kết hợp Option A và Option C**. Cụ thể: 
- Mặc định, user được quyền bôi đen để hỏi đáp nhanh (Option A).
- Tuy nhiên, nếu hệ thống phát hiện user hỏi đi hỏi lại quá nhiều những câu cơ bản trên cùng một slide, AI sẽ tự động 'kích hoạt' bài test chẩn đoán (Option C) để ép họ vá lỗ hổng.
- Quan trọng nhất, qua buổi test nhóm phát hiện **nút 'Bỏ qua' (Skip) ở Option C đang bị lạm dụng** để học vẹt. Do đó, thiết kế mới (Next Change) sẽ **ẩn nút này lúc đầu**, ép user phải cố gắng suy nghĩ và trả lời sai ít nhất 1 lần thì mới cho phép skip để xem đáp án. Đồng thời, câu trả lời của AI cũng sẽ được ép ngắn lại để tránh làm ngợp tệp user lười đọc.

Đó là toàn bộ hành trình Human-AI Design của Team Hoang ngày hôm nay. Cảm ơn mọi người đã lắng nghe!"
