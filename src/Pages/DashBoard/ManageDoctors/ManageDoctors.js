import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const title = "Are you sure you want to delete?";
  const message = "If you delete this doctor, you cannot undo";

  const cancelDelate = () => {
    setDoctorDetails(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctors`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const successAction = (data) => {
    fetch(`http://localhost:5000/doctors/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(`Doctor ${data.name} deleted successfully`);
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>manage Doctors</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <th>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={doctor.photo}
                    alt=""
                  />
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                    onClick={() => setDoctorDetails(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {doctorDetails && (
        <ConfirmationModal
          title={title}
          message={message}
          cancelDelate={cancelDelate}
          doctorDetails={doctorDetails}
          successAction={successAction}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
