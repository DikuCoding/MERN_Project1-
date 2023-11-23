const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndexParser: true,
    UseUnifiedTopology: true,
    // UseFindAndModify: false,
}).then(()=>{
    console.log("Connection Successfull to database");
}).catch((err)=>console.log("No connection"));