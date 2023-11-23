const express = require("express");
const router = express.Router(); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate =require("../middleware/authenticate");

const cookieParser = require("cookie-parser"); //From YT comment , very useful
router.use(cookieParser());  //From YT comment , very useful

require('../db/conn');
const User = require("../model/userSchema");
router.get('/',(req, res)=>{
    res.send("Hello world from the server router js");
});
//Using promises
// router.post('/register', (req, res)=>{
    
//     // doing destructuring
//     const {name, email, phone, work, password, cpassword}= req.body;
    

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "Plz fill the all fields properly"});

//     }
//     User.findOne({email:email})
//     .then((userExist) =>{
//         if (userExist) {
//             return res.status(422).json({error: "Email already exists"});
//         }
//         const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"User registered successfully"});
//         }).catch((err)=>res.status(500).json({error: "Failed to register"}));
//     }).catch(err=>{console.log(err);});

//     // console.log(name);
//     // console.log(email);
//     // res.json({message:req.body});
//     // res.send("mera register page");
//     });

// Using async-await
router.post('/register', async(req, res)=>{     
    
    // doing destructuring
    const {name, email, phone, work, password, cpassword}= req.body;
    

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Plz fill the all fields properly"});
    }
    try {
       const userExist = await User.findOne({email:email});
       if (userExist) {
        return res.status(422).json({error: "Email already exists"});
    }
    else if(password!= cpassword){
        return res.status(422).json({error: "password are not matching"});
    }
    else{

        const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});
    
        // yeh pe
         await user.save();
    
        res.status(201).json({message:"User registered successfully"});
    }

    } catch (err) {
        console.log(err);
    }
    });

    // login route
//  for this works in postman and in thunder client both
    router.post('/signin',async(req,res)=>{
        // console.log(req.body);
        // res.json({message:"awesome"});
        try {
            let token;
            const {email, password} =  req.body; //destructuring
            
            if(!email || !password){
                return res.status(400).json({error:"Plz fill the data"});
            }
            const userLogin = await User.findOne({email:email});

            // console.log(userLogin);
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);

                // generating token
                  token = await userLogin.generateAuthToken();
                console.log(token);
                
                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now()+25892000000), //expires after 30 days
                    httpOnly: true
                });

                if(!isMatch){
                    res.status(400).json({error:"Invalid crediantials"}); //for password
                }else{
                    res.json({message:"user sigin successfully"});
                }
            }
            else{
                res.status(400).json({error:"Invalid crediantials"});
            }

        }
         catch (err) {
            console.log(err);
            
        } 
    });

    // For authentication
    // About us page
    router.get('/about', authenticate, (req, res)=>{
        console.log("Hello my about");
        res.send(req.rootUser);
    });

    //get user data for contact page and home page
    router.get('/getdata', authenticate, (req, res)=>{
        console.log("Hello this is contact ");
        res.send(req.rootUser);
    });

     // Logout  page
     router.get('/logout', (req, res)=>{
        console.log("Hello my Logout Page");
        res.clearCookie('jwtoken', {path:'/'})
        res.status(200).send('User Logout');
    });
    router.post('/forgot-password', (req, res)=>{
        const {email} =req.body;
        UserModel.findOne({email: email})
        .then(user=>{
            if(!user){
                return res.send({Status: "User not existed"})
            }
            const token = jwt.sign({id: user._id}, "jwt")
        })
    })


module.exports = router;
