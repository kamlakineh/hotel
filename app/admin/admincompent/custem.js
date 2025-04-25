import { useState, useEffect } from "react";

export function Custemers() {
  const [custdatas, setCustdatas] = useState([]);
  const [scus, setScus] = useState("");
  const fetchdata = async () => {
    try {
      const req = await fetch("/api/custemer");
      const { custemes } = await req.json();
      setCustdatas(custemes);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  async function handleDelete(userId) {
    const res = await fetch("/api/custemer", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    if (res.ok) {
      fetchdata();
    } else {
      alert("Error: " + data.error);
    }
  }

  //fiter custmer for search from list
  const filtercustemer = custdatas.filter((item) =>
    item.fName.toLowerCase().includes(scus.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-300 flex w-full items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Room List</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <input
            placeholder="search custemer in here"
            value={scus}
            onChange={(e) => setScus(e.target.value)}
            className="w-[50%] my-[10px] ml-[45%] mr-[20px] border-2 border-gray-500 h-[30px] text-black bg-light-500"
          />
          <table className="min-w-full bg-white border text-gray-700 border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 text-left">Custemer Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Address</th>
                <th className="p-3 text-left">country</th>
                <th className="p-3 text-left">Room number</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Check Data</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtercustemer.map((room) => (
                <tr key={room.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{room.fName}</td>
                  <td className="p-3">{room.email}</td>
                  <td className="p-3 ">{room.address}</td>
                  <td className="p-3">${room.coutery}</td>
                  <td className="p-3">{room.rNumber}</td>
                  <td className="p-3">{room.numbers}</td>
                  <td className="p-3">
                    {room.checkIn} - {room.checkOut}
                  </td>

                  <td className="p-3 flex space-x-2">
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
