import React from "react";
import Banner from "./Banner";
import Care from "./Care/Care";
import ContactUs from "./ContactUs/ContactUs";
import MakeAppoinment from "./MakeAppoinment/MakeAppoinment";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Care></Care>
      <MakeAppoinment></MakeAppoinment>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
