import React, { Component } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/FooterBootstrap";
import { Link } from "react-router-dom";
import styles from "../../css/admin/EditPromo.module.css";
import img_promo from "../../assets/image/product/img_promo_food.png";
import editpencil from "../../assets/image/main/icon_editpencil.png";

export class EditPromo extends Component {
   render() {
      return (
         <>
            <NavbarLogin />
            <main className="row mt-5 d-flex justify-content-lg-between justify-content-md-center">
               {/* content left */}
               <section className="d-flex justify-content-between container ">
                  <span className="ps-sm-5 ps-md-5 ps-lg-0">
                     Favorite & Promo <i className="bi bi-chevron-right"></i>
                     <span className={styles.title_choco}>Edit promo</span>
                  </span>
                  <Link
                     to={"/product-admin"}
                     className={`${styles.title_choco} pe-sm-5 pe-md-5 pe-lg-5`}
                  >
                     Cancel
                  </Link>
               </section>

               <aside
                  className={`${styles.content_left} offset-lg-0 col-12 col-sm-12 col-md-5 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start  ms-md-3 ms-lg-3`}
               >
                  <div
                     className={`d-flex flex-column align-items-center justify-content-center mt-sm-5 mt-5 mt-md-0`}
                  >
                     <div
                        className={`${styles.promo} pb-4 d-flex flex-column justify-content-center align-items-center`}
                     >
                        <article className="d-flex flex-column justify-content-center align-items-center text-center">
                           <div
                              className={`${styles.promo_card}  text-wrap p-4`}
                           >
                              <div className="position-relative">
                                 <img
                                    className="img-thumbnail rounded-circle m-3 "
                                    src={img_promo}
                                    alt="promo"
                                 />
                                 <div
                                    className={`${styles.edit} position-absolute `}
                                 >
                                    <img
                                       src={editpencil}
                                       alt="edit_pencil"
                                       width={25}
                                       height={25}
                                    />
                                 </div>
                              </div>

                              <h3 className="fs-4 fw-bold lh-base">
                                 Beef Spaghetti <br /> 20% OFF
                              </h3>
                              <p className="fs-6 fw-light lh-sm">
                                 Buy 1 Choco Oreo and get 20% off <br /> for
                                 Beef Spaghetti
                              </p>
                           </div>
                           <p className="fs-5 pt-3">COUPON CODE</p>
                           <h2 className="fw-bolder fs-3 pb-2">FNPR15RG</h2>
                           <p className="fs-6 fw-lighter">
                              Valid untill October 30th 2022
                           </p>
                        </article>
                     </div>

                     <section className={`${styles.stock_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Expire date :
                        </label>
                        <input
                           className={`${styles.input_} mb-3`}
                           type="date"
                           placeholder="Select start date"
                        />
                        <input
                           className={`${styles.input_}`}
                           type="date"
                           placeholder="Select end date"
                        />
                     </section>
                     <section className={`${styles.code}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Input promo code :
                        </label>
                        <input
                           className={`${styles.input_}`}
                           type="text"
                           placeholder="Input promo code"
                        />
                     </section>
                  </div>
               </aside>
               {/* content right */}
               <section
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-7 text-start d-flex flex-column justify-content-start  `}
               >
                  <form className="text-start d-flex flex-column align-content-center">
                     <section>
                        <label
                           className={`${styles.title_choco} fs-5 mb-3`}
                           htmlFor="name"
                        >
                           Name :
                        </label>{" "}
                        <br />
                        <input
                           className={`${styles.input_right} mb-3`}
                           id="name"
                           type="text"
                           placeholder="Type product name min. 50 characters"
                        />
                     </section>
                     <section>
                        <label
                           className={`${styles.title_choco} fs-5 mb-3`}
                           htmlFor="price"
                        >
                           Price :
                        </label>
                        <br />

                        <input
                           className={`${styles.input_right} mb-3`}
                           id="price"
                           type="number"
                           placeholder="Type the normal price"
                        />
                     </section>
                     <section>
                        <label
                           htmlFor="description"
                           className={`${styles.title_choco} fs-5 mb-3`}
                        >
                           Description :
                        </label>
                        <br />
                        <input
                           className={`${styles.input_right} mb-3`}
                           id="description"
                           type="text"
                           placeholder="Describe your product min. 150 characters"
                        />
                     </section>
                     <section>
                        <label
                           className={`${styles.title_choco} fs-5 mb-3 mt-5`}
                        >
                           Input product size :
                        </label>
                        <p className="my-3 text-muted fs-5">
                           Click product size you want to use for this promo
                        </p>
                        <div className="d-flex mb-5">
                           <span className={`${styles.circle} `}>R</span>
                           <span className={`${styles.circle} mx-4`}>L</span>
                           <span className={`${styles.circle} `}>XL</span>
                        </div>
                     </section>
                     <section>
                        <label className={`${styles.title_choco} fs-5 mb-3`}>
                           Input delivery methods :
                        </label>
                        <p className="text-muted fs-5">
                           Click methods you want to use for this promo
                        </p>
                        <div className="d-flex ">
                           <span className={`${styles.button_method}`}>
                              Home Delivery
                           </span>
                           <span className={`${styles.button_method} mx-3`}>
                              Dine in
                           </span>
                           <span
                              className={`${styles.button_method} ${styles.grey}`}
                           >
                              Take away
                           </span>
                        </div>
                     </section>
                     <section>
                        <label
                           htmlFor="discount"
                           className={`${styles.title_choco} fs-5 mb-3`}
                        >
                           Enter the discount :
                        </label>
                        <br />
                        <input
                           className={`${styles.input_right} mb-3 w-50 px-3`}
                           id="discount"
                           type="number"
                           placeholder="Input Discount %"
                        />
                     </section>
                     <div className={`${styles.button_save} `}>
                        <button className={`${styles.button_submit_} mb-4`}>
                           Save Product
                        </button>
                     </div>
                  </form>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}

export default EditPromo;
