// component
import Footer from "../../components/FooterBootstrap";

import styles from "../../css/admin/AddProduct.module.css";
// import addImage from "../../assets/image/main/img_dummy_uploadphoto.png";
import title from "../../helpers/title";
import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import NavbarAdmin from "../../components/NavbarAdmin";
import NavbarLogin from "../../components/NavbarLogin";
import withNavigate from "../../helpers/withNavigate";
import withParams from "../../helpers/withRouteParams";
import Axios from "axios";
export class AddProduct extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      navLogin: <Navbar />,
      navAdmin: <NavbarAdmin />,
      navnotLogin: <NavbarLogin />,
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/${this.props.params.id}`,
      name: "",
      price: null,
      description: "",
      size: "",
      delivery: "",
      start_hour: null,
      end_hour: null,
      stock: "",
      image: "",
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

   componentDidMount() {
      const { userInfo } = this.state;
      // console.log(userInfo.token); getToken
      Axios.get(this.state.url, {
         headers: {
            "x-access-token": userInfo.token,
         },
      })
         .then((response) => {
            const data = response.data.data[0];
            console.log(data);
            // console.log(response.msg);
            this.setState({
               image: data.image,
               name: data.name,
               price: data.price,
               description: data.description,
               size: data.size,
               stock: data.stock,
               // delivery: data.delivery,
               // start_hour: data.start_hour,
               // end_hour: data.end_hour,
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   // refactory handleInput
   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
         [name]: value,
      });
   };
   render() {
      title("Add-Product");
      const { image, name, price, description, stock } = this.state;
      return (
         <>
            <this.navType />
            <main className="row mt-5 d-flex justify-content-lg-between justify-content-md-center">
               {/* content left */}
               <span>
                  Favorite & Promo <i className="bi bi-chevron-right"></i>
                  <span className={styles.title_choco}>{name}</span>
               </span>
               <aside
                  className={`${styles.content_left} offset-lg-0 col-12 col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start justify-content-md-center ms-md-3`}
               >
                  <div
                     className={`d-flex flex-column align-items-center justify-content-center `}
                  >
                     <img
                        src={image}
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
                           Delivery Hour :
                        </label>
                        <input
                           className={`${styles.input_} mb-3`}
                           type="time"
                        />
                        <input className={`${styles.input_}`} type="time" />
                     </section>
                     <section className={`${styles.stock_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Input stock :
                        </label>
                        <input
                           className={`${styles.input_}`}
                           type="number"
                           placeholder={stock}
                           value={stock}
                           name="stock"
                           onChange={this.handleChange}
                        />
                     </section>
                  </div>
               </aside>
               {/* content right */}
               <section
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 text-start d-flex flex-column justify-content-start `}
               >
                  <form className="text-start d-flex flex-column">
                     <section>
                        <label
                           className={`${styles.title_choco} fs-5 mb-3`}
                           htmlFor="name"
                        >
                           Name :
                        </label>
                        <br />
                        <input
                           className={`${styles.input_right} mb-3`}
                           id="name"
                           name="name"
                           type="text"
                           placeholder={name}
                           value={name}
                           onChange={this.handleChange}
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
                           placeholder={price}
                           value={price}
                           name="price"
                           onChange={this.handleChange}
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
                        <textarea
                           className={`${styles.input_right} mb-3`}
                           id="description"
                           type="text"
                           placeholder={description}
                           value={description}
                           onChange={this.handleChange}
                           name="description"
                        />
                     </section>
                     <section>
                        <label
                           className={`${styles.title_choco} fs-5 mb-3 mt-5`}
                        >
                           Input product size :
                        </label>
                        <p className="my-3 text-muted">
                           Click size you want to use for this product
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
                           Click methods you want to use for this product
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
                     <div className="mt-5">
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

export default withParams(withNavigate(AddProduct));
