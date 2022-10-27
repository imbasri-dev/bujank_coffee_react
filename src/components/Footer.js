import React from "react";
import styles from "../css/Footer.module.css";
import icon_coffee from "../assets/image/main/logo_coffee.png";
import icon_ig from "../assets/image/main/icon_ig.png";
import icon_fb from "../assets/image/main/icon_fb.png";
import icon_tw from "../assets/image/main/icon_twitter.png";
function Footer() {
    return (
        <footer>
            <aside className={styles.foot_left}>
                <div className={styles.foot_left_desc}>
                    <span>
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
                        <a href="#facebook">
                            <img src={icon_fb} alt="icon_facebook" />
                        </a>
                        <a href="#twitter">
                            <img src={icon_tw} alt="icon_twitter" />
                        </a>
                        <a href="#instagram">
                            <img src={icon_ig} alt="icon_instagram" />
                        </a>
                    </div>
                    <p className={styles.foot_created}>©2022 BujankCoffee☕</p>
                </div>
            </aside>
            <section className={styles.foot_right}>
                <article
                    className={`${styles.foot_right_link} ${styles.product}`}
                >
                    <h4>Product</h4>
                    <ul>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">Locations</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Countries</a>
                        </li>
                    </ul>
                </article>
                <article className={styles.foot_right_link}>
                    <h4>Engage</h4>
                    <ul>
                        <li>
                            <a href="#">Coffe Shop ?</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </article>
            </section>
        </footer>
    );
}

export default Footer;
