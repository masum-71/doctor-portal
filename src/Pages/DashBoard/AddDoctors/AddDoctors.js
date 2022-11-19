import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctors = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: specialty = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/specialty`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddDoctor = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h4 className="text-3xl text-center mb-10">Add Doctors</h4>
      <div className="w-96 m-auto border-4 bg-slate-100 p-6">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              <span className="label-text">specialty</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("specialty", { required: true })}
            >
              {specialty.map((special) => (
                <option value={special.name} key={special._id}>
                  {special.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("img", { required: "image is required" })}
            />
            {errors.img && (
              <p className="text-red-500 text-center mt-3">
                {errors.img.message}
              </p>
            )}
          </div>

          <input className="btn mt-4 btn-accent w-full" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
