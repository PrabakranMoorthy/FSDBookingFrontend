import React from 'react';
import "./featured.css";
import useFetch from "../../Hooks/useFetch";

const Featured = () => {
    const {loading}=useFetch("/hotels/countByCity?cities=berlin,madrid,london");
    return (
      <div className="featured">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-chennai-to-mahabalipuram-and-kanchipuram-trip-sightseeing-tour-package-arjunar-penance-mahabalipuram.jpg?resize=750%2C500&ssl=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>369 properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://content.r9cdn.net/rimg/dimg/6d/77/0cc45283-city-32821-176ddb032b7.jpg?width=1200&height=630&crop=false"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>New Delhi</h1>
                <h2>231 properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?imwidth=640"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>60 properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default Featured;