const intialStateProfile = {
   address: "",
   phone_number: "",
   displayname: "",
};

const getProfiles = (prevstate = intialStateProfile, action) => {
   // kondisi untuk melakukan action
   if (action.type === "SET_PROFILE") {
      return {
         ...prevstate,
         [action.inputType]: action.value,
      };
   }
   return prevstate;
};

export { getProfiles };
