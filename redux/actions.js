import { CABINET_SELECT, RECEIVER_PHONE_NUM } from "./constants";
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
