const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/shimishimi")
.then( ()=>{
    console.log("connected to mongo database!")
}).catch( err => console.error("not connected!" + err));

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
const user = mongoose.model("shimiBukshpan", userSchema);

module.exports = user;