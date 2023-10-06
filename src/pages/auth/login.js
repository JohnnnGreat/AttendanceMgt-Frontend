import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ApiRequests } from "@/apiRequest/auth";
import { message } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const navigate = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
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

  //Redirect to dashboad if user exist
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate.push("/dashboad");
    } else {
      navigate.push("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-gray-700 text-4xl uppercase">Login</h1>
        <div className="w-[400px]">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col"
            action=""
          >
            <label
              className="text-yellow-600 font-bold text-2xl"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
              id="email"
              placeholder="Enter Email Address"
              {...register("email", {
                required: {
                  value: true,
                  message: " Enter a valid email address",
                },
              })}
            />
            {errors.email?.message && (
              <p className="text-red-500 text-[15px]">{errors.email.message}</p>
            )}
            <label
              htmlFor="password"
              className="text-yellow-600 font-bold text-2xl mt-4"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="py-3 px-4 outline-none placeholder:text-gray-500 border rounded focus:shadow-md mt-3"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
              })}
              placeholder="Enter Password"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-[15px]">
                {errors.password.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-yellow-600 text-white text-center mt-4 rounded py-3 px-4 hover:opacity-70 transition-all duration-300"
            >
              Login
            </button>
            <p className="text-center mt-5">
              Not yet Register
              <span className="inline-block ml-1">
                <Link
                  className="text-yellow-800 font-bold"
                  href="/auth/register"
                >
                  Register
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
