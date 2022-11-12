import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCards from "../InfoCards/InfoCards";
import PrimaryButton from "../../../Components/PrimaryButton";
const Banner = () => {
  const cardInfo = [
    {
      id: 1,
      name: " Opening Hours ",
      description: "Open 9.00am to 5.00 pm",
      icon: clock,
      className: "bg-primary",
    },
    {
      id: 2,
      name: " Visit our location ",
      description: "Open 9.00am to 5.00 pm",
      icon: marker,
      className: "bg-secondary",
    },
    {
      id: 3,
      name: " Contact us ",
      description: "01914-249565",
      icon: phone,
      className: "bg-primary",
    },
  ];

  return (
    <div className="chair-img ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
      <div className="grid mt-10 gap-4 mx-4 md:grid-cols-2 lg:grid-cols-3">
        {cardInfo.map((card) => (
          <InfoCards key={card.id} card={card}></InfoCards>
        ))}
      </div>
    </div>
  );
};

export default Banner;
