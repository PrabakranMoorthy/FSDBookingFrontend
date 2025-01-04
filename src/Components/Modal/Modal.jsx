import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const BookingFormModal = ({ isOpen, onClose, onConfirmBooking }) => {
  const Navigate = useNavigate();
  const [maxPeople, setMaxPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    //Perform validation on form inputs
    if (maxPeople && startDate && endDate && numRooms) {
      const bookingDetails = {
        maxPeople,
        startDate,
        endDate,
        numRooms,
      };
      onConfirmBooking(bookingDetails);
      setBookingConfirmed(true);
      Navigate("/Success");
    } else {
      alert("Please fill in all the details");
    }
  };

  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <div className="modal-container">
        <h2 className="modal-title">Book your room</h2>
        <div className="input-grid">
          <input
            className="modal-input"
            type="number"
            placeholder="Maximum People"
            value={maxPeople}
            onChange={(e) => setMaxPeople(e.target.value)}
          />
          <input
            className="modal-input"
            type="date"
            placeholder="Starting Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className="modal-input"
            type="date"
            placeholder="Ending Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            className="modal-input"
            type="number"
            placeholder="Number of Rooms"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="modal-button" onClick={handleConfirmBooking}>
            Book Now
          </button>
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;
