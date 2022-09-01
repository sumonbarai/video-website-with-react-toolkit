import React from "react";
import Footer from "../components/footer/Footer";
import Grid from "../components/grid/Grid";
import NavBar from "../components/navbar/NavBar";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tag/Tags";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Tags />
      <Grid />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
