import React, { Component } from "react";
import styles from "../css/CardHistory.module.css";
// import gambar from "../assets/image/product/img_veggie_food.png";
// import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CardHistory extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      urlDelete: `${process.env.REACT_APP_BACKEND_HOST}/api/transaction/${this.props.id}`,
      show: false,
      close: false,
   };
   // modal
   handleClose = () => this.setState({ show: false });
   handleShow = () => this.setState({ show: true });
   handleCloseButton = () => this.setState({ close: false });
   handleOpenButton = () =>
      this.setState({ close: true, debug: console.log("click") });
   handleDelete = () => {
      const { userInfo, idHistory } = this.state;
      console.log(idHistory);
      axios
         .delete(this.state.urlDelete, {
            headers: {
               "x-access-token": userInfo.token,
            },
         })
         .then((response) => {
            console.log(response.data);
            toast.success(response.data.msg, {
               position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
               this.handleClose();
               window.location.reload();
            }, 1000);
         })
         .catch((err) => {
            console.log(err.message);
            toast.err(err.message, {
               position: toast.POSITION.TOP_RIGHT,
            });
         });
   };
   render() {
      return (
         <>
            <section
               className={`${styles["border"]} col-lg-3 col-md-6 col-sm-12 row my-2 mx-1 text-decoration-none d-flex justify-content-cemter text-start align-content-center position-relative`}
            >
               <div
                  className={`${styles.card_bar} d-flex justify-content-between`}
                  onClick={this.handleOpenButton}
               >
                  <div className="col-sm-6 w-25 mx-auto col-md-6 col-lg-3 py-2 ">
                     <img
                        className={`${styles["imagine"]} rounded-circle`}
                        src={this.props.image_product}
                        alt="image_product"
                     />
                  </div>
                  <article className="text-start col-sm-6 p-sm-6 mx-auto col-md-6 col-lg ms-2 py-2">
                     <p className={`${styles["title"]}`}>{this.props.name}</p>
                     <p className={`${styles["IDR"]}`}>{this.props.price}</p>
                     <p className={`${styles["delivered"]}`}>
                        {this.props.status}
                     </p>
                  </article>
               </div>
               {/* close and show button */}
               {!this.state.close ? (
                  true
               ) : (
                  <div
                     className={`${styles.del_close} position-absolute text-decoration-none `}
                  >
                     <button
                        className={styles.delete}
                        onClick={this.handleShow}
                        value={this.props.id}
                     >
                        <i className="bi bi-trash3">{this.props.id}</i>
                     </button>
                     <button
                        className={styles.close}
                        onClick={this.handleCloseButton}
                     >
                        <i className="bi bi-x-circle"></i>
                     </button>
                  </div>
               )}
            </section>

            <Modal
               show={this.state.show}
               onHide={this.handleClose}
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>confirmation😊</Modal.Title>
               </Modal.Header>
               <Modal.Body>do you want to delete?</Modal.Body>
               <Modal.Footer>
                  <Button
                     variant="secondary"
                     className="fw-bold text-bg-secondary text-white"
                     onClick={this.handleClose}
                  >
                     No ❌
                  </Button>
                  <Button
                     variant="success"
                     className="fw-bold text-bg-success text-white"
                     onClick={() => {
                        this.handleDelete();
                        setTimeout(() => {
                           this.handleClose();
                        }, 500);
                     }}
                  >
                     Yes ✅
                  </Button>
               </Modal.Footer>
            </Modal>
            <ToastContainer />
         </>
      );
   }
}
export default CardHistory;
