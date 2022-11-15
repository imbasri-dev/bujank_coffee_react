export function setProduct(type, value) {
   return {
      type: "SET_PRODUCT",
      inputType: type,
      value: value,
   };
}

export function counterUp(type, value) {
   return {
      type: "COUNTER_UP",
   };
}
export function counterDown(type, value) {
   return {
      type: "COUNTER_DOWN",
   };
}
export function counterReset(type, value) {
   return {
      type: "COUNTER_RESET",
   };
}
