import React, { Component } from "react";
import styles from "../css/Home.module.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// footer
import Footer from "../components/FooterBootstrap.js";
// assets
import icon_coffee from "../assets/image/main/logo_coffee.png";
import img_teamwork from "../assets/image/main/img_teamwork.png";
import map from "../assets/image/main/img_map.png";
import netflix from "../assets/image/main/img_netflix.png";
import reddit from "../assets/image/main/img_reddit.png";
import amazon from "../assets/image/main/img_amazon.png";
import discord from "../assets/image/main/img_discord.png";
import spotify from "../assets/image/main/img_spotify.png";
import img_hazzel_coffee from "../assets/image/product/img_creamy_coffee.png";
import img_pinkypromise from "../assets/image/product/img_pinkypromise.png";
import img_chickenwings from "../assets/image/product/img_chickenwings.png";
import img_parker from "../assets/image/main/parker.jpeg";
import img_yessica from "../assets/image/main/img_yessica.png";
import img_kimyoung from "../assets/image/main/img_kimyoung.png";
import button_nav_testi from "../assets/image/main/img_button_testi.png";
import star from "../assets/image/main/img_stars.png";
import button_left from "../assets/image/main/icon_left.png";
import button_right from "../assets/image/main/icon_right.png";
import icon_customer_heart from "../assets/image/main/icon_customer_heart.png";
import icon_location from "../assets/image/main/icon_location.png";
import icon_person from "../assets/image/main/icon_person.png";
import icon_checklist from "../assets/image/main/icon_checklist.png";
import icon_check from "../assets/image/main/icon_nochecklist.png";
import hamburger from "../assets/image/main/icon_hamburger.png";

import { Link } from "react-router-dom";

