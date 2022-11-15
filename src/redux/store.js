import {
   legacy_createStore as createStore,
   applyMiddleware,
   combineReducers,
} from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
// import counterReducer from "./reducers/counter";
import { getProfiles } from "./reducers/getProfile";
import { getProduct, counter } from "./reducers/getProduct";
// import bookReducer from "./reducers/getProduct";

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
   // books: bookReducer,
   counter: counter,
   product: getProduct,
   profile: getProfiles,
});
const store = createStore(reducers, middleware);

export default store;
