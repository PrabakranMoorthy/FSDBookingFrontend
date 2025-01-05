import React, { useState } from "react";
import BookingFormModal from "../../Components/Modal/Modal"; // Import the new component
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Feet from "../../Components/Feet/Feet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faBed,
  faParking,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./hotel.css";
import useFetch from "../../Hooks/useFetch";
import { host } from "../../Hooks/Config";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading } = useFetch(`${host}/api/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleBookingFormModalOpen = () => {
    setOpenModal(true);
  };

  const handleBookingFormModalClose = () => {
    setOpenModal(false);
  };

  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  //   return null;
  // };

  // Get token from cookies

  const handleConfirmBooking = async (bookingDetails) => {
    try {
      // Retrieve the token from cookies (ensure getCookie function is defined)
      // const token = getCookie("access_token");

      // if (!token) {
      //   throw new Error("Token is missing or expired. Please login again.");
      // }

      // Make the booking request
      const res = await axios.post(
        `${host}/api/rooms/bookroom`,
        bookingDetails,
        {
          headers: {
            "Content-Type": "application/json", // Optional: if you're sending JSON data
          },
        }
      );

      // Check if the response status is 200 (success)
      if (res.status === 200) {
        console.log(res.data);
        console.log("Booking confirmed:", bookingDetails);
        handleBookingFormModalClose(); // Close the modal after successful booking
      } else {
        // If status is not 200, show the error message
        alert(
          res.data.message || "Something went wrong while booking the room."
        );
      }
    } catch (err) {
      // Log detailed error information for debugging
      if (err.response) {
        // Server responded with an error
        console.error("Error response:", err.response.data);
        alert(
          `Error: ${
            err.response.data.message || "An error occurred. Please try again."
          }`
        );
      } else if (err.request) {
        // No response received
        console.error("Error request:", err.request);
        alert("Error: No response from server. Please try again later.");
      } else {
        // Something else went wrong
        console.error("Error:", err.message);
        alert(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading... Please wait for a while! ⌛️"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow" onClick={handleBookingFormModalOpen}>
              Reserve or Book Now!
            </button>
            {/*...other hotel details...*/}
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Property highlights!</h1>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {data.city}
                </span>
                <span>
                  <FontAwesomeIcon icon={faParking} />
                  Parking available at the hotels
                </span>
                <div className="texts">
                  <FontAwesomeIcon icon={faBed} /> Rooms:
                </div>
                <span className="siRoomsAvailables">
                  {data.rooms?.map((photo, i) => (
                    <p key={i}>{photo}</p>
                  ))}
                </span>

                <h2>
                  <b>${data.cheapestPrice}</b> (For 2-days)
                </h2>
                <button onClick={handleBookingFormModalOpen}>
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
          <Feet />
          {openModal && (
            <BookingFormModal
              isOpen={openModal}
              onClose={handleBookingFormModalClose}
              onConfirmBooking={handleConfirmBooking}
              id={id}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Hotel;
