import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ApiRequests } from "@/apiRequest/auth";
import { message } from "antd";
import { useRouter } from "next/router";

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
    const { email, password } = data;
    try {
      const response = await ApiRequests.loginRequest({ email, password });

      if (response.success) {
        const token = response.token;
        localStorage.setItem("token", token);
        navigate.push("/dashboad");
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

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
              className="text-yellow-600 font-bold text-2xl"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
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
              <p className="text-red-500 text-[15px]">
                {errors.userName.message}
              </p>
            )}
            <label
              htmlFor="fullName"
              className="text-yellow-600 font-bold text-2xl mt-4"
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullName"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Fullname is required",
                },
              })}
              placeholder="Full Name"
            />
            {errors.fullName?.message && (
              <p className="text-red-500 text-[15px]">
                {errors.fullName.message}
              </p>
            )}
            <label
              htmlFor="email"
              className="text-yellow-600 font-bold text-2xl mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder="Email Address"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-[15px]">{errors.email.message}</p>
            )}
            <label
              htmlFor="email"
              className="text-yellow-600 font-bold text-2xl mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder="Email Address"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-[15px]">{errors.email.message}</p>
            )}
            <button
              type="submit"
              className="bg-yellow-600 text-white text-center mt-4 rounded py-3 px-4 hover:opacity-70 transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
