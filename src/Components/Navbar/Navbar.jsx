import React from "react";
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  //const { dispatch } = useContext(AuthContext);
  //const navigate = useNavigate();

  //const handleLogout = () => {
    //Clear localStorage
    //localStorage.clear();
    //Dispatch logout action
    //dispatch({ type: "LOGOUT" });
    //navigate("/login");
    //Redirect to login
  //}
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">Hotel Booking.com</span>
          </Link>

          <div className="navItems">
            <div className="navItems">
              <p>INR</p>
              <img src="https://flagsweb.com/Flag_Emoji/India_Flag_Emoji.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
