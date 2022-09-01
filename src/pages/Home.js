import React from "react";
import Grid from "../components/grid/Grid";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tag/Tags";

const Home = () => {
  return (
    <div>
      <Tags />
      <Grid />
      <Pagination />
    </div>
  );
};

export default Home;
