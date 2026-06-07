import { apiProcessor } from "@services/apiService";

// const apiBaseURL = "http://localhost:8000";
const apiBaseURL = import.meta.env.VITE_BASE_API_URL;
const borrowApiEndPoint = apiBaseURL + "/api/v1/borrows";

// for admin only
export const getAllBorrowsApi = async (isAdmin) => {
  const path = isAdmin ? "/admin" : "/user";
  const obj = {
    url: borrowApiEndPoint + path,
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
