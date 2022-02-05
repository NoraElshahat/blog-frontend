import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

export default function Blog() {
  let params = useParams();
  const [blog, updateBlogs] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:4000/blogs/${params.id}`).then((res) => {
      updateBlogs(res.data);
    });
  }, []);

  return (
    <div>
      <Card style={{ marginTop: "70px", margin: "auto" }} key={blog._id}>
        <CardHeader
          title={blog.title}
          subheader={moment(blog.createdAt).format("L")}
        />
        <CardContent>
          <Typography noWrap variant="body2" color="text.secondary">
            {blog.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
