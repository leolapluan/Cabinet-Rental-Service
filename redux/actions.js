import { CABINET_SELECT, IS_SIGNED_IN, RECEIVER_PHONE_NUM } from "./constants";
export function storeCabinetSelect(cabinet) {
  return {
    type: CABINET_SELECT,
    payload: cabinet,
  };
}
export function storeReceiverPhoneNum(phoneNum) {
  return {
    type: RECEIVER_PHONE_NUM,
    payload: phoneNum,
  };
}
export function isSignedIn(isSignedIn, fullname, phonenumUser) {
  return {
    type: IS_SIGNED_IN,
    payload: { isSignedIn, fullname, phonenumUser },
  };
}
