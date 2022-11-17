import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOption] = useState([]);
  const [treatment, settreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOption?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOption")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);

  return (
    <div className="mt-16">
      <p className="text-center text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            settreatment={settreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          treatment={treatment}
          selectedDate={selectedDate}
          settreatment={settreatment}
          refetch={refetch}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
