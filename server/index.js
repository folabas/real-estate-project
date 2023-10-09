// server/index.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Database Connected...');
// })


app.post('/sign-up', (req,res)=> {

    const fullName = req.body.fullName;
    const password = req.body.password;
    const email = req.body.email;

    db.query(
        "INSERT INTO users (fullName, password, email) VALUES (?,?,?)", 
        [fullName, password, email], 
        (err, result) =>{
        console.log(err);
    })
})





app.listen(3001, () => {
  console.log(`Server listening on 3001....`);
});