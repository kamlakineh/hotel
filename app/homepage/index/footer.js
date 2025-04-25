export default function Footer() {
  return (
    <div>
      <footer className="grid md:flex bg-gray-950 text-white justify-evenly items-center py-[50px]">
        <div className="w-[450px]">
          <p className="text-[28px]">ketha</p>
          <p>
            Best hotels and design experiences in the world of hotels and
            resorts. We are committed to providing our guests with the best
            possible services and amenities. We strive to create a memorable and
            enjoyable experience for our guests. We are dedicated to helping our
            guests find the perfect hotel, room, or experience. We are committed
            to providing our guests with the best possible services and
            amenities. We strive to create a memorable and enjoyable experience
            for our guests.
          </p>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <button className="text-xl text-white cursor-pointer">
            Terms & Conditions
          </button>
          <button className="text-xl text-white cursor-pointer">
            Privacy Policy
          </button>
          <button className="text-xl text-white cursor-pointer">FAQs</button>
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <button className="text-xl text-white cursor-pointer">
            About us
          </button>
          <button className="text-xl text-white cursor-pointer">
            Contact Us
          </button>
          <button className="text-xl text-white cursor-pointer">Press</button>
          <button className="text-xl text-white cursor-pointer">Careers</button>
          <button className="text-xl text-white cursor-pointer">Blog</button>
          <button className="text-xl text-white cursor-pointer">
            Affiliate Program
          </button>
        </div>
        <div className="h-full items-start justify-between flex flex-col gap-y-[10px]">
          <p>Address</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Email: info@gmail.com</p>
          <p>Website: www.ketha.com</p>
          <p>Social Media</p>
          <p>Cookie Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
      <p className="text-center text-black text-[15px]">
        All rights reserved © 2023 ketha
      </p>
    </div>
  );
}
