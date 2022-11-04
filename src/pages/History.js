import React, { Component } from "react";
import styles from "../css/History.module.css";
// component
import Card from "../components/CardHistory";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";
class History extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
   };
   render() {
      title("History");
      //   TabTitle("User History");
      return (
         <>
            {this.state.userInfo.token ? <Navbar /> : <NavbarLogin />}
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
                  <article className="row justify-content-center">
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
                  </article>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
export default History;
