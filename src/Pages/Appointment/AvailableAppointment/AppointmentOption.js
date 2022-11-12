import React from "react";

const AppointmentOption = ({ option, settreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold text-secondary">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try another day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary"
            onClick={() => settreatment(option)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
