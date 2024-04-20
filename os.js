const os = require("os"); //importing os module

console.log(os.freemem()); //returns free memory
console.log(os.totalmem()); //returns total memory
console.log(os.userInfo());  //returns user info;
console.log(os.version()); //returns os version
console.log(os.hostname()); //returns hostname
console.log(os.machine()); //returns machine type
console.log(os.arch()); //returns architecture