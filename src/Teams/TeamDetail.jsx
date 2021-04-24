import React from "react";
import styles from "./TeamDetail.module.css";
import { Link } from "react-router-dom";
import bcci from "../images/bcci.png";

const TeamDetail = (props) => {
  let SquadList;

  if (props.team.squad.length) {
    SquadList = (
      <div className={styles.listingMainContainer}>
        {props.team.squad.map((playername) => (
          <div className={styles.listingName} key={playername}>{playername}</div>
        ))}
      </div>
    );
  } else {
    SquadList = <div>You have no data!</div>;
  }
  //const image1 = require(props.team.teamLogoUrl);
  return (
    <div>
      <Link className={styles.stylingBreadCrumb} to="/">Home{' >'}</Link><Link className={styles.stylingBreadCrumb} to="/Teams">Teams{' >'}</Link><Link className={styles.stylingBreadCrumb} to={props.team.teamReference}>{props.team.tag}</Link>
      <div className={styles.mainContainer}>
        <img
          className={styles.logoStyling}
          //src={bcci}
          src={props.team.teamLogoUrl}
          alt="Board of Control for Cricket in India"
        />
        <h4 className={styles.teamNameStyling}>{props.team.teamName}</h4>

        <div className={styles.teamDescription}>
          <div className={styles.teamInfo}>
            <div className={styles.contentOne}>
              <div className={styles.subContainer}>
                <small className={styles.fields}>Owner</small>
                <small className={styles.valueStyling}>
                  {props.team.owner}
                </small>
              </div>

              <div className={styles.subContainer}>
                <small className={styles.fields}>Coach</small>
                <small className={styles.valueStyling}>
                  {props.team.coach}
                </small>
              </div>
            </div>

            <div className={styles.contentTwo}>
              <div className={styles.subContainer}>
                <small className={styles.fields}>Venue</small>
                <small className={styles.valueStyling}>
                  {props.team.venue}
                </small>
              </div>

              <div className={styles.subContainer}>
                <small className={styles.fields}>Captain</small>
                <small className={styles.valueStyling}>
                  {props.team.captain}
                </small>
              </div>
            </div>
          </div>

          <div className={styles.contentThree}>
            <div>
              <p>{props.team.teamDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className={styles.stylingSquadHeader}>Squad</h2>
        </div>

        <div>
          <ul>
            <li>{SquadList}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
