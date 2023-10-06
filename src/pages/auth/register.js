import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ApiRequests } from "@/apiRequest/auth";
import { message } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const navigate = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      userName: "",
      fullName: "",
      admissionNo: "",
      email: "",
      password: "",
    },

    mode: "onChange",
  });

  const submitHandler = async (data) => {
    console.log(data);

    try {
      const response = await ApiRequests.signUpRequest(data);
      console.log(response);
      if (response.success) {
        const token = response.token;

        navigate.push("/auth/login");
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  //Redirect to dashboad if user exist
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate.push("/dashboad");
    }
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center flex-col items-center">
        <h1 className="text-gray-700 text-4xl uppercase">Register</h1>
        <div className="w-[400px] mt-6">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col"
            action=""
          >
            <label
              className="text-yellow-600 font-bold text-xl"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-1"
              id="username"
              placeholder="Email Address"
              {...register("userName", {
                required: {
                  value: true,
                  message: " Username is Required",
                },
              })}
            />
            {errors.userName?.message && (
              <p className="text-red-500 text-[13px]">
                {errors.userName.message}
              </p>
            )}
            <label
              htmlFor="fullName"
              className="text-yellow-600 font-bold text-xl mt-2"
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullName"
              className="py-2 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-1"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Fullname is required",
                },
              })}
              placeholder="Full Name"
            />
            {errors.fullName?.message && (
              <p className="text-red-500 text-[13px]">
                {errors.fullName.message}
              </p>
            )}
            <label
              htmlFor="email"
              className="text-yellow-600 font-bold text-xl mt-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-2 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-1"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder="Email Address"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-[13px]">{errors.email.message}</p>
            )}
            <label
              htmlFor="admissionNo"
              className="text-yellow-600 font-bold text-xl mt-2"
            >
              Admission No.
            </label>
            <input
              type="text"
              id="admissionNo"
              className="py-2 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-2"
              {...register("admissionNo", {
                required: {
                  value: true,
                  message: "Admission No. is required",
                },
              })}
              placeholder="Admission No."
            />
            {errors.admissionNo?.message && (
              <p className="text-red-500 text-[13px]">
                {errors.admissionNo.message}
              </p>
            )}
            <label
              htmlFor="password"
              className="text-yellow-600 font-bold text-xl mt-2"
            >
              Admission No.
            </label>
            <input
              type="password"
              id="password"
              className="py-2 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-2"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password. is required",
                },
              })}
              placeholder="Password."
            />
            {errors.admissionNo?.message && (
              <p className="text-red-500 text-[13px]">
                {errors.admissionNo.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-yellow-600 text-white text-center mt-4 rounded py-3 px-4 hover:opacity-70 transition-all duration-300"
            >
              Register
            </button>

            <p className="text-center mt-5">
              Already Register
              <span className="inline-block ml-1">
                <Link className="text-yellow-800 font-bold" href="/auth/login">
                  Login
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
