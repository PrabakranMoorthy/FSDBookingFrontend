import React from "react";
import useFetch from "../../Hooks/useFetch"; //Import your useFetch hook

const FetchCityData = ({ cityName, children }) => {
  const { data, loading, error, reFetch } = useFetch(
    "https://fsdbookingbackend-2.onrender.com/api/hotels/countByCity?cities=newyork,jaipur,dublin,austin,reno,swizterland"
  );

  return children(data, loading, error);
};

export default FetchCityData;
