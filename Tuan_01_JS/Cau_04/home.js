
const bill = [275,40,430];
for (let index = 0; index < bill.length; index++) {
    let billValue = bill[index];
    let tip = (billValue>=50 && billValue<=300)?billValue*0.15:billValue*0.2;        
    console.log(`The bill was ${billValue.toFixed(2)}, and the tip was ${tip.toFixed(2)}, and the total value was ${(billValue+tip).toFixed(2)}`);
}
