import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomPagination } from "@components/customPagination/CustomPagination";
import { CustomCard, CustomCardList } from "@components/customCard/CustomCard";
import { useSearchParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export const BookListing = ({ bookList }) => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);
  const booksPerScreen = 6;
  const startIndex = (active - 1) * booksPerScreen;
  const endIndex = startIndex + booksPerScreen;
  const displayBooks = bookList.slice(startIndex, endIndex);

  const pages = Math.ceil(bookList.length / booksPerScreen);
  const [searchParams, setSearchParams] = useSearchParams();
  const s = searchParams.get("s");
  console.log(s);
  const filteredBooks = s ? "TODO" : bookList;
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {" "}
            {bookList.length}{" "}
            {bookList.length > 1 ? "books found!" : "book found!"}
          </div>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => setView("card")}>
                Card
              </Button>
              <Button variant="dark" onClick={() => setView("list")}>
                List
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <hr />
        <div
          className={
            view === "card"
              ? "mt-2 booklist-container d-flex gap-2 justify-content-center flex-wrap"
              : "mt-2 booklist-container flex-wrap"
          }
        >
          {displayBooks?.length > 0 &&
            displayBooks?.map((book) =>
              view === "card" ? (
                <CustomCard key={book._id} {...book} />
              ) : (
                <CustomCardList key={book._id} {...book} />
              ),
            )}
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <CustomPagination
            active={active}
            setActive={setActive}
            pages={pages}
          />
        </div>
      </Col>
    </Row>
  );
};
