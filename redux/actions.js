import { CABINET_SELECT, IS_SIGNED_IN, REGISTER_PHONE_NUM } from "./constants";
export function storeCabinetSelect(cabinet) {
  return {
    type: CABINET_SELECT,
    payload: cabinet,
  };
}
export function storeRegisterPhoneNum(phoneNumSender, phoneNumReceiver) {
  return {
    type: REGISTER_PHONE_NUM,
    payload: { phoneNumSender, phoneNumReceiver },
  };
}
export function isSignedIn(isSignedIn, fullname, phonenumUser, userId) {
  return {
    type: IS_SIGNED_IN,
    payload: { isSignedIn, fullname, phonenumUser, userId },
  };
}
