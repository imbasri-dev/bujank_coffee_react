// import { Link } from "react-router-dom";
import title from "../helpers/title";
// import css
import styles from "../css/Product.module.css";
// import components
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import CardProduct from "../components/CardProduct";
import Promo from "../components/CardPromo";
// axios
import axios from "axios";
import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
// function Product() {
//    title("Product");

//    const [products, setProducts] = useState([]);
//    const [url, setUrl] = useState("http://localhost:5000/api/product");

//    useEffect(() => {
//       axios
//          .get(url)
//          .then((res) => {
//             console.log(res.data.result);
//             setProducts(res.data.result.data);
//          })
//          .catch((err) => {
//             console.log(err);
//          });
//    }, [url]);

//    return (
//       <>
//          {/* <!-- Start Navbar --> */}
//          <Navbar />
//          {/* <!-- End Navbar --> */}
//          <main>
//             <section
//                className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap`}
//             >
//                {/* promo bar */}
//                <div class="col-4">
//                   <Promo />
//                </div>
//                <div class="col-7  ">
//                   {/* Product */}
//                   <aside
//                      className={`${styles["product-right"]} d-flex flex-column py-4`}
//                   >
//                      <div
//                         className={`${styles["nav-product"]} d-flex flex-row justify-content-between`}
//                      >
//                         <span>
//                            <Link to="">Favorite & Promo</Link>
//                         </span>
//                         <span>
//                            <Link to="">Coffee</Link>
//                         </span>
//                         <span>
//                            <Link to="">Non Coffee</Link>
//                         </span>
//                         <span>
//                            <Link to="">Foods</Link>
//                         </span>
//                         <span>
//                            <Link to="">Add-on</Link>
//                         </span>
//                      </div>

//                      <section className=" text-center row d-flex justify-content-between flex-wrap">
//                         <div
//                            className={`row ${styles["list-content"]} d-flex flex-wrap col-12`}
//                         >
//                            {/* <CardProduct /> */}
//                            {products.map((item) => (
//                               <CardProduct
//                                  product_name={item.name}
//                                  price={item.price}
//                                  image_product={item.image}
//                               />
//                            ))}
//                         </div>
//                      </section>
//                   </aside>
//                </div>
//             </section>
//          </main>
//          <Footer />
//       </>
//    );
// }

// export default Product;
class Product extends Component {
   // variabel class
   state = {
      products: [],
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?page=1&limit=12`,
      favorite: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=favorite&page=1&limit=12`,
      food: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=foods&page=1&limit=12`,
      coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=coffee&page=1&limit=12`,
      non_coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=non_coffee&page=1&limit=12`,
      addons: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=add-on&page=1&limit=12`,
   };

   // ketika website di reload
   componentDidMount() {
      axios
         .get(this.state.url)
         .then((res) => {
            // this.setState({ products: res.data.result });
            this.setState({ products: res.data.result.data });
         })
         .catch((err) => console.log(err));
   }
   onFavorite = () => {
      axios
         .get(this.state.favorite)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };
   onFood = () => {
      axios
         .get(this.state.food)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };
   onCoffee = () => {
      axios
         .get(this.state.coffee)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };
   OnNonCoffee = () => {
      axios
         .get(this.state.non_coffee)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };
   onAddOn = () => {
      axios
         .get(this.state.addons)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };

   render() {
      title("Product");
      return (
         <>
            {/* <!-- Start Navbar --> */}
            <Navbar />
            {/* <!-- End Navbar --> */}
            <main>
               <section
                  className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap w-100`}
               >
                  {/* promo bar */}
                  <div className="col-lg-4 col-md-12 col-sm-12">
                     <Promo />
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                     {/* Product */}
                     <aside
                        className={`${styles["product-right"]} d-flex flex-column py-4`}
                     >
                        <div
                           className={`${styles["nav-product"]} d-flex flex-row justify-content-between`}
                        >
                           <div>
                              <span onClick={this.onFavorite}>
                                 Favorite & Promo
                              </span>
                           </div>
                           <div>
                              <span onClick={this.onCoffee}>Coffee</span>
                           </div>
                           <div>
                              <span onClick={this.OnNonCoffee}>Non Coffee</span>
                           </div>
                           <div>
                              {/* <Link to="">Foods</Link> */}
                              <span onClick={this.onFood}>Food</span>
                           </div>
                           <div>
                              <span onClick={this.onAddOn}>Add-on</span>
                           </div>
                        </div>

                        <section className=" text-center row d-flex justify-content-between flex-wrap justify-content-center align-content-center ms-3">
                           <div
                              className={`row ${styles["list-content"]} d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-12 `}
                           >
                              {/* <CardProduct /> */}
                              {this.state.products.map((item) => (
                                 <CardProduct
                                    product_name={item.name}
                                    price={item.price}
                                    image_product={item.image}
                                 />
                              ))}
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
