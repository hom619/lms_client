import { apiProcessor } from "@services/apiService";

// const apiBaseURL = "http://localhost:8000";
const apiBaseURL = import.meta.env.VITE_BASE_API_URL;
const bookApiEndPoint = apiBaseURL + "/api/v1/books";
export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEndPoint,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const getAllBooksAdminApi = async () => {
  const obj = {
    url: bookApiEndPoint + "/admin",
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const updateBookApi = async (payload) => {
  const obj = {
    url: bookApiEndPoint,
    method: "put",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const deleteBookApi = async (_id) => {
  const obj = {
    url: bookApiEndPoint + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
