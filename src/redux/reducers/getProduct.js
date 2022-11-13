const intialStateProduct = {
   name: "",
   image: "",
   price: 0,
};
const intialStateProductCounter = {
   number: 1,
};
const getProduct = (prevState = intialStateProduct, action) => {
   // kondisi untuk melakukan action
   if (action.type === "SET_PRODUCT") {
      return {
         ...prevState,
         [action.inputType]: action.value,
      };
   }

   return prevState;
};

const counter = (prevState = intialStateProductCounter, action) => {
   // lakukan pengondisian untuk masing masing action
   switch (action.type) {
      case "COUNTER_UP":
         //   const newCounter = prevState.number + 1;
         return {
            ...prevState,
            number: prevState.number + 1,
         };
      case "COUNTER_DOWN":
         //   const newCounter = prevState.number - 1;
         return {
            ...prevState,
            number: prevState.number === 1 ? 1 : prevState.number - 1,
         };
      case "COUNTER_RESET":
         return {
            ...prevState,
            number: intialStateProductCounter.number,
         };
      default:
         return prevState;
   }
};

export { getProduct, counter };
