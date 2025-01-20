const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//   Task 1
console.log("Task 1");

for (let index = 0; index < (game.scored).length; index++) {
    console.log(`Goal ${index + 1} : ${game.scored[index]}`);
}

// Task 2
console.log("Task 2");

const oddArray = Object.values(game.odds);
const avgOdd = oddArray.reduce((sum, odd) => sum + odd, 0) / oddArray.length;
console.log(`Average Odd is ${avgOdd.toFixed(2)}`);

// Task 3
console.log("Task 3");

Object.entries(game.odds).forEach(([key, value]) => {
    if (key != "x")
        console.log(`Odd of victory ${key} : ${value}`);
    else
        console.log(`Odd of drawn: ${value}`);

})

// Task 4
// Hàm đếm số lượng suất hiện của một phần tử trong mãng
function rate(arr, ele) {
    return arr.filter(item => item == ele).length
}

const goals = [];
const exists = new Set();
game.scored.forEach(element => {
    if (!exists.has(element))
        goals.push({ player: element, goals: rate(game.scored, element) })
    exists.add(element)
});
console.log("Task 4");

console.log(goals);


