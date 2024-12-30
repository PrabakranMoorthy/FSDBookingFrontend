import React, {  useState } from "react";
import BookingFormModal from "../../components/Modal/Modal"; // Import the new component
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Feet from "../../components/Feet/Feet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading } = useFetch(
    `http://localhost:5000/api/hotels/find/${id}`
  );

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

  const handleConfirmBooking = (bookingDetails) => {
    // Handle booking confirmation logic here
    console.log("Booking confirmed:", bookingDetails);
    handleBookingFormModalClose();
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
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Hotel;
