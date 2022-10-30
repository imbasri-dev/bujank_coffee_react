import React, { Component, Fragment } from "react";
import styles from "../css/Signup.module.css";
// import Footer from "../components/Footer";
import Footer from "../components/FooterBootstrap";
// import components
// import assets image
import img_signup from "../assets/image/main/img_signup.png";
import icon_coffee from "../assets/image/main/logo_coffee.png";
import icon_google from "../assets/image/main/icon_googlesignup.png";
import title from "../helpers/title";

class Signup extends Component {
   render() {
      title("Signup");
      return (
         <Fragment>
            <main className={styles.container}>
               <aside className={styles.left}>
                  <img src={img_signup} alt="img_signup" />
               </aside>
               <section className={styles.right}>
                  <div className={styles.navbar}>
                     <span className={styles.nav__logo}>
                        <img src={icon_coffee} alt="icon_coffee" />
                        <p>Bujank Coffee</p>
                     </span>
                     <a
                        className={`${styles.btn} ${styles.login}`}
                        href="../view/signup.html"
                     >
                        <span>Login</span>
                     </a>
                  </div>
                  <form method="post" className={styles.form_bar}>
                     <section className={styles.inputbar}>
                        <h1>Sign up</h1>
                        <div className={styles.input}>
                           <label for="email">Email Address :</label>
                           <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter your email adress"
                              required
                           />
                        </div>
                        <div className={styles.input}>
                           <label for="password">Password :</label>
                           <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter your password"
                              required
                           />
                        </div>
                        <div className={styles.input}>
                           <label for="phone">Phone Number :</label>
                           <input
                              type="tel"
                              name="phone"
                              id="phone"
                              placeholder="Enter your phone number"
                              required
                           />
                        </div>
                        <a href="/" className={styles.forgot_password}>
                           Forgot password?
                        </a>
                        <button
                           className={`${styles.btn} ${styles.sign}`}
                           type="submit"
                        >
                           Login
                        </button>
                        <a
                           href="/"
                           className={`${styles.btn} ${styles.google}`}
                           type="submit"
                        >
                           <span>
                              <img src={icon_google} alt="icon_google" />
                              Sign up with Google
                           </span>
                        </a>
                     </section>
                  </form>
               </section>
               <section className={styles["card_banner"]}>
                  <div>
                     <h2>Get your member card now!</h2>
                     <p>Let's join with our member and enjoy the deals.</p>
                  </div>
                  <a href="/" className={styles["btn"]}>
                     Create Now
                  </a>
               </section>
            </main>
            <Footer />
            {/* footer */}
         </Fragment>
      );
   }
}

export default Signup;
