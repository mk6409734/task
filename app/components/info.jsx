"use client";

import Image from "next/image";

export const Info = () => {
  return (
    <>
      <div className="flex md:flex-col flex-col lg:flex-row justify-between items-center md:my-10">
        <div>
          <h1 className="text-[#00DC82] lg:text-5xl md:text-3xl text-2xl text-center font-bold md:leading-[55px] mb-6 md:m-0 max-w-[438px]">
            From Creation to Monetization: Vyb Store Has It All
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[366px] w-[355px] p-4 flex flex-col justify-around items-center bg-black rounded-3xl text-center text-white">
              <p className="font-bold text-3xl">Trusted By Influencers</p>
              <p className="text-xl">
                A trusted platform for influencers to grow and earn.
              </p>
              <Image
                src="/d.png"
                className=""
                height={160}
                width={190}
                alt="user"
              />
            </div>

            <div className="h-[325px] w-[355px]  p-4 flex flex-col justify-around items-center bg-black rounded-3xl text-center text-white">
              <p className="font-bold text-3xl">Secured Data</p>
              <p className="text-xl">
                Advanced security measures to protect your valuable data
              </p>
              <Image
                src="/c.png"
                className=""
                height={160}
                width={190}
                alt="user"
              />
            </div>
            <div className="h-[366px] w-[355px] p-4  flex flex-col justify-around items-center bg-black rounded-3xl text-center text-white">
              <p className="font-bold text-3xl">Authentic Payment Partner</p>
              <p className="text-xl">
                Reliable, fast, and secure payments you can trust
              </p>
              <Image
                src="/a.png"
                className=""
                height={160}
                width={190}
                alt="user"
              />
            </div>
            <div className="h-[325px] w-[355px] p-4 md:-mt-8 flex flex-col justify-around items-center bg-black rounded-3xl text-center text-white">
              <p className="font-bold text-3xl">Monetize Your Influence</p>
              <p className="text-xl">
                Seamlessly turn your influence into consistent revenue
              </p>
              <Image
                src="/b.png"
                className=""
                height={160}
                width={190}
                alt="user"
              />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
  
};
