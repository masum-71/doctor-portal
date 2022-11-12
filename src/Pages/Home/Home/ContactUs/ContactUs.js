import React from "react";
import background from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../../Components/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      className="mt-10"
      style={{ background: `url(${background})`, backgroundSize: "contain" }}
    >
      <div className="text-center md:w-1/3 md:m-auto my-4 py-5">
        <p className="text-primary">Contact Us</p>
        <h2 className="text-2xl text-white">Stay connect with us</h2>
        <form className="my-5">
          <input
            className="mb-4 w-full rounded p-2"
            type="email"
            placeholder="Email Address"
          />{" "}
          <br />
          <input
            className="mb-4 w-full rounded p-2"
            type="text"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="mb-4 w-full rounded p-2"
            cols="30"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
