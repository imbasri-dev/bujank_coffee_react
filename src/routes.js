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
import EditPromo from "./pages/admin/EditPromo";
// import component
import Promo from "./components/CardPromo";
import AddProduct from "./pages/admin/AddProduct";
import AddPromo from "./pages/admin/AddPromo";
import Toast from "./components/Toasts";
import NavLogin from "./components/NavbarLogin";
import PrivateElement from "./components/PrivateElement";
import Counter from "./pages/Counter";

const router = createBrowserRouter([
   // { path: "/", element: <App />, errorElement: <Error /> },
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/signup", element: <Signup /> },
   {
      path: "/profile",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <Profile />
         </PrivateElement>
      ),
   },
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
   { path: "/navbarlogin", element: <NavLogin /> },

   { path: "/counter", element: <Counter /> },
]);

export default router;
