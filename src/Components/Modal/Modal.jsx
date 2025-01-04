import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { host } from "../../Hooks/Config";
import "./Modal.css";

const BookingFormModal = ({ isOpen, onClose, onConfirmBooking, id }) => {
  const Navigate = useNavigate();
  const [maxPeople, setMaxPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [firstDropdownRoom, setFirstDropdownRoom] = useState("");
  const [firstDropdownOptions, setFirstDropdownOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const fetchFirstDropdownOptions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${host}/api/hotels/room/${id}`); // Replace with your API
      const data = await response.json();
      setFirstDropdownOptions(data); // Assuming data is an array of { value, label }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching first dropdown options:", error);
      setLoading(false);
    }
  };
  const handleFirstDropdownChange = async (event) => {
    const selectedValue = event.target.value;
    setFirstDropdownRoom(selectedValue);
  };
  const handleConfirmBooking = () => {
    //Perform validation on form inputs
    if (maxPeople && startDate && endDate && numRooms && firstDropdownRoom) {
      const bookingDetails = {
        maxPeople,
        startDate,
        endDate,
        numRooms,
        firstDropdownRoom,
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
            onChange={(e) => {
              setNumRooms(e.target.value);
              fetchFirstDropdownOptions();
            }}
          />
          <label htmlFor="first-dropdown">Select Room:</label>
          <select
            id="first-dropdown"
            value={firstDropdownRoom}
            onChange={handleFirstDropdownChange}
            disabled={loading}
          >
            <option value="">-- Select --</option>
            {firstDropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
