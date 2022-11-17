import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AppointmentModal = ({
  treatment,
  selectedDate,
  settreatment,
  refetch,
}) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Appointment successfully submitted");
          settreatment(null);
          refetch();
        } else {
          toast.error(`${data.message}`);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="py-10 grid grid-cols-1 gap-2"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, indx) => (
                <option key={indx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
