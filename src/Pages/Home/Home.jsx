import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/Featured/Featured";
import RatedHotels from "../../Components/RatedHotels/RatedHotels";
import Unique from "../../Components/Unique/Unique";
import Try from "../../Components/Featured/Try";
import Metadata from "../../Components/Metadata";
import MailList from "../../Components/MailList/MailList";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Metadata title="Home | Booking.com" />
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Try />
        <h1 className="homeTitle">Discover the Perfect Space</h1>
        <h3 className="homeTitles">
          Every Kind of Property for Your Unique Journey
        </h3>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <h3 className="homeTitles">
          Travellers with similar searches booked these properties
        </h3>
        <FeaturedProperties />
        <h1 className="homeTitle">High Rated Hotels</h1>
        <h3 className="homeTitles">
          Indulge in Excellence: Discover Our High-Rated Hotels
        </h3>
        <RatedHotels />
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <h3 className="homeTitles">
          From castles and villas to boats and igloos, we've got it all
        </h3>
        <Unique />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
