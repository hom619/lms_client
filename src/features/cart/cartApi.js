//call api processor to fetch the user
import { apiProcessor } from "../../services/apiService.js";

const apiBaseURL = import.meta.env.VITE_BASE_API_URL;
const userApiEndPoint = apiBaseURL + "/api/v1/borrows";
export const postBorrowApi = async (payload) => {
  const obj = {
    url: userApiEndPoint,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
