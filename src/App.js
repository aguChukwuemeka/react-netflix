import React from "react";
import "./App.css";
import Row from "./components/row";
import Banner from "./components/banner";
import requests from "./api/requests";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <header className="">
        <Banner />
      </header>
      <Row className="" title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row className="" title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row className="" title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row className="" title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row className="" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row className="" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row className="" title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row className="" title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
