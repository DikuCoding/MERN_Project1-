const dotenv = require("dotenv");  
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middleware
// const middleware=(req, res, next)=>{
//     console.log("Hello middleware");
//     next();
// }

// middleware();

// app.get('/', (req, res)=>{
//     res.send("Hello world from the server app.js")
// });
// app.get('/about', (req, res)=>{
//     console.log("Hello my about");
//     res.send("Hello about world from the server");
// });
app.get('/contact', (req, res)=>{
    res.send("Hello contact world from the server")
});
app.get('/signin', (req, res)=>{
    res.send("Hello login world from the server")
});
app.get('/signup', (req, res)=>{
    res.send("Hello registration contact world from the server")
});

app.listen(3000, ()=>{
    console.log("Server is running at port no 3000");
})

// app.post('/forgot-password', (req, res)=>{
//     const {email} =req.body;
//     UserModel.findOne({email: email})
//     .then(user=>{
//         if(!user){
//             return res.send({Status: "User not existed"})
//         }
        
//     })
// })
// console.log("Subscribe")