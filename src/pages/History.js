import React, { Component } from "react";
import styles from "../css/History.module.css";
// component
import Card from "../components/CardHistory";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/FooterBootstrap";
import title from "../helpers/title";

import Axios from "axios";
class History extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/transaction/history?page=1&limit=12`,
      history: [],
      name: "",
      image: "",
      price: "",
      status: "",
   };
   costToRP = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };
   componentDidMount() {
      const { userInfo } = this.state;
      console.log(this.id);
      Axios.get(this.state.url, {
         headers: {
            "x-access-token": userInfo.token,
         },
      })
         .then((response) => {
            // console.log(response.data.data.data[0].id);
            this.setState({ history: response.data.data.data }, () => {
               // return res.data.result.data[0].image;
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   render() {
      title("History");
      // console.log(this.state.history);
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
                     {this.state.history.map((item, key) => (
                        <Card
                           name={item.name}
                           price={this.costToRP(item.total)}
                           image_product={item.image}
                           status={item.status}
                           key={`${item.id}`}
                           id={item.id}
                        />
                     ))}
                  </article>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
export default History;
