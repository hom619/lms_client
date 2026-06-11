import React, { useEffect, useState } from "react";
import { Row, Col, Container, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { getSingleBookAction } from "@features/book/bookAction";
import { Star } from "@components/star/Star";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Reviews } from "@pages/reviews/Reviews";
import { setCart } from "@features/cart/cartSlice";
export const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const { cart } = useSelector((state) => state.cartInfo || []);
  const dispatch = useDispatch();
  useEffect(() => {
    //const selectedBook = publicBooks.find((book) => book.slug === slug);
    //setBook(selectedBook);
    dispatch(getSingleBookAction(slug));
  }, [slug, dispatch]);
  const [pathIndex, setPathIndex] = useState(0);

  const handleOnCart = () => {
    dispatch(setCart(selectedBook));
  };
  const isBookIntheCart = cart?.find((book) => book._id === selectedBook._id);
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
            <Breadcrumb.Item active>{selectedBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {!selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              This book is not available at the moment. Please contact the admin
              team.
            </Alert>
          </Col>
        </Row>
      )}
      {selectedBook?._id && (
        <Row>
          <Col md={3}>
            <div className="mb-3" style={{ height: "400px" }}>
              <img
                src={
                  import.meta.env.VITE_BASE_API_URL +
                  selectedBook?.imageList[pathIndex].slice(6)
                }
                alt={selectedBook.title}
                className="h-100 w-100"
              />
            </div>
            <div className="d-flex overflow-auto gap-2 py-3">
              {selectedBook.imageList?.map((path, index) => (
                <img
                  src={import.meta.env.VITE_BASE_API_URL + path.slice(6)}
                  key={path}
                  width={"50px"}
                  className="img-thumbnail"
                  onClick={() => setPathIndex(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </Col>
          <Col>
            {" "}
            <div className="d-flex h-100 flex-column justify-content-between">
              {" "}
              <div className="top">
                {" "}
                <h1>{selectedBook.title}</h1>
                <div className="fw-bolder">
                  {selectedBook.author} - {selectedBook.year}
                </div>
                <div className="my-3 d-flex gap-2">
                  <span>{selectedBook.genre}</span> |
                  <Star avgRating={3.5} totalReviews={320} />
                </div>
                <div className="my-3">
                  {selectedBook.description.slice(0, 400)} ...
                </div>
              </div>
              <div className="bottom">
                <hr />
                <div className="d-grid">
                  <Button
                    variant="dark"
                    onClick={handleOnCart}
                    disabled={isBookIntheCart || selectedBook.expectedAvailable}
                  >
                    {selectedBook.expectedAvailable
                      ? `Available from ${selectedBook.expectedAvailable.slice(0, 10)} `
                      : isBookIntheCart
                        ? "This book is already in the cart"
                        : "Add to borrowing List"}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}

      <Row className="my-5">
        <Col className="border p-3">
          <h3 className="margin-auto text-center">More Details</h3>
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              {selectedBook?.description}
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <Reviews />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
