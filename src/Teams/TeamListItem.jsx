import React from "react";
import styles from "./TeamListItem.module.css";
import { Link } from "react-router-dom";

const TeamListItem = (props) => {
    //const image1 = require(props.team.teamLogoUrl);
    return (
     
          <div className={styles.teamOneContainer}>

              <img className={styles.stylingLogo} src={props.team.teamLogoUrl} alt="Board of Control for Cricket in India"/>

              <h4 className={styles.stylingTeamName}>{props.team.teamName}</h4>

              <small className={styles.stylingVenue}>{props.team.venue}</small>

              <div className={styles.styleWonContainer}>
                  <strong className={styles.stylingWon}>{props.team.tournmentWon}</strong>
              </div>

              <div className={styles.teamDetailContainer}>
                  <Link className={styles.stylingLink} to={"./TeamDetail/"+ props.team.teamReference} >Team Detail</Link>
              </div>
              
           </div>  
      
    );
  };

  export default TeamListItem