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
| Solution mechanism | AI giải thích riêng rẽ từng đoạn kiến thức ngay tại chỗ khi người dùng yêu cầu. | Dùng thắc mắc chung của sinh viên lớp học để "báo động" các điểm khó. | Đổi từ đọc hiểu sang thực hành: hệ thống bắt người dùng tự điền khuyết để tìm ra quy luật. |
| User làm gì? | Bôi đen đoạn công thức không hiểu và bấm "Giải thích phần này". | Lướt thấy điểm highlight "Nhiều bạn cũng kẹt ở đây", bấm vào để xem giải đáp chung. | Bấm "Tôi chưa hiểu phần này", sau đó tự kéo thả các con số từ bài mẫu vào công thức khuyết. |
| AI làm gì? | Hiển thị pop-up diễn giải chi tiết bước đệm, kèm luôn một ví dụ số liệu áp dụng riêng cho đoạn vừa quét. | Tổng hợp câu hỏi thật của sinh viên, ghim sẵn vào các vị trí khó và đưa lời giải chung (có ví dụ). | Sinh ra bài tập điền khuyết ngay trên slide. Nếu user kéo sai thì gợi ý, kéo đúng thì duyệt. |
| Trigger | Nút "Giải thích phần này" nổi lên khi bôi đen chữ. | Biểu tượng thông báo hoặc vùng highlight nằm cố định ở các điểm nghẽn. | Nút "Tôi chưa hiểu phần này" gắn cố định cạnh công thức khó. |
| Trade-off chính | Gọn gàng, hỏi gì đáp nấy. Nhược điểm lớn nhất là nếu học viên không tự nhận thức được mình hổng kiến thức ở đâu thì sẽ không biết bôi đen chỗ nào. | Giúp sinh viên gạt bỏ tâm lý ngại hỏi vì thấy nhiều người cũng không hiểu giống mình. Tuy nhiên, nếu lớp chưa ai hỏi thì lấy đâu ra dữ liệu để hiển thị. | Tính thực hành cao, giúp sinh viên tự nhớ lâu hơn. Bù lại, luồng tương tác quá dài và giao diện kéo thả sẽ chiếm dụng nhiều diện tích màn hình. |

## 3. Khoảng cách giữa các phương án

- **A khác B:** Phương án A yêu cầu người dùng tự nhận diện điểm khó để hỏi. Trong khi đó, phương án B dùng dữ liệu cộng đồng để khoanh vùng trước các điểm dễ kẹt và cung cấp sẵn lời giải.
- **B khác C:** Ở phương án B, sinh viên tiếp nhận thông tin thụ động thông qua việc đọc thắc mắc của người khác. Sang phương án C, họ buộc phải thao tác kéo thả thực hành thì mới rút ra được quy luật.
- **A khác C:** Phương án A đưa sẵn câu trả lời dưới dạng văn bản. Ngược lại, phương án C yêu cầu người dùng phải tương tác giải đúng bài tập thì mới nhận được kết quả cuối cùng.

## 4. Human-AI Design Pass (Chặng 3)

| Human-AI decision | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| User làm gì? AI làm gì? | User bôi đen chỗ chưa hiểu. AI sinh ra lời giải tại chỗ. Nếu AI sai, user mất thời gian đọc diễn giải vô ích, nhưng dễ phát hiện do ví dụ không khớp với nội dung slide. | AI tổng hợp câu hỏi ghim lên slide. User bấm vào đọc. Nếu AI tổng hợp sai hoặc đưa câu hỏi lạc đề, user bị nhiễu thông tin nhưng cũng dễ nhận biết vì câu hỏi trật lất so với bài học. | AI tạo bài tập điền khuyết. User tương tác kéo thả. Nếu AI sai (tạo bài tập lỗi), user sẽ bị kẹt không thể giải đúng. Điều này gây ức chế lớn vì user khó phân biệt được do mình hiểu sai hay do hệ thống lỗi. |
| AI Act / Ask / Don't Act? Vì sao? | **Act.** Trả lời ngay lập tức vì user đã chỉ đích danh một vùng kiến thức cần giải thích. | **Act.** Tự động đính kèm giải đáp chung lên slide vì mục tiêu là phán đoán trước điểm nghẽn để hỗ trợ kịp thời. | **Act.** Tự động kiểm tra đúng/sai khi user thả số. Môi trường thực hành bắt buộc phải có phản hồi tức thì để user tự điều chỉnh. |
| User hiểu capability/limit bằng gì? | Nút bấm ghi rõ "Giải thích đoạn này" để báo hiệu AI chỉ xử lý phần văn bản được quét, không giải quyết toàn bộ bài tập. | Ghi chú "Dựa trên X thắc mắc của lớp" để nói rõ giới hạn: thông tin này phụ thuộc vào dữ liệu của tập thể, không phải do AI tự tạo ra toàn bộ. | Tiêu đề ghi "Thử điền số để hiểu công thức" giúp user nắm được đây chỉ là bài tập nháp để hiểu logic, không phải bài kiểm tra tính điểm. |
| Evidence/uncertainty được thể hiện thế nào? | Dựa vào bằng chứng là phần văn bản user quét. Nếu không chắc chắn (do quét quá ngắn/dài), AI báo ngay: "Vùng chọn chưa đủ rõ ràng". | Dựa vào các câu hỏi gốc của sinh viên khác. Nếu không có dữ liệu (độ bất định cao), hệ thống sẽ ẩn luôn biểu tượng thông báo thay vì tự tạo câu hỏi giả. | Dựa vào tín hiệu ánh xạ giữa công thức và số liệu. Nếu AI không chắc chắn về cách ánh xạ, hệ thống sẽ hiển thị thẳng đáp án thay vì mạo hiểm tạo ra một bài tập lỗi. |
| User kiểm soát và recovery thế nào? | Bấm ra ngoài màn hình để đóng pop-up (Dismiss). Bôi đen lại đoạn khác để tiếp tục luồng học tập. | Bấm nút đóng (Close). Nếu đọc giải đáp chung mà vẫn chưa hiểu, user có tùy chọn "Tạo câu hỏi mới" để đổi phương thức tiếp cận. | Nút "Bỏ qua, xem đáp án" (Skip) để dừng bài tập. Nếu user kéo thả sai quá 2 lần, hệ thống sẽ tự động điền kết quả đúng để họ đi tiếp mà không bị kẹt. |
