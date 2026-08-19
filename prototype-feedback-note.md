# Prototype Feedback Note
*(Tổng hợp ghi chép 4 phiên test)*

## Tester 1: Tuấn

### 1. Thông tin Tester
* **Tên Tester:** Tuấn (Sinh viên năm 3)
* **Relevant Context:** Tester thường gặp khó khăn với các slide môn Toán cao cấp vì giảng viên lược bỏ các bước diễn giải công thức. Khi ôn thi, tester phải mất nhiều thời gian tìm kiếm bài giải chi tiết trên mạng để bù đắp bước đệm.

### 2. Quan sát

| Observation Focus | Note |
| :--- | :--- |
| **First action** | Kéo qua nhanh, không thèm đọc hướng dẫn. Mở Option A là bôi đen ngay cục công thức dài nhất ở slide 1. Kiểu người thực dụng, vô là đòi đáp án liền. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Qua Option C, kẹt ở câu 2, đánh sai xong nhăn mặt kêu: "Ủa sao tự nhiên bắt test mình vậy trời?". Chắc ổng tưởng bị ép làm bài kiểm tra lấy điểm, chứ không hề biết đây là tính năng chẩn đoán để tìm lỗ hổng. |
| **Evidence được đọc hay bỏ qua** | Lướt Option B thấy mảng đỏ (heatmap) cũng có bấm thử 1 câu. Đoạn sau chê "Câu này chả trúng ý mình" rồi tắt lịm, bỏ qua hết mấy câu dưới. |
| **Cách tester sửa hoặc lấy lại control** | Đang làm Option C nửa chừng thấy oải quá nên bấm ngay nút "Bỏ qua" để xem thẳng lời giải. Thoát kẹt dễ dàng nhưng lại không học được gì sâu. |
| **Option được chọn** | Option A |
| **Lý do và trade-off** | "Option A giải thích ngay đúng cái mình ngứa, đỡ mất thì giờ". Thà chấp nhận hổng kiến thức nền một tí, vá tạm để làm bài qua môn cái đã. |
| **Evidence chống lại kỳ vọng của nhóm** | Lúc đầu cả đám đinh ninh Option C sẽ ăn tiền nhất vì nó giúp bắt bệnh tận gốc. Nhưng thực tế đưa cho ông nào đang mùa thi thì bị phản tác dụng, người ta đang mệt mà cứ ép làm quiz là bị ăn chửi. |

### 3. Quyết định ngắn
* **Chốt thay đổi:** Nút "Bỏ qua" đang bị lạm dụng để lấy đáp án nhanh. Đề xuất: Chỉ hiện nút "Bỏ qua" sau khi user đã cố gắng chọn sai ít nhất 1 lần, để ép họ phải tư duy một chút trước khi bỏ cuộc.
* **Chưa rõ:** Đổi cách nói ở Option C cho bớt giống bài kiểm tra thì chắc Tuấn nó bớt quạu hơn chăng?

## Tester 2: Mai

### 1. Thông tin Tester
* **Tên Tester:** Mai (Sinh viên Kinh tế)
* **Relevant Context:** Tester thường bị đứt mạch tư duy khi giảng viên lướt qua nhanh các khái niệm. Tester có tâm lý e ngại việc đặt câu hỏi trực tiếp trên lớp vì sợ bị đánh giá nếu câu hỏi quá cơ bản.

### 2. Quan sát

| Observation Focus | Note |
| :--- | :--- |
| **First action** | Chần chừ không dám bôi đen ở Option A (sợ không biết bôi chỗ nào cho đúng). Mở Option B ra thấy có cái đốm đỏ kêu "Ôi may quá có người hỏi hộ rồi", click vào liền. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Lúc ở Option C, bị sai câu đầu, đọc phần "Lỗ hổng kiến thức" thì ồ lên "Ra là mình nhầm ở đây". Nhưng đến câu 2 lại rụt rè không dám chọn tiếp vì sợ bị AI đánh giá ngu. |
| **Evidence được đọc hay bỏ qua** | Đọc rất kỹ phần AI tóm tắt (Summary) ở Option B. Nhưng mấy câu hỏi phụ bên dưới thì lại lướt qua vì bảo "Nhìn cái tóm tắt của AI là đủ hiểu rồi". |
| **Cách tester sửa hoặc lấy lại control** | Bí ở Option A vì không biết diễn đạt câu hỏi sao cho AI hiểu, đành mò sang Option B xem người khác hỏi gì rồi chép theo. |
| **Option được chọn** | Option B |
| **Lý do và trade-off** | Thích Option B vì "Thấy nhiều người cũng không hiểu giống mình, tự nhiên bớt tự ti hẳn". Đánh đổi: Câu trả lời của AI đôi khi hơi chung chung, không gãi đúng 100% chỗ ngứa, nhưng Mai vẫn chấp nhận vì nó an toàn. |
| **Evidence chống lại kỳ vọng của nhóm** | Nhóm tưởng user thích Option A vì tính cá nhân hoá cao. Hoá ra với người rụt rè, cái họ cần trước tiên là sự đồng cảm từ lớp học (Option B) chứ không phải câu trả lời kỹ thuật. |

