import React from "react";
import DashboardSide from "../components/DashboardSide";
import DashboardLeft from "../components/DashboardLeft";

function page() {
  return (
    <div className="w-full min-h-screen gap-6.25 flex items-stretch justify-evenly bg-[#FFF] py-5 px-6">
      <DashboardSide />
      <DashboardLeft />
    </div>
  );
}

export default page;
