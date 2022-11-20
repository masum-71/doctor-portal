import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctors = () => {
  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          photo: imgData.data.url,
        };

        fetch(`http://localhost:5000/doctors`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            toast.success(`${data.name} is added successfully`);
            navigate("/dashboard/managedoctors");
          });
      });
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
              {...register("image", { required: "image is required" })}
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
