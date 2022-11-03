import React, { Component, Fragment } from "react";
import styles from "../css/Signup.module.css";
// import Footer from "../components/Footer";
// import components
import Footer from "../components/FooterBootstrap";
// import assets image
import img_signup from "../assets/image/main/img_signup.png";
import icon_coffee from "../assets/image/main/logo_coffee.png";
import icon_google from "../assets/image/main/icon_googlesignup.png";
import title from "../helpers/title";
import withNavigate from "../helpers/withNavigate";
import { Link } from "react-router-dom";
// import axios from "axios";
import Axios from "axios";
// import fontawesome
const eye = <i className="bi bi-eye"></i>;
const eyeslash = <i className="bi bi-eye-slash"></i>;
class Signup extends Component {
   state = {
      // toggle
      icon: eyeslash,
      type: "password",
      // input
      email: "",
      password: "",
      phone_number: "",
   };
   handleNameInput = (e) => {
      this.setState({
         email: e.target.value,
         // data: console.log(e.target.value), untuk debug input
      });
   };
   handlePasswordInput = (e) => {
      this.setState({
         password: e.target.value,
         // data: console.log(e.target.value), untuk debug input
      });
   };
   handlePhoneInput = (e) => {
      this.setState({
         phone_number: e.target.value,
         // data: console.log(e.target.value), untuk debug input
      });
   };

   onSubmit = (e) => {
      e.preventDefault();
      const userObj = {
         email: this.state.email,
         password: this.state.password,
         phone_number: this.state.phone_number,
      };
      Axios.post(
         `${process.env.REACT_APP_BACKEND_HOST}/api/user/register`,
         userObj
      )
         .then((res) => {
            console.log(res.data);
            this.props.navigate("/login");
         })
         .catch((err) => {
            console.log(err);
         });
      this.setState({ email: "", password: "", phone_number: "" });
   };

   handleToggle = () => {
      if (this.state.type === "password") {
         this.setState({ icon: eye });
         this.setState({ type: "text" });
      } else {
         this.setState({ icon: eyeslash });
         this.setState({ type: "password" });
      }
   };

   render() {
      title("Signup");
      const { icon, type } = this.state;
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
                        to="/login"
                        className={`${styles.btn} ${styles.login}`}
                     >
                        <span>Login</span>
                     </Link>
                  </div>
                  <form className={styles.form_bar} onSubmit={this.onSubmit}>
                     <section className={styles.inputbar}>
                        <h1>Sign up</h1>
                        <div className={styles.input}>
                           <label htmlFor="email">Email Address :</label>
                           <input
                              onChange={this.handleNameInput}
                              value={this.state.email}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter your email address"
                              required
                           />
                        </div>
                        <div className={`${styles.input} ${styles.withToggle}`}>
                           <label>Password :</label>
                           <input
                              onChange={this.handlePasswordInput}
                              value={this.state.password}
                              type={type}
                              name="password"
                              id="password"
                              placeholder="Enter your password"
                              required
                           />
                           {/* show password */}
                           <span
                              className={`${styles.toggle}`}
                              onClick={this.handleToggle}
                           >
                              {icon}
                           </span>
                        </div>
                        <div className={styles.input}>
                           <label htmlFor="phone_number">Phone Number :</label>
                           <input
                              onChange={this.handlePhoneInput}
                              value={this.state.phone_number}
                              type="tel"
                              name="phone_number"
                              id="phone_number"
                              placeholder="Enter your phone number"
                              required
                           />
                        </div>

                        <button
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

export default withNavigate(Signup);
