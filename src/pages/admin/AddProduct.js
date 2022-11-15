// component
import Footer from "../../components/FooterBootstrap";

import styles from "../../css/admin/AddProduct.module.css";
// import addImage from "../../assets/image/main/img_dummy_uploadphoto.png";
import { ToastContainer, toast } from "react-toastify";
import title from "../../helpers/title";
import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import NavbarAdmin from "../../components/NavbarAdmin";
import NavbarLogin from "../../components/NavbarLogin";
import withNavigate from "../../helpers/withNavigate";

import axios from "axios";
export class AddProduct extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/add`,
      name: "",
      price: "",
      description: "",
      size: "",
      stock: "",
      image: "",
      category: "",
      display:
         "https://res.cloudinary.com/dnml5qsiz/image/upload/v1667811751/bujank_coffee/img_photo_dummy.png",
      navLogin: <Navbar />,
      navAdmin: <NavbarAdmin />,
      navnotLogin: <NavbarLogin />,
   };
   componentDidMount() {
      window.scroll(0, 0);
   }
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

   inputName = (e) => {
      console.log(e.target.value);
      this.setState({ name: e.target.value });
   };
   inputPrice = (e) => {
      console.log(e.target.value);
      this.setState({ price: e.target.value });
   };
   inputDescription = (e) => {
      console.log(e.target.value);
      this.setState({ description: e.target.value });
   };
   inputStock = (e) => {
      this.setState({
         stock: e.target.value,
         debug: console.log(e.target.value),
      });
   };
   inputSize = (e) => {
      this.setState({
         size: e.target.value,
         debug: console.log(e.target.value),
      });
   };
   inputCategory = (e) => {
      this.setState({
         category: e.target.value,
         debug: console.log(e.target.value),
      });
   };
   inputImage = (event) => {
      // console.log(this.state.image);
      if (event.target.files && event.target.files[0]) {
         this.setState({
            display: URL.createObjectURL(event.target.files[0]),
            image: event.target.files[0],
         });
      }
   };

   // handlesubmit
   submitNewProduct = (event) => {
      event.preventDefault();
      const {
         url,
         userInfo,
         name,
         price,
         description,
         size,
         stock,
         image,
         category,
      } = this.state;

      let formData = new FormData();
      if (image) formData.append("image", image);
      if (name) formData.append("name", name);
      if (price) formData.append("price", price);
      if (description) formData.append("description", description);
      if (size) formData.append("size", size);
      if (stock) formData.append("stock", stock);
      if (category) formData.append("category", category);

      axios
         .post(url, formData, {
            headers: {
               "x-access-token": userInfo.token,
               "Content-Type": "multipart/form-data",
            },
         })
         .then((response) => {
            console.log(response.data.msg);
            toast.success(response.data.msg, {
               position: toast.POSITION.TOP_RIGHT,
            });
            // Run code setelah async
            window.location.reload();
         })
         .catch((err) => {
            console.log(err);
            toast.err(err.message, {
               position: toast.POSITION.TOP_RIGHT,
            });
         });
   };
   render() {
      title("new product");
      const { display } = this.state;
      return (
         <>
            <this.navType />
            <main className="row mt-5 d-flex justify-content-lg-between justify-content-md-center">
               {/* content left */}
               <span>
                  Favorite & Promo <i className="bi bi-chevron-right"></i>
                  <span className={styles.title_choco}>Add new product</span>
               </span>
               <aside
                  className={`${styles.content_left}  offset-lg-0 col-12 col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start justify-content-md-center ms-md-3`}
               >
                  <div
                     className={`d-flex flex-column align-items-center justify-content-center `}
                  >
                     <img
                        src={display}
                        className={`${styles.addImage} mb-5`}
                        alt="img_product"
                     />
                     <span className={`${styles.btn_} ${styles.take} mb-3`}>
                        Take a picture
                     </span>
                     <label
                        className={`${styles.btn_} ${styles.choose} `}
                        htmlFor="files"
                     >
                        Choose from gallery
                     </label>
                     <input
                        className={styles.hidden}
                        type="file"
                        id="files"
                        onChange={this.inputImage}
                     />

                     <section className={`${styles.hour_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Delivery Hour :
                        </label>
                        <input
                           className={`${styles.input_} ${styles.disabled} mb-3`}
                           type="time"
                        />
                        <input
                           className={`${styles.input_} ${styles.disabled}`}
                           type="time"
                        />
                     </section>
                     <section className={`${styles.stock_bar}`}>
                        <label className={`${styles.title_choco} fs-5`}>
                           Input stock :
                        </label>
                        <input
                           className={`${styles.input_}`}
                           type="number"
                           placeholder="input stock"
                           onChange={this.inputStock}
                        />
                     </section>
                  </div>
               </aside>
               {/* content right */}
               <section
                  className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 text-start d-flex flex-column justify-content-start `}
               >
                  <div className="text-start d-flex flex-column">
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
                           type="text"
                           placeholder="Type product name min. 50 characters"
                           onChange={this.inputName}
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
                           placeholder="Type the price"
                           onChange={this.inputPrice}
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
                           onChange={this.inputDescription}
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
                           <button
                              className={`${styles.circle}`}
                              value="R"
                              onClick={this.inputSize}
                           >
                              R
                           </button>
                           <button
                              className={`${styles.circle} mx-4`}
                              value="L"
                              onClick={this.inputSize}
                           >
                              L
                           </button>
                           <button
                              className={`${styles.circle}`}
                              value="XL"
                              onClick={this.inputSize}
                           >
                              XL
                           </button>
                        </div>
                     </section>
                     <section>
                        <label className={`${styles.title_choco} fs-5 mb-3`}>
                           Input Category :
                        </label>
                        <p className="text-muted">
                           Click Category you want to use for this product
                        </p>
                        <div className="d-flex">
                           <button
                              className={`${styles.button_method}`}
                              onClick={this.inputCategory}
                              value="FOOD"
                           >
                              FOOD
                           </button>
                           <button
                              className={`${styles.button_method} ${styles.grey} mx-3`}
                              onClick={this.inputCategory}
                              value="COFFEE"
                           >
                              COFFEE
                           </button>
                           <button
                              className={`${styles.button_method} ${styles.grey}`}
                              onClick={this.inputCategory}
                              value="NONCOFFEE"
                           >
                              NON COFEE
                           </button>
                           <button
                              className={`${styles.button_method} ${styles.grey} mx-3`}
                              onClick={this.inputCategory}
                              value="ADDON"
                           >
                              ADDON
                           </button>
                        </div>
                     </section>
                     <div className="mt-5">
                        <button
                           onClick={(event) => {
                              this.submitNewProduct(event);
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
                  </div>
               </section>
            </main>
            <Footer />
            <ToastContainer />
         </>
      );
   }
}

export default withNavigate(AddProduct);
