import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export const Star = ({ avgRating, totalReviews }) => {
  const totalRating = 5;
  const halfStar = !Number.isInteger(avgRating);
  const fullStar = Math.floor(avgRating);
  const emptyStar = totalRating - fullStar - (halfStar ? 1 : 0);
  const showStars = [];
  if (avgRating < 0 || avgRating > 5) {
    return "";
  }
  //full stars
  for (let i = 0; i < fullStar; i++) {
    showStars.push(<FaStar className="text-warning" />);
  }
  //half stars
  if (halfStar) showStars.push(<FaStarHalfAlt className="text-warning" />);
  //empty stars
  for (let i = 0; i < emptyStar; i++) {
    showStars.push(<FaStar className="text-secondary" />);
  }
  return (
    <div>
      {showStars} {}
      {totalReviews && totalReviews + " Reviews"}
    </div>
  );
};
