import React from "react";
import "./propertylist.css";
import useFetch from "../../Hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://cdn0.weddingwire.in/vendor/8684/3_2/960/jpg/hotels-lemon-tree-premier-ahmedabad-hotel-space-3_15_298684-159497949283782.jpeg",
    "https://c4.wallpaperflare.com/wallpaper/22/205/283/apartment-condo-design-home-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/438/466/493/huvafen-fushi-spa-resort-hd-with-high-resolution-wallpaper-preview.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowHoGGaPWUT1QyhBgX6fBCqnpnrccsVGv9Q&usqp=CAU",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Log-Cabin-HD-Image.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
