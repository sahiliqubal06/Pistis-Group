import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "admin@pistis.com" && data.password === "pistis123") {
      navigate("/dashboard");
    } else {
      alert("Invalid login Credentials");
    }
  };

  return (
    <div className="text-center justify-center">
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg ">Login</h3>
            <h1 className="">Only Admins Are Allowed To Access.</h1>
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
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
