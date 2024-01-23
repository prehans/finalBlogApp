import React , {useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
const Blog = () => {
  const [blogs,setBlogs]=useState([])
  const getAllBlogs = async()=>{
    try {
      const {data}= await axios.get('https://fibalb.onrender.com/api/v1/blog/all-blog')
      if(data?.success){
        setBlogs(data?.blogs)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllBlogs();
  },[])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {blogs && blogs.map((blog) =>( <BlogCard
      id={blog._id}
      title={blog.title}
      image={blog.image}
      description={blog.description}
      time={blog.createdAt}
      />))}
     </div>
  )
}

export default Blog