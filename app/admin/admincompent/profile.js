"use client";

import { useState, useEffect } from "react";

export function Profiles() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    image: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [entries, setEntries] = useState([]);

  async function fetchdata() {
    const req = await fetch("/api/profile");
    const data = await req.json();
    setEntries(data);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("phone", profile.phone);
    formData.append("password", profile.password);
    if (profile.image) formData.append("image", profile.image); // Make sure image is only appended if selecteda
    const availabledata = await fetch("api/profile");
    const dataavailable = await availabledata.json();
    if (dataavailable.length > 0) {
      try {
        const res = await fetch("/api/profile", {
          method: "PUT",
          body: formData,
        });
        if (res.ok) {
          setProfile({
            name: "",
            email: "",
            phone: "",
            password: "",
            image: null, // Reset image as well
          });
          alert("Profile successfully updated!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      try {
        const res = await fetch("/api/profile", {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          setProfile({
            name: "",
            email: "",
            phone: "",
            password: "",
            image: null, // Reset image as well
          });
          alert("Profile successfully updated!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Profile Settings
        </h2>

        {/* Profile Image */}
        {/* Profile Image */}
        <div className="flex justify-center">
          <label htmlFor="imageUpload" className="cursor-pointer">
            {entries.length > 0 && entries[0].image ? (
              <img
                alt=""
                src={entries[0].image}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            onChange={(e) =>
              setProfile({ ...profile, image: e.target.files[0] })
            }
          />
        </div>

        {/* Name */}
        <div className="mt-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Phone Number */}
        <div className="mt-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Change Password */}
        <div className="mt-4">
          <label className="block text-gray-700">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              maxLength={8}
              placeholder="Enter new password"
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
}
