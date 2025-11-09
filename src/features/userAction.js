import { setUser } from "./userSlice";
import { fetchUserApi } from "./userApi";
import { fetchNewAccessJWTApi } from "../services/authApi";
export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserApi();

  //receive user
  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};
export const autoLogin = () => async (dispatch) => {
  const accessJwt = sessionStorage.getItem("accessJWT");
  if (accessJwt) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshJwt = localStorage.getItem("refreshJWT");
  if (refreshJwt) {
    //fetch accessJWT and store it in sessionStorage
    const { payload } = await fetchNewAccessJWTApi();
    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
    //dispatch(fetchUserAction());
  }
};
