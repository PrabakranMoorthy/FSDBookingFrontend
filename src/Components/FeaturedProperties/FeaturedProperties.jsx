import useFetch from "../../Hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "https://room-booking.onrender.com/api/hotels?featured=true&limit=4"
    // " http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
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
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
