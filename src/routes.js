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
import NewProduct from "./pages/admin/AddProduct";
import NewPromo from "./pages/admin/AddPromo";
import Dashboard from "./pages/admin/Dashboard";
// import component
import Promo from "./components/CardPromo";
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
      path: "/product/:id",
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
      path: "/product/edit/:id",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <AddProductId />
         </PrivateElement>
      ),
   },
   {
      path: "/product/new",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <NewProduct />
         </PrivateElement>
      ),
   },
   {
      path: "/promo/new",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <NewPromo />
         </PrivateElement>
      ),
   },
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
   {
      path: "/dashboard",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <Dashboard />
         </PrivateElement>
      ),
   },
   { path: "/navbarlogin", element: <NavLogin /> },
   { path: "/counter", element: <Counter /> },
   { path: "/navbaradmin", element: <NavbarAdmin /> },
]);

export default router;
