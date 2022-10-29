import { createBrowserRouter } from "react-router-dom";
// import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import CardHistory from "./components/CardHistory";
import History from "./pages/History";
// import Error from "./pages/Error";

const router = createBrowserRouter([
   // { path: "/", element: <App />, errorElement: <Error /> },
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/signup", element: <Signup /> },
   // { path: "/profile", element: <Profile /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/header", element: <Navbar /> },
   { path: "/product-detail", element: <ProductDetail /> },
   { path: "/product", element: <Product /> },
   { path: "/card", element: <CardHistory /> },
   { path: "/history", element: <History /> },

   // { path: "/product", element: <product /> },
   // { path: "/home", element: <home /> },
]);

export default router;
