((ages)=>{
    const humanAge=[];
    ages.forEach(age => {
        if(age<=2){
            humanAge.push(age*=2) ;
        }else if(age>2){
            humanAge.push(age=16+age*4);
        }
    });
    //2
    let humanAge18 = humanAge.filter(age=> age>=18);
    //3
    const sum = humanAge18.reduce((acc,num)=> acc+num,0);
    const avg = (sum/humanAge18.length).toFixed(2);
    console.log("Tuổi trung bình của chó trưởng thành nếu được quy đổi sang tuổi người",avg);
})([5, 2, 4, 1, 15, 8, 3] );

((ages)=>{
    const humanAge=[];
    ages.forEach(age => {
        if(age<=2){
            humanAge.push(age*=2) ;
        }else if(age>2){
            humanAge.push(age=16+age*4);
        }
    });
    //2
    let humanAge18 = humanAge.filter(age=> age>=18);
    //3
    const sum = humanAge18.reduce((acc,num)=> acc+num,0);
    const avg = (sum/humanAge18.length).toFixed(2);
    console.log("Tuổi trung bình của chó trưởng thành nếu được quy đổi sang tuổi người",avg);
})([16, 6, 10, 5, 6, 1, 4] );