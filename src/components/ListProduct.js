import React, { Component } from "react";
// import css
// import styles from "../styles/Product.module.css"
import styles from "../css/ListProduct.module.css";
import image_product from "../assets/image/product/img_drums_food.png";

class List_Product extends Component {
   render() {
      return (
         <>
            <div
               class={`py-4 position-relative text-wrap ${styles["content-product"]}`}
            >
               <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                     class={styles["list-product-image"]}
                     src={image_product}
                     alt="image_product"
                  />
                  <div class={styles["label-promo"]}></div>
                  <p class={styles.title}>Summer Fried Rice</p>
                  <p class={styles.price}>IDR 34.000</p>
               </div>
            </div>
         </>
      );
   }
}

export default List_Product;
