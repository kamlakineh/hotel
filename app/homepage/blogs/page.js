"use client";

import useBlogForm from "@/hook/useBlogForm";
import Image from "next/image";

export default function Blogs() {
  const { blogstore } = useBlogForm();
  return (
    <div className="mt-20">
      {/* Banner */}
      <div className="relative">
        <p className="absolute text-[240px] font-bold text-gray-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Blogs
        </p>
        <Image
          className="h-[400px] opacity-70 w-full"
          src="/image/hotel/hol5.jpeg"
          alt="Blog banner"
        />
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-3 py-[20px] px-[200px]">
        {blogstore.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col  text-black mx-[10px] border-3 border-gray-900 p-[10px]"
          >
            <Image
              className="h-[200px] w-[260px] object-cover"
              src={blog.image}
              alt={blog.titel}
            />
            <p className="text-[30px] font-bold">{blog.titel}</p>
            <p className="w-[200px] text-[14px] text-justify break-words">
              {blog.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
