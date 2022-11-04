import React from "react";
// import styles from "../css/Addpromo.module.css";
function Addpromo() {
   return (
      <>
         <main className="row bg-secondary">
            {/* content left */}
            <aside className="col-md-6">
               <span>
                  Favorite & Promo <i class="bi bi-chevron-right"></i>
                  <span>Add new promo</span>
               </span>
               hello aside <img src="/" alt="img_promo" />
               <span>Take a picture</span>
               <span>Choose from gallery</span>
               <section>
                  <label>Enter the discount :</label>
                  <input type="number" placeholder="input discount" />
               </section>
               <section>
                  <label>Expire date1 :</label>
                  <input type="date" />
                  <input type="date" />
               </section>
               <section>
                  <label>Input coupun code :</label>
                  <input type="text" />
               </section>
            </aside>
            {/* content right */}
            <section className="col-md-6">
               <form className="text-start">
                  <section>
                     <label for="name">Name :</label>
                     <input
                        id="name"
                        type="text"
                        placeholder="Type promo name min. 50 characters"
                     />
                  </section>
                  <section>
                     <label for="price">Price :</label>
                     <input
                        id="price"
                        type="number"
                        placeholder="Type the normal price"
                     />
                  </section>
                  <section>
                     <label>Description :</label>
                     <input
                        id="description"
                        type="text"
                        placeholder="Describe your promo min. 150 characters"
                     />
                  </section>
                  <section>
                     <label>Input product size :</label>
                     <p>Click size you want to use for this product</p>
                     <span>R</span>
                     <span>L</span>
                     <span>XL</span>
                  </section>
                  <section>
                     <label>Input delivery methods :</label>
                     <p>Click methods you want to use for this product</p>
                     <span>Home Delivery</span>
                     <span>Dine in</span>
                     <span>Take away</span>
                  </section>
                  <button>Save Product</button>
                  <button>Cancel</button>
               </form>
            </section>
         </main>
      </>
   );
}

export default Addpromo;
