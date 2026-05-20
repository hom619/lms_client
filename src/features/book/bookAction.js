import {
  deleteBookApi,
  getAllBooksAdminApi,
  getAllPublicBooksApi,
  getSingleBookApi,
  postNewBookApi,
  updateBookApi,
} from "./bookApi";
import { setBook, setPublicBooks, setSelectedBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const getAllBooksAdminAction = () => async (dispatch) => {
  const { status, payload } = await getAllBooksAdminApi();
  status === "success" && dispatch(setBook(payload));
};
export const getAllPublicBooksAction = () => async (dispatch) => {
  const { status, payload } = await getAllPublicBooksApi();
  status === "success" && dispatch(setPublicBooks(payload));
};
export const getSingleBookAction = (slug) => async (dispatch) => {
  const { status, payload } = await getSingleBookApi(slug);
  status === "success" && dispatch(setSelectedBook(payload));
};
export const updateBooksAction = async (payload) => {
  const book = await updateBookApi(payload);
};
export const deleteBookAction = async (_id) => {
  const book = await deleteBookApi(_id);
};
