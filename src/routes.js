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
import EditProductDetail from "./pages/admin/EditProductDetail";
import ProductAdmin from "./pages/admin/ProductAdmin";
import AddProductId from "./pages/admin/AddProductId";
import AddProduct from "./pages/admin/AddProduct";
// import AddPromo from "./pages/admin/AddPromo";
// import component
import Promo from "./components/CardPromo";
import Toast from "./components/Toasts";
import NavLogin from "./components/NavbarLogin";
import PrivateElement from "./components/PrivateElement";
import NavbarAdmin from "../src/components/NavbarAdmin";
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
   {
      path: "/forgot",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <ForgotPassword />
         </PrivateElement>
      ),
   },
   {
      path: "/product-detail/:id",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <ProductDetail />
         </PrivateElement>
      ),
   },
   { path: "/product", element: <Product /> },
   { path: "/card", element: <Promo /> },
   {
      path: "/history",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <History />
         </PrivateElement>
      ),
   },
   {
      path: "/payment",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <Payment />
         </PrivateElement>
      ),
   },
   {
      path: "/add-product/:id",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <AddProductId />
         </PrivateElement>
      ),
   },
   {
      path: "/add-product",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <AddProduct />
         </PrivateElement>
      ),
   },
   // {
   //    path: "/add-promo",
   //    element: (
   //       <PrivateElement allowedRoles={["admin"]}>
   //          <AddPromo />
   //       </PrivateElement>
   //    ),
   // },
   {
      path: "/edit-promo",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <EditPromo />
         </PrivateElement>
      ),
   },
   {
      path: "/edit-productdetail",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <EditProductDetail />
         </PrivateElement>
      ),
   },
   {
      path: "/product-admin",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <ProductAdmin />
         </PrivateElement>
      ),
   },
   { path: "/toast", element: <Toast msg="Hello" /> },
   { path: "/navbarlogin", element: <NavLogin /> },
   { path: "/counter", element: <Counter /> },
   { path: "/navbaradmin", element: <NavbarAdmin /> },
]);

export default router;
