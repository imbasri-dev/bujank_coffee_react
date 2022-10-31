import React from "react";
// import css

import styles from "../css/CardProduct.module.css";
// import image_product from "../assets/image/product/img_drums_food.png";

export default function CardProduct(props) {
   return (
      <div
         className={`col-md-2 p-4 position-relative text-wrap ${styles["content-product"]}`}
      >
         <img
            className={styles["list-product-image"]}
            src={`http://localhost:5000/${props.image_product}`}
            alt="image_product"
         />
         <p className={styles.title}>{props.product_name}</p>
         <p className={styles.price}>
            <span>IDR</span> {props.price}
         </p>
      </div>
   );
}

//
// class CardProduct extends Component {
//    render() {
//       return (
//          <>
//             <div
//                class={`py-4 position-relative text-wrap ${styles["content-product"]}`}
//             >
//                <div className="d-flex flex-column align-items-center justify-content-center">
//                   <img
//                      class={styles["list-product-image"]}
//                      src={image_product}
//                      alt="image_product"
//                   />
//                   <div class={styles["label-promo"]}></div>
//                   <p class={styles.title}>Summer Fried Rice</p>
//                   <p class={styles.price}>IDR 34.000</p>
//                </div>
//             </div>
//          </>
//       );
//    }
// }
// export default CardProduct;
