const e = require('express');
var sql=require('mysql');

class SQL{
    constructor(){

    }
    connection=sql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'flight_reservation'
    });
    connect()
    {
        this.connection.connect(function(err){
            if(err){
                return err;
            }
            console.log("connected");
        });
    }
    checkUser(email)
    {
     var query_result;
this.connect();
var query="select * from users where email = '"+email+"'";
this.connection.query(query,function(err,result){
    console.log(err);
    console.log("Result",result);
    console.log(result!=null);
    if(err)
    {
    console.log(err);
    query_result= false;
    console.log("query_result 1=>",query_result);
    }
    else{
    console.log("here");
         if(result!=null)
         {
         console.log("Result null ? false");
         query_result= true;
         console.log("query_result2=>",query_result);
         }
         else{
         console.log("Result null ? true");
         query_result= false;
          console.log("query_result3=>",query_result);
        }
    }
});
   console.log("query_result=>",query_result);
   return query_result;
 }
}
module.exports=SQL;