import { useEffect, useState } from "react";

import { AddRoom } from "./roomadd";

export function Rooms() {
  const [toaddroom, setToaddrom] = useState(false);
  const [entries, setEntries] = useState([]);
  async function fetchdata() {
    const res = await fetch("/api/room");
    const date = await res.json();
    setEntries(date);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  async function handleDelete(userId) {
    const res = await fetch("/api/room", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      fetchdata();
    } else {
      alert("Error: " + data.error);
    }
  }
  return (
    <>
      {!toaddroom ? (
        <div className="min-h-screen bg-gray-100 flex w-full items-center justify-center p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Room List
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-3 text-left">Room Number</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-left">For</th>
                    <th className="p-3 text-left">Details</th>
                    <th className="p-3 text-left">Price ($)</th>
                    <th className="p-3 text-left">Floor</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((room) => (
                    <tr
                      key={room.id}
                      className="border-b hover:bg-gray-100 text-black"
                    >
                      <td className="p-3 bg-amber-100">{room.roomNumber}</td>
                      <td className="p-3 bg-amber-200">{room.roomType}</td>
                      <td className="p-3 bg-amber-300">{room.roomFor}</td>
                      <td className="p-3 break-words whitespace-pre-wrap max-w-[200px] bg-amber-200">
                        {room.roomDetail}
                      </td>

                      <td className="p-3">${room.roomPrice}</td>
                      <td className="p-3">{room.roomFloor}</td>
                      <td className="p-3 flex space-x-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEdit(room)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                        >
                          Edit
                        </button>

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

            {/* Add Room Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setToaddrom(!toaddroom)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <AddRoom />
        </div>
      )}
    </>
  );
}
