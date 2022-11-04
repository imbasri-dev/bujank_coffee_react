import { ActionType } from "redux-promise-middleware";

const actionStrings = {
   counterUp: "COUNTER_UP",
   counterDown: "COUNTER_DOWN",
   counterReset: "COUNTER_RESET",
   getBooks: "GET_BOOKS",
   pending: `_${ActionType.Pending}`,
   fulfilled: `_${ActionType.Fulfilled}`,
   rejected: `_${ActionType.Rejected}`,
};

export default actionStrings;
