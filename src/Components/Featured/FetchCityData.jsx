import React from "react";
import useFetch from "../../Hooks/useFetch"; //Import your useFetch hook
import { host } from "../../Hooks/Config";

const FetchCityData = ({ cityName, children }) => {
  const { data, loading, error, reFetch } = useFetch(
    `${host}/api/hotels/countByCity?cities=newyork,jaipur,dublin,austin,reno,swizterland`
  );

  return children(data, loading, error);
};

export default FetchCityData;
