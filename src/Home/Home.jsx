import React from "react";
import Form from "../FeedBackForm/FeedBackForm";
import treefrog from "../images/treefrog.jpg";
import ImagesSlide from "../ImageSlider/ImageSlider";
import player_one from "../images/player_one.png";
import player_two from "../images/player_two.png";
import player_three from "../images/player_three.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
  
      <div>
        <ImagesSlide />
      </div>
      <div>
        <h1 className={styles.headerStyling}>2021 Leaders</h1>
      </div>
      <div className={styles.leadersContainer}>
        <div className={styles.playerOneContainer}>
          <img src={player_one} alt="Sport Player First" />
          <div className={styles.awardOneContainer}>
            <strong className={styles.awardOne}>Orange Cap</strong>
          </div>

          <div className={styles.playerOneInfo}>
            <div>Nitish</div>

            <div>
              <strong className={styles.stylingName}>Rana</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>137</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Runs</small>
            </div>
          </div>
        </div>

        <div className={styles.playerTwoContainer}>
          <img src={player_two} alt="Sport Player Second" />
          <div className={styles.awardTwoContainer}>
            <strong className={styles.awardTwo}>Purple Cap</strong>
          </div>

          <div className={styles.playerOneInfo}>
            <div>Sanju</div>

            <div>
              <strong className={styles.stylingName}>Samson</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>6</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Wickets</small>
            </div>
          </div>
        </div>

        <div className={styles.playerThreeContainer}>
          <img src={player_three} alt="Sport Player Third" />
          <div className={styles.awardThreeContainer}>
            <strong className={styles.awardThree}>Highest Score</strong>
          </div>

          <div className={styles.playerOneInfo}>
            <div>Andre</div>

            <div>
              <strong className={styles.stylingName}>Russell</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>119</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Score</small>
            </div>
          </div>
        </div>

        <div className={styles.playerOneContainer}>
          <img src={player_one} alt="Sport Player Fourth" />
          <div className={styles.awardFourContainer}>
            <strong className={styles.awardFour}>Best Bowling Figures</strong>
          </div>
          <div className={styles.playerOneInfo}>
            <div>Nitish</div>

            <div>
              <strong className={styles.stylingName}>Rana</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>61</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Score</small>
            </div>
          </div>
        </div>

        <div className={styles.playerTwoContainer}>
          <img src={player_two} alt="Sport Player Fifth" />
          <div className={styles.awardFiveContainer}>
            <strong className={styles.awardFive}>Most Valuable Player</strong>
          </div>

          <div className={styles.playerOneInfo}>
            <div>Sanju</div>

            <div>
              <strong className={styles.stylingName}>Samson</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>7</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Sixes</small>
            </div>
          </div>
        </div>

        <div className={styles.playerThreeContainer}>
          <img src={player_three} alt="Sport Player Sixth" />
          <div className={styles.awardSixContainer}>
            <strong className={styles.awardSix}>All Rounder</strong>
          </div>

          <div className={styles.playerOneInfo}>
            <div>Andre</div>

            <div>
              <strong className={styles.stylingName}>Russell</strong>
            </div>

            <div>
              <strong className={styles.stylingDigit}>5/15</strong>
            </div>

            <div>
              <small className={styles.stylingText}>Wickets</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className={styles.pointTableHeaderStyling}>Point Table</h1>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.scheduleTable}>
          <thead>
          <tr className={styles.tableFirstRow}>
            <th></th>
            <th>Team</th>
            <th>Pld</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>N/R</th>
            <th>Net RR</th>
            <th>For</th>
            <th>Against</th>
            <th>Pts</th>
          </tr>
          </thead>
          
          <tbody>
          <tr>
            <td>1</td>
            <td className={styles.shadowTable}>Delhi Capitals</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>+0.779</td>
            <td>190/18.4</td>
            <td>188/20</td>
            <td>2</td>
          </tr>

          <tr>
            <td>2</td>
            <td className={styles.shadowTable}>Kolkata Knight Riders</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>+0.500</td>
            <td>187/20</td>
            <td>177/20</td>
            <td>2</td>
          </tr>

          <tr>
            <td>3</td>
            <td className={styles.shadowTable}>Punjab Kings</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>+0.200</td>
            <td>221/20</td>
            <td>217/20</td>
            <td>2</td>
          </tr>

          <tr>
            <td>4</td>
            <td className={styles.shadowTable}>Royal Challengers Bangalore</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>+0.050</td>
            <td>160/20</td>
            <td>159/20</td>
            <td>2</td>
          </tr>

          <tr>
            <td>5</td>
            <td className={styles.shadowTable}>Mumbai Indians</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>-0.050</td>
            <td>159/20</td>
            <td>160/20</td>
            <td>0</td>
          </tr>

          <tr>
            <td>6</td>
            <td className={styles.shadowTable}>Rajasthan Royals</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>-0.200</td>
            <td>217/20</td>
            <td>221/20</td>
            <td>0</td>
          </tr>

          <tr>
            <td>7</td>
            <td className={styles.shadowTable}>Sunrisers Hyderabad</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>-0.500</td>
            <td>177/20</td>
            <td>187/20</td>
            <td>0</td>
          </tr>

          <tr>
            <td>8</td>
            <td className={styles.shadowTable}>Chennai Super Kings</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>-0.779</td>
            <td>188/20</td>
            <td>190/18.4</td>
            <td>0</td>
          </tr>
          </tbody>
          
        </table>
      </div>
    </>
  );
};

export default Home;
