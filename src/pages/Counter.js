import React from "react";
import { connect } from "react-redux";

import Header from "../components/Navbar";
import styles from "../css/Counter.module.css";
import counterActions from "../redux/actions/counter";

function Counter({ counter, dispatch }) {
   const onClickHandler = (action) => {
      dispatch(action);
   };
   return (
      <>
         <main
            style={{
               height: "100vh",
               display: "flex",
               flexDirection: "column",
            }}
         >
            <Header />
            <div
               style={{
                  backgroundColor: "grey",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
               }}
            >
               <section className={styles["title"]}>
                  <h1>Counter</h1>
               </section>
               <section className={styles["counter"]}>
                  <section className={styles["display"]}>
                     {counter.number}
                  </section>
                  <section className={styles["control"]}>
                     <div
                        className={styles["up"]}
                        onClick={() =>
                           onClickHandler(counterActions.counterUp())
                        }
                     >
                        &uarr;
                     </div>
                     <div
                        className={styles["down"]}
                        onClick={() =>
                           onClickHandler(counterActions.counterDown())
                        }
                     >
                        &darr;
                     </div>
                     <div
                        className={styles["reset"]}
                        onClick={() =>
                           onClickHandler(counterActions.counterReset())
                        }
                     >
                        &#8634;
                     </div>
                  </section>
               </section>
            </div>
            ;
         </main>
      </>
   );
}

const mapStateToProps = (reduxState) => {
   return {
      counter: reduxState.counter,
   };
};

export default connect(mapStateToProps)(Counter);
