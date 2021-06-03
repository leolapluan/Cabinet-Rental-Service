import { CABINET_SIZE } from "./constants";
const initialState = {
  size: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case CABINET_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
