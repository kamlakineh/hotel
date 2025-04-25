"use client";

import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Donut Chart Options
const donutOptions = {
  chart: { type: "pie" },
  colors: ["blue", "red", "rgba(255,45,55,0.4)", "yellow"],
  labels: ["Room 1", "Room 2", "Room 3", "Room 4"],
  legend: {
    labels: {
      colors: "orange",
    },
  },
};

const donutData = [30, 40, 50, 100];

// Bar Chart for Room Bookings
const barOptions = {
  chart: {
    type: "bar",
    stacked: true,
  },
  colors: ["blue", "green"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderColor: "black",
      borderWidth: 2,
      columnWidth: "45%",
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: { style: { colors: "orange" } },
    title: { text: "Days of the Week" },
  },
  yaxis: {
    title: { text: "Room Booked / Unbooked" },
  },
};

const barData = [
  { name: "Booked", data: [20, 30, 12, 55, 60, 80, 40] },
  { name: "Unbooked", data: [50, 60, 62, 95, 80, 100, 50] },
];

// Customer Type Chart Options
const customerOptions = {
  chart: { type: "bar" },
  colors: ["red", "gray"],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    title: { text: "Customer Type (Loyal / New)" },
    labels: { style: { colors: "white" } },
  },
  yaxis: {
    title: { text: "Customer Count per Day" },
    labels: { style: { colors: "white" } },
  },
};

const customerData = [
  { name: "Loyal", data: [40, 50, 30, 10, 22, 80, 77] },
  { name: "New", data: [60, 50, 70, 90, 78, 20, 23] },
];

// Main Component
export function Index() {
  return (
    <div className="w-full p-4 grid gap-y-6">
      {/* Top Charts */}
      <div className="flex w-full h-[340px] bg-gray-400 mb-6 p-4 rounded-2xl">
        <div className="flex-1 h-[300px]">
          <Chart
            options={donutOptions}
            series={donutData}
            type="pie"
            height={300}
          />
        </div>
        <div className="flex-1">
          <Chart
            options={barOptions}
            series={barData}
            type="bar"
            height={300}
          />
        </div>
      </div>

      {/* Metrics and Customer Chart */}
      <div className="flex gap-4">
        {/* Revenue Stats */}
        <div className="grid gap-4">
          {/* This Month Revenue */}
          <div className="bg-gray-400 p-4 rounded-2xl">
            <p>
              <strong>Revenue</strong> | This Month
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="font-bold w-[60px] h-[60px] text-xl flex justify-center items-center rounded-full bg-green-400 text-white">
                $
              </div>
              <div>
                <p>$300</p>
                <p>8% increase</p>
              </div>
            </div>
          </div>
          {/* This Year Revenue */}
          <div className="bg-gray-400 p-4 rounded-2xl">
            <p>
              <strong>Revenue</strong> | This Year
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="font-bold w-[60px] h-[60px] text-xl flex justify-center items-center rounded-full bg-green-400 text-white">
                $
              </div>
              <div>
                <p>$3,600</p>
                <p>15% increase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid gap-4">
          {/* This Month Customers */}
          <div className="bg-gray-400 p-4 rounded-2xl">
            <p>
              <strong>Customers</strong> | This Month
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="font-bold w-[60px] h-[60px] text-xl flex justify-center items-center rounded-full bg-green-400 text-white">
                🧑🏻‍💼
              </div>
              <div>
                <p>300</p>
                <p>12% increase</p>
              </div>
            </div>
          </div>
          {/* This Year Customers */}
          <div className="bg-gray-400 p-4 rounded-2xl">
            <p>
              <strong>Customers</strong> | This Year
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="font-bold w-[60px] h-[60px] text-xl flex justify-center items-center rounded-full bg-green-400 text-white">
                🧑🏻‍💼
              </div>
              <div>
                <p>3,500</p>
                <p>10% increase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Chart */}
        <div className="flex-1 bg-gray-400 p-4 rounded-2xl">
          <Chart
            options={customerOptions}
            series={customerData}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
