import React from "react";
import ReactDOM from "react-dom/client";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
// import  router
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";

// redux
import reduxStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      {/* <Home /> */}
      <ReduxProvider store={reduxStore}>
         <RouterProvider router={router} />
      </ReduxProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
