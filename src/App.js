import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Home/Home.jsx";

import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import ipl from "../src/ipl.png";
import Teams from "./Teams/Teams.jsx";
import Form from "./FeedBackForm/FeedBackForm.jsx";
import TeamDetail from "./Teams/TeamDetail.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import News from "./News/News.jsx";
import NewsDetail from "./News/NewsDetail.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [fetchedNews, setFetchedNews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://localhost:8000/teams");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }

    const fetchNews = async () => {
      // performs a GET request
      const responseNews = await fetch("http://localhost:8000/News");
      const responseNewsJson = await responseNews.json();
      setFetchedNews(responseNewsJson);
    };

    if (isEmpty(fetchedNews)) {
      fetchNews();
    }
  }, [fetchedData, fetchedNews]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <header>
          <nav className={styles.navContainer}>
          <Link to="/"><img className={styles.logoBox} src={ipl} alt="IPL Player Cricket"/></Link>

            {/* <div  className={styles.menuContainer}> */}
            <ul className={styles.listControl}>
              {/* these links should show you how to connect up a link to a specific route */}
              <li>
                <Link className={styles.stylingLink} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.stylingLink} to="/Teams">
                  Teams
                </Link>
              </li>
              <li>
                <Link className={styles.stylingLink} to="/News">
                  News
                </Link>
              </li>
              <li>
                <Link className={styles.stylingLink} to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={styles.stylingLink} to="/form">
                  Feedback
                </Link>
              </li>

              <li>
                <Link className={styles.stylingLink} to="/ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* </div> */}
          </nav>
        </header>
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className={styles.centerArea}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />

          <Route
            exact
            path={`/newsDetail/:newsId`}
            render={({ match }) => {
              return fetchedNews ? (
                <NewsDetail newsDetail={fetchedNews[match.params.newsId]} />
              ) : null;
            }}
          ></Route>

          {/* <Route path="/foo" exact component={Foo} /> */}
          <Route path="/form" exact component={Form} />

          <Route path="/news" exact component={News}>
            {isEmpty(fetchedNews) ? (
              "Team Data Loading..."
            ) : (
              <News news={Object.values(fetchedNews)} />
            )}
          </Route>

          <Route path="/contactus" exact component={ContactUs} />

          <Route path="/teams" exact component={Teams}>
            {isEmpty(fetchedData) ? (
              "Team Data Loading..."
            ) : (
              <Teams teams={Object.values(fetchedData)} />
            )}
          </Route>
          {/* passing parameters via a route path */}
          <Route
            path="/bar/:categoryId/:productId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props

              <Bar
                categoryId={match.params.categoryId}
                productId={match.params.productId}
              />
            )}
          />
          <Route
            path="/baz"
            exact
            render={() => <Baz content={externalContent} />}
          />

          <Route
            exact
            path={`/TeamDetail/:teamReference`}
            render={({ match }) => {
              // getting the parameters from the url and passing
              // down to the component as props
              return fetchedData ? (
                <TeamDetail team={fetchedData[match.params.teamReference]} />
              ) : null;
            }}
          />

          <Route component={Error} />
        </Switch>
      </div>
      <footer>
        Developed By: <i>Heni Bhungalia</i> 
        <Link className={styles.footerLink} to="/ContactUs">
          Contact Us
        </Link>
      </footer>
    </div>
  );
}

export default App;
