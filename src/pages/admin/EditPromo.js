import React from "react";
// import styles from "../css/EditPromo.module.css";
function EditPromo() {
   return (
      <>
         <main className="row text-start">
            <section className="col-md-6">
               <span>
                  Favorite & Promo <i class="bi bi-chevron-right"></i>
                  <span>Edit promo</span>
               </span>
               {/* card */}
               <div className="text-center">
                  <section>
                     <img
                        src="../assets/image/main/img_dummy_uploadphoto.png"
                        alt="img_promo"
                     />
                     <h2>Beef Spaghetti</h2>
                     <h3>20% OFF</h3>
                     <p>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                  </section>
                  <section>
                     <p>COUPON CODE</p>
                     <h2>FNPR15RG</h2>
                     <p>Valid untill October 10th 2020</p>
                  </section>
               </div>
               <section>
                  <label> Expire date :</label>
                  <input type="date" />
                  <input type="date" />
               </section>
               <section>
                  <label> Input promo code :</label>
                  <input type="text" />
               </section>
            </section>

            <section className="col-md-6">
               <span className="text-end">Cancel</span>
               <section>
                  <label>Name :</label>
                  <input type="text" />
               </section>
               <section>
                  <label>Price :</label>
                  <input type="number" />
               </section>
               <section>
                  <label>Description :</label>
                  <input type="text" />
               </section>
               <section>
                  <p>Click product size you want to use for this promo</p>
                  <span>R</span>
                  <span>L</span>
                  <span>XL</span>
               </section>
               <section>
                  <label>Enter the discount :</label>
                  <input type="text" />
               </section>
               <button>Save change</button>
            </section>
         </main>
      </>
   );
}

export default EditPromo;
