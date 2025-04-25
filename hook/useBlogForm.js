import { useState, useEffect } from "react";

export default function useBlogForm() {
  const [blogs, setBlogs] = useState({
    image: null,
    detail: "",
    titel: "",
  });

  const [post, setPost] = useState(false);
  const [blogstore, setBlogstore] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  async function fetchBlogs() {
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogstore(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  async function handleAddBlog(e) {
    e.preventDefault();
    const { image, detail, titel } = blogs;

    if (!image || !detail || !titel) {
      alert("Please enter all fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image); // real File object
      formData.append("titel ", titel);
      formData.append("detail", detail);
      formData.append("date", new Date().toISOString());

      const req = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (req.ok) {
        setPost(true);
        fetchBlogs();
      } else {
        alert("Failed to post blog.");
      }
    } catch (error) {
      console.log("error:", error);
    }
    setBlogs({ titel: "", detail: "" });
  }

  return {
    blogs,
    setBlogs,
    post,
    setPost,
    blogstore,
    setBlogstore,
    handleAddBlog,
    fetchBlogs,
  };
}
