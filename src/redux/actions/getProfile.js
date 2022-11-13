export function setProfiles(type, value) {
   return {
      type: "SET_PROFILE",
      inputType: type,
      value: value,
   };
}
