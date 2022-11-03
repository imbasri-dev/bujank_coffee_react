// import { Link } from "react-router-dom";
import title from "../helpers/title";
// import css
import styles from "../css/Product.module.css";
// import components
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import CardProduct from "../components/CardProduct";
import Promo from "../components/CardPromo";
import withParams from "../helpers/withRouteParams";
// axios
import axios from "axios";
import React, { Component } from "react";
class Product extends Component {
   // variabel class
   state = {
      products: [],
      // url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?page=1&limit=12`,
      favorite: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=favorite&page=1&limit=12`,
      food: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=foods&page=1&limit=12`,
      coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=coffee&page=1&limit=12`,
      non_coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=non_coffee&page=1&limit=12`,
      addons: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=add-on&page=1&limit=12`,
   };
   costToRP = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };
   // ketika website di reload
   componentDidMount() {
      axios
         .get(this.state.favorite)
         .then((res) => {
            // this.setState({ products: res.data.result });
            this.setState({ products: res.data.result.data }, () => {
               // console.log(res.data);
            });
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

                        <section className=" text-center row d-flex justify-content-between flex-wrap justify-content-center align-items-center mx-sm-auto">
                           <div
                              className={`row ${styles["list-content"]} d-flex flex-wrap justify-content-start col-12 col-sm-12 col-md-12 `}
                           >
                              {/* <CardProduct /> */}
                              {this.state.products.map((item) => (
                                 <CardProduct
                                    id={item.id}
                                    params={item.id}
                                    product_name={item.name}
                                    price={this.costToRP(item.price)}
                                    size={item.size}
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

export default withParams(Product);
