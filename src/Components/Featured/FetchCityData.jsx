import React from "react";
import useFetch from "../../Hooks/useFetch"; //Import your useFetch hook

const FetchCityData = ({ cityName, children }) => {
  const { data, loading, error, reFetch } = useFetch(`hotels?city=${cityName}`);

  return children(data, loading, error);
};

export default FetchCityData;
