import { CABINET_SELECT, IS_SIGNED_IN, RECEIVER_PHONE_NUM } from "./constants";
const initialState = {
  cabinet: "",
  phoneNum: "",
  isSignedIn: false,
};
const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CABINET_SELECT:
      return {
        ...state,
        cabinet: action.payload,
      };
    case RECEIVER_PHONE_NUM:
      return {
        ...state,
        phoneNum: action.payload,
      };
    case IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload,
      };
    default:
      return state;
  }
};
export default cabinetReducer;
