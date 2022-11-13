import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-96 border-4 my-12 p-4 bg-slate-100">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <p>Forget password ?</p>
          </div>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center my-3">
          New to Doctors portal ?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
