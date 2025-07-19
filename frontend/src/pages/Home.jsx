import React from "react";
import Hero from "../component/Hero";
import ProductList from "../component/ProductList";
import Profile from "./Profile";
import Loading from "../component/Loading";


const Home = () => {
  return (
    <>
    <Loading />
      <Hero />

      <ProductList />
    </>
  );
};

export default Home;
