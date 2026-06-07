import { Star } from "@components/star/Star";
import React from "react";
import { formatDistanceToNow } from "date-fns";
export const Reviews = () => {
  const reviews = [
    {
      title: "Really amazing book",
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique perspiciatis, numquam, voluptatibus aperiam odit, et magni quos eveniet est corrupti provident. Eveniet, cumque! Nam ad pariatur quidem? Aperiam, vel?",
      createdAt: "2026-01-20",
      reviewedBy: "Hom Gurung",
    },
    {
      title: "Really amazing book",
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique perspiciatis, numquam, voluptatibus aperiam odit, et magni quos eveniet est corrupti provident. Eveniet, cumque! Nam ad pariatur quidem? Aperiam, vel?",
      createdAt: "2022-01-20",
      reviewedBy: "Hom Gurung",
    },
    {
      title: "Really amazing book",
      rating: 4.5,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique perspiciatis, numquam, voluptatibus aperiam odit, et magni quos eveniet est corrupti provident. Eveniet, cumque! Nam ad pariatur quidem? Aperiam, vel?",
      createdAt: "2025-01-20",
      reviewedBy: "Hom Gurung",
    },
  ];
  return (
    <div className="reviews-tab">
      {reviews.map((r, index) => (
        <div
          key={index}
          className="reviews-items border rounded shadow-lg d-flex gap-3 p-3"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-3">
              HG
            </div>
          </div>
          <div className="right">
            <h3>{r.title}</h3>
            <div className="d-flex gap-3">
              {" "}
              <Star avgRating={r.rating} />
              <span>
                {formatDistanceToNow(new Date(r.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>

            <p>{r.details}</p>
            <div className="text-end">- {r.reviewedBy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
