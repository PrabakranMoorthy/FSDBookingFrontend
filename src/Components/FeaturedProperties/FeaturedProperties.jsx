import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from "react-router-dom";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "https://fsdbookingbackend-2.onrender.com/api/hotels?featured=true&limit=8"
  );

  const halfLength = Math.ceil(data.length / 2);
  const firstHalfData = data.slice(0, halfLength);
  const secondHalfData = data.slice(halfLength);

  return (
    <div className="">
      <div className="fp">
        {loading
          ? "Loading... Please wait for a while ⌛️"
          : firstHalfData.map((item) => (
              <Link
                to={`/hotels/${item._id}`}
                key={item._id}
                className="fpItem"
              >
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
      </div>
      <div className="fps">
        {loading
          ? "Loading... Please wait for a while ⌛️"
          : secondHalfData.map((item) => (
              <Link
                to={`/hotels/${item._id}`}
                key={item._id}
                className="fpItem"
              >
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
      </div>
    </div>
  );
};

export default FeaturedProperties;
