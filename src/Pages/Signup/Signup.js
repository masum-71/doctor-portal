import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);

  const handleSignup = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        const profile = {
          displayName: data.name,
        };
        updateUser(profile)
          .then(() => {})
          .catch(() => {});
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 border-4 bg-slate-100 p-6">
        <p className="text-2xl text-center">Sign Up</p>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-center mt-3">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: true,
                minLength: { value: 6, message: "minimum 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-center mt-3">
                {errors.password.message}
              </p>
            )}
          </div>

          <input className="btn mt-4 btn-accent w-full" type="submit" />
        </form>
        <p className="text-center my-3">
          Already Have an account ?{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
