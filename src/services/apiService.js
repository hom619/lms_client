import axios from "axios";
import { toast } from "react-toastify";
export const apiProcessor = async ({ url, method, payload, showToast }) => {
  try {
    const pendingToastId = "auth-pending";
    const pendingResponse = axios({
      url,
      method,
      data: payload,
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
    return {
      status: "error",
      message: msg,
    };
  }
};
