import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./Unique.css";
import { host } from "../../Hooks/Config";

const HighRatedHotels = () => {
  const { data, loading, error } = useFetch(
    `${host}/api/hotels?uniqueData=true&limit=3`
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading... Please wait for a while ⌛️"
      ) : (
        <>
          {data.map((item) => (
            <Link to={`/hotels/${item._id}`} key={item._id} className="fpItem">
              <img src={item.photos[0]} alt="" className="fpImg" />

              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default HighRatedHotels;
