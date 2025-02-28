const poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const input = prompt(
            `${this.question}\n${this.options.map((option, index) => `${index}: ${option}`).join('\n')}\n(Write option number)
            `
        );
        const answer = parseInt(input);

        // kiểm tra input
        if (!isNaN(answer) && answer >= 0 && answer < this.options.length) {
            this.answers[answer]++; // tăng biến đếm của một giá trị trong options
            console.log("Updated answers:", this.answers);

        } else {
            console.log("Input invalid, please enter a valid number");

        }
    },
    displayResults(type) {
        // nếu type là rỗng, chỉ in ra mãng kết quả
        if (type == 'array') {
            console.log(this.answers);
        } else if (type == 'string')
        console.log(`Poll results are: " ${this.answers.join(', ')}`);
    }
};

const button = document.createElement('button');
button.textContent = 'Answer poll';
document.body.append(button);
button.addEventListener('click', function () {
    poll.registerNewAnswer();
})











/**
 * Nhấn button
 * Nhập 1
 * Nhấn ok
 * kết quả: [0, 0, 0, 1], giá trị thứ 4 trong mãng answer(C++) được chọn
 * 
 * Nhấn button
 * Nhập 0
 * Nhấn ok
 * kết quả: [1, 0, 0, 1], giá trị thứ 1 trong mãng answer(JavaScript) được chọn
 * 
 * Nhấn button
 * Nhập 52
 * Nhấn ok
 * kết quả: Input invalid, please enter a valid number
 */













/**
 * 3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
 */
Data1= [5, 2, 3] 
Data2= [1, 5, 3, 9, 6, 1] 
poll.displayResults.call({answers:Data1},'array');
poll.displayResults.call({answers:Data2},'string');
