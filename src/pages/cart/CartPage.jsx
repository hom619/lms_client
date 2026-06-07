import { removeBookFromCart } from "@features/cart/cartSlice";
import React from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cartInfo || []);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleOnBookRemove = (_id) => {
    dispatch(removeBookFromCart(_id));
  };
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="py-4"> My Borrowing List</h3>
          <div>
            <Table>
              <tbody>
                {cart?.map((book) => (
                  <tr key={book?._id}>
                    <td>
                      <img
                        src={
                          import.meta.env.VITE_BASE_API_URL +
                          book.imgUrl.slice(6)
                        }
                        alt="cartBook"
                        width="60px"
                      ></img>
                    </td>
                    <td>{book.title}</td>
                    <td>Returning: 2025-10-23</td>
                    <td>
                      <Button
                        variant="link"
                        onClick={() => handleOnBookRemove(book?._id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {cart?.length > 0 ? (
              <div className="text-end">
                {user?._id ? (
                  <Button variant="secondary">Proceed to checkout</Button>
                ) : (
                  <Link to="/signin" state={{ from: "/cart" }}>
                    <Button variant="secondary">Login To Borrow</Button>
                  </Link>
                )}
              </div>
            ) : (
              <Alert variant="info">
                No Books in the cart! Please select a book to add in the cart
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
