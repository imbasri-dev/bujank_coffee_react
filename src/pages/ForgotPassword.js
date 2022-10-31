import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/ForgotPassword.module.css";
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
function ForgotPassword() {
   title("Forgot Password");
   return (
      <>
         <main
            className={`${styles.content_forgot} text-center d-flex flex-column justify-content-center align-items-center text-white mx-auto`}
         >
            <section>
               <h1 className="fs-1 fw-bold ">Forgot your password?</h1>
               <p>Don’t worry, we got your back!</p>
            </section>
            <form
               action="POST"
               className="d-flex justify-content-center flex-row my-5 row"
            >
               <input
                  className="form-control me-4 ps-5 col-6"
                  type="text"
                  placeholder="Enter your email address to get link "
               />
               <button className="col-6">Send</button>
            </form>
            <p className="fs-4 my-3 p-2">
               Click here if you didn’t receive any link <br /> in 2 minutes
            </p>
            <button className={styles.resend}>Resend Link</button>
            <p className={styles.times}>01:54</p>
         </main>
         <Footer />
      </>
   );
}

export default ForgotPassword;
