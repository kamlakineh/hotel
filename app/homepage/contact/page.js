"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const boxRef = useRef(null);
  const [item, setItem] = useState({ email: "", name: "", detail: "" });
  const [load, setLoad] = useState([]);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);
  return (
    <div className="">
      <div className="relative">
        <p className="absolute text-[240px] font-bold text-gray-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          contact
        </p>
        <Image
          className="h-[400px] opacity-70 w-full"
          src="/image/hotel/hol4.jpeg"
          alt="Blog banner"
        />
      </div>
      <div
        ref={boxRef}
        className="h-auto bg-gray-600 grid items-center justify-center rounded-lg m-[50px] p-4"
      >
        <p className="text-[30px] justify-self-center font-bold text-center text-black mt-[20px]">
          contact <strong className="text-white">us</strong>
        </p>
        <div className="grid gap-y-[30px]">
          <input
            className="w-[500px] h-[40px] border-2 text-white  border-black shadow-xl shadow-gray-950 p-1"
            type="email"
            placeholder="enter your email address"
            value={item.email}
            onChange={(e) => setItem({ ...item, email: e.target.value })}
          />
          <input
            type="text"
            className="w-[500px] h-[40px] border-2 text-white  border-black shadow-xl shadow-gray-950 p-1"
            placeholder="enter your name"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <textarea
            placeholder="enter your details"
            className="w-[500px] h-[200px] border-2 border-black text-white shadow-xl shadow-gray-950 p-1"
            value={item.detail}
            onChange={(e) => setItem({ ...item, detail: e.target.value })}
          />
          <button
            className="bg-gray-950 text-white text-[25px] hover:bg-gray-800"
            onClick={() => handleadd()}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
