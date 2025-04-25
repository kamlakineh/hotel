"use client";
import useBlogForm from "@/hook/useBlogForm";
import { useState, useEffect } from "react";
import Image from "next/image";
export function Foods() {
  const [entries, setEntries] = useState([]);
  const {
    blogs,
    setBlogs,
    post,
    setPost,
    blogstore,
    setBlogstore,
    handleAddBlog,
    fetchBlogs,
  } = useBlogForm();

  function handlelistdown(id) {
    setBlogstore((item) =>
      item.map((items) =>
        items.id === id ? { ...items, list: !items.list } : items
      )
    );
  }
  async function fetchdata() {
    const req = await fetch("/api/profile/get");
    const data = await req.json();
    setEntries(data);
  }
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  async function handleDelete(userId) {
    const res = await fetch("/api/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    if (res.ok) {
      fetchBlogs();
    } else {
      alert("Error: " + data.error);
    }
  }

  return (
    <div>
      <p className="text-black text-[29px] font-bold justify-self-center">
        Customer Blog and Comment
      </p>
      <div className="flex p-5 relative">
        {/* Success message overlay */}
        {post && (
          <div className="absolute top-0 w-full h-full">
            <div className="w-full h-full bg-black opacity-50 -z-10"></div>
            <div className="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 grid gap-2 bg-gray-700 border-2 border-blue-950 p-5">
              <p className="text-center text-[20px] text-green-500">
                Blog posted successfully.
              </p>
              <button
                onClick={() => setPost(false)}
                className="bg-amber-300 text-white text-[30px]"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* Blog List Display */}
        <div className="flex overflow-y-auto h-[450px] items-start  p-4 flex-2 flex-col gap-y-[20px] text-gray-70 bg-gray-800">
          {blogstore.map((blog) => (
            <ul
              key={blog.id}
              className="border-1 border-gray-500 p-2 text-white w-full"
            >
              {blog.image && (
                <Image src={blog.image} width={200} height={200} alt="Blog" />
              )}
              <p
                className="text-[30px] cursor-pointer"
                onClick={() => handlelistdown(blog.id)}
              >
                {blog.titel}
              </p>
              <p className="text-[15px] text-justify break-words">
                {blog.detail}
              </p>{" "}
              <button
                onClick={() => handleDelete(blog.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </ul>
          ))}
        </div>

        {/* Blog Form */}
        <form
          onSubmit={handleAddBlog}
          className="flex flex-col gap-y-[20px] p-[30px] justify-center text-black items-center flex-1"
        >
          {/* File input */}
          <input
            className="border-2 w-full text-[20px]"
            type="file"
            accept="image/*"
            placeholder="Select an image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setBlogs({ ...blogs, image: file });
              }
            }}
          />
          <input
            className="border-2 w-full text-[20px]"
            type="text"
            value={blogs.titel}
            placeholder="Enter your blog titel "
            onChange={(e) => setBlogs({ ...blogs, titel: e.target.value })}
          />

          <textarea
            className="border-2 w-full text-[20px] h-[200px]"
            value={blogs.detail}
            placeholder="Enter description..."
            onChange={(e) => setBlogs({ ...blogs, detail: e.target.value })}
          />

          <button
            type="submit"
            className="px-4 py-2 bg-amber-900 hover:bg-amber-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
