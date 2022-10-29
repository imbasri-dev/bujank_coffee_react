import React, { Component } from "react";
import Footer from "./../components/FooterBootstrap.js";
// css
import styles from "./../css/Profile.module.css";
// assets
import icon_logo from "./../assets/image/main/logo_coffee.png";
import img_bg_profiles from "./../assets/image/main/img_bg_profiles.png";
import icon_message from "./../assets/image/main/icon_message_button.png";
import icon_edit from "./../assets/image/main/icon_editpencil.png";
import img_userprofile from "./../assets/image/main/img_userprofile.png";
import moduleName from "./../assets/image/main/icon_hamburger.png";
class Profile extends Component {
    render() {
        return (
            <>
                {/* header */}
                <header>
                    <nav>
                        <span>
                            <img src={icon_logo} alt="icon_coffee" />
                            <p>Bujank Coffee</p>
                        </span>
                        <div className={styles.nav__link}>
                            <a href="../index.html">Home</a>
                            <a href="../view/product.html">Product</a>
                            <a href="">Your Cart</a>
                            <a href="">History</a>
                        </div>
                        <div className={styles.nav__utility}>
                            <a href="">
                                <img
                                    src="../assets/img/product/icon_search.png"
                                    alt="icon_search"
                                />
                            </a>
                            <a href="">
                                <img
                                    src="../assets/img/product/icon_message.png"
                                    alt="icon_message"
                                />
                                <span id="message_number">
                                    <p>1</p>
                                </span>
                            </a>
                            <a href="">
                                <img
                                    className={styles.img_userprofile}
                                    src="../assets/img/product/img_userprofile.png"
                                    alt="img_profile"
                                />
                            </a>
                        </div>
                        <div className={styles.table_nav}>
                            <a href="">
                                <img
                                    className={styles.img_userprofile}
                                    src="../assets/img/product/img_userprofile.png"
                                    alt="img_profile"
                                />
                            </a>
                            <img
                                className={styles.hamburger}
                                src="../assets/img/main/icon_hamburger.png"
                                alt="icon_hamburger"
                            />
                        </div>
                    </nav>
                </header>
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
                                        <label for="files" id="lable_file">
                                            <img
                                                src={icon_edit}
                                                alt="icon_edit"
                                            />
                                        </label>
                                        <input
                                            type="file"
                                            name="file"
                                            className={styles.hidden}
                                            id="files"
                                        />
                                    </div>
                                    <h3>Zulaikha</h3>
                                    <p className={styles.user__email}>
                                        zulaikha17@gmail.com
                                    </p>
                                    <p id="order">
                                        Has been ordered 15 products
                                    </p>
                                </section>
                                <section className={styles.user__contact}>
                                    <div className={styles.contact}>
                                        <h2>Contacts</h2>
                                        <img src={icon_edit} alt="icon_edit" />
                                    </div>
                                    <div className={styles.input__contact}>
                                        <div className={styles.column}>
                                            <label for="email">
                                                Email adress :
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value="zulaikha17@gmail.com"
                                            />
                                        </div>
                                        <div className={styles.column}>
                                            <label for="phones">
                                                Mobile number :
                                            </label>
                                            <input
                                                type="tel"
                                                name="phones"
                                                id="phones"
                                                value="(+62)813456782"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.input__contact} ${styles.column}`}
                                    >
                                        <label for="deliv_address">
                                            Delivery adress :
                                        </label>
                                        <input
                                            type="text"
                                            name="deliv_address"
                                            id="deliv_address"
                                            value="Iskandar Street no. 67 Block A Near Bus Stop"
                                        />
                                    </div>
                                </section>
                            </div>
                            <section className={styles.user__detail_bar} />
                            <div className={styles.user__detail}>
                                <div className={styles.detail}>
                                    <h2>Details</h2>
                                    <img src={icon_edit} alt="icon_change" />
                                </div>
                                <div className={styles.user__name}>
                                    <div className={styles.input__name}>
                                        <div className={styles.input__column}>
                                            <label for="displayname">
                                                Display name :
                                            </label>
                                            <input
                                                type="text"
                                                name="displayname"
                                                id="displayname"
                                                value="Zulaikha"
                                            />
                                        </div>
                                        <div className={styles.input__column}>
                                            <label for="first">
                                                First name :
                                            </label>
                                            <input
                                                type="text"
                                                name="first"
                                                id="first"
                                                value="Zulaikha"
                                            />
                                        </div>
                                        <div className={styles.input__column}>
                                            <label for="last">
                                                Last name :
                                            </label>
                                            <input
                                                type="text"
                                                name="last"
                                                id="last"
                                                value="Nirmala"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.input__column}>
                                        <label for="birthday">
                                            DD/MM/YYYY :
                                        </label>
                                        <input
                                            className={styles.birthday}
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            value="1990-03-04"
                                        />
                                        <div className={styles.input__radio}>
                                            <input
                                                type="radio"
                                                name="gender"
                                                id="male"
                                            />
                                            <label
                                                for="male"
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
                                                checked
                                            />
                                            <label
                                                for="female"
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
                                    <a href="#">Edit Password</a>
                                    <img
                                        src="../assets/img/main/icon_arrow.png"
                                        alt="icon_arrow"
                                    />
                                </span>
                                <span
                                    className={`${styles.btn_utility} ${styles.logout}`}
                                >
                                    <a href="#">Log out</a>
                                    <img
                                        src="../assets/img/main/icon_arrow.png"
                                        alt="icon_arrow"
                                    />
                                </span>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
}

export default Profile;
