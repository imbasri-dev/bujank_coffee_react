import React, { Component } from "react";
import styles from "../../css/admin/EditProductDetail.module.css";
import prod_cold_brew from "../../assets/image/product/img_coldbrew.png";
import Navbar from "../../components/Navbar";
import NavbarLogin from "../../components/NavbarLogin";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/FooterBootstrap";
import title from "../../helpers/title";
import { Link } from "react-router-dom";
class EditProductDetail extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      navLogin: <Navbar />,
      navAdmin: <NavbarAdmin />,
      navnotLogin: <NavbarLogin />,
   };

   navType = () => {
      if (this.state.userInfo.token) {
         if (this.state.userInfo.role === "user") {
            return this.state.navLogin;
         } else {
            return this.state.navAdmin;
         }
      } else {
         return this.state.navnotLogin;
      }
   };
   render() {
      title("Product-detail");
      return (
         <>
            <this.navType />
            <main className="container ">
               <div className="position-relative row d-flex justify-content-center align-content-center flex-column flex-md-row">
                  {/* breadcrumb */}
                  <section
                     className={`${styles.content_left_bar} col-6 col-sm-12 col-lg-6 col-md-6 text-center`}
                  >
                     <nav className="text-start">
                        <section className="text-start align-items-start fs-5">
                           Favorite & Promo <i class="bi bi-chevron-right"></i>
                           <span>
                              <a className={styles.title_product} href="/">
                                 Cold Brew
                              </a>
                           </span>
                        </section>
                     </nav>
                     <img
                        className={`${styles.content_left} my-5`}
                        src={prod_cold_brew}
                        alt="prod_cold_brew"
                     />
                     <section
                        className={`${styles.delivery_time_bar} d-flex flex-column justify-content-start text-start p-4 mx-auto`}
                     >
                        <h3 className="fs-3 fw-bold">Delivery and Time</h3>
                        <section className="my-4 d-flex flex-wrap">
                           <button
                              className={`${styles.btn_delivery_time} ${styles.selected} my-sm-2`}
                           >
                              Dine in
                           </button>
                           <button
                              className={`${styles.btn_delivery_time} my-sm-2`}
                           >
                              Door Delivery
                           </button>
                           <button
                              className={`${styles.btn_delivery_time} my-sm-2`}
                           >
                              Pick Up
                           </button>
                        </section>
                        <section className="mt-2 mb-4">
                           <span className={styles.now}>Now</span>
                           <button
                              className={`${styles.btn_delivery_time} ${styles.selected}`}
                           >
                              Yes
                           </button>
                           <button className={styles.btn_delivery_time}>
                              No
                           </button>
                        </section>
                        <section className="d-flex align-items-center">
                           <span className="fs-5 me-3 fw-light">Set Time</span>
                           <input
                              className={styles.set_time}
                              type="text"
                              name="set_time"
                              id="set_time"
                              placeholder="Enter time for reservation"
                           />
                        </section>
                     </section>
                  </section>
                  <article
                     className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 text-center d-flex flex-column justify-content-between mx-auto`}
                  >
                     <h2 className={styles.title}>COLD BREW</h2>
                     <p className="text-start">
                        Cold brewing is a method of brewing that combines ground
                        coffee and cool water and uses time instead of heat to
                        extract the flavor. It is brewed in small batches and
                        steeped for as long as 48 hours.
                     </p>
                     <p className={`${styles.info} text-start mt-5`}>
                        Delivery only on <span>Monday to</span> <br />
                        <span>friday</span> at <span>1 - 7 pm</span>
                     </p>
                     <section className="d-flex justify-content-between align-items-center">
                        <div
                           className={`${styles.qty} d-flex justify-content-center align-items-center`}
                        >
                           <span>
                              <button type="button">-</button>
                           </span>
                           <input type="text" maxlength="2" />
                           <span>
                              <button type="button">+</button>
                           </span>
                        </div>
                        <p className={styles.price}>IDR 30.000</p>
                     </section>
                     <span
                        className={`${styles.cart} mb-3 mb-sm-5 mb-md-5 mb-lg-3`}
                     >
                        Add to Cart
                     </span>
                     <br />
                     <span className={styles.staff}>Edit Product</span>
                  </article>
                  <section
                     className={`${styles.choose_checkout} row justify-content-between flex-sm-column flex-md-column flex-md-row flex-lg-row`}
                  >
                     <section
                        className={`${styles.size} col-12 text-center mx-auto col-sm-12 `}
                     >
                        <h4>Choose a size</h4>
                        <button className=" rounded-circle">R</button>
                        <button className=" rounded-circle">L</button>
                        <button className=" rounded-circle">XL</button>
                     </section>
                     <section
                        className={`${styles.checkout} col-12 col-sm-12 d-flex justify-content-between align-content-center`}
                     >
                        <div className="d-flex justify-content-center align-items-center">
                           <img
                              className="me-3"
                              src={prod_cold_brew}
                              alt="prod_cold_brew"
                           />
                           <section className="d-flex flex-column justify-content-center">
                              <h5 className="fw-bold fs-4">COLD BREW</h5>
                              <span>x1 (Large)</span>
                              <span>x1 (Regular)</span>
                           </section>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                           <span className="fs-4 fw-bold">Checkout</span>
                           <Link
                              to="/payment"
                              className={styles.button_checkout}
                           >
                              <i class="bi bi-arrow-right"></i>
                           </Link>
                        </div>
                     </section>
                  </section>
               </div>
            </main>
            <Footer />
         </>
      );
   }
}

export default EditProductDetail;
