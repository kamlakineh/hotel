"use client";
import Footer from "./../index/footer";
import Navbar from "./../index/navbar";
import Loader from "@/constants/loading";
import { useState, useEffect } from "react";
export default function IndexLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <Loader />;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
