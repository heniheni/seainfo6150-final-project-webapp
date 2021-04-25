import React from 'react'
import { Link } from 'react-router-dom';
import pnf from "../images/pnf.jpg";
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.mainContainer}>
        <div>
           <img className={styles.imgStyle} src={pnf} alt="Page Not Found"/>
        </div>

        <div>
            <Link className={styles.errorRedirectLink} to="/">Go To Home</Link>
        </div>
        </div>
    )
}

export default Error
