import { getAllBorrowsApi, returnBorrowApi } from "./borrowApi";
import { setAllBorrows, setMyBorrows } from "./borrowSlice";

export const getAllBorrowsAction = (isAdmin) => async (dispatch) => {
  const { status, payload } = await getAllBorrowsApi(isAdmin);
  isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};

export const returnBorrowAction = (payload) => async (dispatch) => {
  const borrow = await returnBorrowApi(payload);
  dispatch(getAllBorrowsAction());
};
