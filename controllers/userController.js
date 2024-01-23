const userModel=require('../models/userModel');
// const bcrypt=require('bcrypt');
exports.registerController=async (req,res)=>{
    try {
        const {username , email, password}=req.body
        if(!username || !email || !password){
        return res.status(400).send({
          message:'Enter the required field',
          success:false
    });
}
const exisitingUser= await userModel.findOne({email});
if(exisitingUser)
{
    return res.status(401).send({
        success:false,
        message:"Email already exists"
    });
}
// const hashedPassword = await bcrypt.hash(password, 10);

const user=new userModel({username,email,password});
await user.save();
   return res.status(201).send({
    success:true,
    message:"New User Created",
    user
   });


    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error in Register Callback',
            success:false,
            error
        });
        
    }
}
exports.getAllUsers= async (req ,res)=>{
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount:users.length,
            message:"All data of users",
            success:true,
            users

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"Error in getting details of users",
            success:false,
            error
        });
    }
}
exports.loginController= async (req, res)=>{
    try {
        const {email, password}= req.body;
        if(!email || !password)
        {
            return res.status(401).send({
                message:"Enter email or password",
                success:false
            });
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(200).send({
                message:"Email is not registered",
                success:false
            });
        }
        // const match= await bcrypt.compare(password, user.password);
        if(user.password !== password){
            return res.status(500).send({
                message:"Invalid email or password",
                success:false
            });
        }

        return res.status(200).send({
            message:'Login successfully',
            success:true
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"error in login",
            success:false,
            error
        })
    }
}