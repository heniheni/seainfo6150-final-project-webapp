import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";

const ContactUs = (props) => {
  //const image1 = require(props.team.teamLogoUrl);
  return (
    <div>
<Link className={styles.stylingBreadCrumb} to="/">Home {' > '}</Link><Link className={styles.stylingBreadCrumb} to="/ContactUs">ContactUs</Link>
  
    <div className={styles.mainContainer}>
      <div>
        <h1>Contact Us</h1>
      </div>

      <hr />

      <div>
        <h3 className={styles.subHeading}>Contact Details</h3>
      </div>
      <br />
      <div className={styles.content}>
        <p>
          BCCI-IPL
          <br />
          4th Floor, Cricket Centre
          <br />
          Wankhede Stadium
          <br />
          ‘D’ Road, Churchgate
          <br />
          Mumbai- 400020
          <br />
          India
          <br />
          <br />
          T +91 22 22800300
          <br />
          T +91 22 61580300
          <br />
          F +91 22 22800354
          <br />
        </p>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
