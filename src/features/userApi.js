//call api processor to fetch the user
import { apiProcessor } from "../services/apiService";

const apiBaseURL = "http://localhost:8000";
const userApiEndPoint = apiBaseURL + "/api/v1/users";
export const fetchUserApi = async () => {
  const obj = {
    url: userApiEndPoint + "/profile",
    method: "get",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
