import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function BlogCard({id ,title ,image,description,time}) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`);
      };

      const handleDelete = async () => {
        try {
          const { data } = await axios.delete(`https://fibalb.onrender.com/api/v1/blog/delete-blog/${id}`);
          if (data?.success) {
            alert("Blog Deleted");
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <Card sx={{ width:'30%' , margin:'auto',mt:2,padding:2,boxShadow:'5px 5px 10px #ccc' }}>
        <Box dsiplay={'flex'}>
            <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon/></IconButton>
            <IconButton onClick={handleDelete}><DeleteIcon color="error"/></IconButton>
        </Box>
      <CardHeader
        title={title}
        subheader={time}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {description}
        </Typography>
      </CardContent>

    </Card>
    
  );
}