import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./featured.css";
import { SearchContext } from "../../Context/SearchContext";
import { useContext } from "react";

const cities = [
  {
    name: "New York",
    image:
      "https://metro.co.uk/wp-content/uploads/2016/11/537856138.jpg?quality=90&strip=all&zoom=1&resize=964%2C641",
    properties: 100,
  },
  {
    name: "Jaipur",
    image: "https://i.postimg.cc/yYbG40j6/2.jpg",
    properties: 100,
  },
  {
    name: "Dublin",
    image:
      "https://th.bing.com/th/id/OIP.gJT1KKvvgRRNIwjxCVNXuQHaEP?pid=ImgDet&rs=1",
    properties: 100,
  },
  {
    name: "Austin",
    image:
      "https://th.bing.com/th/id/OIP.o95BDoJ-TLexWqSR4T-HTAHaE8?pid=ImgDet&rs=1",
    properties: 100,
  },
  {
    name: "Reno",
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    properties: 100,
  },
  {
    name: "Switzerland",
    image:
      "https://th.bing.com/th/id/OIP.k_ckWkl-fBBVGXc9FE9q4wHaE8?pid=ImgDet&rs=1",
    properties: 100,
  },
];

const Featured = () => {
  const navigate = useNavigate();
  //Access the data from the SearchContext
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { dispatch } = useContext(SearchContext);

  const handleSearch = (cityName) => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination: cityName, dates, options },
    });
  };
  return (
    <div className="featuredGrid">
      {cities.map((city, index) => (
        <div key={index} className="" onClick={() => handleSearch(city.name)}>
          <div className="featuredItem">
            <img src={city.image} alt={city.name} className="featuredImg" />
            <div className="featuredTitles">
              <h1>{city.name}</h1>
              <h2>{city.properties} properties</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
