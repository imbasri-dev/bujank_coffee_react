import React, { Component } from "react";
import { Link } from "react-router-dom";
import title from "../helpers/title";
// import css
import styles from "../css/Product.module.css";
// import components
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import CardProduct from "../components/ListProduct";
import Promo from "../components/CardPromo";
// axios
import axios from "axios";

class Product extends Component {
   state = {
      products: [],
   };
   componentDidMount() {
      axios
         .get(`http://localhost:5000/api/product/`)
         .then((res) => {
            const products = res.data.data;
            this.setState({ products });
            console.log(products);
         })
         .catch((err) => console.log(err));
   }
   render() {
      title("Product");

      return (
         <>
            {/* <!-- Start Navbar --> */}
            <Navbar />

            {/* <!-- End Navbar --> */}
            <main>
               <section
                  className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap`}
               >
                  {/* promo bar */}
                  <div class="col-4">
                     <Promo />
                  </div>
                  <div class="col-7  ">
                     {/* Product */}
                     <aside
                        className={`${styles["product-right"]} d-flex flex-column py-4`}
                     >
                        <div
                           className={`${styles["nav-product"]} d-flex flex-row justify-content-between`}
                        >
                           <span>
                              <Link to="">Favorite & Promo</Link>
                           </span>
                           <span>
                              <Link to="">Coffee</Link>
                           </span>
                           <span>
                              <Link to="">Non Coffee</Link>
                           </span>
                           <span>
                              <Link to="">Foods</Link>
                           </span>
                           <span>
                              <Link to="">Add-on</Link>
                           </span>
                        </div>

                        <section className=" text-center row d-flex justify-content-between flex-wrap">
                           <div
                              className={` ${styles["list-content"]} d-flex flex-wrap col-12`}
                           >
                              <CardProduct />
                              <CardProduct />
                              <CardProduct />
                              <CardProduct />
                              <CardProduct />
                              <CardProduct />
                           </div>
                        </section>
                     </aside>
                  </div>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}

export default Product;
