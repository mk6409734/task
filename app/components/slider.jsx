"use client";
import "../globals.css";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z
  .string()
  .email({ message: "Invalid email address" })
  // .nonempty({ message: "Email is required" });

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  // .nonempty({ message: "Password is required" });

export const Slider = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errors, setErrors] = useState({ email: "", password: "" });

     const handleFormSubmit = (e) => {
       e.preventDefault();

       // Validate email
       const emailValidation = emailSchema.safeParse(email);
       const passwordValidation = passwordSchema.safeParse(password);

       if (!emailValidation.success || !passwordValidation.success) {
         setErrors({
           email: emailValidation.success
             ? ""
             : emailValidation.error.issues[0].message,
           password: passwordValidation.success
             ? ""
             : passwordValidation.error.issues[0].message,
         });
       } else {
         // Clear errors and proceed
         setErrors({ email: "", password: "" });
         console.log("Form data:", email, password);
       }
     };

  return (
    <>
      <div className="sm:ml-12 ml-5 lg:m-0 md:m-0">
        <h1 className="font-bold text-3xl tracking-wider text-[#00DC82] text-center my-8">
          How to get started?
        </h1>
        <div className="" id="cards">
          <div
            id="card1"
            className="card flex flex-col md:flex-row justify-around items-center text-white bg-[#A94949] rounded-3xl h-[378px] w-[320px] md:w-[840px] md:h-[377px] md:mx-auto"
          >
            <div className="">
              <h1 className="font-bold w-[288px] mx-auto md:w-[340px] text-base md:text-2xl mb-5">
                Sign Up and create your own store hassle-free.
              </h1>
              <p className="w-[288px] md:w-[340px] text-sm">
                Join us via google signin and verify your influencer status by
                entering you social media Id and unlock your store @ zero cost.
              </p>
            </div>
            <div className="flex flex-col justify-around text-center items-center w-[155px] h-[223px] md:w-[212px] md:h-[305px] bg-black rounded-2xl">
              <div>
                <button className="border border-gray-300 flex md:text-base text-xs items-center  p-1 md:p-2 rounded-lg gap-1 px-3">
                  <Image src="/google.png" width={15} height={15} alt="png" />
                  Login with google
                </button>
              </div>
              <div className="md:w-[180px] w-[140px] h-[2px] bg-gray-300 mb-2 -mt-2">
                <h1 className="text-sm text-gray-300">OR</h1>
              </div>
              <div>
                <form onSubmit={handleFormSubmit}>
                  <label className="font-bold relative" htmlFor="email">
                    <input
                      onChange={(e) => setemail(e.target.value)}
                      className="border-b duration-200 peer border-[#A8A8A8] bg-black outline-none w-[140px] md:w-[180px] mb-3 md:mb-10"
                      type="email"
                      name="email"
                    />
                    <span className="absolute left-0 md:bottom-4 md:right-[10px] md:text-base text-sm pointer-events-none duration-200 md:peer-focus:-translate-y-4 md:peer-focus:-translate-x-16 peer-focus:-translate-x-12">
                      Email
                    </span>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 md:-mt-5">
                        {errors.email}
                      </p>
                    )}
                  </label>
                  <label className="font-bold relative" htmlFor="password">
                    <input
                      onChange={(e) => setpassword(e.target.value)}
                      className="border-b duration-200 peer border-[#A8A8A8] bg-black outline-none w-[140px] md:w-[180px]"
                      type="password"
                      name="password"
                    />
                    <span className="absolute left-0  md:bottom-4 md:right-[10px] md:text-base text-sm pointer-events-none duration-200 md:peer-focus:-translate-y-4 md:peer-focus:-translate-x-16 peer-focus:-translate-x-16">
                      Password
                    </span>
                    {errors.password && (
                      <p className="text-red-500 text-xs ">
                        {errors.password}
                      </p>
                    )}
                  </label>

                  <button
                    type="submit"
                    className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#be185d] mt-3"
                  >
                    <div className="bg-[#181818] rounded-lg px-4 py-2">
                      <span className="block text-left bg-clip-text text-xs md:text-sm text-transparent bg-gradient-to-r from-[#06b6d4] to-[#be185d] font-semibold">
                        Login
                      </span>
                    </div>
                  </button>
                  <div className="p-1 my-1">
                    <p className="text-[#A8A8A8] text-xs">
                      Don’t have an account?{" "}
                      <span className="text-[#00DC82] text-xs">
                        Get Started
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            id="card2"
            className="card rotate-1 flex-col flex md:flex-row justify-around items-center text-white bg-[#5ED46A] rounded-3xl h-[378px] w-[320px] md:w-[840px] md:h-[377px] md:mx-auto"
          >
            <div>
              <h1 className="font-bold w-[288px] mx-auto md:w-[340px] text-base md:text-2xl mb-5">
                "Monetize your influencer status: Earn money adding real value
                to your true followers!"
              </h1>
              <p className="w-[288px] md:w-[340px] text-sm">
                Let VYB the money now !! Its here and widthdraw it periodically.
              </p>
            </div>
            <div>
              <Image src="/2a.png" width={240} height={240} alt="" />
            </div>
          </div>
          <div
            id="card3"
            className="card rotate-2 flex flex-col md:flex-row justify-around items-center text-white bg-[#487FD7] rounded-3xl h-[378px] w-[320px] md:w-[840px] md:h-[377px] md:mx-auto"
          >
            <div>
              <h1 className="font-bold w-[288px] mx-auto md:w-[340px] text-base md:text-2xl mb-5">
                Call audience to your store. Easily integrate links into
                content.
              </h1>
              <p className="w-[288px] md:w-[340px] text-sm">
                After setting up your products, its time to go public. Put your
                store link in insta bio and lets make first post together !
              </p>
            </div>
            <div>
              <Image src="/3b.png" width={240} height={240} alt="" />
            </div>
          </div>
          <div
            id="card4"
            className="card -rotate-2 flex flex-col md:flex-row justify-around items-center text-white bg-[#5CAAB6] rounded-3xl h-[378px] w-[320px] md:w-[840px] md:h-[377px] md:mx-auto"
          >
            <div>
              <h1 className="font-bold w-[288px] mx-auto md:w-[340px] text-base md:text-2xl mb-5">
                Build & customize your store front.
              </h1>
              <p className="w-[288px] md:w-[340px] text-sm">
                Simply fill in the details to build your digital store. Once
                done, start selling your products to your audience.
              </p>
            </div>
            <div>
              <Image src="/4c.png" width={100} height={100} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
