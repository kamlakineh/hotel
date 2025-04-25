import Image from "next/image";
export default function Food() {
  return (
    <div className="bg-gray-500 py-[30px] my-[20px]">
      <div className=" grid  items-center w-full">
        <div className="flex justify-end relative my-[20px] mr-[50px]">
          <div className="bg-gray-400  absolute top-[30%] left-[10%] p-15 rounded-3xl z-40">
            <p className="text-[60px] font-bold text-black">our foods</p>
            <p className="w-[400px] text-justify text-[17px] text-black">
              Our system includes a real-time kitchen queue that uses
              motion-based updates to track each customer&apos;s order from
              placement to delivery
            </p>
          </div>
          <Image
            alt=""
            width={800}
            height={700}
            className="hover:scale-[1.05]"
            src="/image/food.webp"
          />
        </div>
      </div>
    </div>
  );
}
