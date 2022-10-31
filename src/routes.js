import { createBrowserRouter } from "react-router-dom";
// import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
// import CardHistory from "./components/CardHistory";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Promo from "./components/CardPromo";
// import Error from "./pages/Error";

const router = createBrowserRouter([
   // { path: "/", element: <App />, errorElement: <Error /> },
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/signup", element: <Signup /> },
   { path: "/profile", element: <Profile /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/product-detail", element: <ProductDetail /> },
   { path: "/product", element: <Product /> },
   { path: "/card", element: <Promo /> },
   { path: "/history", element: <History /> },
   { path: "/payment", element: <Payment /> },
]);

export default router;
