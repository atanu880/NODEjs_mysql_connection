var {createConnection} = require("mysql2")

var con=createConnection({
    host : "localhost",
    user : "root",
    password: "root",
    database:"shankar",
    connectionLimit : 5

});

module.exports=con;