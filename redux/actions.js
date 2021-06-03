import { CABINET_SIZE } from "./constants";
export function storeCabinetSize(size) {
  return {
    type: CABINET_SIZE,
    payload: size,
  };
}
