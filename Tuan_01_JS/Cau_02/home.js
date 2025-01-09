// Data 1
let markWeight1 = 78; 
let markHeight1 = 1.69; 
let johnWeight1 = 92; 
let johnHeight1 = 1.95;

// Data 2
let markWeight2 = 95; 
let markHeight2 = 1.88;
let johnWeight2 = 85; 
let johnHeight2 = 1.76;

// BMI cho Data 1
let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
let markHigherBMI1 = markBMI1 > johnBMI1;

// Kết quả cho Data 1
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
if(markHigherBMI1){
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's(${johnBMI1.toFixed(2)})!`);
}else{
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's(${markHigherBMI1.toFixed(2)})`);
}

// BMI cho Data 2
let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
let markHigherBMI2 = markBMI2 > johnBMI2;

// Kết quả cho Data 2
console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);

if(markHigherBMI2){
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's(${johnBMI2.toFixed(2)})!`);
}else{
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's(${markBMI2.toFixed(2)})`);
}
