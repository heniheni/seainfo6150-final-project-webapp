import React from "react";
import styles from "./News.module.css";
import { Link } from "react-router-dom";
import RCBcover from "../images/RCBcover.jpg";

const News = (props) => {
  let News;

  if (props.news.length) {
    News = (
      <div>
      <div><Link className={styles.stylingBreadCrumb} to="/">Home{' >'}</Link><Link className={styles.stylingBreadCrumb} to="/News">News</Link></div>
      <div className={styles.contentDisplay}>
        {props.news.map((news) => (
          <div className={styles.card}>
            <Link className={styles.mainNewsContainer} to={"./NewsDetail/" + news.newsId} >
              <article>
                <img
                  className={styles.imgCover}
                  src={news.newsImageUrl}
                  alt="News Cover"
                />
                <div className={styles.subTextContainer}>
                  <div>
                    <h1 className={styles.stylingTitle}>{news.title}</h1>
                  </div>

                  <div className={styles.stylingDate}>
                    <time dateTime={news.datetime}>{news.datePublished}</time>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        
        ))}
      </div>
    </div>
    );
  } else {
    News = <div>You have no data!</div>;
  }

  return <div>{News}</div>;
};

export default News;
