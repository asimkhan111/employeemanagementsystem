const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employe"
})

db.connect((err) =>{
    if(err) console.log(err)
    else console.log("Database Connected")
})
module.exports = db