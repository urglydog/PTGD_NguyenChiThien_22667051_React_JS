const Mark = {
    firstName: "Miller",
    lastName: "Mark",
    mass: 78,
    height: 1.69,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    calcBMI: function(){
        return this.mass/(this.height*2);
    },
    get BMI(){
        return this.calcBMI();
    } 
}

const John = {
    firstName: "Smith",
    lastName: "John",
    mass: 92,
    height: 1.95,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    calcBMI: function(){
        return this.mass/(this.height*2);
    },
    get BMI(){
        return this.calcBMI();
    } 
}

if(Mark.BMI>John.BMI){
    console.log(`Mark's BMI (${Mark.BMI.toFixed(2)}) is higher than John's (${John.BMI.toFixed(2)})!`);  
}else if (John.BMI>Mark.BMI){
    console.log(`John's BMI (${John.BMI.toFixed(2)}) is higher than Mark's (${Mark.BMI.toFixed(2)})!`);  
}




