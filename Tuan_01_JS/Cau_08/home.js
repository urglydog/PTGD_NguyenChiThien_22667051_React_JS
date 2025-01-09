const calcTip = (bill)=>{
    return  (bill>=50 && bill<=300)?(bill*0.15):(bill*0.2);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = []
for (let index = 0; index < bills.length; index++) {
    tips.push(calcTip(bills[index]));  
    totals.push(bills[index]+calcTip(bills[index]));    
}
console.log("Bills - Mảng chứa giá hóa đơn");
console.log(bills);
console.log("Tips - Mảng chứa tiền tip ứng với từng hóa đơn");
console.log(tips);
console.log("Totals - Mảng chứa tổng tiền từng hóa đơn");
console.log(totals);


