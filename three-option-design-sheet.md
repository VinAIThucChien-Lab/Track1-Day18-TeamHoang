# Ba Solution Options (Chặng 2)

## 1. Yêu cầu chung

| Thành phần | Quyết định chung cho A/B/C |
| :--- | :--- |
| Target user | Sinh viên đại học đang học bài và làm bài tập theo slide. |
| Situation | Đọc một slide công thức cô đọng bị bỏ qua bước biến đổi, đồng thời không có ví dụ số liệu cụ thể để đối chiếu. |
| Task | Hiểu được logic của bước đệm bị thiếu và xem một ví dụ tính toán số liệu mẫu để áp dụng vào bài tập. |
| Desired outcome | Nắm được bản chất của bước nhảy cóc và đủ tự tin để tự giải bài tập tiếp theo. |
| Content/data fixture | Một slide mẫu bị khuyết bước đệm (ví dụ: công thức chuẩn hóa dữ liệu). |

## 2. Các điểm khác biệt

| Thành phần | Option A | Option B | Option C |
| :--- | :--- | :--- | :--- |
| Solution mechanism | AI chỉ giải thích chính xác vùng kiến thức người dùng yêu cầu, ngay trên giao diện slide. | Sử dụng thắc mắc chung của các sinh viên khác để gợi ý vùng kiến thức khó. | Thay vì cung cấp lời giải dạng văn bản, hệ thống yêu cầu người dùng thực hành để tự tìm ra quy luật. |
| User làm gì? | Chủ động bôi đen đoạn công thức chưa hiểu và bấm chọn "Giải thích phần này". | Bấm vào các điểm highlight hoặc biểu tượng cảnh báo "Nhiều bạn cũng gặp khó khăn ở đây" trên slide để xem giải đáp. | Bấm "Tôi chưa hiểu phần này", sau đó tự kéo các con số từ bài mẫu thả vào các vị trí bị khuyết trong công thức. |
| AI làm gì? | Hiển thị một pop-up diễn giải bước đệm bị thiếu, kèm theo một ví dụ số liệu mẫu dành riêng cho đoạn vừa bôi đen. | Tổng hợp các câu hỏi thực tế từ sinh viên trong lớp, gắn vào các vị trí khó hiểu tương ứng và cung cấp câu trả lời chung kèm ví dụ. | Tạo một bài tập điền khuyết ngay tại chỗ. Nếu kéo sai, AI sẽ đưa ra gợi ý; nếu kéo đúng, AI xác nhận kết quả. |
| Trigger | Nút "Giải thích phần này" xuất hiện khi bôi đen văn bản. | Biểu tượng thông báo hoặc vùng highlight hiển thị cố định tại điểm nghẽn trên slide. | Nút "Tôi chưa hiểu phần này" đặt cố định cạnh các công thức phức tạp. |
| Trade-off chính | Phương án này nhanh và đúng trọng tâm. Tuy nhiên, rào cản lớn nhất là học viên phải tự nhận thức được mình đang hổng kiến thức ở chính xác dòng nào. | Giúp học viên giải tỏa tâm lý ngại hỏi và dễ dàng tìm thấy lời giải. Ngược lại, tính năng này hoàn toàn phụ thuộc vào việc lớp học đã có đủ dữ liệu thắc mắc hay chưa. | Rất trực quan và giúp học viên nhớ lâu nhờ việc tự thực hành. Điểm trừ là luồng thao tác dài hơn và giao diện kéo thả chiếm nhiều không gian trên màn hình. |

## 3. Khoảng cách giữa các phương án

- **A khác B:** Phương án A yêu cầu học viên tự tìm ra điểm khó để hỏi, trong khi phương án B sử dụng dữ liệu từ tập thể để chủ động chỉ ra các điểm nghẽn và đưa sẵn câu trả lời.
- **B khác C:** Ở phương án B, học viên tiếp nhận thông tin thụ động qua việc đọc thắc mắc của người khác. Với phương án C, học viên buộc phải tương tác trực tiếp (kéo thả) để giải quyết vấn đề.
- **A khác C:** Phương án A cung cấp trực tiếp câu trả lời bằng văn bản. Ngược lại, phương án C đòi hỏi học viên tự hoàn thiện công thức qua thao tác thực hành thì mới hiểu được quy luật.
