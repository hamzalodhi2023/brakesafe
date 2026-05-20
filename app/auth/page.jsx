import React from "react";
import {
  LuZap,
  LuChartCandlestick,
  LuSparkles,
  LuEye,
  LuArrowRight,
} from "react-icons/lu";

function Page() {
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
      <div className="relative w-[45vw] h-screen bg-white   shadow-2xl z-10 overflow-hidden">
        {/* 🔶 Orange Side Element */}
        <div className="absolute top-0 l  eft-0 h-full w-62 bg-orange-500 rounded-[0%_10%_10%_0%/0%_50%_50%_0%]" />

        {/* Content */}
        <div className="relative p-8 z-10 border flex items-start justify-center flex-col gap-[32] ">
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
            <div className="border border-[#E3DBDB] p-2 gap-3 flex items-center justify-between rounded-xl">
              <button className="bg-[#001E47] text-white rounded-lg h-11.25 w-24">
                Log In
              </button>
              <button className=" text-[#4A4A4A] rounded-lg h-11.25 w-24">
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
          <form className="w-full flex items-start gap-4.75 justify-center flex-col border">
            {/* email */}
            <div className="w-full">
              <label className="text-[#4A4A4A]">Email</label>
              <input
                type="text"
                className="w-full text-[14px] px-4.75 h-12.5 bg-[#F7F7F7] rounded-xl border border-[#E3DBDB]"
                placeholder="you@example.com"
              />
            </div>
            {/* Password */}
            <div className="w-full">
              <label className="text-[#4A4A4A]">Password</label>
              <div className="w-full flex items-center justify-center">
                <input
                  type="text"
                  className="w-full text-[14px] px-4.75 h-12.5 bg-[#F7F7F7] rounded-l-xl rounded-b-xl rounded-top-xl rounded-br-none border border-[#E3DBDB]"
                  placeholder="Enter Password"
                />
                <LuEye className="h-12.5 bg-[#F7F7F7] border-t border-[#E3DBDB] border-r border-b text-[20px] w-10 p-2" />
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
