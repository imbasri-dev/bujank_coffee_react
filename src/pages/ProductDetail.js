import React, { Component } from "react";
import styles from "../css/ProductDetail.module.css";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
import { Link } from "react-router-dom";
import withParams from "../helpers/withRouteParams";
import Axios from "axios";
import CounterActions from "../redux/actions/counter";

class ProductDetail extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/${this.props.params.id}`,
      // test: `${process.env.REACT_APP_BACKEND_HOST}/api/product/14`,
      name: "",
      category: "",
      size: "",
      price: "",
      stock: "",
      image: "",
      description: "",
   };

   costToRP = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };
   componentDidMount() {
      Axios.get(this.state.url)
         .then((response) => {
            console.log(response.data.data[0].name);
            this.setState({
               name: response.data.data[0].name,
               image: response.data.data[0].image,
               description: response.data.data[0].description,
               size: response.data.data[0].size,
               price: this.costToRP(response.data.data[0].price),
            });
         })
         .catch((err) => {
            console.log(err);
         });
   }

   render() {
      const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
      const { name, image, description, size, price } = this.state;
      // const params_id = this.params.id;
      // console.log(params_id);
      title("Product-detail");
      return (
         <>
            {userInfo.token ? <Navbar /> : <NavbarLogin />}
            <main className="container ">
               <div className="position-relative row d-flex justify-content-center align-content-center flex-column flex-md-row">
                  {/* breadcrumb */}
                  <section
                     className={`${styles.content_left_bar} col-6 col-sm-12 col-lg-6 col-md-6 text-center`}
                  >
                     <nav className="text-start">
                        <section className="text-start align-items-start fs-5">
                           Favorite & Promo{" "}
                           <i className="bi bi-chevron-right"></i>
                           <span>
                              <Link className={styles.title_product}>
                                 {name}
                              </Link>
                           </span>
                        </section>
                     </nav>
                     <img
                        className={`${styles.content_left} my-5`}
                        src={image}
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
                     <h2 className={styles.title}>{name}</h2>
                     <p className="text-start">{description}</p>
                     <p className={`${styles.info} text-start mt-5`}>
                        Delivery only on <span>Monday to</span> <br />
                        <span>friday</span> at <span>1 - 7 pm</span>
                     </p>
                     <section className="d-flex justify-content-between align-items-center">
                        <div
                           className={`${styles.qty} d-flex justify-content-center align-items-center`}
                        >
                           <span>
                              <button
                                 type="button"
                                 onClick={() =>
                                    this.props.dispatch(
                                       CounterActions.counterDown()
                                    )
                                 }
                              >
                                 -
                              </button>
                           </span>
                           <input type="text" value={this.props.counter} />
                           <span>
                              <button
                                 type="button"
                                 onClick={() =>
                                    this.props.dispatch(
                                       CounterActions.counterUp()
                                    )
                                 }
                              >
                                 +
                              </button>
                           </span>
                        </div>
                        <p className={styles.price}>{price}</p>
                     </section>
                     <span
                        className={`${styles.cart} mb-3 mb-sm-5 mb-md-5 mb-lg-3`}
                     >
                        Add to Cart
                     </span>
                     <br />
                     <span className={styles.staff}>Ask a Staff</span>
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
                              src={image}
                              alt="prod_cold_brew"
                           />
                           <section className="d-flex flex-column justify-content-center">
                              <h5 className="fw-bold fs-4">{name}</h5>
                              <span className="fs-5">
                                 x{`${this.props.counter}`} ({size})
                              </span>
                           </section>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                           <span className="fs-4 fw-bold">Checkout</span>
                           <Link
                              to="/payment"
                              className={styles.button_checkout}
                           >
                              <i className="bi bi-arrow-right"></i>
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

const mapStateToProps = (reduxState) => {
   console.log(reduxState);
   return {
      counter: reduxState.counter.number,
   };
};
const productdetailParams = withParams(ProductDetail);

export default connect(mapStateToProps)(productdetailParams);
