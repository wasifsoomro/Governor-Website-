import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="flex m-[20px] gap-10">
        <div className="w-1/2 h-96 bg-gray-600">
          <Image
            src="/card-image1.jpg"
            alt="card1"
            width={800} // Adjusted to match display size
            height={400} // Adjusted to match display size
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-96 bg-gray-600">
          <Image
            src="/card-image2.jpg"
            alt="card2"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex md:grid-cols-2 gap-3 m-20">
        <div className="w-1/2 h-96 bg-gray-600">
          <Image
            src="/card-image3.jpg"
            alt="card3"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-96 bg-gray-600">
          <Image
            src="/card-image4.jpg"
            alt="card4"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-96 bg-gray-600">
          <Image
            src="/card-image5.jpg"
            alt="card5"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
