import React, { Component } from "react";
import styles from "../css/History.module.css";
import Card from "../components/CardHistory";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
export default class History extends Component {
   render() {
      title("History");
      //   TabTitle("User History");
      return (
         <>
            <Navbar />
            {/* <Header /> */}
            <main className={`${styles["hist-bck"]} py-5`}>
               <section>
                  <div className={`${styles["title-name"]}`}>
                     Let’s see what you have bought!
                  </div>
                  <div className={`${styles["h2"]}`}>
                     Long press to delete item
                  </div>
               </section>
               <section className="container col-lg my-5">
                  <section className="row justify-content-center">
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                  </section>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
