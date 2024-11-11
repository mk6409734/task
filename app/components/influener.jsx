"use client";
import Image from "next/image";

export const Influence = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl tracking-wider text-[#00DC82] text-center">
          Our Influencers
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 my-5">
          <div className="flex flex-col items-center">
            <div className="md:bg-gradient-to-r from-[#06b6d4] to-[#be185d] group rounded-full relative">
              <Image
                src="/1.png"
                height={268}
                width={268}
                className="rounded-full h-[95.18px] w-[95.18px] md:h-[268px] md:w-[268px] duration-300 md:hover:-translate-y-4 md:hover:-translate-x-4 grayscale md:hover:grayscale-0"
                alt="user"
              />
              <button className="bg-white flex justify-between items-center absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 duration-300 opacity-0 md:group-hover:opacity-100 px-3 p-2 rounded-lg">
                <h1 className="font-bold mx-3">Samira</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Repeat for other images with similar styling */}
          <div className="flex flex-col items-center">
            <div className="md:bg-gradient-to-r from-[#06b6d4] to-[#be185d] group rounded-full relative">
              <Image
                src="/2.png"
                height={268}
                width={268}
                className="rounded-full h-[95.18px] w-[95.18px] md:h-[268px] md:w-[268px] duration-300 md:hover:-translate-y-4 md:hover:-translate-x-4 grayscale md:hover:grayscale-0"
                alt="user"
              />
              <button className="bg-white flex justify-between items-center absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 duration-300 opacity-0 md:group-hover:opacity-100 px-3 p-2 rounded-lg">
                <h1 className="font-bold mx-3">Samira</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="md:bg-gradient-to-r from-[#06b6d4] to-[#be185d] group rounded-full relative">
              <Image
                src="/3.png"
                height={268}
                width={268}
                className="rounded-full h-[95.18px] w-[95.18px] md:h-[268px] md:w-[268px] duration-300 md:hover:-translate-y-4 md:hover:-translate-x-4 grayscale md:hover:grayscale-0"
                alt="user"
              />
              <button className="bg-white flex justify-between items-center absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 duration-300 opacity-0 md:group-hover:opacity-100 px-3 p-2 rounded-lg">
                <h1 className="font-bold mx-3">Samira</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="md:bg-gradient-to-r from-[#06b6d4] to-[#be185d] group rounded-full relative">
              <Image
                src="/4.jpeg"
                height={268}
                width={268}
                className="rounded-full h-[95.18px] w-[95.18px] md:h-[268px] md:w-[268px] duration-300 md:hover:-translate-y-4 md:hover:-translate-x-4 grayscale md:hover:grayscale-0"
                alt="user"
              />
              <button className="bg-white flex justify-between items-center absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 duration-300 opacity-0 md:group-hover:opacity-100 px-3 p-2 rounded-lg">
                <h1 className="font-bold mx-3">Samira</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
