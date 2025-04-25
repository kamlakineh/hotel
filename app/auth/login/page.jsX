"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
export default function Loginadmin() {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
    error: "",
  });
  const router = useRouter();
  const handlogin = async (e) => {
    e.preventDefault();
    const req = await fetch("/api/profile");
    const data = await req.json();
    const dataemail = data[0].email;
    const datapassword = data[0].password;
    const authvalue = true;
    if (userdata.email === dataemail && datapassword === userdata.password) {
      sessionStorage.setItem("isAuthenticated", "true");
      router.push("/admin");
    } else {
      setUserdata({
        email: "",
        password: "",
        error: "password or email incorrect",
      });
    }
  };
  return (
    <div className="w-full h-[500px] bg-gray-400 text-black py-[30px] grid items-center justify-center">
      <form
        className=" w-[300px] bg-gray-100 p-[20px] grid gap-y-[10px]"
        onSubmit={handlogin}
      >
        <h1 className="text-[30px] text-black ">admin login</h1>
        <ul>
          <label>email</label>
          <input
            type="email"
            name="email"
            className="text-black text-[20px] border-gray-700 border-2"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
          />
        </ul>
        <ul>
          <label>password</label>
          <input
            type="password"
            maxLength={8}
            className="text-black text-[20px] border-gray-700 border-2"
            value={userdata.password}
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
          />
        </ul>
        <button className="bg-black text-white p-[10px]">login</button>
        <p className="text-red-600 text-[16px]">{userdata.error}</p>
      </form>
    </div>
  );
}
