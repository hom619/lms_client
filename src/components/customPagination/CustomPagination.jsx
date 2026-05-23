import React from "react";
import Pagination from "react-bootstrap/Pagination";
export const CustomPagination = ({ active, setActive, pages }) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      {" "}
      <Pagination>{items}</Pagination>
    </div>
  );
};
