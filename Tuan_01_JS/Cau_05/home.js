// tạo một arrow function để tính điểm trunh bình của mãng gồm 3 giá trị
//Tập dữ liệu 1
const Dolphins_Score_1 = [40,23,71];
const Koalos_Score_1   = [65,54,49];
let calcAverage = (arr)=>{
    return (arr.reduce((acc,cur)=>(acc+cur),0))/arr.length;
}
let checkWinner = (avgDolhins,avgKoalas)=>{
    if(avgDolhins>=avgKoalas*2){
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
        
    }else if(avgKoalas>=avgDolhins*2){
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
    }else{
        console.log(`Dolphins AVG is ${avgDolhins} and Koalas AVG is ${avgKoalas} so No team win`);
        
    }
}
console.log("Data 1");

let Dolphins_Avg_1 = calcAverage(Dolphins_Score_1);
let Koalas_Avg_1 = calcAverage(Koalos_Score_1);
checkWinner(Dolphins_Avg_1,Koalas_Avg_1)

//Tập dữ liệu 2
const Dolphins_Score_2 = [85,54,41];
const Koalos_Score_2   = [23,34,27];

console.log("Data 2");

let Dolphins_Avg_2 = calcAverage(Dolphins_Score_2);
let Koalas_Avg_2  = calcAverage(Koalos_Score_2);
checkWinner(Dolphins_Avg_2,Koalas_Avg_2)

