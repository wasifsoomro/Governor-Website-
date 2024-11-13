"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false)

function toggleMenu(){
  setMenuOpen((prevState) => !prevState)
}

  return (
    <header className="bg-custom-blue flex justify-center gap-32 items-center w-full fixed z-30 top-0 py-4">
      <div className="mb-[-80px] mt-4">
        <Image
          src="/Governor-logo.png"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
      <div className="text-[#b9d8f3] font-extrabold text-[1.4rem] text-shadow hidden lg:block">
        Tuition Free Education Program on Latest Technologies
      </div>
      <div className="text-[#b9d8f3] font-extrabold text-[1.1rem] text-shadow lg:hidden ">
        Tution Free Program
      </div>

      
      <div
        className="flex flex-col justify-between cursor-pointer w-[30px] h-[24px] mr-4 md:hidden"
        onClick={toggleMenu}
      >
        <span className="h-[3px] w-full bg-white transition-all"></span>
        <span className="h-[3px] w-full bg-white transition-all"></span>
        <span className="h-[3px] w-full bg-white transition-all"></span>
      </div>

      
      
      <div className={`fixed top-0 h-screen w-full bg-custom-blue text-white z-30 p-10 transform transition-transform duration-300${menuOpen ? 'hidden translate-x-0' : 'block md:hidden translate-x-full'} ` }>
      <div
          className="text-white cursor-pointer ml-[350px]  mb-6 md:hidden hover:text-red-600"
          onClick={toggleMenu}
        >
          &#10005;
        </div>
        <ul className="flex flex-col justify-between gap-7">
          <li><Link href="/">Home</Link><div className="border-b-2 border-[#1468a5] mt-6 opacity-[0.4]"></div></li>
          <li><Link href="/apply">Apply</Link><div className="border-b-2 border-[#1468a5] mt-6 opacity-[0.4]"></div></li>
          <li><Link href="/jobs">Jobs</Link><div className="border-b-2 border-[#1468a5] mt-6 opacity-[0.4]"></div></li>
          <li><Link href="/result">Result</Link><div className="border-b-2 border-[#1468a5] mt-6 opacity-[0.4]"></div></li>
          <li>
          <button className="flex items-center gap-2">
        <span>Courses</span>
        <span>
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10l5 5 5-5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        </button>
          </li>
        </ul>
        
      </div>


      <div className=" hidden md:flex gap-7 ">
        <ul className="flex justify-between gap-7">
        <li><Link href="/">Home</Link></li>
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/result">Result</Link></li>
        </ul>
        <button className="flex items-center gap-2">
        <span>Courses</span>
        <span>
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10l5 5 5-5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
