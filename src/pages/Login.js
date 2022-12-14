import React, { useState } from "react";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
// import components
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
// import assets image
import img_signup from "../assets/image/main/img_signup.png";
import icon_coffee from "../assets/image/main/bujank_coffee.png";
import icon_google from "../assets/image/main/icon_googlesignup.png";
// import helpers
import withNavigate from "../helpers/withNavigate";
import { useNavigate } from "react-router-dom";
// import axios
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
   title("Login");
   const navigate = useNavigate();
   // inputy login
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   // show password
   const eye = <i className="bi bi-eye"></i>;
   const eyeslash = <i className="bi bi-eye-slash"></i>;

   const [type, setType] = useState("password"); //ganti jadi pakai fontawesome
   const [icon, setIcon] = useState(eyeslash); //ganti jadi pakai fontawesome

   const handleToggle = () => {
      if (type === "password") {
         setIcon(eye); //ganti jadi pakai fontawesome
         setType("text");
      } else {
         setIcon(eyeslash);
         setType("password");
      }
   };

   // ambil value dari inpurt email
   const handleEmail = (event) => {
      setEmail(event.target.value);
   };
   // ambil value dari inpurt password
   const handlePassword = (event) => {
      setPassword(event.target.value);
   };

   const SuccessToastMessage = () => {
      toast.success("Login Success !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   const ErrorToastMessage = () => {
      toast.error("Error Email/Password wrong!", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   // get token dan simpan ke localstorage
   const handleToken = (element) => {
      element.preventDefault();
      axios
         .post(`${process.env.REACT_APP_BACKEND_HOST}/api/auth`, {
            email,
            password,
         })
         .then((res) => {
            // alert("Login success");
            // console.log(res.data);
            const userData = {
               token: res.data.data.token,
               role: res.data.data.role,
            };
            SuccessToastMessage();
            localStorage.setItem("userInfo", JSON.stringify(userData));
            setTimeout(() => {
               // Run code
               navigate("/");
            }, 500);
         })
         .catch((err) => {
            ErrorToastMessage();
            console.log(err);
         });
   };

   return (
      <>
         <main className={styles.container}>
            <aside className={styles.left}>
               <img src={img_signup} alt="img_signup" />
            </aside>
            <section className={styles.right}>
               <div className={styles.navbar}>
                  <span
                     className={styles.nav__logo}
                     onClick={() => {
                        navigate("/");
                     }}
                  >
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
               <form className={styles.form_bar} onSubmit={handleToken}>
                  <section className={styles.inputbar}>
                     <h1>Login</h1>
                     <div className={styles.input}>
                        <label htmlFor="email">Email Address :</label>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Enter your email adress"
                           required
                           onChange={handleEmail}
                        />
                     </div>
                     <div className={`${styles.input} ${styles.withToggle}`}>
                        <label htmlFor="password">Password :</label>
                        <input
                           type={type}
                           name="password"
                           id="password"
                           placeholder="Enter your password"
                           required
                           onChange={handlePassword}
                        />
                        <span className={styles.toggles} onClick={handleToggle}>
                           {icon}
                        </span>
                     </div>
                     <Link to="/forgot" className={styles.forgot_password}>
                        Forgot password?
                     </Link>
                     <button
                        // onClick={() => navigate("/")}
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
         <ToastContainer />
      </>
   );
}

export default withNavigate(Login);
