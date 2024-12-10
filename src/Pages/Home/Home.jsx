import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/PropertyList/PropertyList";
import MailList from "../../Components/MailList/MailList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
