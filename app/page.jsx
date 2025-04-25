"use client";

import { useEffect, useState, useRef, useReducer } from "react";
import gsap from "gsap";
import Slider from "./homepage/index/silder";
import Footer from "./homepage/index/footer";
import Link from "next/link";
import Food from "./homepage/index/food";
import Navbar from "./homepage/index/navbar";
import Loader from "@/constants/loading";
import { team, descripiton, imagesideh } from "@/constants/item";
import Image from "next/image";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [aba, setAba] = useState(null);
  const [datarooms, setDatarooms] = useState([]);
  const [checkdate, setCheckdate] = useState({
    checkin: "",
    checkout: "",
    select: "Normal",
    roomtype: "",
  });
  const [sideindex, setSideindex] = useState(0);
  const sideref = useRef(null);
  const boxRef = useRef(null);
  const videoRef = useRef(null);
  const reviewRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("Observed entry:", entry); // 👈 Add this line
        if (entry.isIntersecting) {
          setIsVisible1(true);
        }
      },
      { threshold: 0.6 }
    );

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    // cleanup in case component unmounts early
    return () => {
      if (reviewRef.current) observer.unobserve(reviewRef.current);
    };
  }, []);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {}, []);
  // use reduce start
  const initialState = {
    date: [
      {
        review:
          "We wrap our content first withThen we define our . An application can have multiple . Our basic example only uses one.s can benested. The first has a path of / and renders the Layout component.The nested s inherit and add to the parent route. So thecomponent route does not have a path but has an index",
        image: "/image/hotels1.jpg",
      },
      {
        review:
          "We wrap our content first withThen we define our . An application can have multiple . Our basic example only uses one.s can benested. The first has a path of / and renders the Layout component.The nested s inherit and add to the parent route. So thecomponent route does not have a path but has an index",
        image: "/image/hotels2.jpg",
      },

      {
        review:
          "We wrap our content first withThen we define our . An application can have multiple . Our basic example only uses one.s can benested. The first has a path of / and renders the Layout component.The nested s inherit and add to the parent route. So thecomponent route does not have a path but has an index",
        image: "/image/hotels3.jpg",
      },
    ],
    index: 0,
  };

  const [state, dispatch] = useReducer(reduce, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const vlau = state.index;
  function reduce(state, action) {
    switch (action.type) {
      case "button1": {
        return { ...state, index: 0 };
      }
      case "button2": {
        return { ...state, index: 1 };
      }
      case "button3": {
        return { ...state, index: 2 };
      }
      default: {
        return "error";
      }
    }
  }
  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.0, ease: "power2.inOut" }
      );
    }
  }, [state.index]);

  async function fetchdata() {
    const res = await fetch("/api/room");
    const date = await res.json();
    setDatarooms(date);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  async function handleAvailable() {
    const nowdate = new Date();
    const checkindate = new Date(checkdate.checkin);
    const checkoutdate = new Date(checkdate.checkout);

    // Fix: The correct condition should use `&&` instead of `||`
    if (
      nowdate <= checkindate &&
      nowdate < checkoutdate &&
      checkindate <= checkoutdate
    ) {
      try {
        // availblety check by filster the data
        const aval = datarooms.filter(
          (num) =>
            num.tack === false &&
            num.roomFor === checkdate.select &&
            num.roomType === checkdate.roomtype
        ).length;
        setAba(aval);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching room data.");
      }
    } else {
      alert("Your chosen date is incorrect");
    }
  }
  // side header image and text controling part
  useEffect(() => {
    if (true) {
      const antext = sideref.current;
      switch (sideindex) {
        case 0:
          gsap.fromTo(
            antext,
            { y: "-100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 3,
              ease: "power3.out",
            }
          );
          break;
        case 1:
          gsap.fromTo(
            antext,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 3,
              ease: "power3.out",
            }
          );
          break;
        case 2:
          gsap.fromTo(
            antext,
            { x: "-100%", opacity: 0 },
            {
              x: "0%",
              opacity: 1,
              duration: 2,
              ease: "power3.out",
            }
          );
          break;
      }
    }
    const interval = setInterval(() => {
      setSideindex((prevIndex) => (prevIndex + 1) % imagesideh.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sideindex]);

  if (isLoading) return <Loader />;
  return (
    <div>
      <Navbar />
      <div className="w-full h-[600px] overflow-hidden relative font-bold">
        <div className="w-full h-[600px] overflow-hidden relative">
          <Image alt="" src={imagesideh[sideindex].image} />
          <p
            ref={sideref}
            className="absolute inset-0 flex items-center justify-center text-white text-[70px] font-bold"
          >
            {imagesideh[sideindex].text}
          </p>
        </div>
        <div className="w-[70%] flex justify-around items-center absolute bottom-[20px] left-[20px]">
          <ul className="w-[200px] p-2  justify-between items-center border-4 border-black rounded-2xl h-[80px] grid bg-gray-400">
            <label>CHECK IN</label>
            <input
              type="date"
              value={checkdate.checkin}
              onChange={(e) =>
                setCheckdate({ ...checkdate, checkin: e.target.value })
              }
              className="w-full border-2 border-gray-500 p-[5px] rounded-2xl"
            />
          </ul>
          <ul className="w-[200px] p-2  justify-between items-center border-4 border-black rounded-2xl h-[80px] grid bg-gray-400">
            <label>CHECK OUT</label>
            <input
              type="date"
              value={checkdate.checkout}
              onChange={(e) =>
                setCheckdate({ ...checkdate, checkout: e.target.value })
              }
              className="w-full border-2 border-gray-500 p-[5px] rounded-2xl"
            />
          </ul>
          <div className="w-[200px] justify-between items-center border-2 border-black text-black rounded-2xl h-[80px] grid p-2 bg-gray-400">
            <ul className="w-full flex gap-x-[20px]">
              <select
                value={checkdate.select}
                onChange={(e) =>
                  setCheckdate({ ...checkdate, select: e.target.value })
                }
              >
                <option value="Normal">Normal</option>
                <option value="Family">Family</option>
              </select>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </ul>
            <ul className="w-full flex gap-x-[20px]">
              <select
                value={checkdate.roomtype}
                onChange={(e) =>
                  setCheckdate({ ...checkdate, roomtype: e.target.value })
                }
              >
                <option value="Lexuery">Lexuery room</option>
                <option value="Regular">Regular room</option>
                <option value="VIP">VIP room</option>
              </select>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </ul>
          </div>
          <button
            className="w-[200px] h-[80px] bg-gray-900 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition-all"
            onClick={() => handleAvailable()}
          >
            Available
          </button>
        </div>
      </div>
      {aba && (
        <div className=" fixed grid top-[20px] right-[50px] z-100 bg-gray-900 text-white text-[20px] p-10 rounded-2xl h-[150px] w-[300px]">
          <p>we available {aba} room</p>
          <button
            onClick={() => setAba("")}
            className="max-w-full h-[40px] rounded-2xl text-[14px] bg-blue-500 text-white"
          >
            ok
          </button>
        </div>
      )}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="h-screen flex justify-center items-center bg-gray-400 w-full gap-10">
          <div
            className={`relative group transition-transform duration-[1500ms] ease-out transform text-white text-xl font-bold rounded-lg shadow-lg`}
          >
            <Image
              src="/image/hotel/hol2.jpeg"
              alt="image"
              className="h-[500px] w-[500px]"
            />

            {/* Ensure text and button are inside a div that is hidden by default */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg p-4 text-center">
                We wrap our content first with Then we define our. An
                application can have multiple
              </p>
              <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all">
                Reservation
              </button>
            </div>
          </div>
          <div
            className={`transition-transform duration-[1500ms] ease-out transform p-6 font-bold rounded-lg shadow-lg`}
          >
            <p className="w-[500px] text-[14px] text-justify scale-100 duration-[1000ms] hover:scale-115">
              We wrap our content first withThen we define our . An application
              can have multiple . Our basic example only uses one.s can be
              nested. The first has a path of / and renders the Layout
              component.The nested s inherit and add to the parent route. So the
              blogs path is combined with the parent and becomes /blogs. The
              Home component route does not have a path but has an index
              attribute. That specifies this route as the default route for the
              parent route, which is /. Setting the path to * will act as a
              catch-all for any undefined URLs. This is great for a 404 error
              page. We wrap our content first withThen we define our . An
              application can have multiple . Our basic example only uses one.s
              can be nested. The first has a path of / and renders the Layout
              component. page.The nested s inherit and add to the parent route.
              So the blogs path is combined with the parent and becomes /blogs.
              The Home component route does not have a path but has an index
              attribute. That specifies this route as the default route for the
              parent route, which is /. Setting the path to * will act as a
              catch-all for any undefined URLs. This is great for a 404 error
              page. We wrap our content first withThen we define our . An
              application can have multiple . Our basic example only uses one.s
              can be nested. The first has a path of / and renders the Layout
              component. page.
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <div className="relative ">
        <div
          className="absolute top-[50%] left-[50%] 
        transform -translate-y-1/2 -translate-x-1/2
         w-[60%] z-30 flex flex-col items-center"
        >
          <p className="text-center text-[40px] text-white">
            Book online today and look forward to a relaxing stay with us at
            best price !
          </p>
          <Link href="/homepage/service">
            <button className="bg-amber-900 text-white rounded-3xl p-[15px] hover:bg-amber-600">
              Online Booking
            </button>
          </Link>
        </div>
        <Image
          src="/image/hotel.jpg"
          alt="image"
          className="w-full h-[600px] opacity-60"
        />
      </div>
      <Food />
      <div className="flex bg-gray-400 my-[30px] p-[20px]">
        <div className="flex-1 p-[30px]">
          <p className=" text-black text-[40px] font-bold">
            why you choose our hotel?
          </p>
          <p className="text-black p-[40px] text-justify leading-[40px] font-bold">
            Experience unmatched comfort and personalized service in the heart
            of the city. Our hotel offers a perfect blend of luxury,
            affordability, and convenience. Enjoy modern amenities, spacious
            rooms, and a warm, welcoming atmosphere. We prioritize your peace of
            mind with top-notch cleanliness and 24/7 support. Whether you’re
            traveling for business or leisure, our hotel feels like home.
          </p>
        </div>
        <div className=" flex-1 relative group  overflow-hidden">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            style={{ width: "100%", height: "500px" }}
          >
            <source src="/video/videoplayback.webm" type="video/webm" />
          </video>
          <button
            onClick={handleTogglePlay}
            className="absolute opacity-0 top-1/2 left-[50%] transform -translate-x-[50%] -translate-y-1/2 bg-white/80 text-black px-4 py-2 rounded-full shadow-lg group-hover:opacity-100"
          >
            {isPlaying ? "⏸ Pause" : "▶️ Play"}
          </button>
        </div>
      </div>
      <p className="text-[40px] text-white bg-gray-400 p-[20px]">
        User Review Feedback
      </p>
      <div className="flex mb-4 bg-gray-400 text-white p-7 py-9 relative gap-x-[20px]">
        <div className="flex-1 relative flex flex-col p-4 justify-end items-start">
          <p className="text-justify text-[17px" ref={boxRef}>
            {state.date[vlau].review}
          </p>
          <div className="flex items-center flex-row gap-x-[10px] my-3">
            <Image
              alt=""
              src="/image/owner.jpg"
              className="w-[50px] h-[50px] rounded-full"
            />
            <p className="text-[20px] text-black">kamlakineh</p>
          </div>
          <div className=" flex flex-row gap-x-[10px]">
            <button
              onClick={() => dispatch({ type: "button1" })}
              className="flex text-[10px] justify-center items-center border-2 border-amber-900 opacity-50 hover:scale-120 hover:opacity-100 text-amber-950 rounded-full w-[30px] h-[30px]"
            >
              <p>0</p>
            </button>
            <button
              onClick={() => dispatch({ type: "button2" })}
              className="flex text-[10px] justify-center items-center border-2 border-amber-900 opacity-50 hover:scale-120 hover:opacity-100 text-amber-950 rounded-full w-[30px] h-[30px] text-center"
            >
              <p>0</p>
            </button>
            <button
              onClick={() => dispatch({ type: "button3" })}
              className="flex text-[10px] justify-center items-center border-2 border-amber-900 opacity-50 hover:scale-120 hover:opacity-100 text-amber-950 rounded-full w-[30px] h-[30px] text-center"
            >
              <p>0</p>
            </button>
          </div>
        </div>
        <Image
          alt=""
          src={state.date[vlau].image}
          className="w-[400px] h-[450px]"
        />
        <div
          ref={reviewRef}
          className="flex-1 flex flex-col justify-around relative right-[10px] text-black z-30"
        >
          <ul
            className={`transition-all duration-[4000ms] flex p-2 bg-gray-300 translate-x-[-14%] items-center ease-out gap-x-[10px] shadow-xl shadow-gray-800`}
          >
            <Image
              alt=""
              className="w-[70px] h-[70px]"
              src="/image/hotels1.jpg"
            />
            <p>Lorem id ipsum dolor sit amet, consectetur adipis</p>
          </ul>
          <ul
            className={`transition-all duration-[4000ms] flex p-2 bg-gray-300 translate-x-[-14%] items-center ease-out gap-x-[10px] shadow-xl shadow-gray-800`}
          >
            <Image
              alt=""
              className="w-[70px] h-[70px]"
              src="/image/hotels2.jpg"
            />
            <p>Lorem id ipsum dolor sit amet, consectetur adipis</p>
          </ul>
          <ul
            className={`transition-all duration-[4000ms] flex p-2 bg-gray-300 translate-x-[-14%] items-center ease-out gap-x-[10px] shadow-xl shadow-gray-800`}
          >
            <Image
              alt=""
              className="w-[70px] h-[70px]"
              src="/image/hotels3.jpg"
            />
            <p>Lorem id ipsum dolor sit amet, consectetur adipis</p>
          </ul>
        </div>
      </div>

      <div className="grid justify-center items-center bg-gray-400 p-8 mt-[20px]">
        <p className="text-[40px] font-bold text-center my-[20px]">
          Expert Team Persons
        </p>
        <div className="flex">
          {team.map((tem, i) => (
            <div
              key={i}
              className="flex-1 mx-[10px] text-black border-2 border-gray-900"
            >
              <Image
                alt=""
                className="h-[330px] hover:scale-[1.05]"
                src={tem.image}
              />
              <p className="text-[20px] font-bold my-[10px]">{tem.name}</p>
              <p>{tem.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 p-[100px]">
        {descripiton.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-3 shadow-xl shadow-gray-500"
          >
            <p className="bg-transparent border-4 shadow-2xl border-gray-900 text-4xl p-[20px] w-[90px]">
              {item.image}
            </p>
            <p className="text-2xl text-gray-600">{item.title}</p>
            <p className="text-gray-900 ">{item.descrip}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-4 w-full items-center bg-gray-600">
        <div className="w-full flex flex-col items-start ">
          <h1 className="text-xl text-white">contact us</h1>
          <button className="text-xl text-white cursor-pointer">
            Email:info@gmail.com
          </button>
          <button className="text-xl text-white cursor-pointer">
            Phone: +234 800 123 4567
          </button>
          <button className="text-xl text-white cursor-pointer">
            Address: 123 Main St, City, Country
          </button>
          <h2 className="text-xl text-white">
            Opening Hours: 2:00 pm - closeing:12:00 am
          </h2>
        </div>
        <iframe
          className="m-4 bg-amber-500 w-[160%] h-125"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80801.92438841387!2d39.20098638205667!3d8.573880227265466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b21eaaaaaaaab%3A0x51e1d46f04051fe9!2sAdama%20University!5e1!3m2!1sen!2set!4v1740771084854!5m2!1sen!2set"
          width="600"
          height="450"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
