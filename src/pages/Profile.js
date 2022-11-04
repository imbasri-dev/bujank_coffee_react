import React, { Component } from "react";
// component
import Footer from "./../components/FooterBootstrap";
import Navbar from "./../components/Navbar";
import NavbarLogin from "./../components/NavbarLogin";
// helper
import title from "./../helpers/title";
import withNavigate from "../helpers/withNavigate";
// import Router Link
import { Link } from "react-router-dom";
// css
import styles from "./../css/Profile.module.css";
// assets
import icon_edit from "./../assets/image/main/icon_editpencil.png";
import img_userprofile from "./../assets/image/main/img_userprofile.png";
// axios
import Axios from "axios";
class Profile extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/profile/`,
      email: "",
      phone_number: "",
      address: "",
      displayname: "",
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
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
            console.log(data);
            console.log(response.msg);
            this.setState({
               displayname: data.displayname,
               email: data.email,
               phone_number: data.phone_number,
               address: data.address,
               firstname: data.firstname,
               lastname: data.lastname,
               birthday: data.birthday
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/"),
               gender: [data.gender],
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   // refactory handleInput
   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
         [name]: value,
      });
   };
   // onEmail = (e) => {
   //    this.setState({ email: e.target.value });
   // };
   // onPhone = (e) => {
   //    this.setState({ phone_number: e.target.value });
   // };
   // onAddress = (e) => {
   //    this.setState({ address: e.target.value });
   // };
   // onDisplayname = (e) => {
   //    this.setState({ displayname: e.target.value });
   // };
   // onFirstname = (e) => {
   //    this.setState({ firstname: e.target.value });
   // };
   // onLastname = (e) => {
   //    this.setState({ lastname: e.target.value });
   // };
   // onBirthday = (e) => {
   //    this.setState({ birthday: e.target.value });
   // };
   // onGender = (e) => {
   //    this.setState({ gender: e.target.value });
   // };

   render() {
      let {
         displayname,
         email,
         phone_number,
         address,
         firstname,
         lastname,
         birthday,
         gender,
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
                              <img
                                 src={img_userprofile}
                                 alt="img_userprofile"
                              />
                              <label htmlFor="files" id="lable_file">
                                 <img src={icon_edit} alt="icon_edit" />
                              </label>
                              <input
                                 type="file"
                                 name="file"
                                 id="files"
                                 className={styles.hidden}
                              />
                           </div>
                           <h3>{displayname}</h3>
                           <p className={styles.user__email}>{email}</p>
                           <p id="order">Has been ordered 15 products</p>
                        </section>
                        <section className={styles.user__contact}>
                           <div className={styles.contact}>
                              <h2>Contacts</h2>
                              <img src={icon_edit} alt="icon_edit" />
                           </div>
                           <div className={styles.input__contact}>
                              <div className={styles.column}>
                                 <label htmlFor="email">Email adress :</label>
                                 <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={this.handleChange}
                                    value={email}
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
                                    onChange={this.handleChange}
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
                                 onChange={this.handleChange}
                              />
                           </div>
                        </section>
                     </div>
                     <div className={styles.user__detail_bar}>
                        <div className={styles.user__detail}>
                           <div className={styles.detail}>
                              <h2>Details</h2>
                              <img src={icon_edit} alt="icon_change" />
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
                                       onChange={this.handleChange}
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
                                       onChange={this.handleChange}
                                    />
                                 </div>
                                 <div className={styles.input__column}>
                                    <label htmlFor="llastnameast">
                                       Last name :
                                    </label>
                                    <input
                                       type="text"
                                       name="lastname"
                                       id="lastname"
                                       value={lastname}
                                       onChange={this.handleChange}
                                    />
                                 </div>
                              </div>
                              <div className={styles.input__column}>
                                 <label htmlFor="birthday">DD/MM/YYYY :</label>
                                 <input
                                    className={styles.birthday}
                                    type="text"
                                    name="birthday"
                                    id="birthday"
                                    value={birthday}
                                    required
                                    onChange={this.handleChange}
                                 />
                                 <div className={styles.input__radio}>
                                    <input
                                       type="radio"
                                       name="gender"
                                       id="male"
                                       checked={
                                          gender[0] === "MALE" ? true : false
                                       }
                                    />
                                    <label
                                       htmlFor="male"
                                       className={styles.radio_label}
                                    >
                                       Male
                                    </label>
                                 </div>
                                 <div className={styles.input__radio}>
                                    <input
                                       type="radio"
                                       name="gender"
                                       id="female"
                                       checked={
                                          gender[0] === "FEMALE" ? true : false
                                       }
                                    />
                                    <label
                                       htmlFor="female"
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
                              className={`${styles.btn_utility} ${styles.save}`}
                              type="submit"
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
                                 localStorage.removeItem("userInfo");
                                 this.props.navigate("/");
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
         </>
      );
   }
}

export default withNavigate(Profile);
