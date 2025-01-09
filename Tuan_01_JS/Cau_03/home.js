function avg(arr){
    let kq = 0;
    for (let index = 0; index < arr.length; index++) {
        kq+=arr[index];
    }
    return (kq/(arr.length)).toFixed(2);
}

// tập dữ liệu 1
console.log("Tập dữ liệu 1");

const dolphins_score1 = [96,108,89];
const koalas_score1 = [88,91,110];

var dolphins_avg_score1 = avg(dolphins_score1);
var koalas_avg_score1 = avg(koalas_score1);

console.log(`Dolphins score is: ${dolphins_avg_score1}`);
console.log(`Koalas score is: ${koalas_avg_score1}`);
if(dolphins_avg_score1>koalas_avg_score1 && dolphins_avg_score1>=100){
    console.log("Dolphins win");
}else if(dolphins_avg_score1<koalas_avg_score1 && koalas_avg_score1>=100){
    console.log("Koalas win"); 
}else if(dolphins_avg_score1===koalas_avg_score1 && (dolphins_avg_score1>=100 && koalas_avg_score1>=100)){
    console.log("It's a draw");
}
else{
    console.log("No team wins the trophy");
}

// tập dữ liệu 2
console.log("\nTập dữ liệu 2");

const dolphins_score2 = [97,112,101];
const koalas_score2 = [109,95,123];

var dolphins_avg_score2 = avg(dolphins_score2);
var koalas_avg_score2 = avg(koalas_score2);

console.log(`Dolphins score is: ${dolphins_avg_score2}`);
console.log(`Koalas score is: ${koalas_avg_score2}`);
if(dolphins_avg_score2>koalas_avg_score2 && dolphins_avg_score2>=100){
    console.log("Dolphins win");
}else if(dolphins_avg_score2<koalas_avg_score2 && koalas_avg_score2>=100){
    console.log("Koalas win"); 
}else if(dolphins_avg_score2===koalas_avg_score2 && (dolphins_avg_score2>=100 && koalas_avg_score2>=100)){
    console.log("It's a draw");
}
else{
    console.log("No team wins the trophy");
}

// tập dữ liệu 3
console.log("\nTập dữ liệu 3");

const dolphins_score3 = [97,112,101];
const koalas_score3 = [109,95,106];

var dolphins_avg_score3 = avg(dolphins_score3);
var koalas_avg_score3 = avg(koalas_score3);

console.log(`Dolphins score is: ${dolphins_avg_score3}`);
console.log(`Koalas score is: ${koalas_avg_score3}`);
if(dolphins_avg_score3>koalas_avg_score3 && dolphins_avg_score3>=100){
    console.log("Dolphins win");
}else if(dolphins_avg_score3<koalas_avg_score3 && koalas_avg_score3>=100){
    console.log("Koalas win"); 
}else if(dolphins_avg_score3===koalas_avg_score3 && (dolphins_avg_score3>=100 && koalas_avg_score3>=100)){
    console.log("It's a draw");
}
else{
    console.log("No team wins the trophy");
}
