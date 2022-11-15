import React, { Component } from "react";
import title from "../helpers/title";
// import css
import styles from "../css/Product.module.css";
// import components
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/FooterBootstrap";
import Promo from "../components/CardPromo";
import withParams from "../helpers/withRouteParams";
import withSearchParams from "../helpers/withSearchParams";
import withNavigate from "../helpers/withNavigate";
import CardProduct from "../components/CardProduct";
import cardAdmin from "../components/CardProductAdmin";
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
      food: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?category=food&page=1&limit=12`,
      coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?category=coffee&page=1&limit=12`,
      non_coffee: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?category=non_coffee&page=1&limit=12`,
      addons: `${process.env.REACT_APP_BACKEND_HOST}/api/product/?category=addon&page=1&limit=12`,
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
      window.scrollTo(0, 0);
      axios
         .get(this.state.favorite)
         .then((res) => {
            // this.setState({ products: res.data.result });
            // console.log(res.data.result.totalPage);
            // console.log(res.data.result);
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
         .get(
            `${this.state.urlData}?sort=${e.target.value}&page=${this.state.currentPage}&limit=12`
         )
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
                  className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap w-100 mx-0`}
               >
                  {/* promo bar */}
                  <div
                     className={`${styles.content_left} col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-between align-items-center`}
                  >
                     <Promo />
                     {/* kondisi render jika login admin dia akan muncul */}
                     {this.state.userInfo.role === "admin" ? (
                        <button
                           className={`${styles.admin} ${styles.btn_promo}`}
                           onClick={() => {
                              this.props.navigate("/promo/new");
                           }}
                        >
                           Add new product
                        </button>
                     ) : null}
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
                                          searchParams: {
                                             category: "favorite",
                                          },
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
                                          searchParams: { category: "coffee" },
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
                                          searchParams: {
                                             category: "non_coffee",
                                          },
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
                                          searchParams: { category: "food" },
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
                                          searchParams: { category: "addons" },
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
                                 className={`${styles["form-select"]} mt-5`}
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
                     <div
                        className={`${styles.paginasi} d-flex justify-content-between mb-3`}
                     >
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
                     <div>
                        {/* kondisi render jika admin muncul button */}
                        {this.state.userInfo.role === "admin" ? (
                           <button
                              className={`${styles.admin} ${styles.btn_product}`}
                              onClick={() => {
                                 this.props.navigate("/product/new");
                              }}
                           >
                              Add new product
                           </button>
                        ) : null}
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}

export default withSearchParams(withParams(withNavigate(Product)));
