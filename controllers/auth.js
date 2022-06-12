const mysql=require("mysql");
const jwt= require("jsonxebtoken");
const bcrypt=require("bcryptjs");


const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database :process.env.DATABASE,
}) 




exports.index=(req,res)=>{

const {first,id,last,name} = req.body;

}
console.log(req.body);
res.send("index confirmed")