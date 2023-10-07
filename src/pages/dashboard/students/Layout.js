import React, { useEffect, useState } from "react";
import { BiCommentMinus } from "react-icons";
import { isValid } from "@/utils/UserValid";
import Link from "next/link";

const StudentDashboard = ({ children }) => {
  const [userValid, setUserValid] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserValid(true);
    } else {
      setUserValid(false);
    }
  });

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard", true);
  }, []);
  return (
    <>
      {userValid ? (
        <div className="container w-full">
          <div className="c-wrapper">
            <div className="h-screen w-full bg-yellow-700 shadow-lg">
              <div className="h-[150px] bg-white flex items-center justify-center">
                <div className="bg-gray-100 rounded-md w-[90%] h-fit  p-4">
                  <h1 className="text-[16px] font-bold">{profile.fullName}</h1>
                  <h1 className="text-[14px]">{profile.email}</h1>
                  <h1 className="bg-blue-500 text-white rounded-md inline-block px-3">
                    {profile.admissionNo}
                  </h1>
                </div>
              </div>

              <div className="w-[90%] mx-auto mt-[2rem]">
                <ul>
                  <li className="border-b p-3 border-yellow-600 hover:px-5 transition-all">
                    <Link
                      className="text-white"
                      href="/dashboard/students/classes"
                    >
                      Classes
                    </Link>
                  </li>
                  <li className="border-b p-3 border-yellow-600 hover:px-5 transition-all">
                    <Link
                      className="text-white"
                      href="/dashboard/students/comments"
                    >
                      Comments
                    </Link>
                  </li>
                  <li className="border-b p-3 border-yellow-600 hover:px-5 transition-all">
                    <Link
                      className="text-white"
                      href="/dashboard/students/make-complaints"
                    >
                      Make Complaints
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center flex-col max-w-[800px]">
            <h1 className="text-[3rem] font-bold text-center">
              Oops, You are not permitted to view this page!!!
            </h1>
            <Link className="underline text-yellow-600" href="/auth/login">
              Proceed to Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentDashboard;
