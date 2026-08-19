# Ba Solution Options (Chặng 2)

## 1. Yêu cầu chung

| Thành phần | Quyết định chung cho A/B/C |
| :--- | :--- |
| Target user | Sinh viên đại học đang xem slide để giải bài tập. |
| Situation | Đọc đến một công thức bị bỏ qua bước biến đổi, và slide không có ví dụ số liệu cụ thể để đối chiếu. |
| Task | Hiểu logic của bước đệm bị thiếu và xem một ví dụ tính toán mẫu để áp dụng vào bài tập. |
| Desired outcome | Nắm vững bản chất công thức để tự tin hoàn thành bài tập mà không bị gián đoạn. |
| Content/data fixture | Một slide mẫu chứa công thức bị khuyết bước đệm (ví dụ: công thức chuẩn hóa dữ liệu). |

## 2. Các điểm khác biệt

| Thành phần | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| Solution mechanism | AI giải thích riêng rẽ từng đoạn kiến thức ngay tại chỗ khi người dùng yêu cầu. | Dùng thắc mắc chung của sinh viên trong lớp để cảnh báo các điểm khó. | Đưa ra bài tập điền khuyết để đánh giá nhanh. Khi học viên làm sai, AI đóng vai trò gia sư chia nhỏ bài toán để dẫn dắt. |
| User làm gì? | Bôi đen đoạn công thức chưa hiểu và bấm "Giải thích phần này". | Bấm vào điểm highlight "Nhiều bạn cũng thắc mắc ở đây" để xem giải đáp chung. | Thử giải bài tập điền khuyết ban đầu. Nếu làm sai, bấm "Gợi ý từng bước" và trả lời các câu hỏi phụ để tìm ra đáp án. |
| AI làm gì? | Hiển thị cửa sổ nhỏ diễn giải chi tiết bước đệm, kèm theo ví dụ số liệu áp dụng riêng cho đoạn vừa chọn. | Tổng hợp câu hỏi thực tế của sinh viên, gắn vào các vị trí khó và đưa ra lời giải chung. | Cung cấp bài tập kiểm tra nhanh. Khi học viên làm sai và cần hỗ trợ, AI phân rã bài toán thành các câu hỏi nhỏ kèm thanh tiến độ. |
| Trigger | Nút "Giải thích phần này" xuất hiện khi bôi đen văn bản. | Biểu tượng thông báo hoặc vùng highlight nằm cố định ở các điểm nghẽn. | Bài tập điền khuyết nằm cạnh công thức. Nút "Gợi ý từng bước" hiện ra khi học viên giải sai lần đầu. |
| Trade-off chính | Gọn gàng, hỏi gì đáp nấy. Nhược điểm lớn nhất là nếu học viên không biết mình hổng kiến thức ở đâu thì sẽ không biết chọn đoạn nào để hỏi. | Giúp sinh viên bớt tâm lý ngại hỏi vì thấy nhiều người cũng gặp khó khăn tương tự. Tuy nhiên, nếu lớp chưa ai hỏi thì hệ thống sẽ không có dữ liệu để hiển thị. | Hiệu quả trong việc rèn luyện tư duy sâu và xác định chính xác lỗ hổng. Nhược điểm là luồng tương tác dài, đòi hỏi học viên phải kiên nhẫn làm bài kiểm tra trước khi nhận trợ giúp. |

## 3. Khoảng cách giữa các phương án

- **A khác B:** Phương án A yêu cầu học viên tự nhận diện điểm khó để hỏi. Trong khi đó, phương án B dùng dữ liệu cộng đồng để khoanh vùng trước các điểm phức tạp và cung cấp sẵn lời giải.
- **B khác C:** Ở phương án B, sinh viên tiếp nhận thông tin thụ động bằng cách đọc thắc mắc của người khác. Sang phương án C, hệ thống yêu cầu học viên làm bài tập điền khuyết trước để bộc lộ điểm chưa hiểu, sau đó mới đặt câu hỏi ngược lại để kích thích tư duy.
- **A khác C:** Phương án A đưa sẵn câu trả lời dưới dạng văn bản. Ngược lại, phương án C đưa ra bài kiểm tra nhỏ để xác định lỗ hổng kiến thức, rồi mới từ từ dẫn dắt người dùng qua từng thử thách để đến kết quả cuối cùng.

