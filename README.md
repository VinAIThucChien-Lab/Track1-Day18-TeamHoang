# Báo cáo Lab Day 18 - Multiple Prototypes: Human-AI Design

---

## 1. Thông tin cá nhân và nhóm

* **Nhóm:** Team Hoang
* **Thành viên:**
  * Nguyễn Đức Đạt - 2A202601728
  * Kiều Hồng Phong - 2A202601020
  * Đỗ Duy Đức - 2A202602019
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

* **Hành vi lặp lại rõ nhất:** Người học mở slide ra nhưng bị tắc ngay tại các đoạn công thức hoặc khái niệm cô đọng, không có bước đệm và ví dụ cụ thể $\rightarrow$ dẫn đến việc đọc đi đọc lại nhiều lần trong vô vọng.
* **Điểm nghẽn cốt lõi:** 
  * Slide bài giảng thường được thiết kế để giảng viên trình chiếu trên lớp nên rất nhiều gạch đầu dòng vắn tắt, lược bỏ các bước suy luận trung gian.
  * Khi sinh viên tự học hoặc xem lại để làm bài tập, việc thiếu ví dụ số liệu cụ thể và thiếu diễn giải bước đệm khiến họ không thể tự hiểu bản chất và không biết mình đang bị hổng ở bước nào.

### 2.3. Chốt Hypothesis Problem mang sang Day 18

> **Khi học bài, học viên gặp khó khăn vì slide bài giảng quá dài nhưng chỉ toàn gạch đầu dòng cô đọng, thiếu ví dụ minh họa và thiếu diễn giải bước đệm, dẫn đến đọc đi đọc lại nhiều lần vẫn không hiểu mình bị hổng ở bước nào.**

* **3 bằng chứng thực tế giữ vững giả thuyết:**
  1. *Hiếu* không thể làm bài tập vì slide chỉ có công thức trừu tượng, hoàn toàn thiếu bài mẫu tính toán số liệu từng bước.
  2. *Hải* bị đứt mạch tư duy và hỏng cả bài thực hành vì slide nhảy cóc một bước biến đổi công thức mà không có diễn giải đệm.
  3. *Đăng* đọc đi đọc lại 3 lần vẫn mông lung vì slide toàn gạch đầu dòng cô đọng, không biết mình đang hổng ở khái niệm nào.

* **2 điều nhóm chưa dám khẳng định (Still Unproven):**
  1. Nếu hệ thống tự động bóc tách và cung cấp diễn giải bước đệm hoặc ví dụ minh họa ngay cạnh slide, liệu người học có tự hiểu bài ngay mà không cần sự can thiệp của giảng viên/trợ giảng?
  2. Người học cần AI hỗ trợ chẩn đoán xem họ đang hổng ở bước nào, hay họ chỉ cần một khu vực mở rộng hiển thị sẵn ví dụ mẫu và diễn giải chi tiết?

---

## 3. Three Solution Options (Ba phương án thiết kế A/B/C)
*(Sẽ hoàn thiện chi tiết ở Chặng 2 & 3)*

* **Option A:** *(User chủ động yêu cầu diễn giải / ví dụ)* ...
* **Option B:** *(AI hỏi chẩn đoán từng bước đệm)* ...
* **Option C:** *(Hệ thống tự động phân tích và gắn sẵn ví dụ bước đệm vào slide)* ...
* **Link Prototype chung:** [prototype-link.md](file:///d:/AIThucchien/Track1-Day18-TeamHoang/prototype-link.md)
* **Bảng so sánh cơ chế:** [three-option-design-sheet.md](file:///d:/AIThucchien/Track1-Day18-TeamHoang/three-option-design-sheet.md)

---

## 4. Đóng góp của tôi trong nhóm
*(Ghi cụ thể phần việc cá nhân: Option phụ trách, thiết kế Human-AI, dựng prototype, facilitate tester nào, tổng hợp feedback)*

* **Option phụ trách chính:** ...
* **Đóng góp khác:** ...

---

## 5. Prototype Feedback & Group Synthesis
*(Sẽ cập nhật sau khi hoàn thành test 3 người ở Chặng 5 & 6)*

* **Ghi chép phiên test cá nhân:** [prototype-feedback-note.md](file:///d:/AIThucchien/Track1-Day18-TeamHoang/prototype-feedback-note.md)
* **Tổng hợp ý kiến 3 tester:** [group-feedback-synthesis.md](file:///d:/AIThucchien/Track1-Day18-TeamHoang/group-feedback-synthesis.md)
* **Next Change của nhóm:** ...
* **Điều vẫn chưa chứng minh được sau buổi test:** ...

---

## 6. AI Support Log (Nhật ký dùng AI)
*(Xem chi tiết tại [ai-support-log.md](file:///d:/AIThucchien/Track1-Day18-TeamHoang/ai-support-log.md))*
