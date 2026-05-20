"use client";
import { useState } from "react";
import {
  LuZap,
  LuChartCandlestick,
  LuSparkles,
  LuEye,
  LuEyeOff,
  LuArrowRight,
} from "react-icons/lu";

function Page() {
  const [register, setRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-div w-full min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center px-20 gap-10 ">
        <h1 className="text-[45px] text-white font-bold">
          The professional booking <br />
          platform for <br />
          <span className="text-[#FF6206]">HGV brake testing</span>
        </h1>

        <ul className="flex flex-col gap-8">
          <li className="flex gap-5">
            <LuZap className="w-12.5 h-12.5 text-[#FF6206] bg-white/10 p-2 rounded-xl" />
            <div className="text-white">
              <p className="text-[20px] font-bold">DVSA-aligned compliance</p>
              <p className="text-[16px]">
                Track DTP codes, axle counts, and test due dates.
              </p>
            </div>
          </li>

          <li className="flex gap-5">
            <LuChartCandlestick className="w-12.5 h-12.5 text-[#FF6206] bg-white/10 p-2 rounded-xl" />
            <div className="text-white">
              <p className="text-[20px] font-bold">Built for fleets</p>
              <p className="text-[16px]">
                Manage every vehicle and trailer from one dashboard.
              </p>
            </div>
          </li>

          <li className="flex gap-5">
            <LuSparkles className="w-12.5 h-12.5 text-[#FF6206] bg-white/10 p-2 rounded-xl" />
            <div className="text-white">
              <p className="text-[20px] font-bold">Instant booking</p>
              <p className="text-[16px]">
                Live availability across 200+ UK test centers.
              </p>
            </div>
          </li>
        </ul>

        <p className="text-white">© 2026 BrakeSafeHGV Ltd.</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side relative w-[45vw] h-screen bg-white shadow-2xl z-10 overflow-hidden rounded-[10%_0%_0%_10%/50%_0_0_50%]">
        {/* 🔶 Orange Side Element */}
        {/* <div className="orange-div" /> */}
        <svg
          className="absolute -left-7 top-0"
          xmlns="http://www.w3.org/2000/svg"
          width="111"
          height="full"
          viewBox="0 0 111 937"
          fill="none"
        >
          <path
            d="M99.4642 -0.739948C-34.9064 410.424 50.6438 813.863 110.215 964.188C81.3823 942.06 56.1779 891.056 47.1798 868.321C11.3374 801.666 -6.08419 621.03 -10.3147 539.043C-11.3008 450.532 -7.56572 249.894 15.2642 155.435C38.094 60.9754 80.91 11.9602 99.4642 -0.739948Z"
            fill="#FF6206"
          />
        </svg>
        {/* Content */}
        <div className="relative p-8 pl-12 z-10 flex items-start justify-center flex-col gap-[32]">
          {/* logo and button div */}
          <div className="flex items-center w-full justify-between">
            {/* logo */}
            <div className="flex items-center justify-center gap-[10.56]">
              <img src="./logo.png" alt="logo" />
              <div className="text-[27.7px] font-normal">
                <p className="text-[#001E47]">
                  BrakeSafe <span className="text-[#FF6206]">HGV</span>
                </p>
                <p className="text-[10px] text-[#001E47]">
                  HGV brake test booking portal
                </p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex bg-gray-200 p-1 rounded-lg w-fit relative">
              {/* sliding background */}
              <div
                className={`absolute top-1 bottom-1 w-24 rounded-md bg-[#001E47] transition-all duration-300 ease-in-out ${
                  register ? "left-24" : "left-1"
                }`}
              />

              <button
                onClick={() => setRegister(false)}
                className={`relative z-10 h-11.25 w-24 rounded-lg transition-all duration-200 ${
                  !register ? "text-white scale-105" : "text-[#4A4A4A]"
                }`}
              >
                Log In
              </button>

              <button
                onClick={() => setRegister(true)}
                className={`relative z-10 h-11.25 w-24 rounded-lg transition-all duration-200 ${
                  register ? "text-white scale-105" : "text-[#4A4A4A]"
                }`}
              >
                Register
              </button>
            </div>
          </div>
          {/* welcome div */}
          <div>
            <h2 className="text-[#1E1E1E] text-[32px] font-semibold">
              Welcome back
            </h2>
            <p className="text-[#4A4A4A] text-[16px] font-semibold  ">
              Sign in to access your dashboard
            </p>
          </div>
          {/* form */}
          <form className="w-full flex items-start gap-4.75 justify-center flex-col ">
            {/* email */}
            <div className="w-full">
              <label className="text-[#4A4A4A]">Email</label>
              <input
                type="text"
                className="w-full text-[14px] px-4.75 h-12.5 bg-[#F7F7F7] rounded-xl border border-[#E3DBDB] 
  focus:outline-none focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>
            {/* Password */}
            <div className="w-full">
              <label className="text-[#4A4A4A]">Password</label>
              <div className="flex items-center w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full text-[14px] px-4 h-12 bg-[#F7F7F7] border border-[#E3DBDB] rounded-l-xl focus:outline-none focus:border-orange-500"
                  placeholder="Enter Password"
                />

                {showPassword ? (
                  <LuEye
                    onClick={() => setShowPassword(false)}
                    className="h-12 w-10 p-2 bg-[#F7F7F7] border border-l-0 border-[#E3DBDB] rounded-r-xl cursor-pointer text-[20px]"
                  />
                ) : (
                  <LuEyeOff
                    onClick={() => setShowPassword(true)}
                    className="h-12 w-10 p-2 bg-[#F7F7F7] border border-l-0 border-[#E3DBDB] rounded-r-xl cursor-pointer text-[20px]"
                  />
                )}
              </div>
            </div>
            {/* forgot button */}
            <div className="w-full flex items-center justify-end ">
              <button className="text-[#001E47] text-[16px] font-semibold">
                Forgot Password?
              </button>
            </div>
            {/* login button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#FF6206] text-white py-3 rounded-xl"
            >
              Sign In <LuArrowRight />
            </button>
          </form>
          <div className="w-full flex items-center justify-center gap-2">
            <p className="text-[#4A4A4A]">Are you a testing centre?</p>
            <button className="text-[#001E47] text-[16px] font-semibold">
              Sign In Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
