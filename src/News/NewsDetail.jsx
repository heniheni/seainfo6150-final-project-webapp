import React from "react";
import styles from "./NewsDetail.module.css";

import HTMLText from "../Helper/HTMLText.jsx"


const NewsDetail = (props) => {
  let NewsDetailContent;

 
    NewsDetailContent = (
      <div>
         <article>
           <div>
             <h1 className={styles.stylingTitle}>{props.newsDetail.title}</h1>
             <div className={styles.stylingDate}>
                    <time dateTime={props.newsDetail.datetime} >{props.newsDetail.datePublished}</time>
                  </div>
           </div>
           <div className={styles.coverContainer}>
           <img className={styles.stylingNewsCover}
                  src={props.newsDetail.newsImageUrl}
                  alt="News Cover"
                />
           </div>
                
        
                  <div>
                    <h4 className={styles.shortTextStyling}>{props.newsDetail.shortText}</h4>
                  </div>
                  {/* <div className={styles.contentContainer}>
                    <p className={styles.contentStyling}>{props.newsDetail.detailedText}</p>
                  </div> */}

                  <div className={styles.contentContainer}>
                  <HTMLText text={props.newsDetail.detailedText} />
                </div>

                  
               
              </article>
      </div>
    );
  

  return <div>{NewsDetailContent}</div>;
};

export default NewsDetail;
