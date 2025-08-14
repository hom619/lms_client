import { apiProcessor } from "./apiService";

const apiBaseURL = "http://localhost:8000";
const apiEndPoint = apiBaseURL + "/api/v1/auth";
export const signUpApi = async (payload) => {
  const obj = {
    url: apiEndPoint + "/register",
    method: "post",
    payload,
  };
  const result = await apiProcessor(obj);
  console.log(result);
};
