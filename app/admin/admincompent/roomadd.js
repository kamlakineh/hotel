import React, { useState } from "react";

export function AddRoom() {
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "Lexuery",
    roomFor: "Family",
    roomDetail: "",
    roomPrice: "",
    roomFloor: "",
  });

  // Separate state for files
  const [files, setFiles] = useState({
    roomImage1: null,
    roomImage2: null,
    roomImage3: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roomData = new FormData();
    roomData.append("roomNumber", formData.roomNumber);
    roomData.append("roomType", formData.roomType);
    roomData.append("roomFor", formData.roomFor);
    roomData.append("roomDetail", formData.roomDetail);
    roomData.append("roomPrice", formData.roomPrice);
    roomData.append("roomFloor", formData.roomFloor);
    roomData.append("roomImage1", files.roomImage1);
    roomData.append("roomImage2", files.roomImage2);
    roomData.append("roomImage3", files.roomImage3);

    try {
      const res = await fetch("/api/room", {
        method: "POST",
        body: roomData,
      });

      if (res.ok) {
        // Reset form after success
        setFormData({
          roomNumber: "",
          roomType: "Lexuery",
          roomFor: "Family",
          roomDetail: "",
          roomPrice: "",
          roomFloor: "",
        });
        setFiles({
          roomImage1: null,
          roomImage2: null,
          roomImage3: null,
        });
        alert("Room added successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange = (e, imageKey) => {
    setFiles((prev) => ({
      ...prev,
      [imageKey]: e.target.files[0],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center w-full justify-center p-6 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Room</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Room Number</label>
                <input
                  type="text"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, roomNumber: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Room For</label>
                <select
                  name="roomFor"
                  value={formData.roomFor}
                  onChange={(e) =>
                    setFormData({ ...formData, roomFor: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md"
                >
                  <option value="Family">Family</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Room Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={(e) =>
                    setFormData({ ...formData, roomType: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md"
                >
                  <option value="Lexuery">Lexuery room</option>
                  <option value="Regular">Regular room</option>
                  <option value="VIP">VIP room</option>
                </select>
              </div>

              <div>
                <label className="block font-medium">Room Detail</label>
                <textarea
                  name="roomDetail"
                  value={formData.roomDetail}
                  onChange={(e) =>
                    setFormData({ ...formData, roomDetail: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md h-24"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Room Price</label>
                <input
                  type="number"
                  name="roomPrice"
                  value={formData.roomPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, roomPrice: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Floor Number</label>
                <input
                  type="number"
                  name="roomFloor"
                  value={formData.roomFloor}
                  onChange={(e) =>
                    setFormData({ ...formData, roomFloor: e.target.value })
                  }
                  className="w-full border-2 border-black p-2 rounded-md"
                  required
                />
              </div>

              {[1, 2, 3].map((num) => (
                <div key={num}>
                  <label className="block font-medium">Room Image {num}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, `roomImage${num}`)}
                    className="w-full border-2 border-black p-2 rounded-md"
                    required
                  />
                  {files[`roomImage${num}`] && (
                    <span className="text-sm text-gray-500">
                      Selected: {files[`roomImage${num}`].name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-6"
          >
            Save Room
          </button>
        </form>
      </div>
    </div>
  );
}
