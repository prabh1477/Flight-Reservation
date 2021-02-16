const e = require('express');
var sql=require('mysql');
var Q=require('q');
var Promise=require('promise');
class SQL{
    constructor(){
       
    }
    connection=sql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'flight_reservation'
    });
    query_result=false;
    connect()
    {
        let _this=this;
        return (new Promise(function(resolve,reject){
            _this.connection.connect(function(err){
                if(err){
                    reject(err);
                    return err;
                }else{
                    resolve("connected");
                }
            });    
        }))
        /*
        this.connection.connect(function(err){
            if(err){
                return err;
            }
            console.log("connected");
        });*/
    }
    checkUser(email)
    {   let promise;
        let _that=this;
        
        return this.connect().then((res)=>{
            console.log("connection result=>",res);
            let _this=this;
            return (new Promise(function(resolve,reject){
                console.log("here");
                _this.connection.query("select * from users where email = '"+email+"'",function(err,result){
                    if(err)
                    {
                        console.log("error=>",err);
                        throw err;
                        reject("error");
                    }
                    console.log("result=>",result);
                    
                        if(result.length>0){
                            console.log(result);
                            _that.query_result=true;
                            console.log("Querylist",_that.query_result);
                            resolve(_that.query_result);
                        }
                        else{
                            _that.query_result= false;
                            reject(_that.query_result);
                        }
                });
            }));
        })
        .then((result)=>{
            console.log("result=>",result);
           return result; 
        })
        .catch((ERR)=>{
            console.log(ERR);
        })
        
        //setTimeout(()=>{
            /*
            var query="select * from users where email = '"+email+"'";
            //this.connection.query(query)
            this.connection.query(query,function(err,result){
                if(err)
                {
                    throw err;
                }
                    if(result.length>0){
                        console.log(result);
                        this.query_result=true;
                        console.log("Querylist",this.query_result);
                    }
                    else
                    this.query_result= false;
            });
            console.log("Out of Query",this.query_result);
            return this.query_result;*/
        //},2000);

    //});
        
    }
    
    changePasswordInDatabase(password)
    {
            this.connect();
            var query="update users set password = '"+password+"'";
            console.log(query);
            this.connection.query(query,function(err){
                if(err)throw err;
                console.log("Password updated");
            })
    }
}
module.exports=SQL;