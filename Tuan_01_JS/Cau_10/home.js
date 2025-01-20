// Biến khởi tạo
let secretNumber = Math.floor(Math.random() * 20) + 1; // Tạo số bí mật ngẫu nhiên từ 1-20
let score = 20; // Điểm bắt đầu

// Chọn các phần tử giao diện
const messageDisplay = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const body = document.querySelector('body');

// Hàm hiển thị thông báo
function displayMessage(message) {
    messageDisplay.textContent = message;
}

// Xử lý khi người chơi đoán số
guessInput.addEventListener('input', function () {
    const guess = Number(guessInput.value); // Lấy giá trị từ ô nhập

    if (!guess) {
        displayMessage('⛔ No number!'); // Ô nhập rỗng
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        numberDisplay.textContent = secretNumber; // Hiển thị số bí mật
        body.style.backgroundColor = '#60b347'; // Đổi màu nền
        numberDisplay.style.width = '30rem'; // Thay đổi kích thước số
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--; // Giảm điểm
            scoreDisplay.textContent = score; // Cập nhật điểm
        } else {
            displayMessage('💥 You lost the game!');
            scoreDisplay.textContent = 0;
        }
    }
});

// Xử lý khi nhấn nút "Again!"
againButton.addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1; // Số bí mật mới
    score = 20; // Điểm mới
    displayMessage('Start guessing...'); // Reset thông báo
    scoreDisplay.textContent = score; // Reset điểm
    numberDisplay.textContent = '?'; // Reset số hiển thị
    guessInput.value = ''; // Xóa ô nhập
    body.style.backgroundColor = '#222'; // Reset màu nền
    numberDisplay.style.width = '15rem'; // Reset kích thước số
});
