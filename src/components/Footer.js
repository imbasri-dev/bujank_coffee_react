import React from "react";
import styles from "../css/Footer.module.css";
import { Link } from "react-router-dom";
import icon_coffee from "../assets/image/main/bujank_coffee.png";
import icon_ig from "../assets/image/main/icon_ig.png";
import icon_fb from "../assets/image/main/icon_fb.png";
import icon_tw from "../assets/image/main/icon_twitter.png";
import { useNavigate } from "react-router-dom";
function Footer() {
   const navigate = useNavigate();
   return (
      <footer className={styles.footer}>
         <aside className={styles.foot_left}>
            <div className={styles.foot_left_desc}>
               <span className={styles.icon__coffee}>
                  <img
                     src={icon_coffee}
                     alt="icon_coffee"
                     style={{ marginRight: "15px" }}
                  />
                  <h4>Bujank Coffee</h4>
               </span>
               <p className={styles.foot_about}>
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
               </p>
               <div className={styles.foot_left_icon}>
                  <Link to="/facebook">
                     <img src={icon_fb} alt="icon_facebook" />
                  </Link>
                  <Link to="/twitter">
                     <img src={icon_tw} alt="icon_twitter" />
                  </Link>
                  <Link to="/instagram">
                     <img src={icon_ig} alt="icon_instagram" />
                  </Link>
               </div>
               <p className={styles.foot_created}>©2022 BujankCoffee☕</p>
            </div>
         </aside>
         <section className={styles.foot_right}>
            <article className={`${styles.foot_right_link} ${styles.product}`}>
               <h4>Product</h4>
               <ul>
                  <li>
                     <Link to="/download">Download</Link>
                  </li>
                  <li>
                     <Link to="/location">Locations</Link>
                  </li>
                  <li>
                     <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                     <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                     <Link to="/countries">Countries</Link>
                  </li>
               </ul>
            </article>
            <article className={styles.foot_right_link}>
               <h4>Engage</h4>
               <ul>
                  <li>
                     <Link to="/">Coffe Shop ?</Link>
                  </li>
                  <li>
                     <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                     <Link to="/term">Terms of Service</Link>
                  </li>
                  <li>
                     <Link to="/about">About Us</Link>
                  </li>
                  <li>
                     <Link to="/privacy">Privacy Policy</Link>
                  </li>
               </ul>
            </article>
         </section>
      </footer>
   );
}

export default Footer;
