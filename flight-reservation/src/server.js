const express = require('express');
const SQL=require('./db.js');
const path = require('path');
const app = express();
var url=require('url');
var nodemailer = require('nodemailer');
const {parse} =require('querystring');
const { request } = require('http');

var mongo=require( './mongo_db');
var users=require( './users');

app.use(express.static(path.join(__dirname, 'build')));
var bodyParser = require('body-parser');
const { Redirect } = require('react-router-dom');
const { Console } = require('console');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
//initializing SQL Class in db.js 
var sql=new SQL();

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  console.log("hello");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var email;
//checks for the email in the database
app.post('/forgot',function(req,res){
 email=req.body.email;
  console.log("Email=>",email);
 
//console.log("Server log=>",sql.checkUser(email));
//sendResetLink(email);
sql.checkUser(email).then((r)=>{
  console.log("r",r);
  res.end();
})
 /*if(sql.checkUser(email)==true)
 {
   res.send("User found");
 }
 else
 {
   res.send("User not found");
   
 }
  res.end();
  */
 
});
//sends reset link to the client mail f
function sendResetLink(email)
{
  var sender_email='jayeshuttam7844@gmail.com';
  var password='programmer@jayesh7844'
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:sender_email ,
      pass: password
    }
  });
  
  var mailOptions = {
    from:sender_email ,
    to: email,
    subject: ' flight reservation system',
    text: ' Hii from flight reservation system That was easy!  here is the link to reset http://localhost:3000/ChangePassword'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
//process new passwords comming from <ChangePassword/> Component
app.post('/changepassword',function(req,res){
    new_passwor=req.body.new_pass;
    console.log("Incoming password ",new_passwor);
    confirm_password=req.body.confirm_new_pass;
    if(new_passwor.length!=0 && confirm_password.length!=0){
    if(new_passwor==confirm_password)
    {
        sql.changePasswordInDatabase(new_passwor);
        res.end();
    }
  }
});

app.listen(process.env.PORT || 8080);