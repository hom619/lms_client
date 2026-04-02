import { getAllBooksAdminApi, postNewBookApi } from "./bookApi";
import { setBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const getAllBooksAdminAction = () => async (dispatch) => {
  const { status, payload } = await getAllBooksAdminApi();
  status === "success" && dispatch(setBook(payload));
};
