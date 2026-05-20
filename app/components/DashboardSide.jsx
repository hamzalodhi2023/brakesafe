import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

function DashboardSide() {
  return (
    <div className="w-[20%] h-full rounded-3xl py-5 bg-[#F7F7F7]">
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
            Menu
          </li>
          <li className="h-10 w-full gap-2 py-3 px-4 relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-orange-500 after:w-1.5 after:h-full after:rounded-tr-2xl after:rounded-br-2xl flex items-center justify-space-between">
            <LuLayoutDashboard /> <p>Dashboard</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* bottom div */}
      <div></div>
    </div>
  );
}

export default DashboardSide;
