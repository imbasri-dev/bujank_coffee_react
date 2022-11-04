import React from "react";
import img_promo from "../assets/image/product/img_promo_food.png";
import styles from "../css/CardPromo.module.css";
import { Link } from "react-router-dom";
function CardPromo() {
   return (
      <>
         <aside
            className={`${styles.promo_left} mx-auto text-center  d-flex flex-column justify-content-start align-items-center`}
         >
            <h2 className="fw-bold fs-4 p-4">Promo for you</h2>
            <p className="text-muted fs-6 mb-5">
               Coupons will be updated every weeks. <br /> Check them out!
            </p>
            <section className={styles.card__promo}>
               <div className={`${styles.promo} pb-4`}>
                  <article>
                     <div className={`${styles.promo_card}  text-wrap p-4`}>
                        <img
                           className="img-thumbnail rounded-circle m-3 w-50"
                           src={img_promo}
                           alt="promo"
                        />
                        <h3 className="fs-4 fw-bold lh-base">
                           Beef Spaghetti <br /> 20% OFF
                        </h3>
                        <p className="fs-6 fw-light lh-sm">
                           Buy 1 Choco Oreo and get 20% off <br /> for Beef
                           Spaghetti
                        </p>
                     </div>
                     <p className="fs-5 pt-3">COUPON CODE</p>
                     <h2 className="fw-bolder fs-3 pb-2">FNPR15RG</h2>
                     <p className="fs-6 fw-lighter">
                        Valid untill October 30th 2022
                     </p>
                  </article>
               </div>
            </section>
            <Link
               to={"/product"}
               className={`${styles.apply}  text-decoration-none mt-5 text-white`}
            >
               Apply Coupon
            </Link>
            <div className="text-start d-flex flex-column mx-auto my-5 p-5 text-wrap">
               <h6 className="fw-bold ps-3">Terms and Condition</h6>
               <ol className="text-muted">
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
               </ol>
            </div>
         </aside>
      </>
   );
}

export default CardPromo;
