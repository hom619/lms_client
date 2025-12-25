import axios from "axios";
import { toast } from "react-toastify";
import { fetchNewAccessJWTApi } from "./authApi";
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivateCall,
  isRefreshJWT,
}) => {
  try {
    const headers = {};
    if (isPrivateCall) {
      const token = isRefreshJWT ? getRefreshJWT() : getAccessJWT();
      headers.authorization = `Bearer ${token}`;
    }
    const pendingToastId = "auth-pending";
    const pendingResponse = axios({
      url,
      method,
      data: payload,
      headers,
    });

    if (showToast && !toast.isActive(pendingToastId)) {
      toast.promise(
        pendingResponse,
        {
          pending: "Please wait...",
        },
        {
          toastId: pendingToastId,
        }
      );
    }
    const { data } = await pendingResponse;
    const resultToastId = `auth-result-${data.status}-${data.message}`;
    if (!toast.isActive(resultToastId) && showToast) {
      toast[data.status](data.message, { toastId: resultToastId });
    }
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    if (!toast.isActive(`error-${msg}`) && showToast) {
      toast.error(msg, { toastId: `error-${msg}` });
    }
    if (error.status === 401 && msg === "jwt expired") {
      //call api to get new accessJWT
      const { payload } = await fetchNewAccessJWTApi();
      console.log(payload);
      if (payload) {
        sessionStorage.setItem("accessJWT", payload);
        //call the apiProcessor()
        return apiProcessor({
          url,
          method,
          payload,
          showToast,
          isPrivateCall,
          isRefreshJWT,
        });
      }
    } else {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }
    return {
      status: "error",
      message: msg,
    };
  }
};
