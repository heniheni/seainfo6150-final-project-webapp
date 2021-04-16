import React from 'react'
import PropTypes from "prop-types";
import TeamListItem from "./TeamListItem"
import styles from "./Team.module.css";

const Teams = (props) => {
    let displayContent;

    if (props.teams.length) {
      displayContent = (
        <div className={styles.mainDiv}>
          {props.teams.map((team) => (
             <TeamListItem team={team}  />
          ))}
        </div>
      );
    } else {
      displayContent = <div>You have no data!</div>;
    }
  
    return (
      <div>
        {displayContent}
      </div>
    );
  };
  
  Teams.propTypes = {
      teams: PropTypes.array.isRequired
  }


export default Teams
