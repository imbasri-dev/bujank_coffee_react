import React from "react";
import { useNavigate } from "react-router-dom";
// import css
import withParams from "../helpers/withRouteParams";
import styles from "../css/CardProduct.module.css";
import icon_pencil_mini from "../assets/image/main/icon_pencil_mini.png";
import { useState } from "react";
// import image_product from "../assets/image/product/img_drums_food.png";

function CardProduct(props) {
   const navigate = useNavigate();
   const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
   // console.log(userInfo.role);
   const clickUser = () => {
      navigate(`/product/${props.id}`);
   };
   const clickAdmin = () => {
      navigate(`/product/edit/${props.id}`);
   };
   return (
      <div
         onClick={userInfo.role === "user" ? clickUser : null}
         className={`col-md-2 p-4 position-relative text-wrap ${
            styles["content-product"]
         } ${userInfo.role === "admin" ? `${styles.disabled}` : ""}`}
         disabled={userInfo.role === "admin" ? false : true}
      >
         <img
            className={styles["list-product-image"]}
            src={`${props.image_product}`}
            alt="image_product"
         />
         <p className={styles.title}>{props.product_name}</p>
         <p className={styles.size}>{props.size}</p>
         <p className={styles.price}>{props.price}</p>
         {/* kondisi jika render admin muncul */}
         {userInfo.role === "admin" ? (
            <img
               className={`${styles.editPencil}`}
               src={icon_pencil_mini}
               alt="icon_pencil"
               onClick={userInfo.role === "admin" ? clickAdmin : null}
            />
         ) : null}
      </div>
   );
}
export default withParams(CardProduct);
