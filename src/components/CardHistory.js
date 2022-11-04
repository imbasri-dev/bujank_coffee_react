import React, { Component } from "react";
import styles from "../css/CardHistory.module.css";
import gambar from "../assets/image/product/img_veggie_food.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class CardHistory extends Component {
   render() {
      return (
         <>
            <Link
               to={"#"}
               className={`${styles["border"]} col-lg-3 col-md-6 col-sm-12 row my-2 mx-1 text-decoration-none d-flex justify-content-cemter text-start align-content-center position-relative`}
            >
               <div
                  className={`${styles.card_bar} d-flex justify-content-between`}
               >
                  <div className="col-sm-6 w-25 mx-auto col-md-6 col-lg-3 py-2 ">
                     <img
                        className={`${styles["imagine"]} rounded-circle`}
                        src={gambar}
                        alt=""
                     />
                  </div>
                  <article className="text-start col-sm-6 p-sm-6 mx-auto col-md-6 col-lg ms-2 py-2">
                     <p className={`${styles["title"]}`}>Veggie tomato mix</p>
                     <p className={`${styles["IDR"]}`}>IDR 34.000</p>
                     <p className={`${styles["delivered"]}`}>Delivered </p>
                  </article>
               </div>
               <div
                  className={`${styles.del_close} position-absolute text-decoration-none `}
               >
                  <p className={styles.delete}>
                     <i className="bi bi-trash3"></i>
                  </p>
                  <p className={styles.close}>
                     <i className="bi bi-x-circle"></i>
                  </p>
               </div>
            </Link>
         </>
      );
   }
}
export default CardHistory;
