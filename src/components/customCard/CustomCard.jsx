import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const CustomCard = ({ imgUrl, title, author, year, slug }) => {
  return (
    <Card className="mb-2" style={{ width: "18rem" }}>
      <div className="m-2">
        {" "}
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_BASE_API_URL + imgUrl?.slice(6)}
          className="rounded"
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={`/books/${slug}`} replace>
          <Button variant="dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export const CustomCardList = ({
  imgUrl,
  title,
  author,
  year,
  slug,
  description,
}) => {
  return (
    <Card className="mb-3">
      <div className="d-flex gap-4">
        <div className="m-2">
          {" "}
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl?.slice(6)}
            className="rounded"
            height={"200px"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
          <Card.Text>
            {author} - {year}
          </Card.Text>
          <Link to={`/books/${slug}`} replace>
            <Button variant="dark">View Details</Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};
