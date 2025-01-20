function printForecast(arr){
    let str = '';
    for (let index = 0; index < arr.length; index++) {
        str+= `... ${arr[index]}ºC in ${index+1} days `        
    }

    console.log(str);
}
console.log('Developer Skills & Editor Setup');

// Test data 1
printForecast([17, 21, 23]);

// Test data 2
printForecast([12, 5, -5, 0, 4]);