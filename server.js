const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

connectDB();

const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get("/" ,(req,res)=>{
    res.status(200).send({
        message:"Node Server created by Prehans",
    });
});

// Routes

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Node Server is running on ${PORT}`.bgBlue.white);
})