### 3. Quyết định ngắn
* **Chốt thay đổi:** Giữ nguyên Option B, đặc biệt nhấn mạnh yếu tố "Có 30 người khác cũng thắc mắc giống bạn" để buff tâm lý cho user.
* **Chưa rõ:** Nếu Option B không có ai hỏi trước (slide mới toanh) thì Mai có dám dùng Option A không hay lại bỏ cuộc?

## Tester 3: Huy

### 1. Thông tin Tester
* **Tên Tester:** Huy (Sinh viên tự học)
* **Relevant Context:** Tester gặp trở ngại với các slide bài giảng chỉ liệt kê công thức và lược bỏ các bước biến đổi trung gian. Tester có xu hướng tự dành nhiều thời gian ở nhà để suy luận và kết nối lại mạch kiến thức.

### 2. Quan sát

| Observation Focus | Note |
| :--- | :--- |
| **First action** | Thử Option A trước, đọc giải thích xong gật gù. Nhảy sang Option C thấy có bài quiz, sáng mắt lên bấm vô làm liền không ngần ngại. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Ở Option B, chê luôn: "Mấy câu tụi nó hỏi ngớ ngẩn quá, không đúng level của mình". Coi bộ Huy bị dội vì context cộng đồng không khớp với trình độ của ổng. |
| **Evidence được đọc hay bỏ qua** | Đọc từng chữ một trong phần phân tích lỗ hổng của Option C. Còn cố tình F5 lại để chọn thử một đáp án sai khác xem AI nó phân tích lỗ hổng có chuẩn không. Khá soi. |
| **Cách tester sửa hoặc lấy lại control** | Dùng Option A, AI giải thích không đủ sâu, Huy tự động gõ thêm "Giải thích rõ hơn bằng công thức đạo hàm hàm hợp đi" vào ô chat để ép AI nhả thêm chữ. |
| **Option được chọn** | Option C |
| **Lý do và trade-off** | "Option C đúng đỉnh. Cảm giác như có ông gia sư ngồi kế bên bắt lỗi tư duy của mình". Chấp nhận tốn thêm x3 thời gian, miễn là hiểu tận gốc rễ vấn đề. |
| **Evidence chống lại kỳ vọng của nhóm** | Mình cứ sợ Option C dài dòng bị chê, ai dè trúng đúng tệp học sinh giỏi lại ghiền cực kỳ. |

### 3. Quyết định ngắn
* **Chốt thay đổi:** Option C rất có giá trị với tệp user muốn hiểu sâu. Cần phát triển thêm tính năng "Giải thích sâu hơn" trong Option A dành cho những người như Huy.
* **Chưa rõ:** Giao diện Socratic hiện tại hơi khô khan, chưa biết nếu làm mượt hơn thì có kéo thêm được tệp lười như Tuấn qua dùng không?

## Tester 4: Vy

### 1. Thông tin Tester
* **Tên Tester:** Vy (Sinh viên học trái ngành)
* **Relevant Context:** Tester dễ bị quá tải thông tin và mất tập trung khi phải đọc các slide chứa quá nhiều văn bản học thuật. Thói quen của tester là tìm kiếm các phiên bản tài liệu đã được tóm tắt ngắn gọn.

### 2. Quan sát

| Observation Focus | Note |
| :--- | :--- |
| **First action** | Mở Option C lên, thấy đống chữ trong bài Quiz là lập tức bấm nút "Bỏ qua" để skip toàn bộ bài test vì chê dài. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Ở Option A, Vy bôi đen một đoạn, AI trả về một cục chữ giải thích 4 dòng. Vy thở dài: "Giải thích gì mà còn dài hơn cả slide gốc". Đọc được nửa câu đầu là bỏ. |
| **Evidence được đọc hay bỏ qua** | Lướt Option B cực nhanh, chỉ đọc đúng 1 câu duy nhất là "AI Tóm tắt". Không thèm nhìn các bước bên dưới vì chê dài. |
| **Cách tester sửa hoặc lấy lại control** | Thay vì đọc từng bước Socratic, Vy lạm dụng nút "Bỏ qua" để ép AI phải hiển thị bản tóm tắt đáp án cuối cùng nhanh nhất có thể. |
| **Option được chọn** | Option B (chọn đại vì ít chữ nhất) |
| **Lý do và trade-off** | Chọn Option B vì lười suy nghĩ, lười gõ. Đánh đổi: Chấp nhận học vẹt cái tóm tắt của AI, miễn là ngắn. Chứ ép đọc hiểu như Option C là thôi dẹp luôn. |
| **Evidence chống lại kỳ vọng của nhóm** | Nhóm nghĩ viết giải thích càng kỹ thì user càng thích. Nhưng với tệp lười đọc, AI nôn ra một đống chữ lại là một thảm hoạ. |

### 3. Quyết định ngắn
* **Chốt thay đổi:** Cần giới hạn độ dài câu trả lời của AI ở mọi Option. Phần chữ phải được ngắt dòng ngắn, hoặc bổ sung icon cho bớt chán.
* **Chưa rõ:** Nếu Option A có tính năng vẽ sơ đồ tư duy thay vì trả về đoạn văn, liệu Vy có chịu dùng không?
