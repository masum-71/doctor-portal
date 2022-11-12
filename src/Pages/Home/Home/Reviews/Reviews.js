import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      author: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      author: "Winson Herry",
      location: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      author: "Winson Herry",
      location: "California",
    },
  ];
  return (
    <div>
      <div className="my-5 p-12 flex justify-between">
        <div>
          <p className="text-primary">Testimonial</p>
          <h2 className="text-xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="h-20" src={quote} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