// assets
class Home extends Component {
   render() {
      return (
         <>
            <header>
               <nav className="navbar bg-light p-3">
                  <section className="container-fluid d-flex justify-content-between align-items-center">
                     <Link to="/" className="navbar-brand">
                        <img
                           className="me-3"
                           src={icon_coffee}
                           alt="icon_coffee"
                           width="30"
                           height="30"
                        />
                        <span className="fs-6 fw-bold">Bujank Coffee</span>
                     </Link>
                     <div
                        className={`${styles.nav__link} navbar-nav d-flex flex-row flex-lg-row d-none d-lg-flex`}
                     >
                        <Link
                           to="/"
                           className="nav-link p-2 m-3 active"
                           aria-current="page"
                        >
                           Home
                        </Link>
                        <Link to="/product" className="nav-link p-2 m-3">
                           Product
                        </Link>
                        <Link to="/cart" className="nav-link p-2 m-3">
                           Your Cart
                        </Link>
                        <a className="nav-link p-2 m-3">History</a>
                     </div>
                     <div
                        className={`${styles.nav__utility} d-none d-sm-none d-md-none d-md-block d-lg-block`}
                     >
                        <Link
                           to="/login"
                           className={`${styles.login} text-decoration-none fw-bold`}
                        >
                           Login
                        </Link>
                        <Link
                           to="/signup"
                           className={`${styles.signup} text-decoration-none ms-5 fw-bold`}
                        >
                           Sign Up
                        </Link>
                     </div>
                     <span>
                        <img
                           className="d-lg-none d-md-block"
                           src={hamburger}
                           alt="hamburger"
                        />
                     </span>
                  </section>
               </nav>
            </header>

            <main>
               {/* <!-- jumbotron --> */}
               <section className={`${styles.bg_jumbotron} mx-auto d-flex`}>
                  <div className="container">
                     <section className="row d-flex justify-content-between flex-wrap flex">
                        <div
                           className={`col-sm-8 col-md-6 col-lg-6  ${styles.jumbotron_left} `}
                        >
                           <h1 className="fs-1">
                              Start Your Day with Coffee and Good Meals
                           </h1>
                           <p className="mb-5 pt-5 mb-sm-2 mb-lg-5 fs-4 pt-sm-5 mb-sm-3">
                              We provide high quality beans, good taste, and
                              healthy meals made by love just for you. Start
                              your day with us for a bigger smile!
                           </p>
                           <span className={`${styles.start} mt-sm-5 mt-md-3`}>
                              <a className="text-decoration-none" href="/">
                                 Get Started
                              </a>
                           </span>
                        </div>
                     </section>
                     <div
                        className={`${styles.banner} d-none d-sm-none mx-auto row d-md-flex justify-content-center align-content-center flex-md-row flex-sm-column`}
                     >
                        <section className="col-4 d-flex justify-content-center align-items-center">
                           <img src={icon_person} alt="icon_person" />
                           <div className={styles.banner_char}>
                              <h4>90+</h4>
                              <p>Staff</p>
                           </div>
                        </section>
                        <section
                           className={`${styles.banner_location} col-4 d-flex justify-content-center align-items-center`}
                        >
                           <img src={icon_location} alt="icon_location" />
                           <div className={styles.banner_char}>
                              <h4>30+</h4>
                              <p>Stores</p>
                           </div>
                        </section>
                        <section className="col-4 d-flex justify-content-center align-items-center">
                           <img
                              src={icon_customer_heart}
                              alt="icon_customer_heart.png"
                           />
                           <div className={styles.banner_char}>
                              <h4>800+</h4>
                              <p>Customers</p>
                           </div>
                        </section>
                     </div>
                  </div>
               </section>
               {/* <!-- teamwork --> */}
               <div
                  className={`${styles.teamwork} container row d-flex align-content-center justify-content-around mx-auto flex-sm-column flex-md-row`}
               >
                  <section
                     className={`col-12 col-lg-6  col-md-7 ${styles.teamwork__left}`}
                  >
                     <img src={img_teamwork} alt="img_teamwork" />
                  </section>
                  <section
                     className={`${styles.teamwork__right} col-12 col-lg-6 col-md-4 p-lg-5`}
                  >
                     <h3 className="mb-3 fs-1">
                        We Provide Good Coffee <br />
                        and Healthy Meals{" "}
                     </h3>
                     <p className="mb-3 fs-5 text-wrap">
                        You can explore the menu that we provide with fun <br />{" "}
                        and have their own taste and make your day better.
                     </p>
                     <ul className={styles.checklist}>
                        <li className="">
                           <img src={icon_checklist} alt="icon_checklist" />
                           High quality beans
                        </li>
                        <li className="">
                           <img src={icon_checklist} alt="icon_checklist" />
                           Healthy meals, you can request the ingredients
                        </li>
                        <li className="">
                           <img src={icon_checklist} alt="icon_checklist" />
                           Chat with our staff to get better experience for
                           ordering
                        </li>
                        <li className="">
                           <img src={icon_checklist} alt="icon_checklist" />
                           Free member card with a minimum purchase of IDR
                           200.000.
                        </li>
                     </ul>
                  </section>
               </div>
               {/* <!-- favorite --> */}
               <section className="container-fluid favorite text-center mx-auto w-100">
                  <div className="container">
                     <h2 className="pt-5">Here is People’s Favorite</h2>
                     <p>
                        Let’s choose and have a bit taste of poeple’s favorite.
                        It might be yours too!
                     </p>
                     <div
                        className={`${styles.card_favorite} mx-auto w-100 row`}
                     >
                        {/* <!-- card 1 --> */}
                        <article
                           className={`col-12 col-lg-3 col-md-8 ${styles.card__menus} `}
                        >
                           <img src={img_hazzel_coffee} alt="hazzel_latte" />
                           <p className="fs-5 fw-bold">Hazelnut Latte</p>
                           <div className={styles.menus}>
                              <ul className="text-start">
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    HazelnutSyrup
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Wanilla Whipped Cream
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Ice / Hot
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Sliced Banana on Top
                                 </li>
                              </ul>
                              <h3>IDR 25.000</h3>
                              <Link
                                 to="signup"
                                 className={`text-decoration-none ${styles.button_menus}`}
                              >
                                 Order Now
                              </Link>
                           </div>
                        </article>
                        {/* <!-- card 2 --> */}
                        <article
                           className={`${styles.card__menus} col-12 col-lg-3 col-md-8`}
                        >
                           <img src={img_pinkypromise} alt="hazzel_latte" />
                           <p className="fs-5 fw-bold">Pinky Promise</p>
                           <div className={styles.menus}>
                              <ul className="text-start">
                                 <li>
                                    <img src={icon_check} alt="check" />1 Shot
                                    of Coffee
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Vanilla Whipped Cream
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Chocolate Biscuits
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Strawberry Syrup
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Sliced strawberry on Top
                                 </li>
                              </ul>
                              <h3>IDR 30.000</h3>
                              <Link
                                 to="/products"
                                 className={`text-decoration-none ${styles.button_menus}`}
                              >
                                 Select
                              </Link>
                           </div>
                        </article>
                        {/* <!-- card 3 --> */}
                        <article
                           className={`${styles.card__menus} col-12 col-lg-3 col-md-8`}
                        >
                           <img src={img_chickenwings} alt="hazzel_latte" />
                           <p className="fs-5 fw-bold">Chicken Wings</p>
                           <div className={styles.menus}>
                              <ul className="text-start">
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Wings
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Drum Sticks
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Mayonaise and Lemon
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Hot Fried
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Secret Recipe
                                 </li>
                                 <li>
                                    <img src={icon_check} alt="check" />
                                    Buy 1 Get 1 only for Dine in
                                 </li>
                              </ul>
                              <h3>IDR 40.000</h3>
                              <Link
                                 to="/product"
                                 className={`${styles.button_menus} ${styles.selected} text-decoration-none`}
                              >
                                 Select
                              </Link>
                           </div>
                        </article>
                     </div>
                  </div>
               </section>

               {/* <!-- map --> */}
               <section
                  className={`${styles.map} container row text-center d-flex align-content-center justify-content-around mx-auto`}
               >
                  <div className={`${styles.map__content} col-12`}>
                     <h2>
                        Visit Our Store in the <br />
                        Spot on the Map Below
                     </h2>
                     <p className="text-wrap">
                        See our store in every city on the spot and spen your
                        good day there. See <br /> you soon!
                     </p>
                     <img src={map} alt="img_map" />
                  </div>
               </section>

               {/* <!-- out partner --> */}
               <section className="container row text-center mx-auto">
                  <div className={`${styles.partner} col-12 mx-auto`}>
                     <h2 className="fw-bold">Our Partner</h2>
                     <div className={styles.partner__img}>
                        <img src={netflix} alt="netflix" />
                        <img src={reddit} alt="reddit" />
                        <img src={amazon} alt="amazon" />
                        <img src={discord} alt="discord" />
                        <img src={spotify} alt="spotify" />
                     </div>
                  </div>
               </section>
               {/* <!-- customer testimoni --> */}
               <section
                  className={`${styles.customer} container mx-auto text-center position-relative mb-5`}
               >
                  <h2 className="my-5">
                     Loved by Thousands of <br /> Happy Customer
                  </h2>
                  <p className="mb-5">
                     These are the stories of our customers who have visited us
                     with great <br /> pleasure.
                  </p>
                  {/* <!-- card 1 --> */}
                  <div
                     className={`${styles.card__bar} row d-flex justify-content-around   align-content-center`}
                  >
                     <article
                        className={`${styles.card_customer} col-4 col-md-5 col-sm-12`}
                     >
                        <div className="text-wrap ">
                           <div className=" d-flex justify-content-between  justify-content-md-center ">
                              <div className="text-start d-flex flex-column align-items-center justify-content-center flex-lg-row">
                                 <img
                                    className="me-3 rounded-circle"
                                    src={img_parker}
                                    alt="img_putraparker"
                                    width="50"
                                    height="50"
                                 />
                                 <div>
                                    <h4 className="fs-5 fw-bold">
                                       Putra Parker
                                    </h4>
                                    <p>Warsaw, Poland</p>
                                 </div>
                              </div>
                              <div className="d-flex mx-auto justify-content-center align-items-center p-2">
                                 <p className="fs-4 fw-light ms-3">4.5</p>
                                 <img
                                    className="mx-auto ms-3"
                                    src={star}
                                    width="20"
                                    height="20"
                                    alt="icon_stars"
                                 />
                              </div>
                           </div>
                           <p className="text-start fs-5 mt-3 ">
                              “Wow... I am very happy to spend my whole day
                              here. the Wi-fi is good, and the coffee and meals
                              tho. I like it here!! Very recommended!
                           </p>
                        </div>
                     </article>
                     {/* <!-- card 2 --> */}
                     <article
                        className={`${styles.card_customer} col-4 col-md-5 d-none d-sm-none d-md-block`}
                     >
                        <div className="text-wrap">
                           <div className=" d-flex justify-content-between justify-content-md-center align-content-center ">
                              <div className="text-start d-flex flex-column align-items-center justify-content-center flex-lg-row">
                                 <img
                                    className="me-3"
                                    src={img_yessica}
                                    alt="img_yessica"
                                    width="50"
                                    height="50"
                                 />
                                 <div>
                                    <h4 className="fs-5 fw-bold">
                                       Yessica Christy
                                    </h4>
                                    <p>Shanxi, China</p>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center p-2">
                                 <p className="fs-4 fw-light ms-3">4.5</p>
                                 <img
                                    className="mx-auto ms-3"
                                    src={star}
                                    width="20"
                                    height="20"
                                    alt="icon_stars"
                                 />
                              </div>
                           </div>
                           <p className="text-start fs-5 mt-3 ">
                              “I like it because I like to travel far and still
                              can make my day better just by drinking their
                              Hazelnut Latte
                           </p>
                        </div>
                     </article>
                     {/* <!-- card 3  --> */}
                     <article
                        className={`${styles.card_customer} text-wrap d-flex flex-column col-4 d-none d-md-none d-sm-none d-lg-block`}
                     >
                        <div className="text-wrap">
                           <div className=" d-flex justify-content-between align-content-center">
                              <div className="text-start d-flex align-items-center">
                                 <img
                                    className="me-3"
                                    src={img_kimyoung}
                                    alt="img_viezh"
                                    width="50"
                                    height="50"
                                 />
                                 <div>
                                    <h4 className="fs-5 fw-bold">Kim Young</h4>
                                    <p>Warsaw, Poland</p>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center p-2 mx-auto">
                                 <p className="fs-4 fw-light ms-3">4.5</p>
                                 <img
                                    className="mx-auto ms-3"
                                    src={star}
                                    width="20"
                                    height="20"
                                    alt="icon_stars"
                                 />
                              </div>
                           </div>
                           <p className="text-start  fs-5 mt-3 ">
                              “Wow... I am very happy to spend my whole day
                              here. the Wi-fi is good, and the coffee and meals
                              tho. I like it here!! Very recommended!
                           </p>
                        </div>
                     </article>
                  </div>
                  <div
                     className={`${styles.controller} px-5 d-flex justify-content-between align-items-center mx-auto`}
                  >
                     <img src={button_nav_testi} alt="testi" />
                     <div
                        className={`${styles.paginasi} d-flex justify-content-center align-items-center`}
                     >
                        <img
                           className={`me-3 ${styles.pointer}`}
                           src={button_left}
                           alt="left"
                           width="60"
                        />
                        <img
                           className={styles.pointer}
                           src={button_right}
                           alt="right"
                           width="60"
                        />
                     </div>
                  </div>
                  {/* <!-- check promos --> */}
                  <section
                     className={`${styles.card_promo} p-lg-5 p-md-3 row position-absolute mx-auto d-none d-sm-none d-md-inline-flex`}
                  >
                     <div className="col-12 d-flex justify-content-between align-items-center">
                        <div className="text-start">
                           <h2 className="fw-bold mb-3">
                              Check our promo <br /> today!
                           </h2>
                           <p className="text-muted">
                              Let's see the deals and pick yours!
                           </p>
                        </div>
                        <a
                           className={`${styles.btn__promo} ${styles.hover} fs-5 text-decoration-none fw-bold `}
                           href="/"
                        >
                           See Promo
                        </a>
                     </div>
                  </section>
               </section>
            </main>
            <Footer style={{ paddingTop: "150px" }} />
         </>
      );
   }
}

export default Home;
