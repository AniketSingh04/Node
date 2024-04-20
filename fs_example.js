//async
//sync

const { error } = require("console");
const fs = require("fs");
const { readFile } = require("fs/promises");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log(err); //prints the err
//         return;
//     }
//     console.log(data); //prints the data
// })

// const file_sync = fs.readFileSync("file.txt", "utf-8");
// console.log(file_sync);

// fs.writeFile("file.txt", "I Am Rekha Amitabh Bachan", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Submitted");
// });

//fs.writeFileSync("file.txt", "I am Monkey D. Luffy");

// fs.stat("file.txt",(err,stats)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stats);
// })

// fs.mkdir("new_dir", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("directory created");
// })

// fs.rmdir("new_dir", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("directory removed");
// })

//create a separate file to use this snippet
// fs.unlink("text.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("file removed");
// })