import { postBorrowApi } from "./cartApi";

export const postBorrowAction = async (payload) => {
  const borrow = await postBorrowApi(payload);
  return borrow;
};
