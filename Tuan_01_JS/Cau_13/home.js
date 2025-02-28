// Your tasks: 
// 1. Create an array 'events' of the different game events that happened (no 
// duplicates) 
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
console.log("2. Remove the yellow card from minute 64 was unfair");
remove = gameEvents;
console.log("Game events before remove yellow card", [...remove]);
remove.delete(64)
console.log("Game events after remove yellow card", [...remove]);
console.log("=>Đã xóa yellow card ở phút 64");
console.log("=================================");


// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log("3. Compute and log the following string to the console: An event happened, on average, every 9 minutes");
const numOfEvens_AfterRemove = gameEvents.size;
const result = 90 / numOfEvens_AfterRemove;
console.log(`An event happened, on average, every ${result} minutes`);
console.log("=================================");

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
console.log("4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game");
hiep1 = new Map();
hiep2 = new Map();
gameEvents.forEach((value, key) => {
    if (key <= 45) {
        hiep1.set(key, value);
    } else if (key > 45) {
        hiep2.set(key, value);
    }
})
console.log("Các sự kiện ở hiệp 1: ");
hiep1.forEach((value, key) => {
    console.log(`Phút ${key}: sự kiện: ${value}`);
})
console.log("\n");

console.log("Các sự kiện ở hiệp 2: ");
hiep2.forEach((value, key) => {
    console.log(`Phút ${key}: sự kiện: ${value}`);
})


