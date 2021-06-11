import { CABINET_SELECT, RECEIVER_PHONE_NUM } from "./constants";
const initialState = {
  cabinet: "",
  phoneNum: "",
};
const countReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
export default countReducer;
