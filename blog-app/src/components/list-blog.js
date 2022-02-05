import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Blogs() {
  const [blogs, updateBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/blogs").then((res) => {
      updateBlogs(res.data);
    });
  }, []);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Card sx={{ maxWidth: 345, m: 10, float: "left" }} key={blog._id}>
            <CardHeader title={blog.title} subheader={blog.createdAt} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {blog.body}
              </Typography>
            </CardContent>

            <CardActions>
              <DeleteIcon sx={{ ml: 10 }}></DeleteIcon>
              <EditIcon sx={{ ml: 15 }}></EditIcon>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
