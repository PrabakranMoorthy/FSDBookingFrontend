import React from 'react';

const Navbar = () => {
    return (
      <>
        <div className="nav">
          <div className="navCon">
            <span className="navlogo">Booking.com</span>

            <div className="navI">
              <p className="P">INR</p>
              <img
                src="https://flagsweb.com/Flag_Emoji/India_Flag_Emoji.png"
                className="P"
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;