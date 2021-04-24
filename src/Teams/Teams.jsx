import React from "react";
import PropTypes from "prop-types";
import TeamListItem from "./TeamListItem";
import styles from "./Team.module.css";
import { Link } from "react-router-dom";

const Teams = (props) => {
  let displayContent;

  if (props.teams.length) {
    displayContent = (
      <>
      <div><Link className={styles.stylingBreadCrumb} to="/">Home {' > '}</Link><Link className={styles.stylingBreadCrumb} to="/Teams">Teams</Link></div>
      <div className={styles.mainDiv}>
        {props.teams.map((team) => (
          <TeamListItem key={team.tag} team={team} />
        ))}
      </div>
      </>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return <div>{displayContent}</div>;
};

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default Teams;
