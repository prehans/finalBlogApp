const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    }
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'blogapps',
    //     required :[true,"User is required"]
    // }

},{timestamps:true})

const blogModel = mongoose.model('Blogs',blogSchema);
module.exports = blogModel;