## 4. Human-AI Design Pass (Chặng 3)

| Human-AI decision | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| User làm gì? AI làm gì? | Học viên bôi đen đoạn chưa hiểu. AI sinh ra lời giải tại chỗ. Nếu AI giải thích sai, học viên tốn thời gian đọc nội dung vô ích, nhưng dễ phát hiện do ví dụ không khớp với bài học. | AI tổng hợp câu hỏi ghim lên slide. Học viên bấm vào để đọc. Nếu AI lấy nhầm câu hỏi lạc đề, học viên bị nhiễu thông tin nhưng cũng dễ nhận biết vì câu hỏi không liên quan đến bài đang học. | AI tạo bài tập kiểm tra nhanh. Học viên thử giải. Nếu AI phân rã các bước gợi ý sai lệch so với logic toán học, học viên sẽ bị rối và hoàn toàn mất phương hướng khi giải bài. |
| AI Act / Ask / Don't Act? Vì sao? | **Act.** Trả lời ngay lập tức vì học viên đã chỉ định rõ một vùng kiến thức cần giải thích. | **Act.** Tự động đính kèm giải đáp chung lên slide vì mục tiêu là dự đoán trước điểm nghẽn để hỗ trợ kịp thời. | **Act rồi Ask.** Ban đầu AI đưa ra bài tập kiểm tra (Act). Khi học viên làm sai, AI mới hỏi ngược lại bằng các câu hỏi phụ (Ask) nhằm kích thích tư duy. |
| User hiểu capability/limit bằng gì? | Nút bấm ghi rõ "Giải thích đoạn này" để báo hiệu AI chỉ xử lý phần văn bản vừa quét, không giải quyết toàn bộ bài tập. | Ghi chú "Dựa trên X thắc mắc của lớp" để nói rõ giới hạn: thông tin này phụ thuộc vào bạn bè, không phải do hệ thống tự sinh ra toàn bộ. | Tiêu đề "Bài tập kiểm tra nhanh" và thanh tiến độ gợi ý giúp học viên biết đây là quy trình hướng dẫn ngắn, tránh cảm giác bị hỏi cung liên tục. |
| Evidence/uncertainty được thể hiện thế nào? | Căn cứ vào đoạn văn bản học viên bôi đen. Nếu học viên chọn đoạn quá ngắn hoặc quá dài, AI thông báo ngay: "Vùng chọn chưa đủ rõ ràng". | Dựa vào các câu hỏi gốc của sinh viên khác. Nếu chưa có ai hỏi, hệ thống sẽ ẩn biểu tượng thông báo chứ không tự tạo câu hỏi giả. | Căn cứ vào kết quả sai của bài tập điền khuyết ban đầu. Nếu AI không thể tính toán cách chia nhỏ các bước, nó sẽ hiện thẳng toàn bộ lời giải thay vì mạo hiểm tạo ra chuỗi câu hỏi phức tạp. |
| User kiểm soát và recovery thế nào? | Bấm ra ngoài màn hình để đóng cửa sổ giải thích. Bôi đen lại đoạn khác để tiếp tục luồng học tập. | Bấm nút đóng. Nếu đọc giải đáp chung mà vẫn chưa hiểu, học viên có tuỳ chọn "Tạo câu hỏi mới" để đổi hướng tiếp cận. | Luôn có nút "Hiển thị toàn bộ đáp án" để dừng bài tập. Nếu trả lời sai 2 lần ở một câu phụ, AI tự điền đáp án luôn bước đó để học viên đi tiếp mà không gặp bế tắc. |
