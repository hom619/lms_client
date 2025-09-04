import { apiProcessor } from "./apiService";

const apiBaseURL = "http://localhost:8000";
const apiEndPoint = apiBaseURL + "/api/v1/auth";
export const signUpApi = async (payload) => {
  const obj = {
    url: apiEndPoint + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const activateUserApi = async (payload) => {
  const obj = {
    url: apiEndPoint + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};

export const signInUserApi = async (payload) => {
  const obj = {
    url: apiEndPoint + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
