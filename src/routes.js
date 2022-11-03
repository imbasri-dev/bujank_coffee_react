import { createBrowserRouter } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import EditPromo from "./pages/EditPromo";
// import CardHistory from "./components/CardHistory";
import Promo from "./components/CardPromo";
import AddProduct from "./pages/AddProduct";
import AddPromo from "./pages/Addpromo";
import Toast from "./components/Toasts";

// import Error from "./pages/Error";

const router = createBrowserRouter([
   // { path: "/", element: <App />, errorElement: <Error /> },
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/signup", element: <Signup /> },
   { path: "/profile", element: <Profile /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/product-detail/:id", element: <ProductDetail /> },
   { path: "/product", element: <Product /> },
   { path: "/card", element: <Promo /> },
   { path: "/history", element: <History /> },
   { path: "/payment", element: <Payment /> },
   { path: "/add-product", element: <AddProduct /> },
   { path: "/add-promo", element: <AddPromo /> },
   { path: "/edit-promo", element: <EditPromo /> },
   { path: "/toast", element: <Toast msg="Hello" /> },
]);

export default router;
