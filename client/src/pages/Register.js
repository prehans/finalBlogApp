import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Box , Typography , TextField , Button, inputClasses} from '@mui/material'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate()
  const [inputs , setInputs] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleChange =(e)=>{
    setInputs((prevState)=>({
     ...prevState,
     [e.target.name]:e.target.value,
  }));
  };
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      const {data}=  await axios.post('https://fibalb.onrender.com/api/v1/user/register' ,{username : inputs.name, email : inputs.email, password:inputs.password})
      if(data.success){
        alert("User Registerd successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
   <>
   <form onSubmit={handleSubmit}>
   <Box maxWidth={450} display="flex" flexDirection={"column"} alignItems={'center'} justifyContent={'center'} margin={'auto'} marginTop={5} boxShadow={'10px 10px 20px 20px #ccc'} padding={3} borderRadius={5}>
    <Typography variant='h4' padding={3} textAlign={'center'}>
      Register
    </Typography >
    <TextField
    placeholder='name'
    value={inputs.name}
    onChange={handleChange}
    name='name'
    margin='normal'
    type={'text'}/>
     <TextField
    placeholder='email'
    value={inputs.email}
    onChange={handleChange}
    name='email'
    margin='normal'
    type={'email'}/>
     <TextField
    placeholder='password'
    value={inputs.password}
    onChange={handleChange}
    name='password'
    margin='normal'
    type={'password'}/>
   
    <Button type="submit" variant='contained' color='primary'>Submit</Button>
    <Button onClick={()=> navigate("/login")}>Already register ? Please login !</Button>
   </Box>
   </form>
   </>
  )
}

export default Register