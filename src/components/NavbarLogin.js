import React from "react";
import { Link } from "react-router-dom";
import icon_coffee from "../assets/image/main/bujank_coffee.png";
import hamburger from "../assets/image/main/icon_hamburger.png";

import styles from "../css/NavbarLogin.module.css";
function NavbarLogin() {
   return (
      <>
         <header>
            <nav className="navbar bg-light px-3">
               <section className="container-fluid d-flex justify-content-between align-items-center">
                  <Link to="/" className="navbar-brand">
                     <img
                        className="me-3"
                        src={icon_coffee}
                        alt="icon_coffee"
                        width="30"
                        height="30"
                     />
                     <span className="fs-6 fw-bold">Bujank Coffee</span>
                  </Link>
                  <div
                     className={`${styles.nav__link} navbar-nav d-flex flex-row flex-lg-row d-none d-md-flex d-lg-flex  mx-auto`}
                  >
                     <Link
                        to="/"
                        className="nav-link p-2 m-3 active"
                        aria-current="page"
                     >
                        Home
                     </Link>
                     <Link to="/product" className="nav-link p-2 m-3">
                        Product
                     </Link>
                     <Link to="/signup" className="nav-link p-2 m-3">
                        Your Cart
                     </Link>
                     <Link to="/signup" className="nav-link p-2 m-3">
                        History
                     </Link>
                  </div>
                  <div
                     className={`${styles.nav__utility} d-none d-sm-none d-md-none d-md-block d-lg-block`}
                  >
                     <Link
                        to="/login"
                        className={`${styles.login} text-decoration-none fw-bold`}
                     >
                        Login
                     </Link>
                     <Link
                        to="/signup"
                        className={`${styles.signup} text-decoration-none ms-5 fw-bold`}
                     >
                        Sign Up
                     </Link>
                  </div>
                  <span>
                     <img
                        className="d-lg-none d-md-block"
                        src={hamburger}
                        alt="hamburger"
                     />
                  </span>
               </section>
            </nav>
         </header>
      </>
   );
}

export default NavbarLogin;
