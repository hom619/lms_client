import { setUser } from "./userSlice";
import { fetchUserApi } from "./userApi";
export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserApi();

  //receive user
  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};
