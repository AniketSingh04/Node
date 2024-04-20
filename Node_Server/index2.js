//sync
// function fun1() {
//     fun2();
//     console.log("fun1");
    
// }

// function fun2(){
//     console.log("fun2");
//     fun3();
// }

// function fun3(){
//     console.log("fun3"); 
// }

// fun1();

//async
// function fun1() {
//     setInterval(()=> console.log("fun1"), 2000);
//     process.nextTick(()=> console.log("I am Process"));
//     setImmediate(()=> console.log("I am Set immediate"));    
// }

// function fun2(){
//     console.log("fun2");
// }

// function fun3(){
//     console.log("fun3"); 
// }
// fun1();
// fun2();
// fun3();

//inbuit(async) pehle execute hota hai as compared to user-defined
const fs = require("fs");
setTimeout(()=> console.log("I am Set timeout"), 2000);

fs.readFile(__filename, () => {
    console.log("I am File");
    process.nextTick(()=> console.log("I am Process inside File"));
});

process.nextTick(()=> console.log("I am Process"));
Promise.resolve().then(()=> console.log("This is Promise"));
