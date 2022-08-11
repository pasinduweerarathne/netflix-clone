import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row id="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row id="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row id="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row id="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
