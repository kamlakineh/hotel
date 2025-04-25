"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Service() {
  const [datarooms, setDatarooms] = useState([]);
  useEffect(() => {
    const datafetching = async () => {
      try {
        const res = await fetch("/api/room");
        const data = await res.json();
        console.log("Fetched data:", data); // For debugging
        setDatarooms(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    datafetching();
  }, []);
  return (
    <div className="w-full mb-7">
      <div className="relative">
        <p className="absolute text-[100px] font-bold text-gray-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Room Service
        </p>
        <img
          className="h-[440px] opacity-70 w-full"
          src="/image/hotel/hol4.jpeg"
          alt="Blog banner"
        />
      </div>
      <div className=" grid justify-self-center items-center mt-[50px]">
        <p className="flex justify-center text-[30px] bg-gray-800 py-[40px] w-full">
          Room service
        </p>
        <div className="grid grid-cols-1 gap-[30px] pt-[20px] md:grid-cols-3">
          {datarooms.map((room) => (
            <div key={room.id}>
              <ul className="overflow-hidden w-100 flex flex-col gap-y-[10px] text-[20px] p-[15px] bg-gray-300 shadow-gray-900 shadow-2xl">
                <img
                  src={room.roomImage1}
                  className="hover:scale-125 duration-[1500ms]"
                />
                <p className="border-t-2 border-amber-500 text-black border-x-4 p-2">
                  price {room.roomPrice}$
                </p>
                <div className="grid grid-cols-2 gap-[10px] text-black bg-gray-300">
                  <p>
                    🧑🏾‍🦱{room.roomFor}-
                    {room.roomFor === "Normal" ? "Individual" : "you can!"}
                  </p>
                  <p>🛏️{room.roomType} Room</p>
                  <p>🛜 Free</p>
                  <p>🛁{room.roomType}</p>
                </div>
                <Link
                  href={`/homepage/service/${room.id}`}
                  className="text-white bg-gray-950 py-2 px-2"
                >
                  view detail &gt;
                </Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
