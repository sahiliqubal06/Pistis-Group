import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://pistis-group.onrender.com/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        localStorage.setItem("isAuthenticated", true);
        setSuccessMessage("Login successfull.");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setErrorMessage(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Something went wrong!");
      } else {
        setErrorMessage("Network or server error occurred!");
      }
    }
  };

  return (
    <div className="text-center justify-center">
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-cyan-950">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-4">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h1 className="text-red-600">Only Admins Are Allowed To Access.</h1>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required.
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required.
                </span>
              )}
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                Login
              </button>
            </div>
            {successMessage && (
              <p className="text-green-500 mt-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
