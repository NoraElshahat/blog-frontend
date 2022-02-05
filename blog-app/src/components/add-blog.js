import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBlogForm() {
  let navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", body: "" });

  function handleText(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/blogs", blog).then((res) => {
      navigate("/blogs");
    });
  }

  return (
    <Box
      style={{
        width: 500,
        height: 500,
        margin: "auto",
        padding: 50,
      }}
    >
      <h2 style={{ color: "#1F76D2" }}>Add new Blog</h2>

      <div style={{ marginBottom: 20 }}>
        <TextField
          id="filled-basic"
          label="Blog Title"
          variant="filled"
          value={blog.title}
          name="title"
          onChange={handleText}
        />
      </div>

      <div>
        <TextField
          id="filled-basic"
          label="Blog Details"
          variant="filled"
          name="body"
          value={blog.body}
          onChange={handleText}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </Box>
  );
}
