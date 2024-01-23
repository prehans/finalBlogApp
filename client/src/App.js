import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom';
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import './App.css';


function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/blogs" element={<Blog/>}></Route>
      <Route path="/blog-details/:id" element={<BlogDetails/>}></Route>
      <Route path="/create-blog" element={<CreateBlog/>}></Route>
      <Route path="/login" element ={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </>
  );
}

export default App;
