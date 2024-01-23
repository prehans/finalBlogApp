const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Blogs'
        }
    ]
}, {timestamps:true})

const userModel = mongoose.model('blogapps',userSchema);
module.exports = userModel;