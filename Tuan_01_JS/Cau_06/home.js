const calcTip = (bill)=>{
    return  (bill>=50 && bill<=300)?bill*0.15:bill*0.2;
}

const bills = [125,555,44];
const tips = bills.map(calcTip);
const total=bills.map((bill,index)=>bill+tips[index]);


const kq = bills.map((bill,index)=>
    `The bill was ${bill} and the tip was ${tips[index]} so total is ${total[index]}`
)

for (let index = 0; index < kq.length; index++) {
    console.log(kq[index]);
        
}
