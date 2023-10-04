import React from "react";
import { useForm } from "react-hook-form";
import { ApiRequest } from "@/apiRequest/auth";

const Login = () => {
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
  const submitHandler = (data) => {
    alert("working");
    console.log(data);
  };

  //   const apiRequest = new ApiRequest();

  console.log(ApiRequest);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
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
              type="text"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
