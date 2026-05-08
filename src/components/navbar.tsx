import React from "react";
import MobileNav from "./mobile-nav";

const navbar = [
  { nav: "HOME", link: "" },
  { nav: "PRODUCTS", link: "" },
  { nav: "ABOUT US", link: "" },
  { nav: "SUBSCRIBE", link: "" },
];

export default function Navbar() {
  return (
    <>
      <MobileNav />
      <div className="w-full fixed z-100 bg-white px-[50px] py-[10px] flex justify-between items-center max-md:hidden  md:max-lg:hidden">
        <p className="font-[900] text-[18px] text-black">PERFUME STORE</p>

        <div className="flex justify-between items-center gap-[20px] ">
          {navbar.map((items, i) => (
            <span className="font-[700] text-[14px] text-[#000000]" key={i}>
              {items.nav}{" "}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-[20px]">
          <button className="rounded-[10px] p-[10px] bg-white border border-black">
            SIGN UP
          </button>
          <button className="rounded-[10px]  bg-blue-900 text-white px-[20px] py-[10px]">
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}
