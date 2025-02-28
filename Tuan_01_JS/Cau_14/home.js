// const Data = [
//     "underscore_case",
//     "first_name",
//     "Some_Variable",
//     "calculate_AGE",
//     "delayed_departure"]

const textarea = document.createElement('textarea');
const button = document.createElement('button');
button.textContent = 'Convert from underscore_case to camelCase';

document.body.append(textarea);
document.body.append(button);
button.addEventListener('click', function () {
    const data = textarea.value;
    arr = data.split('\n');

    arr.forEach((line, index) => {
        const words = line.trim().toLowerCase().split('_'); // đây là mãng chứa các từ sau khi tách theo kí tự _
        const camelCase = words.map( // là mãng
            (word, i) => (
                i === 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
        ).join('');
        const checkmarks = '✅'.repeat(index + 1)
        console.log(`${camelCase}: ${checkmarks}`);

    });
})

