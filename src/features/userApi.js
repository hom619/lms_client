//call api processor to fetch the user
import { apiProcessor } from "../services/apiService";

const apiBaseURL = import.meta.env.VITE_BASE_API_URL;
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
