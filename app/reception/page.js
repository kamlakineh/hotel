"use client";
import { useState, useEffect, useRef, use } from "react";
import { io } from "socket.io-client";

export default function ReceptionPage() {
  const [custdatas, setCustdatas] = useState([]);
  const [scus, setScus] = useState("");
  const [sroom, setSroom] = useState("");
  const [entries, setEntries] = useState([]);
  const [notification, setNotification] = useState([]);
  const [notipop, setNotifpop] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message2, setMessage2] = useState("");
  const [dmessage, setDmessage] = useState(null);
  const [messagepop, setMessagepop] = useState(false);
  const [messagenotif, setMessagenotif] = useState(false);
  const [newmessage, setNewmessage] = useState(null);
  const socketRef = useRef(null);
  const messagesEndRef2 = useRef(null);

  const notificationRef = useRef(notification);

  useEffect(() => {
    notificationRef.current = notification;
  }, [notification]);

  useEffect(() => {
    const socket = io("http://localhost:3000", {
      reconnection: true,
      reconnectionAttempts: 5,
    });

    socket.on("new-notification", (message) => {
      const updated = [...notificationRef.current, message];
      setNotification(updated);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  async function fetchdata() {
    const res = await fetch("/api/room");
    const date = await res.json();
    setEntries(date);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  //filter for seatch the room list
  const filterdata = entries.filter((item) =>
    item.roomNumber.toLowerCase().includes(sroom.toLowerCase())
  );
  //fetch custemer data from back end
  const fetchdcust = async () => {
    try {
      const req = await fetch("/api/custemer");
      const { custemes } = await req.json();
      setCustdatas(custemes);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchdcust();
  }, []);
  //fiter custmer for search from list
  const filtercustemer = custdatas.filter((item) =>
    item.fName.toLowerCase().includes(scus.toLowerCase())
  );
  async function handlenewclient(num) {
    dbNot = setNotification((db) => db.filter((itd) => itd.rNumber === num));
    const custdata = new FormData();
    custdata.append("fName", dbNot[0].fName);
    custdata.append("email", dbNot[0].email);
    custdata.append("address", dbNot[0].address);
    custdata.append("coutery", dbNot[0].coutery);
    custdata.append("numbers", dbNot[0].numbers);
    custdata.append("numFamily", dbNot[0].numFamily);
    custdata.append("rNumber", dbNot[0].rNumber);
    custdata.append("checkIn", dbNot[0].checkIn);
    custdata.append("checkOut", dbNot[0].checkOut);
    try {
      const res = await fetch("/api/custemer", {
        method: "POST",
        body: custdata,
      });
      if (res.ok) {
        setNotifpop(false);
        setNotification((data) => data.filter((item) => item.rNumber !== num));
      } else {
        alert("some thing is wronge");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  useEffect(() => {
    messagesEndRef2.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const socket = io("http://localhost:3000", {
      transports: ["websocket", "polling"],
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
      fetch("/api/messages")
        .then((req) => req.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error("Error fetching messages:", err));
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    socket.on("receive-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      setMessagenotif(true);
      setNewmessage(newMessage);
    });
    return () => {
      console.log("Cleaning up socket...");
      socket.disconnect();
      socketRef.current = null;
      console.log(newmessage);
    };
  }, []);
  const sendMessage2 = async (custem) => {
    const now = new Date();
    if (!message2.trim() || !socketRef.current) return;
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({
          content: message2,
          custemerId: custem,
          employId: "2323",
          from: "employ",
          times: now.toLocaleTimeString(),
          dates: now.toLocaleDateString(),
        }),
      });
      const newMessage = await response.json();
      socketRef.current.emit("send-message", newMessage);
      setMessage2("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const groupedMessages = {};
  if (messages) {
    messages.forEach((msg) => {
      if (!msg.custemerId) return;
      if (!groupedMessages[msg.custemerId]) {
        groupedMessages[msg.custemerId] = [];
      }
      groupedMessages[msg.custemerId].push(msg);
    });
  }

  function displaymassage(id) {
    setDmessage((prevId) => (prevId === id ? null : id));
    setMessagenotif(false);
  }
  async function handlaccess(id) {
    try {
      const res = await fetch("/api/custemer", {
        method: "PUT",
        body: JSON.stringify({ userid: id }),
      });
      if (res.ok) {
        fetchdcust();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* notification part the pop up */}
      {notipop && (
        <div className="fixed top-[70px] right-[4px] z-[100] space-y-4 h-[330px] bg-gray-200 overflow-y-auto">
          {notification.map((notif, i) => (
            <div
              key={i}
              className="bg-gray-200 text-black p-[20px] rounded-3xl shadow-lg border border-blue-300"
            >
              <div className="p-2 border-2 border-blue-900">
                <p className="text-[20px] text-blue-400 underline">
                  New notification from client
                </p>
                <p>Name: {notif.fName}</p>
                <p>Email: {notif.email}</p>
                <p>Address: {notif.address}</p>
                <p>Number: {notif.numbers}</p>
                <p>Country: {notif.coutery}</p>
                {notif.numFamily && <p>Family Number: {notif.numFamily}</p>}
                <p>Room choose: {notif.rNumber}</p>
                <p>
                  Check date: <strong>{notif.checkIn}</strong> -{" "}
                  <strong>{notif.checkOut}</strong>
                </p>
                <button
                  className="bg-amber-950 p-[10px] text-amber-50 text-[20px] w-full rounded-3xl mt-2"
                  onClick={() => handlenewclient(notif.rNumber)}
                >
                  OK
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-gray-800 fixed z-[200] w-full text-white p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-xl font-bold">Hotel Paradise</h1>
        <div className="flex items-center gap-2">
          <div className="relative" onClick={() => setNotifpop(!notipop)}>
            <img
              alt=""
              width={30}
              height={30}
              className="bg-amber-800 rounded-[50%] p-2 "
              src="image/notif.svg"
            />
            <span className="absolute top-[-8px] right-[-7px] text-red-600 font-bold text-[20px]">
              {notification.length > 0 && notification.length}
            </span>
          </div>
          <span>Employee Name</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </div>
      <div className="bg-gray-500 p-7 rounded-2xl">
        <div className="bg-gray-500 w-full grid">
          {/* custemer information */}
          <div className="bg-gray-300 p-10 w-full rounded-lg m-3">
            <h1 className="bg-gray-800 text-white h-[60px] flex items-center px-4 text-lg font-semibold">
              Customer Details
            </h1>
            {/* custem ssereach part */}
            <input
              placeholder="search custemer in here"
              value={scus}
              onChange={(e) => setScus(e.target.value)}
              className="w-[50%] my-[10px] ml-[45%] mr-[20px] border-2 border-gray-500 h-[30px] text-black bg-light-500"
            />
            <div className="overflow-y-auto h-[300px] max-w-full">
              <table className="w-full text-sm table-auto">
                <thead className="bg-gray-500 text-white sticky top-0">
                  <tr>
                    <th className="text-left font-bold text-[16px] p-2">
                      Name
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Email
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Address
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      country/National
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Room numbers
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Family number
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      check date
                    </th>
                    <th>Accessablety</th>
                  </tr>
                </thead>
                <tbody>
                  {filtercustemer.map((cust) => (
                    <tr
                      key={cust.id}
                      className="border-b hover:bg-gray-100 text-black"
                    >
                      <td className="p-3">{cust.fName}</td>
                      <td className="p-3">{cust.email}</td>
                      <td className="p-3">{cust.address}</td>
                      <td className="p-3">{cust.coutery}</td>
                      <td className="p-3">{cust.rNumber}</td>
                      <td className="p-3">{cust.numFamily}</td>
                      <td className="p-3">
                        {cust.checkIn} - {cust.checkOut}
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          value={cust.access}
                          onChange={() => handlaccess(cust.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* room infomation */}
          <div className="bg-gray-300 p-4 w-full rounded-lg m-3">
            <h1 className="bg-gray-800 text-white h-[60px] flex items-center px-4 text-lg font-semibold">
              Room Details
            </h1>
            {/* room sereach part */}
            <input
              placeholder="search room in here"
              value={sroom}
              onChange={(e) => setSroom(e.target.value)}
              className="w-[50%] my-[10px] ml-[45%] mr-[20px] border-2 border-gray-500 h-[30px] text-black bg-light-500"
            />
            <div className="overflow-y-auto h-[300px] max-w-full">
              <table className="w-full text-sm table-auto">
                <thead className="bg-gray-500 text-white sticky top-0">
                  <tr>
                    <th className="text-left font-bold text-[16px] p-2">
                      Room Number
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Type
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">For</th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Price ($)
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Floor
                    </th>
                    <th className="text-left font-bold text-[16px] p-2">
                      Taken
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterdata.map((room) => (
                    <tr
                      key={room.id}
                      className="border-b hover:bg-gray-100 text-black"
                    >
                      <td className="p-3">{room.roomNumber}</td>
                      <td className="p-3">{room.roomType}</td>
                      <td className="p-3">{room.roomFor}</td>
                      <td className="p-3">${room.roomPrice}</td>
                      <td className="p-3">{room.roomFloor}</td>
                      <td
                        className={
                          room.tack ? "text-green-500" : "text-red-600"
                        }
                      >
                        {room.tack ? "It’s taken" : "X Not taken"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setMessagepop(true)}
        className="bg-blue-700 rounded-[50%] p-2 fixed bottom-[30px] right-0"
      >
        <div className="relative">
          {messagenotif && (
            <span className="absolute top-0 left-[-10px] text-[20px] font-bold text-white bg-red-600 rounded-2xl">
              new
            </span>
          )}
          <img alt="" src="image/message.svg" height={60} width={60} />
        </div>
      </button>
      {messagepop && (
        <div className="px-4 rounded-2xl pb-4 fixed bottom-[20px] w-[600px] right-0 bg-gray-200 h-[400px] overflow-x-auto">
          <div className="sticky top-0 z-[30] bg-gray-200">
            <button
              onClick={() => setMessagepop(false)}
              className="text-[30px] text-red-700 font-bold "
            >
              X
            </button>
          </div>
          {Object.entries(groupedMessages).map(([custemerId, msgs]) => (
            <div
              key={custemerId}
              className="bg-white rounded shadow p-4"
              onClick={() => displaymassage(custemerId)}
            >
              <div className="flex flex-col space-y-2 relative">
                <h2 className="text-lg font-bold mb-4 text-blue-600">
                  Room{" "}
                  {custdatas.find((item) => item.id === custemerId)?.rNumber ||
                    "Unknown"}
                  :
                  {custdatas.find((item) => item.id === custemerId)?.fName ||
                    "Unknown"}
                </h2>
                {messagenotif && (
                  <div className="absolute top-[5px] right-[5px]">
                    {newmessage.custemerId === custemerId ? (
                      <strong style={{ color: "red" }}>new</strong>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                <div ref={messagesEndRef2} />
                {msgs.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${
                      dmessage === custemerId ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg relative my-[5px] max-w-[70%] z-[10] ${
                        msg.from === "client"
                          ? "bg-blue-100 text-black self-start"
                          : "bg-green-100 text-black self-end ml-auto"
                      } `}
                    >
                      <p className="my-[5px]">{msg.content}</p>
                      <div className="absolute bottom-[2px] right-[2px] text-[10px] text-black">
                        {msg.times}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-[20px]">
                <input
                  type="text"
                  className="border-2 border-gray-400 h-[40px] text-black p-[10px] rounded-2xl"
                  placeholder="Message"
                  value={dmessage === custemerId ? message2 : ""}
                  onChange={(e) => setMessage2(e.target.value)}
                />
                <button
                  onClick={() => sendMessage2(custemerId)}
                  className="bg-blue-900 p-[5px] hover:bg-blue-600 h-[40px] text-light-50 ml-[10px] rounded-[10px]"
                >
                  send
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
