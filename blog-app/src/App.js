import "./App.css";
import Blogs from "./components/list-blog";
import ResponsiveAppBar from "./components/main";
import AddBlogForm from "./components/add-blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateBlog from "./components/update-blog";
import Blog from "./components/one-blog";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/blogs" exact element={<Blogs />}></Route>
          <Route path="/add-blog" exact element={<AddBlogForm />}></Route>
          <Route path="/update-blog/:id" exact element={<UpdateBlog />}></Route>
          <Route path="/blog/:id" exact element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
