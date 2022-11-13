import React, { Component } from "react";
import title from "../helpers/title";
// import css
import styles from "../css/Product.module.css";
// import components
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/FooterBootstrap";
import CardProduct from "../components/CardProduct";
import Promo from "../components/CardPromo";
import withParams from "../helpers/withRouteParams";
import withSearchParams from "../helpers/withSearchParams";
// axios
import axios from "axios";
class Product extends Component {
   // variabel class
   state = {
      products: [],
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      navLogin: <Navbar />,
      navAdmin: <NavbarAdmin />,
      navnotLogin: <NavbarLogin />,
      // url: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?page=1&limit=12`,
      favorite: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=favorite&page=1&limit=12`,
      food: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=foods&page=1&limit=12`,
      coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=coffee&page=1&limit=12`,
      non_coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=non_coffee&page=1&limit=12`,
      addons: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?sort=newest&category=add-on&page=1&limit=12`,
      urlData: `${process.env.REACT_APP_BACKEND_HOST}/api/product/`,
      searchParams: {},
      currentPage: 1,
      totalPage: 1,
   };
   costToRP = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };
   navType = () => {
      if (this.state.userInfo.token) {
         if (this.state.userInfo.role === "user") {
            return this.state.navLogin;
         } else {
            return this.state.navAdmin;
         }
      } else {
         return this.state.navnotLogin;
      }
   };
   // ketika website di reload
   componentDidMount() {
      axios
         .get(this.state.favorite)
         .then((res) => {
            // this.setState({ products: res.data.result });
            console.log(res.data.result.totalPage);
            console.log(res.data.result);
            this.setState({
               products: res.data.result.data,
            });
            this.setState({
               totalPage: res.data.result.totalPage,
            });
         })
         .catch((err) => console.log(err));
   }

   getPrevProducts = () => {
      this.state.currentPage = this.state.currentPage - 1;
      // this.setState({
      //    currentPage: this.state.currentPage - 1,
      // });
      axios
         .get(`${this.state.urlData}?page=${this.state.currentPage}&limit=12`)
         .then((res) =>
            this.setState({
               products: res.data.result.data,
               debugPrev: console.log("Prev", res.data.result),
            })
         )
         .catch((err) => console.log(err));
   };
   getNextProducts = () => {
      this.state.currentPage = this.state.currentPage + 1;
      // this.setState({
      //    currentPage: this.state.currentPage + 1,
      // });
      axios
         .get(`${this.state.urlData}?page=${this.state.currentPage}&limit=12`)
         .then((res) =>
            this.setState({
               products: res.data.result.data,
               debugNext: console.log("Next", res.data.result),
            })
         )
         .catch((err) => console.log(err));
   };

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
   onSort = (e) => {
      console.log(e.target.value);
      axios
         .get(`${this.state.urlData}?sort=${e.target.value}`)
         .then((res) => this.setState({ products: res.data.result.data }))
         .catch((err) => console.log(err));
   };
   // paginasi

   render() {
      title("Product");
      // const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
      return (
         <>
            {/* <!-- Start Navbar --> */}
            {/* {userInfo.token ? <Navbar /> : <NavbarLogin />} */}
            <this.navType />
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
                              <span
                                 onClick={() => {
                                    this.onFavorite();
                                    this.setState(
                                       {
                                          searchParams: { sort: "favorite" },
                                       },
                                       () => {
                                          this.props.setSearchParams(
                                             this.state.searchParams
                                          );
                                       }
                                    );
                                 }}
                              >
                                 Favorite & Promo
                              </span>
                           </div>
                           <div>
                              <span
                                 onClick={() => {
                                    this.onCoffee();
                                    this.setState(
                                       {
                                          searchParams: { sort: "coffee" },
                                       },
                                       () => {
                                          this.props.setSearchParams(
                                             this.state.searchParams
                                          );
                                       }
                                    );
                                 }}
                              >
                                 Coffee
                              </span>
                           </div>
                           <div>
                              <span
                                 onClick={() => {
                                    this.OnNonCoffee();
                                    this.setState(
                                       {
                                          searchParams: { sort: "non_coffee" },
                                       },
                                       () => {
                                          this.props.setSearchParams(
                                             this.state.searchParams
                                          );
                                       }
                                    );
                                 }}
                              >
                                 Non Coffee
                              </span>
                           </div>
                           <div>
                              <span
                                 onClick={() => {
                                    this.onFood();
                                    this.setState(
                                       {
                                          searchParams: { sort: "food" },
                                       },
                                       () => {
                                          this.props.setSearchParams(
                                             this.state.searchParams
                                          );
                                       }
                                    );
                                 }}
                              >
                                 Food
                              </span>
                           </div>
                           <div>
                              <span
                                 onClick={() => {
                                    this.onAddOn();
                                    this.setState(
                                       {
                                          searchParams: { sort: "addons" },
                                       },
                                       () => {
                                          this.props.setSearchParams(
                                             this.state.searchParams
                                          );
                                       }
                                    );
                                 }}
                              >
                                 Add-on
                              </span>
                           </div>
                        </div>

                        <section className=" text-center row d-flex justify-content-center justify-content-md-center justify-content-lg-end flex-wrap justify-content-center align-items-center  ">
                           <div className="text-end px-3 ">
                              <select
                                 class={`${styles["form-select"]} mt-5`}
                                 aria-label="Default select example"
                                 onChange={this.onSort}
                              >
                                 <option selected>sort</option>
                                 <option value="expensive">expensive</option>
                                 <option value="cheapest">cheapest</option>
                                 <option value="newest">newest</option>
                                 <option value="lastest">lastest</option>
                              </select>
                           </div>
                           <div
                              className={`row ${styles["list-content"]} d-flex flex-wrap justify-content-start col-12 col-sm-12 col-md-12 `}
                           >
                              {this.state.products.map((item, key) => (
                                 <CardProduct
                                    key={`${key}`}
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
                     <div className="d-flex justify-content-between">
                        <button
                           className="btn btn-warning fs-5 fw-bold"
                           onClick={this.getPrevProducts}
                           disabled={this.state.currentPage === 1}
                        >
                           Prev
                        </button>
                        <button
                           className="btn btn-warning fs-5 fw-bold"
                           onClick={this.getNextProducts}
                           disabled={
                              this.state.totalPage === this.state.currentPage
                           }
                        >
                           Next
                        </button>
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}

export default withSearchParams(withParams(Product));
