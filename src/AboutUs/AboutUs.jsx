import React from "react";
import styles from "./AboutUs.module.css";


const ContactUs = (props) => {
    //const image1 = require(props.team.teamLogoUrl);
    return (
 
        
        
      <div className={styles.mainContainer}>
         
          <div>
          <h1 className={styles.stylingHeadings}>About Us</h1>
          <hr/>
              <h1 className={styles.stylingHeadings}>Indian Premier League</h1>
          </div>

          <div>
              <p className={styles.contentStyling}>
              The Indian Premier League (IPL) is a professional Twenty20 cricket league, contested by eight teams based out of eight different Indian cities.
              The league was founded by the Board of Control for Cricket in India (BCCI) in 2007. 
              It is usually held between March and May of every year and has an exclusive window in the ICC Future Tours Programme.
              </p>

              <p className={styles.contentStyling}>
              The IPL is the most-attended cricket league in the world and in 2014 was ranked sixth by average attendance among all sports leagues.
              In 2010, the IPL became the first sporting event in the world to be broadcast live on YouTube.[ The brand value of the IPL in 2019 was ₹475 billion (US$6.7 billion), according to Duff & Phelps. According to BCCI,
              the 2015 IPL season contributed ₹11.5 billion (US$160 million) to the GDP of the Indian economy.
            There have been thirteen seasons of the IPL tournament. The current IPL title holders are the Mumbai Indians, who won the 2020 season. The venue for the 2020 season was moved due to the COVID-19 pandemic and games were played in the United Arab Emirates.
              </p>
          </div>

          <div>
              <h1 className={styles.stylingHeadings}>Broadcasting</h1>
          </div>

          <div>
              <p className={styles.contentStyling}>
                  The IPL's broadcast rights were originally held by a partnership between Sony Pictures Networks and World Sport Group, under a ten-year contract valued at US$1.03 billion.
                  Sony would be responsible for domestic television, while WSG would handle international distribution.<br/><br/>
                  The initial plan was for 20% of these proceeds to go to the IPL, 8% as prize money and 72% would be distributed to the franchisees from 2008 until 2012, after which the IPL would go public and list its shares.
                  However, in March 2010, the IPL decided not to go public and list its shares.<br/><br/>
                  As of the 2016 season, Sony MAX, Sony SIX, and Sony ESPN served as the domestic broadcasters of the IPL; MAX and SIX aired broadcasts in Hindi, while SIX also aired broadcasts in the Bengali, Tamil, Kannada and Telugu languages.
                  Sony ESPN broadcast English-language feeds.Sony also produced an entertainment-oriented companion talk show, Extraaa Innings T20, which featured analysis and celebrity guests.
                </p>
          </div>
       
      </div>
     
    );
  };
  
  export default ContactUs;