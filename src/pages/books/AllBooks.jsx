import { BookListing } from "@components/bookListing/BookListing";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AllBooks = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={publicBooks} />
    </Container>
  );
};
