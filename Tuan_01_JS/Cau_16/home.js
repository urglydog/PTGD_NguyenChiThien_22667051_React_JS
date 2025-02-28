(() => {
    const header = document.querySelector('h1'); // trả về thẻ h1 đầu tiên, nếu dùng getElementByTagname thì trả về một mảng(HTML collection), muốn lấy thẻ đầu => +[0]
    document.body.addEventListener("click", () => {
        header.style.color = 'blue';
    });
})();


/**
 * Giải thích: IIFE (Immediately Invoked Function Expression)IIFE
 *  là một biểu thức hàm được gọi ngay lập tức sau khi được định nghĩa.
 *  Nó được sử dụng để tạo ra một phạm vi riêng biệt,
 *  tránh làm ảnh hưởng đến biến toàn cục.
 */

/**
 * Khi ta load trang, hàm được chạy, header đã lưu tham chiếu được với h1
 * khi click vào màn hình: header bên trong sự kiện click đã có giá trị
 * từ phạm vi bên ngoài trước đó khi load trang =. thẻ h1 đổi màu
 */

/**
 * Closure là một hàm có thể ghi nhớ và truy cập vào phạm vi (scope) của nó,
 *  ngay cả khi hàm đó được thực thi bên ngoài phạm vi ban đầu.

Nói cách khác, một closure cho phép một hàm "nhớ" biến từ phạm vi cha 
ngay cả khi phạm vi cha đã kết thúc.
 */