import React from "react";

const Review = ({ review }) => {
  const { description, img, author, location } = review;
  return (
    <div className="card bg-base-200 ">
      <div className="card-body items-center text-center">
        <p>{description}</p>
        <div className="card-actions flex items-center">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <p>{author}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
