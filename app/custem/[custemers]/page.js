"use client";
import Loader from "@/constants/loading";
import Prem from "@/constants/prem";
import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";
import { io } from "socket.io-client";

export default function Hotel({ params }) {
  const [rooms, setRooms] = useState([]);
  const [custem, setCustem] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message1, setMessage1] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef1 = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { custemers } = use(params);
  const name = custemers;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  async function fetchdata() {
    try {
      const req = await fetch("/api/custemer");
      const { custemes, room } = await req.json();
      const filteredRooms = room.filter((r) => r.roomNumber === name);
      const cust = custemes.filter((en) => en.rNumber === name);
      setRooms(filteredRooms);
      setCustem(cust);
      console.log(cust);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    messagesEndRef1.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  //chat part and socket
  useEffect(() => {
    const socket = io("http://localhost:3000", {
      transports: ["websocket", "polling"],
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
      fetch("/api/messages")
        .then((res) => res.json())
        .then((data) =>
          data.filter((messd) => messd.custemerId === custem[0]?.id)
        )
        .then((filtered) => setMessages(filtered))
        .catch((err) => console.error("Error fetching messages:", err));
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    socket.on("receive-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => {
      console.log("Cleaning up socket...");
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const sendMessage2 = async (e) => {
    e.preventDefault();
    const now = new Date();
    if (!message1.trim() || !socketRef.current) return;
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({
          content: message1,
          custemerId: custem[0].id,
          employId: "2323",
          from: "client",
          times: now.toLocaleTimeString(),
          dates: now.toLocaleDateString(),
        }),
      });
      const newMessage = await response.json();
      socketRef.current.emit("send-message", newMessage);
      setMessage1("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!custem[0]?.access) {
    if (isLoading) {
      return <Loader />;
    } else {
      return <Prem />;
    }
  }
  return (
    <div className="mx-[10px] p-6 space-y-6 bg-gray-100 min-h-screen">
      <Head>
        <title>Hotel Page {name}</title>
      </Head>

      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">
          The Hotel Room - {rooms[0]?.roomNumber || "Loading..."}
        </h1>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{custem[0]?.fName}</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar - Hotel Images */}
        <div className="col-span-1 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden flex justify-center items-center"
            >
              <img
                src={rooms[0]?.[`roomImage${i}`]}
                alt={`Hotel Image ${i}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="col-span-3 space-y-6">
          {/* Hotel History */}
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Hotel History</h2>
            <p className="text-gray-700 mt-2">
              Established in 1995, our hotel has been a symbol of luxury and
              comfort...
            </p>

            <h2 className="text-xl font-semibold mt-6">Blogs & Info</h2>
            {/* Example Blogs */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Blog Items */}
              {["Dining", "Spa", "Business", "Attractions"].map((title, i) => (
                <div key={i} className="bg-gray-100 p-3 rounded-lg">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600 text-sm">
                    Description for {title}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Info & Chat */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md text-black">
              <h2 className="text-xl font-semibold">Room Info</h2>
              <p>Room number: {rooms[0]?.roomNumber}</p>
              <p>Your Room Type: {rooms[0]?.roomType}</p>
              <p>Price: {rooms[0]?.roomPrice}</p>
              <p className="text-gray-700 mt-2">{rooms[0]?.roomDetail}</p>
            </div>

            {/* Chat */}
            <div className=" bg-gray-400 rounded-lg overflow-y-auto h-[300px]">
              <h2 className="text-xl font-semibold">Chat with Reception</h2>
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col bg-amber-300">
                  <div
                    className={`p-3 rounded-xl grid relative my-[7px] ${
                      msg.from === "client"
                        ? "bg-blue-300 text-white self-end"
                        : "bg-green-300 text-gray-800 self-start"
                    }`}
                  >
                    <span className="text-xs font-medium mb-1">
                      {msg.from === "client" ? "You" : "reciption"}
                    </span>
                    <div className="break-words whitespace-pre-wrap min-w-[100px] max-w-[200px]">
                      {msg.content}
                    </div>
                    <span className="absolute bottom-[3px] right-[3px] text-[10px]">
                      {msg.times}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef1} />
              <form
                className="space-y-4 mt-2 sticky bottom-0 bg-gray-400 w-full"
                onSubmit={sendMessage2}
              >
                <input
                  type="text"
                  value={message1}
                  onChange={(e) => setMessage1(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-2 border rounded-lg"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
