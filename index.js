const http = require("http")
const fs = require('fs')
const sql = require('mysql')

const con = sql.createConnection({
   "host":"localhost" ,
   "user":"root",
   "password":"",
   "database":"film"
});

con.query("CREATE TABLE `film`.`pro` (`id` INT(250) NOT NULL AUTO_INCREMENT , `name` VARCHAR(500) NOT NULL DEFAULT 'Film name' , `title` TEXT NOT NULL , `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`))",(err,res)=>{

});
const server = http.createServer(function(request,response){
    response.setHeader("Content-Type","text/html")
    fs.readFile("index.html",(err,data)=>{
  if(!err){
    response.statusCode = 200;
    response.write(data);
    response.end();
  }
    });
  
});
server.listen(80,'127.0.0.1');









