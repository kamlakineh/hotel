"use client";

import React, { useEffect, useState } from "react";
import { Index } from "./admincompent";
import { AddRoom } from "./admincompent/roomadd";
import { Rooms } from "./admincompent/displyroom";
import { Foods } from "./admincompent/foodlist";
import { Custemers } from "./admincompent/custem";
import { Profiles } from "./admincompent/profile";
import { useRouter } from "next/navigation";
import Loader from "@/constants/loading";
import Image from "next/image";

export default function Admin() {
  const [buttonview, setButtonview] = useState("");
  const [entries, setEntries] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      router.push("/auth/login");
    }
  }, []);

  async function fetchdata() {
    const req = await fetch("/api/profile");
    const data = await req.json();
    setEntries(data);
    console.log(data);
  }
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  async function handlelogout() {
    sessionStorage.removeItem("isAuthenticated");
    router.push("/auth/login");
  }
  if (isLoading) return <Loader />;
  return (
    <div className="flex bg-gray-200 w-full relative">
      <div className="w-[300px] bg-gray-900 px-[20px] py-[20px] fixed">
        <div className="grid gap-y-[110px]">
          <p className="text-[23px] text-white text-center">Admin</p>
          <div className="w-full flex flex-col gap-y-[5px]">
            <button
              onClick={() => setButtonview("")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              Home
            </button>
            <button
              onClick={() => setButtonview("addrooms")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              Add rooms
            </button>
            <button
              onClick={() => setButtonview("roomtable")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              Room table
            </button>
            <button
              onClick={() => setButtonview("foodlist")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              Blog Post
            </button>
            <button
              onClick={() => setButtonview("custmedetail")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              Custmer detail
            </button>
          </div>
          <div className="w-full flex flex-col gap-y-[5px]">
            <button
              onClick={() => setButtonview("profile")}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600 hover:border-1"
            >
              Profile
            </button>
            <button
              onClick={() => handlelogout()}
              className="bg-gray-800 text-white text-[16px] w-full h-[40px] border-gray-500 hover:bg-gray-600"
            >
              logout
            </button>
          </div>
        </div>
      </div>
      {/* header admin page */}
      <ul className="w-[270px] absolute top-1 right-4 py-2 justify-between flex">
        <div className="flex gap-x-[10px] items-center justify-center">
          <button>🔔</button>
          <button>💳</button>
        </div>
        {entries.map((profile, i) => (
          <div
            key={i}
            className="flex gap-x-[10px] items-center justify-center"
          >
            <Image
              alt=""
              src={profile.image}
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="text-[14px] text-black">{profile.name}</p>
          </div>
        ))}
      </ul>
      {buttonview === "" && (
        <div className="absolute top-14 w-[1030px] left-[300px]">
          <Index />
        </div>
      )}
      {buttonview === "addrooms" && (
        <div className="absolute top-14 w-[1000px] left-[320px]">
          <button
            onClick={() => setButtonview("")}
            className="font-bold text-[30px] w-[40px] h-[40px] text-center text-white absolute top-[9px] rounded-full left-[10px] bg-gray-600 hover:bg-gray-900"
          >
            home
          </button>
          <AddRoom />
        </div>
      )}
      {buttonview === "roomtable" && (
        <div className="absolute top-14 w-[1000px] left-[320px]">
          <button
            onClick={() => setButtonview("")}
            className="font-bold text-[30px] w-[40px] h-[40px] text-center text-white absolute top-[9px] rounded-full left-[10px] bg-gray-600 hover:bg-gray-900"
          >
            home
          </button>
          <Rooms />
        </div>
      )}
      {buttonview === "foodlist" && (
        <div className="absolute top-14 w-[1000px] left-[320px]">
          <button
            onClick={() => setButtonview("")}
            className="font-bold text-[30px] w-[40px] h-[40px] text-center text-white absolute top-[9px] rounded-full left-[10px] bg-gray-600 hover:bg-gray-900"
          >
            home
          </button>
          <Foods />
        </div>
      )}
      {buttonview === "custmedetail" && (
        <div className="absolute top-14 w-[1000px] left-[320px]">
          <button
            onClick={() => setButtonview("")}
            className="font-bold text-[30px] w-[40px] h-[40px] text-center text-white absolute top-[9px] rounded-full left-[10px] bg-gray-600 hover:bg-gray-900"
          >
            home
          </button>
          <Custemers />
        </div>
      )}
      {buttonview === "profile" && (
        <div className="absolute top-14 w-[1000px] left-[320px]">
          <button
            onClick={() => setButtonview("")}
            className="font-bold text-[30px] w-[40px] h-[40px] text-center text-white absolute top-[9px] rounded-full left-[10px] bg-gray-600 hover:bg-gray-900"
          >
            home
          </button>
          <Profiles />
        </div>
      )}
    </div>
  );
}
