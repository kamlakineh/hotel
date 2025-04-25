import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Slider() {
  const [indexs, setIndexs] = useState(0);
  const [datarooms, setDatarooms] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null); // Track hover state for each item

  useEffect(() => {
    const datafetching = async () => {
      try {
        const res = await fetch("/api/room");
        const data = await res.json();
        console.log("Fetched data:", data); // For debugging
        setDatarooms(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    datafetching();
  }, []);

  const prevSlide = () => {
    setIndexs(
      (prevIndexs) => (prevIndexs - 1 + datarooms.length) % datarooms.length
    );
  };

  const nextSlide = () => {
    setIndexs((prevIndexs) => (prevIndexs + 1) % datarooms.length);
  };

  return (
    <div className="bg-gray-500 my-5">
      <h1 className="text-[40px] font-bold text-black text-center p-8">
        Our Services
      </h1>
      <p className="text-[18px] text-black text-center w-4/5 mx-auto py-4">
        Single, Double, and Triple Bedrooms are generous in size and appealing
        to the eye. The accommodations at Hotel Baraka are sure to please. Our
        bright, spacious, and well-appointed guest rooms offer a variety of
        floor plans with two to three single beds or queen beds.
      </p>

      <div className="flex w-full relative h-auto justify-between p-5">
        {/* SLIDE ITEMS */}
        {datarooms.length > 0 &&
          Array(3)
            .fill()
            .map((_, i) => {
              const slideIndex = (indexs + i) % datarooms.length;
              const room = datarooms[slideIndex];

              return (
                <div
                  key={slideIndex}
                  className="relative overflow-hidden inset-0 w-[500px] h-80"
                  onMouseEnter={() => setHoverIndex(slideIndex)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {/* First Image */}
                  <Image
                    src={room.roomImage1}
                    alt="image1"
                    className="w-full h-full object-cover p-5"
                  />

                  {/* Second Image (Animated Transition) */}
                  <div
                    className={`absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center 
                    transition-transform duration-700 ease-in-out p-5
                    ${
                      hoverIndex === slideIndex
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <Image
                      src={room.roomImage2}
                      alt="image2"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Name */}
                  <Link href="/homepage/service">
                    <button className="absolute cursor-pointer bottom-0 left-0 w-[40%] justify-self-center text-white text-center text-xl bg-gray-900 bg-opacity-70 m-4 py-4">
                      {room.roomType}
                    </button>
                  </Link>
                </div>
              );
            })}

        {/* NAVIGATION BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute top-[50%] left-[20px] transform -translate-y-1/2 font-bold text-4xl text-gray-600 p-3 bg-white rounded-full shadow-md hover:bg-gray-300 transition"
        >
          prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[50%] right-[20px] transform -translate-y-1/2 font-bold text-4xl text-gray-600 p-3 bg-white rounded-full shadow-md hover:bg-gray-300 transition"
        >
          next
        </button>
      </div>
    </div>
  );
}
