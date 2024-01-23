const  mongoose  = require('mongoose');
const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');

exports.getAllBlogsController = async(req,res)=>{
    try {
        const blogs = await blogModel.find({});
        if(!blogs){
            return res.status(200).send({
                message:'No blogs found',
                success:false
            });
        }
        return res.status(200).send({
            BlogCount:blogs.length,
            message:"All Blogs are",
            success:true,
            blogs
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while getting all blogs',
            error
        });
    }
}



exports.createBlogController = async(req,res)=>{
    try {
        const {title,image,description} = req.body;
        if(!title|| !image || !description  )
        {
            return res.status(400).send({
               success:false,
               message:"Please enter all fields"
            });
        }
        // console.log(user);
        
        // const existingUser = await userModel.findById(user);
        
        // if(!existingUser)
        // {
        //     return res.status(404).send({
        //         success:false,
        //         message:"User not found"
        //     })
        // }
        const newBlog = new blogModel({title,image,description});
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await newBlog.save({session});
        // existingUser.blogs.push(newBlog);
        // await existingUser.save({session});
        // await session.commitTransaction();
     
        await newBlog.save();
        return res.status(201).send({
           success:true,
           message:"New Blog Created",
           newBlog
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error while creating the blog",
            error
        })
    }
}
exports.updateBlogController = async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,image,description} = req.body;
        const blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(200).send({
            success:true,
            message:"Blog Updated successfully",
            blog
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in updating the blog",
            error
        });
        
    }
}
exports.getBlogByIdController = async(req,res)=>{
    try {
        const {id}=req.params;
        const blog = await blogModel.findById(id);
        if(!blog){
            return res.status(200).send({
                success:false,
                message:"Blog not found with this id"
            });
        }
        return res.status(200).send({
            success:true,
            message:"Blog found",
            blog
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in getting the blog by id",
            error
        })
        
    }
}
exports.deleteBlogController =async(req,res)=>{
    try {
        await blogModel.findOneAndDelete(req.params.id);
        return res.status(200).send({
            success:true,
            message:"Blog Deleted"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error while deleting the blog",
            error
        })
        
    }
}