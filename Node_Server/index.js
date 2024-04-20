//create Server

const http = require("http");
//console.log(http);

const server = http.createServer((req,res)=>{
    // console.log("started"); //prints in the terminal
    // //res.setHeader("Hello", 'Server');
    // res.setHeader("Content-Type","text.html")
    // res.end("<h1>Node Server Created</h1>");
    if(req.url === "/"){
        res.end("Home Page");
    }
    if(req.url === "/about"){
        res.end("About Page");
    }
    else{
        res.end("Node Server");
    }
});

server.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})
