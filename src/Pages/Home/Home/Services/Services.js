import React from "react";
import image1 from "../../../../assets/images/fluoride.png";
import image2 from "../../../../assets/images/cavity.png";
import image3 from "../../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      img: image1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: image2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: image3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="text-center mt-12 ">
      <h1 className="text-4xl text-primary">Our Services</h1>
      <h1 className="text-2xl">Services We Provide</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {serviceInfo.map((info) => (
          <Service key={info.id} info={info}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
