import React from "react";
import {
  LuLayoutDashboard,
  LuWrench,
  LuTruck,
  LuCalendar,
  LuCaravan,
  LuCirclePercent,
  LuCog,
  LuLogOut,
  LuMail,
  LuChevronRight,
} from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

function DashboardSide() {
  return (
    <div className="w-[20%] shadow-[0_0_15.2px_0_rgba(0,0,0,0.15)] flex items-center justify-between flex-col h-full rounded-3xl py-5 bg-[#F7F7F7]">
      {/* top div */}
      <div className="flex items-start justify-center flex-col gap-6.25">
        {/* logo div */}
        <div className="w-full px-2.5 flex items-center justify-center gap-[8.99px]">
          <img src="./logo.png" alt="" className="w-[47.513px] h-8" />
          <div>
            <h1 className="text-[23px] text-[#001E47]">
              BrakeSafe
              <span className="text-[#FF6206] font-semibold">HGV</span>
            </h1>
            <p className="text-[8.866px] text-[#FF6206]">
              HGV brake test booking portal
            </p>
          </div>
        </div>
        {/* Menu and general */}

        <ul className="relative flex items-center justify-center flex-col gap-1">
          <li className="text-[14px] w-full text-left font-semibold px-3.75">
            MENU
          </li>
          <li className="h-10 w-full gap-2 py-3 px-4 relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-orange-500 after:w-1.5 after:h-full after:rounded-tr-2xl after:rounded-br-2xl flex items-center justify-space-between">
            <LuLayoutDashboard className="text-[#FF6206] text-xl font-semibold" />
            <p className="text-[14px] font-bold">Dashboard</p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuWrench className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">
              Test Centers
            </p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuCalendar className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">
              My Bookings
            </p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuTruck className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">
              My Vehicles
            </p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuCaravan className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">
              My Trailers
            </p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuCirclePercent className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">Invoices</p>
          </li>
        </ul>
        <ul className="relative flex items-center justify-center flex-col gap-1">
          <li className="text-[14px] w-full text-left font-semibold px-3.75">
            GENERAL
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuCog className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">Settings</p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <IoIosNotificationsOutline className="text-[#4A4A4A] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#4A4A4A]">
              Notifications
            </p>
          </li>

          <li className="h-10 w-full gap-2 py-3 px-4 relative flex items-center justify-space-between">
            <LuLogOut className="text-[#EF4444] text-xl font-normal" />
            <p className="text-[14px] font-normal text-[#EF4444]">Logout</p>
          </li>
        </ul>
      </div>
      {/* bottom div */}
      <div className="w-full flex items-center gap-3.75 justify-between flex-col py-3.75 px-3.75">
        <button className="w-54 text-white flex items-center justify-between py-3 px-4 bg-[#FF6206] rounded-[14px]">
          <div className="flex items-start gap-3 justify-between w-31.5">
            <LuMail className="text-xl" />
            <p>Contact Us</p>
          </div>
          <LuChevronRight />
        </button>
        <div className="Organic-pattern bg-[#010B1A] w-full py-3.75 px-2.5 flex items-center justify-center flex-col gap-2.5 rounded-2xl bg">
          <div className="w-full flex items-center justify-center gap-[8.13px]">
            <img
              src="./user.jpg"
              alt=""
              className="rounded-2xl w-[47.438px] h-[47.438px] border-[1.355px] border-[#E3DBDB]"
            />
            <p className="font-bold text-[18px] text-white">John Doe</p>
          </div>
          <p className="text-center text-[12px] text-white font-normal">
            johndoe12345@email.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSide;
