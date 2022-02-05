import "./App.css";
import Blogs from "./components/list-blog";
import ResponsiveAppBar from "./components/main";
import AddBlogForm from "./components/add-blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/blogs" exact element={<Blogs />}></Route>
          <Route path="/add-blog" exact element={<AddBlogForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
