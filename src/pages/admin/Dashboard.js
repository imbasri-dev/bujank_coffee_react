import React, { Component } from "react";
import styles from "../../css/admin/Dashboard.module.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import icon_persen from "../../assets/image/main/icon_dashboardpersen.png";
import icon_userdashboard from "../../assets/image/main/img_userdashboard.png";
class Dashboard extends Component {
   render() {
      return (
         <>
            <NavbarAdmin />
            <main className="mt-5">
               <section>
                  <section className={`${styles.pickDate} text-center`}>
                     <h2 className={`${styles.title} text-center`}>
                        See how your store progress so far
                     </h2>
                     <div
                        className={`${styles.input__radiobar} d-flex justify-content-center my-5`}
                     >
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label
                              htmlFor="daily"
                              className={styles.radio_label}
                           >
                              Daily
                           </label>
                           <input type="radio" name="pickradio" id="daily" />
                        </div>
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label htmlFor="week" className={styles.radio_label}>
                              Weekly
                           </label>
                           <input type="radio" name="pickradio" id="week" />
                        </div>
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label
                              htmlFor="month"
                              className={styles.radio_label}
                           >
                              Monthly
                           </label>
                           <input type="radio" name="pickradio" id="month" />
                        </div>
                     </div>
                  </section>
               </section>
               <section className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                     <section>
                        <img
                           src={icon_userdashboard}
                           alt="icon_userdashboard"
                        />
                        <div>
                           <h4>Cheryn Laurent</h4>
                           <p>Keep up the good work and spread love!</p>
                        </div>
                        <div>
                           <h4>Best Staff of the Month</h4>
                           <img src={icon_persen} alt="icon_persen" />
                           <p>
                              Achieved 3.5M of total <br /> 5M 478 Customer
                           </p>
                        </div>
                     </section>
                  </div>
               </section>
            </main>
         </>
      );
   }
}

export default Dashboard;
