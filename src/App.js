import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Navigation />
            <Banner />
            <Row
              isLargeRow
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            {/* <Row title="Action" fetchUrl={requests.fetchAction} /> */}
            <Row title="Comedy" fetchUrl={requests.fetchComedy} />
            {/* <Row title="Horror" fetchUrl={requests.fetchHorror} /> */}
            <Row title="Romance" fetchUrl={requests.fetchRomance} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
