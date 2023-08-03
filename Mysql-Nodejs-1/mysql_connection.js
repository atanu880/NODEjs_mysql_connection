const {createPool}=require ('mysql2');

const pool= createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database : "chandra",
  connectionLimit : 5
})

pool.query(`select * from atu1`,(err, result)=>{
  if(err){
    return console.log(err);
  }
  return console.log(result);
})