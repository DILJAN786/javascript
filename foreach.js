let A = [2,3,4,5,8]

function hello(number,index , ){
    console.log(`index is ${index} and number is ${number}`)
}

A.forEach(hello);

const b = [
    {name:"diljan" , gender:"male"},
    {name:"amlik" , gender:"male"},
    {name:"janii" , gender:"male"},
    {name:"niazi" , gender:"male"}
]

b.forEach(function(b){
           console.log(b.name , b.gender);
        //    console.log(b.gender);

})