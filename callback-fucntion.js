console.log("call back fucntion");

// function hello(){
//     console.log("hello from first fucntion");
// }

// function hello2(a){
// console.log("hello this is second function");
// a();
// }
// hello2(hello);

function func(b){
    console.log("hello from first fucn");
    console.log(b)
}

function myfunc(a){
    console.log("this is my second func");
    // console.log(a)
    a("hi");
}
myfunc(func);