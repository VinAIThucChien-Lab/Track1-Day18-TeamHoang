# Ba Solution Options (Chặng 2)

## 1. Yêu cầu chung

| Thành phần | Quyết định chung cho A/B/C |
| :--- | :--- |
| Target user | Sinh viên đại học đang xem slide để giải bài tập. |
| Situation | Đọc đến một công thức bị nhảy cóc bước biến đổi, và slide không có ví dụ số liệu để tham chiếu. |
| Task | Hiểu logic biến đổi của bước đệm bị thiếu và xem một ví dụ tính toán mẫu để áp dụng vào bài. |
| Desired outcome | Hiểu bản chất công thức để tự tin làm nốt bài tập mà không bị đứt mạch. |
| Content/data fixture | Một slide mẫu chứa công thức bị khuyết bước đệm (ví dụ: công thức chuẩn hóa dữ liệu). |

## 2. Các điểm khác biệt

| Thành phần | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| Solution mechanism | AI giải thích riêng rẽ từng đoạn kiến thức ngay tại chỗ khi người dùng yêu cầu. | Dùng thắc mắc chung của sinh viên lớp học để "báo động" các điểm khó. | Đóng vai trò gia sư dẫn dắt, chẻ nhỏ bài toán thành các bước để người dùng tự suy luận. |
| User làm gì? | Bôi đen đoạn công thức không hiểu và bấm "Giải thích phần này". | Lướt thấy điểm highlight "Nhiều bạn cũng kẹt ở đây", bấm vào để xem giải đáp chung. | Bấm "Gợi ý từng bước", sau đó trả lời các câu hỏi phụ để đi đến đáp án cuối. |
| AI làm gì? | Hiển thị cửa sổ nhỏ diễn giải chi tiết bước đệm, kèm luôn một ví dụ số liệu áp dụng riêng cho đoạn vừa quét. | Tổng hợp câu hỏi thật của sinh viên, ghim sẵn vào các vị trí khó và đưa lời giải chung. | Phân rã bài toán thành các câu hỏi nhỏ kèm thanh tiến độ, có hiệu ứng nối kết quả đúng vào công thức gốc. |
| Trigger | Nút "Giải thích phần này" nổi lên khi bôi đen chữ. | Biểu tượng thông báo hoặc vùng highlight nằm cố định ở các điểm nghẽn. | Nút "Gợi ý từng bước" xuất hiện bên cạnh bài tập mẫu. |
| Trade-off chính | Gọn gàng, hỏi gì đáp nấy. Nhược điểm lớn nhất là nếu học viên không biết mình hổng kiến thức ở đâu thì sẽ không biết bôi đen chỗ nào. | Giúp sinh viên bớt ngại hỏi vì thấy nhiều người cũng không hiểu giống mình. Tuy nhiên, nếu lớp chưa ai hỏi thì lấy đâu ra dữ liệu để hiển thị. | Hiệu quả để rèn tư duy sâu. Nhược điểm là bắt người dùng phải vắt óc suy nghĩ nhiều, làm mất thời gian và dễ gây ức chế nếu họ chỉ muốn xem đáp án nhanh. |

## 3. Khoảng cách giữa các phương án

- **A khác B:** Phương án A yêu cầu người dùng tự nhận diện điểm khó để hỏi. Trong khi đó, phương án B dùng dữ liệu cộng đồng để khoanh vùng trước các điểm dễ kẹt và cung cấp sẵn lời giải.
- **B khác C:** Ở phương án B, sinh viên tiếp nhận thông tin thụ động thông qua việc đọc thắc mắc của người khác. Sang phương án C, họ bị hệ thống đặt câu hỏi ngược lại để ép phải tư duy và tự tìm ra quy luật.
- **A khác C:** Phương án A đưa sẵn câu trả lời dưới dạng văn bản. Ngược lại, phương án C không cho sẵn đáp án mà bắt người dùng phải tự vượt qua từng thử thách nhỏ thì mới đến được kết quả.

## 4. Human-AI Design Pass (Chặng 3)

| Human-AI decision | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| User làm gì? AI làm gì? | User bôi đen chỗ chưa hiểu. AI sinh ra lời giải tại chỗ. Nếu AI sai, user mất công đọc những lời vô ích, nhưng dễ phát hiện do ví dụ không khớp với nội dung bài học. | AI tổng hợp câu hỏi ghim lên slide. User bấm vào đọc. Nếu AI lấy nhầm câu hỏi lạc đề, user bị nhiễu thông tin nhưng cũng dễ nhận biết vì câu hỏi trật lất so với bài đang học. | AI chia nhỏ bài toán thành các câu hỏi gợi ý. User trả lời từng bước. Nếu AI đưa ra gợi ý sai lệch, user sẽ bị kẹt và hoàn toàn mất phương hướng khi giải bài. |
| AI Act / Ask / Don't Act? Vì sao? | **Act.** Trả lời ngay lập tức vì user đã chỉ đích danh một vùng kiến thức cần giải thích. | **Act.** Tự động đính kèm giải đáp chung lên slide vì mục tiêu là đoán trước điểm nghẽn để hỗ trợ kịp thời. | **Ask.** AI hỏi ngược lại người dùng thông qua các câu hỏi phụ, không đưa thẳng đáp án, nhằm kích thích tư duy tự suy luận. |
| User hiểu capability/limit bằng gì? | Nút bấm ghi rõ "Giải thích đoạn này" để báo hiệu AI chỉ xử lý đoạn văn bản vừa quét, không giải quyết toàn bộ bài tập. | Ghi chú "Dựa trên X thắc mắc của lớp" để nói rõ giới hạn: thông tin này phụ thuộc vào bạn bè, không phải do hệ thống tự sinh ra toàn bộ. | Giao diện hiển thị thanh tiến độ để user biết quá trình dẫn dắt sẽ kéo dài bao lâu, tránh cảm giác bị hỏi cung vô tận. |
| Evidence/uncertainty được thể hiện thế nào? | Căn cứ vào phần chữ user bôi đen. Nếu user bôi đen quá ngắn hoặc quá dài, AI báo ngay: "Vùng chọn chưa đủ rõ ràng". | Dựa vào các câu hỏi gốc của bạn học. Nếu chưa có ai hỏi, hệ thống sẽ ẩn luôn biểu tượng thông báo chứ không tự tạo câu hỏi giả. | Dựa vào logic toán học của công thức. Nếu AI không tính toán được cách chia nhỏ các bước, nó sẽ hiện thẳng toàn bộ lời giải thay vì mạo hiểm tạo ra chuỗi câu hỏi đánh đố. |
| User kiểm soát và recovery thế nào? | Bấm ra ngoài màn hình để đóng cửa sổ giải thích. Bôi đen lại đoạn khác để tiếp tục luồng học tập. | Bấm nút đóng. Nếu đọc giải đáp chung mà vẫn chưa hiểu, user có tuỳ chọn "Tạo câu hỏi mới" để đổi hướng tiếp cận. | Luôn có nút "Hiển thị toàn bộ đáp án" để thoát ra. Nếu trả lời sai 2 lần ở một câu phụ, AI tự điền đáp án luôn bước đó để user đi tiếp mà không bị kẹt cứng. |
