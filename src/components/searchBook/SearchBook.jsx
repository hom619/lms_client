import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BookListing } from "@components/bookListing/BookListing";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
export const SearchBook = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  !query && navigate("/");
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const searchBookArg = publicBooks.filter((book) => {
    const text = (book.title + " " + book.description).toLowerCase();
    return text.includes(query.toLowerCase());
  });
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/search" }}>
              Search
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={searchBookArg} />
    </Container>
  );
};
