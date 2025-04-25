"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-[100] p-4 flex justify-around flex-row transition-all duration-300 ${
        scroll ? "bg-gray-900 shadow-lg " : "bg-transparent border-2 border-gray-600"
      }`}
    >
      <h2 className="text-3xl">ketha</h2>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row">
          <Link href="/">
            <li className={`mx-4 ${scroll ? "text-white" : "text-gray-700 text-[21px]"}`}>Home</li>
          </Link>
          <Link href="/homepage/blogs">
            
              <li className={`mx-4 ${scroll ? "text-white" : "text-gray-700 text-[21px]"}`}>Blogs</li>
            
          </Link>

          <Link href="/homepage/service">
          
            <li className={`mx-4 ${scroll ? "text-white" : "text-gray-700 text-[21px]"}`}>Room</li>
          
          </Link>
          <Link href="/homepage/contact">
          
            <li className={`mx-4 ${scroll ? "text-white" : "text-gray-700 text-[21px]"}`}>Contact</li>
          
          </Link>
        </ul>
      </div>
      <button className="bg-transparent rounded-3xl px-4 py-2 text-white border-2 border-transparent hover:bg-red-500 hover:border-red-500 hover:text-black transition-all">
        Reservation
      </button>
    </nav>
  );
}
