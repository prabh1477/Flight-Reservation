const express = require('express');
const SQL=require('./db.js');
const path = require('path');
const app = express();
var url=require('url');
const {parse} =require('querystring');
const { request } = require('http');



app.use(express.static(path.join(__dirname, 'build')));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  console.log("hello");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/forgot',function(req,res){
  var email=req.body.email;
  console.log("Email=>",email);
 var sql=new SQL();
 console.log("Server log=>",sql.checkUser(email));
 if(sql.checkUser(email)==true)
 {
   res.send("User found");
 }
 else
 {
   res.send("User not found");
 }
  res.end();
  
 
});

app.listen(process.env.PORT || 8080);