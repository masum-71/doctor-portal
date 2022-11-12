import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOption] = useState([]);
  const [treatment, settreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
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
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
