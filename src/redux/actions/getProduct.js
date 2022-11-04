import actionStrings from "./actionStrings";
import { getBook } from "../../https/books";

const getBookAction = () => {
   return {
      type: actionStrings.getBooks,
      payload: getBook(),
   };
};

const bookAction = {
   getBookAction,
};

export default bookAction;
