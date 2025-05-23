"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function Page({ params }) {
  const [resolvedParams, setResolvedParams] = useState(null);
  const [index, setIndex] = useState(0); // selected image index
  const [inputnum, setInputnum] = useState({
    fName: "",
    email: "",
    address: "",
    coutery: "",
    numbers: "single",
    numFamily: "1",
    notify: false,
    rNumber: "",
    checkIn: "",
    checkOut: "",
  });
  const [datarooms, setDatarooms] = useState([]);
  useEffect(() => {
    const datafetching = async () => {
      try {
        const res = await fetch("/api/room");
        const data = await res.json();
        setDatarooms(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    datafetching();
  }, []);

  useEffect(() => {
    if (params instanceof Promise) {
      params.then(setResolvedParams);
    } else {
      setResolvedParams(params);
    }
  }, [params]);

  if (!resolvedParams || !resolvedParams.detailService) {
    return <p>Loading...</p>;
  }

  const id = resolvedParams.detailService;
  const rooms = datarooms.filter((r) => r.id == id);
  if (rooms.length === 0) {
    return <p>No service found</p>;
  }
  const room = rooms[0];
  const imageList = [room.roomImage1, room.roomImage2, room.roomImage3].filter(
    Boolean
  ); // remove undefined/null

  const sendNotification = (e) => {
    e.preventDefault();
    const socket = io("http://localhost:3000");
    socket.emit("send-notification", {
      fName: inputnum.fName,
      email: inputnum.email,
      address: inputnum.address,
      coutery: inputnum.coutery,
      numbers: inputnum.numbers,
      rNumber: inputnum.rNumber,
      numFamily: inputnum.numFamily,
      checkIn: inputnum.checkIn,
      checkOut: inputnum.checkOut,
    });
    setInputnum({
      fName: "",
      email: "",
      address: "",
      coutery: "",
      numbers: "single",
      numFamily: "",
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <div className="flex mt-[80px] p-7 gap-x-[30px] text-black">
      {/* LEFT SIDE */}
      <div className="grid justify-start flex-2">
        {/* MAIN IMAGE */}
        <img
          src={
            imageList[index]?.startsWith("http")
              ? imageList[index]
              : `/uploads/${imageList[index]}`
          }
          className="w-full h-[400px] object-cover"
          alt="Main"
        />

        {/* THUMBNAILS */}
        <div className="flex p-4 gap-x-[30px]">
          {imageList.map((img, i) => (
            <img
              key={i}
              src={img?.startsWith("http") ? img : `/uploads/${img}`}
              width={100}
              height={100}
              alt={`Thumbnail ${i}`}
              onClick={() => setIndex(i)}
              className={`cursor-pointer border-2 ${
                index === i ? "border-black" : "border-gray-300"
              } hover:border-black`}
            />
          ))}
        </div>

        {/* DESCRIPTION & PRICE */}
        <p className="w-full text-justify">{room.roomDetail}</p>
        <h1>{room.roomPrice}$</h1>
      </div>

      {/* RIGHT SIDE */}
      <form
        onSubmit={sendNotification}
        className="flex-1 p-7 text-white bg-gray-500 shadow-xl shadow-gray-900 h-[520px]"
      >
        <ul className="grid gap-y-[8px]">
          <label>Full Name</label>
          <input
            type="text"
            className="border-2 border-black h-[29px] "
            value={inputnum.fName}
            onChange={(e) =>
              setInputnum({ ...inputnum, fName: e.target.value })
            }
          />
        </ul>
        <ul className="grid gap-y-[8px]">
          <label>Email</label>
          <input
            type="email"
            className="border-2 border-black h-[29px] "
            value={inputnum.email}
            onChange={(e) =>
              setInputnum({ ...inputnum, email: e.target.value })
            }
          />
        </ul>
        <ul className="grid gap-y-[8px]">
          <label>Address</label>
          <input
            type="text"
            className="border-2 border-black h-[29px] "
            value={inputnum.address}
            onChange={(e) =>
              setInputnum({ ...inputnum, address: e.target.value })
            }
          />
        </ul>
        <ul className="grid gap-y-[8px]">
          <label>Country/Nationalty</label>
          <input
            type="text"
            className="border-2 border-black h-[29px] "
            value={inputnum.coutery}
            onChange={(e) =>
              setInputnum({ ...inputnum, coutery: e.target.value })
            }
          />
        </ul>
        <ul className="flex text-black gap-x-[20px] my-[10px]">
          <label>Number</label>
          <select
            value={inputnum.numbers}
            onChange={(e) =>
              setInputnum({ ...inputnum, numbers: e.target.value })
            }
          >
            <option value="single">single</option>
            <option value="family">Family</option>
          </select>
        </ul>
        {inputnum.numbers === "family" && (
          <ul className="grid gap-y-[8px]">
            <label>Number of family</label>
            <input
              type="text"
              className="border-2 border-black h-[29px]"
              value={inputnum.numFamily}
              onChange={(e) =>
                setInputnum({ ...inputnum, numFamily: e.target.value })
              }
            />
          </ul>
        )}
        <div className="flex gap-x-[5px]">
          <ul className="grid gap-y-[8px]">
            <label>Check IN</label>
            <input
              type="date"
              className="border-2 border-black h-[29px] "
              value={inputnum.checkIn}
              onChange={(e) =>
                setInputnum({ ...inputnum, checkIn: e.target.value })
              }
            />
          </ul>
          <ul className="grid gap-y-[8px]">
            <label>Check Out</label>
            <input
              type="date"
              className="border-2 border-black h-[29px] "
              value={inputnum.checkOut}
              onChange={(e) =>
                setInputnum({ ...inputnum, checkOut: e.target.value })
              }
            />
          </ul>
        </div>
        <button className="w-full h-[50px] text-white mt-[40px] bg-gray-950 hover:bg-gray-700">
          submit
        </button>
      </form>
    </div>
  );
}
