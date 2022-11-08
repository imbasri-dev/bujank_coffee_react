import React, { Component } from "react";
// component
import Footer from "../../components/FooterBootstrap";
import styles from "../../css/admin/AddPromo.module.css";
import addImage from "../../assets/image/main/img_dummy_uploadphoto.png";
import title from "../../helpers/title";

import Navbar from "../../components/Navbar";
import NavbarAdmin from "../../components/NavbarAdmin";
import NavbarLogin from "../../components/NavbarLogin";

import withNavigate from "../../helpers/withNavigate";

export class AddPromo extends Component {
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
      title("Product");
      return (
         <>
            <this.navType />
            <main className="row mt-5 d-flex justify-content-lg-between justify-content-md-center">
               {/* content left */}
               <span>
                  Favorite & Promo <i className="bi bi-chevron-right"></i>
                  <span className={styles.title_choco}>Add new promo</span>
               </span>
               <aside
                  className={`${styles.content_left} offset-lg-0 col-12 col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start ms-md-3`}
               >
                  <div
                     className={`d-flex flex-column align-items-center justify-content-center `}
                  >
                     <img
                        src={addImage}
                        className={`${styles.addImage} mb-5`}
                        alt="img_product"
                     />
                     <span className={`${styles.btn_} ${styles.take} mb-3`}>
                        Take a picture
                     </span>
                     <span className={`${styles.btn_} ${styles.choose} `}>
                        Choose from gallery
                     </span>
                     <section className={`${styles.hour_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Enter the discount :
                        </label>
                        <input
                           className={`${styles.input_} mb-3`}
                           type="number"
                           placeholder="Input discount"
                        />
                     </section>
                     <section className={`${styles.stock_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Expire date :
                        </label>
                        <input
                           className={`${styles.input_} mb-3`}
                           type="text"
                           placeholder="Select start date"
                        />
                        <input
                           className={`${styles.input_}`}
                           type="text"
                           placeholder="Select end date"
                        />
                     </section>
                     <section className={`${styles.code}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Input coupon code :
                        </label>
                        <input
                           className={`${styles.input_}`}
                           type="number"
                           placeholder="Input stock"
                        />
                     </section>
                  </div>
               </aside>
               {/* content right */}
               <section
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 text-start d-flex flex-column justify-content-start  `}
               >
                  <form className="text-start d-flex flex-column">
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
                           Normal Price :
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
                        <p className="my-3 text-muted">
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
                        <p className="text-muted">
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
                     <div className={`${styles.button_save} `}>
                        <button
                           onClick={() => {
                              this.props.navigate("/product-admin");
                           }}
                           className={`${styles.button_submit_} mb-4`}
                        >
                           Save Product
                        </button>
                        <button
                           className={`${styles.button_submit_} ${styles.grey}`}
                        >
                           Cancel
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

export default withNavigate(AddPromo);
