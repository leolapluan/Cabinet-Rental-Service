import { CABINET_SIZE, RECEIVER_PHONE_NUM } from "./constants";
const initialState = {
  size: "",
  phoneNum: "",
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case CABINET_SIZE:
      return {
        ...state,
        size: action.payload,
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
