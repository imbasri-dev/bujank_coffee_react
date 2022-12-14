import React, { Component } from "react";
// import Navbar & Footer
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import NavbarLogin from "../components/NavbarLogin";
// import Css
import styles from "../css/Payment.module.css";
import withNavigate from "../helpers/withNavigate";
// import image
// import product_1 from "../assets/image/product/img_hazelnut.png";
// import product_2 from "../assets/image/product/img_chickenfire.png";
import icon_card from "../assets/image/main/icon_card.png";
import icon_cod from "../assets/image/main/icon_cod.png";
import icon_bank from "../assets/image/main/icon_bank.png";
import title from "../helpers/title";
import { connect } from "react-redux";
class Payment extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
   };

   costToRP = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   render() {
      title("Payment");
      return (
         <>
            {/* <!-- Start Navbar --> */}
            {this.state.userInfo.token ? <Navbar /> : <NavbarLogin />}
            {/* <!-- End Navbar --> */}
            <main>
               <div
                  className={`container-fluid ${styles["background-payment"]}`}
               >
                  <div className={`container ${styles["title-payment"]}`}>
                     <h3>
                        Checkout your <br /> item now!
                     </h3>
                     <div className="row d-flex justify-content-between flex-sm-column flex-md-column  flex-lg-row  gap-5">
                        <div
                           className={`${styles["content-left-payment"]} col-md-12 col-sm-12 col-lg-5 bg-white rounded-5`}
                        >
                           <div className={styles["box-left"]}>
                              <p>Order Summary</p>
                              {/* payment */}
                              <div className={styles["payment-content"]}>
                                 <img
                                    className="img-thumbnail"
                                    src={this.props.image}
                                    alt="image_product"
                                    width="100px"
                                    height="100px"
                                 ></img>
                                 <div className={styles["payment-center"]}>
                                    <p>{this.props.name}</p>
                                    <p>x{this.props.counter}</p>
                                    <p>
                                       {this.props.size === "L"
                                          ? "LARGE"
                                          : this.props.size === "R"
                                          ? "REGULER"
                                          : this.props.size === "XL"
                                          ? "EXTRA LARGE"
                                          : null}
                                    </p>
                                 </div>
                                 <div className={styles["payment-idr"]}>
                                    <p>{`${this.costToRP(
                                       this.props.price
                                    )}`}</p>
                                 </div>
                              </div>

                              {/* subtotal */}
                              <hr className="mx-5 my-4"></hr>
                              <div className={styles["total-payment"]}>
                                 <div className={styles["total-payment-left"]}>
                                    <p>SUBTOTAL</p>
                                    <p>TAX & FEES</p>
                                    <p>SHIPPING</p>
                                 </div>
                                 <div className={styles["total-payment-right"]}>
                                    <p>{`${this.costToRP(
                                       this.props.totalPrice
                                    )}`}</p>
                                    <p>IDR: 20.000</p>
                                    <p>IDR: 10.000</p>
                                 </div>
                              </div>
                              <div className={styles["subtotal-payment"]}>
                                 <p>TOTAL</p>
                                 <p>IDR 150.000</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-lg-5 d-flex flex-column mb-5">
                           <div className="row d-flex flex-column">
                              <div className="col-12">
                                 <div className={styles["address-detail"]}>
                                    <h2>Address</h2>
                                    <p
                                       className={styles.edit}
                                       onClick={() => {
                                          this.props.navigate("/profile");
                                       }}
                                    >
                                       edit
                                    </p>
                                 </div>
                                 <div className={styles["box-address"]}>
                                    <h5>
                                       <span className="me-1 fw-bold">
                                          Delivery To :
                                       </span>
                                       {this.props.displayname}
                                    </h5>
                                    <p className={styles["address-column"]}>
                                       {this.props.address}
                                    </p>
                                    <p>{this.props.phone_number}</p>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className={styles["payment-method"]}>
                                    <h2>Payment Method</h2>
                                 </div>
                                 <div className={styles["choose-payment"]}>
                                    <div className={styles["radio-payment"]}>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_card}
                                                alt="icon-card"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Card</span>
                                          </div>
                                       </div>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_bank}
                                                alt="icon-bank"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Bank</span>
                                          </div>
                                       </div>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_cod}
                                                alt="icon-cod"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Cash On Delivery</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className={styles["confirm-pay"]}>
                                 <button
                                    onClick={() => {
                                       this.props.navigate("/history");
                                    }}
                                 >
                                    <span>Confirm and Pay</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
            {/* <!-- Start Navbar --> */}
            <Footer />
            {/* <!-- End Navbar --> */}
         </>
      );
   }
}

const mapStateToProps = (reduxState) => {
   console.log(reduxState);
   return {
      address: reduxState.profile.address,
      phone_number: reduxState.profile.phone_number,
      displayname: reduxState.profile.displayname,
      counter: reduxState.counter.number,
      name: reduxState.product.name,
      image: reduxState.product.image,
      price: reduxState.product.price,
      totalPrice: reduxState.product.totalPrice,
      size: reduxState.product.size,
   };
};
export default connect(mapStateToProps)(withNavigate(Payment));
