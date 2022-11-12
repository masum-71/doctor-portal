import chair from "../../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <div>
      <div className="hero">
        <div className=" md:flex  md:justify-between">
          <div className="lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
          <img
            src={chair}
            alt="chair"
            className=" md:w-1/2 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
