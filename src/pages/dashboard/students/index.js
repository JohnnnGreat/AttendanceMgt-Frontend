import React, { useEffect, useState } from "react";
import StudentDashboard from "./Layout";
import Link from "next/link";

const Index = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, []);
  return (
    <StudentDashboard>
      <div className="h-[200px] p-7 flex items-center  flex-col w-[80%] bg-gray-100 rounded-sm mx-auto mt-[3rem] leading-normal">
        <div className="w-full">
          {" "}
          <p className="text-gray-500 text-">Hello,</p>
          <h1 className="text-[40px] font-bold">{profile.fullName}</h1>
          <div className="bg-blue-400 inline-block p-2">
            <p className="text-[12px] text-white">
              Here is your dashboard containing your statistics. <br />
              For more information, contact Admin{" "}
              <Link href="admin/contact">Contact</Link>
            </p>
          </div>
        </div>
        <div className="">
            <div>

            </div>
        </div>
      </div>
    </StudentDashboard>
  );
};

export default Index;
