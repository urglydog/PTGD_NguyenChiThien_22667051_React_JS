
function checkDogs(dogsJulia,dogsKate){
    //1
    const dogsJulia_new = dogsJulia.slice();
    dogsJulia.slice(0,1);
    dogsJulia.slice(-2);
    //2
    const Julia_Kate_dogs = [...dogsJulia_new,...dogsKate];

    for (let index = 0; index < Julia_Kate_dogs.length; index++) {
        if(Julia_Kate_dogs[index]>=3){
            console.log(`Dog number ${index} is an adult, and is ${Julia_Kate_dogs[index]} years old`);
        }else if(Julia_Kate_dogs[index]<3){
            console.log(`Dog number ${index}  is still a puppy, and is ${Julia_Kate_dogs[index]} years old`);
        }
    }
}

//Data 1
const Julia1 = [3, 5, 2, 12, 7];
const Kate1 =  [4, 1, 15, 8, 3];
//Data 2
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 =  [10, 5, 6, 1, 4];

console.log("Data 1");
checkDogs(Julia1,Kate1);

console.log("Data 2");
checkDogs(Julia2,Kate2);

