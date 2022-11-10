import React from "react";
import icon_coffee from "../assets/image/main/bujank_coffee.png";
// import icon_ig from "../assets/image/main/icon_ig.png";
// import icon_fb from "../assets/image/main/icon_fb.png";
// import icon_tw from "../assets/image/main/icon_twitter.png";
// import styles from "../css/Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/FooterBoot.module.css";
import { Link } from "react-router-dom";

function Footer() {
   return (
      <footer>
         <section
            className={`${styles.footTop} d-flex row flex-lg-row flex-md-row mx-auto justify-content-md-between align-content-center p-auto flex-sm-column-reverse flex-column-reverse mt-md-5 mt-0 p-3 mt-sm-5 mt-lg-3 pt-sm-5 pt-lg-5 pb-lg-4`}
         >
            <aside className="col-12 col-md-4 col-lg-6 d-flex justify-content-start align-content-center text-start p-sm-2 p-2 p-lg-3 p-md-2 p-3">
               <div>
                  <span className="d-flex flex-row align-items-center ">
                     <img
                        src={icon_coffee}
                        width={"50"}
                        height={"50"}
                        className="rounded-circle"
                        alt="icon_coffee"
                     />
                     <h4 className="fs-6 fw-bold ps-4 mb-md-0">
                        Bujank Coffee
                     </h4>
                  </span>
                  <p className="text-wrap f-6 my-3 ">
                     Coffee Shop is a store that sells some good meals, and
                     especially coffee. We provide high quality beans
                  </p>
                  <div className={`${styles.hover} py-2 pt-lg-3 pb-lg-5`}>
                     <span className={styles.footer_icon}>
                        <i className="bi bi-facebook fs-3"></i>
                     </span>
                     <span className={styles.footer_icon}>
                        <i className="bi bi-twitter fs-3"></i>
                     </span>
                     <span className={styles.footer_icon}>
                        <i className="bi bi-instagram fs-3"></i>
                     </span>
                  </div>
                  <p className="">©2022 BujankCoffee☕</p>
               </div>
            </aside>
            <section className="mx-auto col-sm-10 col-lg-6 col-12 col-md-6 pt-md-2 d-flex justify-content-lg-around justify-content-md-between justify-content-sm-between justify-content-around ">
               <article
                  className={`${styles.foot_link} d-flex flex-column justify-content-start}`}
               >
                  <h4 className="pb-3">Product</h4>
                  <span className="py-2">
                     <Link to="/download">Download</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/location">Locations</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/blog">Blog</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/pricing">Pricing</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/countries">Countries</Link>
                  </span>
               </article>
               <article
                  className={`${styles.foot_link} d-flex flex-column justify-content-start}`}
               >
                  <h4 className="pb-3">Engage</h4>
                  <span className="py-2">
                     <Link to="/">Coffe Shop ?</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/faq">FAQ</Link>
                  </span>
                  <span className="py-2">
                     <Link to="/service">Terms of Service</Link>
                  </span>
                  <span className="py-2">
                     <Link to=".about">About Us</Link>
                  </span>
                  <span className="py-2">
                     <Link to="privacy">Privacy Policy</Link>
                  </span>
               </article>
            </section>
         </section>
      </footer>
   );
}

export default Footer;
