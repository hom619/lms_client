import { clearRecentBorrow } from "@features/cart/cartSlice";
import React, { useEffect } from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ThankyouPage = () => {
  const { recentBorrow } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      //will only execute on unmount
      dispatch(clearRecentBorrow());
      //import.meta.env.PROD if we want to do the logic unmount in prod file only we can use this to make the condition
    };
  }, [dispatch]);
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <Alert variant="success">
            <h1 className="text-center py-4"> Thank You for borrowing</h1>
          </Alert>
          <div className="text-center">
            Please visit your <Link to="/user/my-borrow">account</Link> to view
            your booklist
          </div>
          <div>
            <Table>
              <tbody>
                {recentBorrow?.length > 0 &&
                  recentBorrow?.map((borrow) => (
                    <tr key={borrow?._id}>
                      <td>
                        <img
                          src={
                            import.meta.env.VITE_BASE_API_URL +
                            borrow.thumbnail.slice(6)
                          }
                          alt="cartBook"
                          width="60px"
                        ></img>
                      </td>
                      <td>{borrow.title}</td>
                      <td>Returning due: {borrow.dueDate.slice(0, 10)}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
