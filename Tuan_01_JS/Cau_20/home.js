const dogs = [ 
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
    { weight: 8, curFood: 200, owners: ['Matilda'] }, 
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
    { weight: 32, curFood: 340, owners: ['Michael'] }, 
    ]; 

    function checkFoodPortion(currentFood, recommendedFood) {
        const lowerBound = recommendedFood * 0.9; // 10% dưới mức khuyến nghị
        const upperBound = recommendedFood * 1.1; // 10% trên mức khuyến nghị
    
        if (currentFood > upperBound) {
            console.log("Ăn quá nhiều 🐶🍖");
             
        } else if (currentFood < lowerBound) {
            console.log("Ăn quá ít 🐶🥕");
             ;
        } else {
            console.log("Ăn vừa đủ ✅");
        }
    }
//1
dogs.forEach(dog=>{
    dog.recommendedFood  = Math.round(dog.weight ** 0.75 * 28);
});
//2
console.log("Chó của Sarah");
const Sarah_Dogs = dogs.filter(dog=>dog.owners.includes("Sarah"));
Sarah_Dogs.forEach(dog=>{
    console.log(dog);
    checkFoodPortion(dog.curFood,dog.recommendedFood);
})
// 3. Tạo danh sách chủ nuôi dựa trên mức ăn của chó
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1) // Ăn quá nhiều
    .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9) // Ăn quá ít
    .flatMap(dog => dog.owners);

    console.log("Chủ của chó ăn quá nhiều:", ownersEatTooMuch);
    console.log("Chủ của chó ăn quá ít:", ownersEatTooLittle);
// 4. In ra chuỗi thông báo
console.log(`${ownersEatTooMuch.join(" và ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" và ")}'s dogs eat too little!`);

// 5. Kiểm tra có chó nào ăn đúng khẩu phần không
const hasDogEatingExact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log("Có chó nào ăn đúng lượng khuyến nghị không?", hasDogEatingExact);

// 6. Kiểm tra có chó nào ăn trong khoảng hợp lý không
const hasDogEatingOkay = dogs.some(dog => {
    const lowerBound = dog.recommendedFood * 0.9;
    const upperBound = dog.recommendedFood * 1.1;
    return dog.curFood >= lowerBound && dog.curFood <= upperBound;
});
console.log("Có chó nào ăn trong khoảng hợp lý không?", hasDogEatingOkay);

// 7. Danh sách chó ăn hợp lý
const dogsEatingOkay = dogs.filter(dog => {
    const lowerBound = dog.recommendedFood * 0.9;
    const upperBound = dog.recommendedFood * 1.1;
    return dog.curFood >= lowerBound && dog.curFood <= upperBound;
});
console.log("Danh sách chó ăn hợp lý:", dogsEatingOkay);

// 8. Sắp xếp mảng theo khẩu phần khuyến nghị (tăng dần)
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("Chó sắp xếp theo khẩu phần khuyến nghị:", sortedDogs);