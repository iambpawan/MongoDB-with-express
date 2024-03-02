const mongoose =require("mongoose");

const chatSchema = new mongoose.Schema({
from:{
    type:String,
    requried:true,
},
to:{
    type:String,
    requried:true,
},
msg:{
    type:String,
    maxLength:50,
},
created_at:{
    type:Date,
    requried:true,
},
});

const Chat = mongoose.model("Chat",chatSchema);

module.exports=Chat;



