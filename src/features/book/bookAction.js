import {
  deleteBookApi,
  getAllBooksAdminApi,
  postNewBookApi,
  updateBookApi,
} from "./bookApi";
import { setBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const getAllBooksAdminAction = () => async (dispatch) => {
  const { status, payload } = await getAllBooksAdminApi();
  status === "success" && dispatch(setBook(payload));
};
export const updateBooksAction = async (payload) => {
  const book = await updateBookApi(payload);
};
export const deleteBookAction = async (_id) => {
  const book = await deleteBookApi(_id);
};
