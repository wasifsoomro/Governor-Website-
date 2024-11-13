import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-custom-image bg-opacity-75 pt-24 flex min-h-screen bg-cover z-10 overflow-hidden relative font-poppins items-center justify-center">
      <div className="flex bg-opacity-80 bg-zinc-100 absolute inset-0 -z-50"></div>
      <div className="flex flex-row justify-between items-center">
        <div className=" text-black h-fit mt-20 text-5xl py-10 w-1/2 ml-72">
          <h1 className="text-6xl  text-[#044e83] font-extrabold whitespace-nowrap">
            Governor Sindh
          </h1>
          <h1 className="text-3xl text-[#044e83] font-normal tracking-wider whitespace-nowrap">
            Kamran Khan Tessori
          </h1>
          <h1 className="text-[#2eb6e8] font-semibold mt-5 ">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </h1>
          <p className="text-[#044e83] font-extrabold text-2xl my-5 whitespace-nowrap">
            Earn up to $5000 / month
          </p>
          <p className="text-[#044e83] font-extrabold text-2xl tracking-wider my-5 whitespace-nowrap">
            Now Admission are open in Hyderabad
          </p>
          <div className="flex flex-row gap-10 items-center mt-16">
            <button className="bg-custom-blue text-white w-auto p-3 px-10 rounded-[10px] font-semibold text-[1.25rem]">
              <Link href="/apply" />
              Apply Now
            </button>
            <div>
              <div className="flex flex-col text-center">
                <div className=" font-extrabold text-custom-blue text-3xl tracking-wider">
                  562, 143
                </div>
              </div>
              <div className="text-center text-xl tracking-wider text-custom-blue">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>
        <div className="ml-32">
          <Image
            src="/Kamran-tessori.png"
            alt="profile"
            width={900}
            height={500}
            className="h-auto min-w-[900px] "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
