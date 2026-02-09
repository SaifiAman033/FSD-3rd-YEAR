const http = require("http");// importing the http module

//create server
const server = http.createServer((req,res)=>{
    //sending the response
    res.write("This is the response from the server")
    res.end();
})
//server listening to port 3000
server.listen((5000), () =>{
    console.log("server is Running");
})