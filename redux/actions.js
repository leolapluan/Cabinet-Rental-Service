import { CABINET_SIZE, RECEIVER_PHONE_NUM } from "./constants";
export function storeCabinetSize(size) {
  return {
    type: CABINET_SIZE,
    payload: size,
  };
}
export function storeReceiverPhoneNum(phoneNum) {
  return {
    type: RECEIVER_PHONE_NUM,
    payload: phoneNum,
  };
}
