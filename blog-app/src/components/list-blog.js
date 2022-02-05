import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Blogs() {
  const [blogs, updateBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/blogs").then((res) => {
      updateBlogs(res.data);
    });
  }, []);

  function deleteBlog(id) {
    if (window.confirm("Are you Sure to Delete this Blog ?")) {
      axios.delete(`http://localhost:4000/blogs/${id}`).then((res) => {
        const deletedBlog = blogs.filter((blog) => {
          return blog._id !== id;
        });

        updateBlogs(deletedBlog);
      });
    }
  }

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Card sx={{ maxWidth: 345, m: 10, float: "left" }} key={blog._id}>
            <Link
              to={`/blog/${blog._id}`}
              style={{ color: "#697784", textDecoration: "none" }}
            >
              <CardHeader
                title={blog.title}
                subheader={moment(blog.createdAt).format("L")}
              />
            </Link>
            <CardContent>
              <Typography noWrap variant="body2" color="text.secondary">
                {blog.body}
              </Typography>
            </CardContent>

            <CardActions>
              <DeleteIcon
                sx={{ ml: 10 }}
                onClick={() => deleteBlog(blog._id)}
              ></DeleteIcon>
              <Link
                to={`/update-blog/${blog._id}`}
                style={{ color: "#212121", textDecoration: "none" }}
              >
                <EditIcon sx={{ ml: 4 }}></EditIcon>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
