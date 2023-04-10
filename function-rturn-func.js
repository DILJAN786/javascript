// console.log("hello")
// function hello1(){
//     function hello2() {
//         // return "hello world"
//         console.log("hello world")
//     }
//     return hello2;
// }

// const myfunc = hello1();
// // console.log(myfunc)
// myfunc();


function form1() {
    function form2() {
        console.log("hello")
    }
    return form2;
}

const form3= form1();
// console.log(form3());