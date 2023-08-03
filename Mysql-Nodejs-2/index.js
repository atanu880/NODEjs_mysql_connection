var con=require("./connection")
var express = require("express");
var app = express();
var bodyParser=require("body-parser") ;//get the data from server after submit

app.use(bodyParser.json()); //to convert the data into json
app.use(bodyParser.urlencoded({extended:true})) ; //to encode the url data
 
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
});

app.post('/',function(req,res){
// console.log(req.body); //to chk the data in console
var ename=req.body.ename;
var password=req.body.password;
var number=req.body.number;

con.connect(function(error){
    if (error) throw error;

    var sql="INSERT INTO shankar.babon(ename,password,number) VALUES('"+ename+"','"+password+"','"+number+"')";
    con.query(sql,function(error,result){
        if(error) throw error;
        res.send("student register successfully" +result.insertId);
    })
})
})
app.listen(5000,(err)=>{


    if(err)console.log(err);
    console.log("server running");
});