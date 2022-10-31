import React, { Component, Fragment } from "react";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
// import components
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
// import assets image
import img_signup from "../assets/image/main/img_signup.png";
import icon_coffee from "../assets/image/main/logo_coffee.png";
import icon_google from "../assets/image/main/icon_googlesignup.png";
// import helpers
import withNavigate from "../helpers/withNavigate";
class Login extends Component {
   render() {
      title("Login");
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
                     <Link
                        to="/signup"
                        className={`${styles.btn} ${styles.login}`}
                     >
                        <span>Sign Up</span>
                     </Link>
                  </div>
                  <form className={styles.form_bar}>
                     <section className={styles.inputbar}>
                        <h1>Login</h1>
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
                        <Link to="/forgot" className={styles.forgot_password}>
                           Forgot password?
                        </Link>
                        <button
                           onClick={() => this.props.navigate("/product")}
                           className={`${styles.btn} ${styles.sign}`}
                           type="submit"
                        >
                           Login
                        </button>
                        <Link className={`${styles.btn} ${styles.google}`}>
                           <span>
                              <img src={icon_google} alt="icon_google" />
                              Sign up with Google
                           </span>
                        </Link>
                     </section>
                  </form>
               </section>
               <section className={styles["card_banner"]}>
                  <div>
                     <h2>Get your member card now!</h2>
                     <p>Let's join with our member and enjoy the deals.</p>
                  </div>
                  <Link to="/signup" className={styles["btn"]}>
                     Create Now
                  </Link>
               </section>
            </main>
            {/* footer */}
            <Footer />
         </Fragment>
      );
   }
}

export default withNavigate(Login);
