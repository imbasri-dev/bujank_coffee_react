import React from "react";
import { Link } from "react-router-dom";
// import css navbar
import styles from "../css/Navbar.module.css";
// import image
import icon_coffee from "../assets/image/main/logo_coffee.png";
import icon_search from "../assets/image/main/icon_search.png";
import icon_chat from "../assets/image/main/icon_message_button.png";
import icon_profile from "../assets/image/main/img_userprofile.png";

function Navbar() {
   return (
      <>
         <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
            <Link to="/" className={`${styles["left-nav"]} d-flex py-4`}>
               <img
                  src={icon_coffee}
                  alt=""
                  className="me-2"
                  widht="30"
                  height="30"
               />
               <span className="mt-1">Bujank Coffee</span>
            </Link>
            <div
               className={`${styles["center-nav"]} d-sm-none d-none d-sm-none d-md-none d-lg-flex flex-row`}
            >
               <Link to="/" className="nav-link">
                  Home
               </Link>
               <Link to="/product" className="nav-link">
                  Product
               </Link>
               <Link to="/product-detail" className="nav-link">
                  Your Cart
               </Link>
               <Link to="/history" className="nav-link">
                  History
               </Link>
            </div>
            <div className={`${styles["right-nav"]} d-flex`}>
               <Link
                  to="#"
                  className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"
               >
                  <img src={icon_search} alt="" widht="30" height="30" />
               </Link>
               <Link
                  to="#"
                  className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"
               >
                  <img src={icon_chat} alt="" widht="30" height="30" />
               </Link>
               <Link to="/profile" className="nav-link">
                  <img
                     className={styles.img_userprofile}
                     src={icon_profile}
                     alt=""
                     widht="30"
                     height="30"
                  />
               </Link>
               <Link to="#" className="nav-link d-lg-none d-sm-block">
                  <span className={styles.burger}>
                     <i class="bi bi-list fs-4"></i>
                  </span>
               </Link>
            </div>
         </nav>
      </>
   );
}

export default Navbar;
