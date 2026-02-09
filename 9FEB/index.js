// const http = require('http');
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        fs.readFile('index.html', "utf-8", (err, htmlContent) => {
            if(err){
                res.statusCode(500);
                res.end("Internal Server Errror");
            }
            else if(req.url === "/style.css"){
                fs.readFile("style.css", "utf-8", (err, cssContent) => {
                    if(err){
                        res.statusCode = 500;
                        res.end("Internal Sever Error");
                        return;
                    }
                    res.setHeader("Content-Type", "text/css");
                    res.end(cssContent); 
                })
            }
        })
    }
})

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
})