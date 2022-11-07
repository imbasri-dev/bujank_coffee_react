import React, { Component } from "react";
// component
import Footer from "./../components/FooterBootstrap";
import Navbar from "./../components/Navbar";
import NavbarLogin from "./../components/NavbarLogin";
// helper
import title from "./../helpers/title";
import withNavigate from "../helpers/withNavigate";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Router Link
import { Link } from "react-router-dom";
// css
import styles from "./../css/Profile.module.css";
// assets
import icon_edit from "./../assets/image/main/icon_editpencil.png";
// import img_userprofile from "./../assets/image/main/img_userprofile.png";
// axios
import Axios from "axios";
class Profile extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/profile`,
      email: "",
      phone_number: "",
      address: "",
      displayname: "",
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      isEdit: true,
   };
   componentDidMount() {
      const { userInfo } = this.state;
      // console.log(userInfo.token); getToken
      Axios.get(this.state.url, {
         headers: {
            "x-access-token": userInfo.token,
         },
      })
         .then((response) => {
            const data = response.data.result[0];
            // console.log(data);
            // console.log(response.msg);
            this.setState({
               displayname: data.displayname,
               email: data.email,
               phone_number: data.phone_number,
               address: data.address,
               firstname: data.firstname,
               lastname: data.lastname,
               birthday: data.birthday,
               gender: data.gender,
               image: data.image,
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   // memasukan data kedatabase
   submitEditprofile = async (event) => {
      event.preventDefault();
      // console.log(this.state.address);
      try {
         const { userInfo } = this.state;

         Axios.patch(
            this.state.url,
            {
               displayname: this.state.displayname,
               firstname: this.state.firstname,
               lastname: this.state.lastname,
               address: this.state.address,
               image: this.state.image,
               birthday: this.state.birthday,
               gender: this.state.gender,
            },
            {
               headers: {
                  "x-access-token": userInfo.token,
               },
            },
            this.SavedToastMessage()
         );
      } catch (err) {
         console.log(err);
      }
   };
   Reload = () => {
      this.props.navigate("/profile");
   };
   SuccessToastMessage = () => {
      toast.success("Logout Success!", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   SavedToastMessage = () => {
      toast.success("data changed successfully", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   // refactory handleInput
   // handleChange = (event) => {
   //    const { name, value } = event.target;
   //    this.setState({
   //       [name]: value,
   //    });
   // };

   onEmail = (e) => {
      this.setState({ email: e.target.value });
   };
   onPhone = (e) => {
      this.setState({ phone_number: e.target.value });
   };
   onAddress = (e) => {
      this.setState({ address: e.target.value });
   };
   onDisplayname = (e) => {
      this.setState({ displayname: e.target.value });
   };
   onFirstname = (e) => {
      this.setState({ firstname: e.target.value });
   };
   onLastname = (e) => {
      this.setState({ lastname: e.target.value });
   };
   onBirthday = (e) => {
      this.setState({ birthday: e.target.value });
   };
   onGender = (e) => {
      this.setState({ gender: e.target.value });
   };
   onFile = (e) => {
      this.setState({ image: e.target.value });
   };
   onEdit = () => {
      this.setState({ isEdit: false });
   };
   render() {
      const {
         displayname,
         email,
         phone_number,
         address,
         firstname,
         lastname,
         birthday,
         gender,
         image,
      } = this.state;
      // birthday.slice(0, 10).split("-").reverse().join("/"); debug
      // console.log(gender[0] === "MALE" ? "ya" : "no"); debug
      title("Profile");
      return (
         <>
            {/* header */}
            {this.state.userInfo.token ? <Navbar /> : <NavbarLogin />}
            {/* header */}
            <main className={styles.container}>
               <section className={styles.content__bar}>
                  <h1>User Profile</h1>
                  <div className={styles.content__profile}>
                     <div className={styles.content__contact}>
                        <section className={styles.user__profile}>
                           <div className={styles.user__img}>
                              <img src={image} alt="img_userprofile" />
                              <label htmlFor="files" id="lable_file">
                                 <img src={icon_edit} alt="icon_edit" />
                              </label>
                              <input
                                 type="file"
                                 name="file"
                                 id="files"
                                 onChange={this.onFile}
                                 className={styles.hidden}
                              />
                           </div>
                           <h3>{displayname}</h3>
                           <p className={`${styles.user__email} py-3`}>
                              {email}
                           </p>
                           <p id="order">Has been ordered 15 products</p>
                        </section>
                        <section className={styles.user__contact}>
                           <div className={styles.contact}>
                              <h2>Contacts</h2>
                              <img
                                 src={icon_edit}
                                 alt="icon_edit"
                                 onClick={this.onEdit}
                              />
                           </div>
                           <div className={styles.input__contact}>
                              <div className={styles.column}>
                                 <label htmlFor="email">Email adress :</label>
                                 <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    // onChange={this.onEmail}
                                    value={email}
                                    disabled={this.state.isEdit}
                                 />
                              </div>
                              <div className={styles.column}>
                                 <label htmlFor="phone_number">
                                    Mobile number :
                                 </label>
                                 <input
                                    type="tel"
                                    name="phone_number"
                                    id="phones"
                                    value={phone_number}
                                    // onChange={this.onPhone}
                                    disabled={this.state.isEdit}
                                 />
                              </div>
                           </div>
                           <div
                              className={`${styles.input__contact} ${styles.column}`}
                           >
                              <label htmlFor="address">Delivery adress :</label>
                              <input
                                 type="text"
                                 name="address"
                                 id="address"
                                 value={address}
                                 onChange={this.onAddress}
                                 disabled={this.state.isEdit}
                              />
                           </div>
                        </section>
                     </div>
                     <div className={styles.user__detail_bar}>
                        <div className={styles.user__detail}>
                           <div className={styles.detail}>
                              <h2>Details</h2>
                              <img
                                 src={icon_edit}
                                 alt="icon_change"
                                 onClick={this.onEdit}
                              />
                           </div>
                           <div className={styles.user__name}>
                              <div className={styles.input__name}>
                                 <div className={styles.input__column}>
                                    <label htmlFor="displayname">
                                       Display name :
                                    </label>
                                    <input
                                       type="text"
                                       name="displayname"
                                       id="displayname"
                                       value={displayname}
                                       onChange={this.onDisplayname}
                                       disabled={this.state.isEdit}
                                    />
                                 </div>
                                 <div className={styles.input__column}>
                                    <label htmlFor="firstname">
                                       First name :
                                    </label>
                                    <input
                                       type="text"
                                       name="firstname"
                                       id="firstname"
                                       value={firstname}
                                       onChange={this.onFirstname}
                                       disabled={this.state.isEdit}
                                    />
                                 </div>
                                 <div className={styles.input__column}>
                                    <label htmlFor="lastname">
                                       Last name :
                                    </label>
                                    <input
                                       type="text"
                                       name="lastname"
                                       id="lastname"
                                       value={lastname}
                                       onChange={this.onLastname}
                                       disabled={this.state.isEdit}
                                    />
                                 </div>
                              </div>
                              <div className={styles.input__column}>
                                 <label htmlFor="birthday">DD/MM/YYYY :</label>
                                 <input
                                    className={styles.birthday}
                                    type={this.state.isEdit ? "text" : "date"}
                                    name="birthday"
                                    id="birthday"
                                    placeholder={
                                       birthday == null
                                          ? null
                                          : birthday
                                               .slice(0, 10)
                                               .split("-")
                                               .reverse()
                                               .join("/")
                                    }
                                    onChange={this.onBirthday}
                                    disabled={this.state.isEdit}
                                 />
                                 <div className={styles.input__radio}>
                                    <input
                                       type="radio"
                                       name="gender"
                                       id="MALE"
                                       value={"MALE"}
                                       onChange={this.onGender}
                                       checked={gender === "MALE"}
                                       disabled={this.state.isEdit}
                                    />
                                    <label
                                       htmlFor="MALE"
                                       className={styles.radio_label}
                                    >
                                       Male
                                    </label>
                                 </div>
                                 <div className={styles.input__radio}>
                                    <input
                                       type="radio"
                                       name="gender"
                                       id="FEMALE"
                                       value={"FEMALE"}
                                       onChange={this.onGender}
                                       checked={gender === "FEMALE"}
                                       disabled={this.state.isEdit}
                                    />
                                    <label
                                       htmlFor="FEMALE"
                                       className={styles.radio_label}
                                    >
                                       Female
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={styles.user__utility}>
                           <h3>Do you want to save the change?</h3>
                           <button
                              onClick={this.submitEditprofile}
                              className={`${styles.btn_utility} ${styles.save}`}
                           >
                              Save Change
                           </button>
                           <button
                              className={`${styles.btn_utility} ${styles.cancel}`}
                              type="reset"
                           >
                              Cancel
                           </button>
                           <span
                              className={`${styles.btn_utility} ${styles.edit}`}
                           >
                              <Link to="/forgot">Edit Password</Link>
                              <i className="bi bi-chevron-right"></i>
                           </span>
                           <span
                              onClick={() => {
                                 this.SuccessToastMessage();
                                 localStorage.removeItem("userInfo");
                                 setTimeout(() => {
                                    // Run code
                                    this.props.navigate("/");
                                 }, 5000);
                              }}
                              className={`${styles.btn_utility} ${styles.logout}`}
                           >
                              <p>Log out</p>
                              <i className="bi bi-chevron-right"></i>
                           </span>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
            <ToastContainer />
         </>
      );
   }
}

export default withNavigate(Profile);
