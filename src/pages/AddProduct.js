import React from "react";
// import styles from "../css/AddProduct.module.css";
function AddProduct() {
   return (
      <>
         <main className="row bg-secondary">
            {/* content left */}
            <aside className="col-md-6">
               <span>
                  Favorite & Promo <i class="bi bi-chevron-right"></i>
                  <span>Add new product</span>
               </span>
               <img src="/" alt="img_product" />
               <span>Take a picture</span>
               <span>Choose from gallery</span>
               <section>
                  <label>Delivery Hour :</label>
                  <input type="date" />
                  <input type="date" />
               </section>
               <section>
                  <label>Input stock :</label>
                  <input type="number" />
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
                        placeholder="Type product name min. 50 characters"
                     />
                  </section>
                  <section>
                     <label for="price">Price :</label>
                     <input
                        id="price"
                        type="number"
                        placeholder="Type the price"
                     />
                  </section>
                  <section>
                     <label>Description :</label>
                     <input
                        id="description"
                        type="text"
                        placeholder="Describe your product min. 150 characters"
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

export default AddProduct;
