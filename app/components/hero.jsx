"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between my-6 mx-4 md:mx-0">
        {/* Left Content Section */}
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap">
            <h1 className="text-4xl md:text-6xl bg-white rounded-xl p-3 mx-2 my-2 font-semibold">
              One{" "}
            </h1>
            <h1 className="text-4xl md:text-6xl bg-white rounded-xl p-3 mx-2 my-2 font-semibold">
              Stop
            </h1>
          </div>

          <h1 className="text-4xl md:text-6xl bg-white rounded-xl p-3 mx-2 my-2 w-[230px] md:w-[380px] font-semibold">
            Marketplace
          </h1>
          <div className="flex flex-row flex-wrap">
            <h1 className="text-4xl md:text-6xl bg-white rounded-xl p-3 mx-2 my-2 font-semibold">
              For
            </h1>
            <h1 className="text-4xl md:text-6xl bg-[#00DC82] rounded-xl p-3 mx-2 my-2 font-semibold">
              Influencers
            </h1>
          </div>
          <p className="text-lg md:text-4xl md:w-[582px] text-white font-semibold my-4 leading-7 md:leading-10">
            "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
            Merch, and Share Content – All in One Hub."
          </p>
          <div className="flex md:flex-row space-x-5 md:space-y-0 md:space-x-12">
            <button className="p-3 px-4 rounded-lg font-semibold bg-[#00DC82]">
              Demo Store
            </button>
            <button className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#be185d]">
              <div className="bg-[#181818] rounded-lg px-4 py-3">
                <span className="block text-left bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] to-[#be185d] font-semibold">
                  Join Waitlist
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex justify-center mt-6 md:mt-0">
          <Image
            src="/iamge.png"
            width={500}
            height={500}
            alt="Marketplace Illustration"
            
          />
        </div>
      </div>
    </>
  );
};
