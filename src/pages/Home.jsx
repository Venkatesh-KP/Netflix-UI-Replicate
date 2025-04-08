import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import movies from '../api/request';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-container">
      <Navbar />
      <Banner />

      <section className="movie-rows">
        <Row title="Trending Now" movies={movies.trending} />
        <Row title="Top Rated" movies={movies.topRated} />
        <Row title="Action Movies" movies={movies.action} />
        <Row title="Comedy Movies" movies={movies.comedy} />
        <Row title="Horror Movies" movies={movies.horror} />
        <Row title="Romance Movies" movies={movies.romance} />
        <Row title="Documentaries" movies={movies.documentaries} />
      </section>
    </main>
  );
}

export default Home;
