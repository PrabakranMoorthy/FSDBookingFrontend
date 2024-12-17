import React from 'react';
import "./feet.css"

const MailList = () => {
    return (
      <div className="mails">
        <h1 className="mailTitles">Booking.com</h1>
        <span className="mailDescs">
          Explore thousands of destinations worldwide and book your dream stay
          with us.
        </span>
        <div className="links">
          <a href="https://www.booking.com/content/about.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4AoDX9qYGwAIB0gIkOWVjMjE4ZTAtZDIxMC00MTI5LWEwY2MtNTE5YTQ2YTE0YWY12AIG4AIB&sid=a64fbcb8fed815b4f16d64e4735727bb&srpvid=134e50edc0b602bb">
            About Us
          </a>
          <a href="https://www.booking.com/content/terms.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4AoDX9qYGwAIB0gIkOWVjMjE4ZTAtZDIxMC00MTI5LWEwY2MtNTE5YTQ2YTE0YWY12AIG4AIB&sid=a64fbcb8fed815b4f16d64e4735727bb&srpvid=134e50edc0b602bb&">
            Terms and Conditions
          </a>
          <a href="https://www.booking.com/content/privacy.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4AoDX9qYGwAIB0gIkOWVjMjE4ZTAtZDIxMC00MTI5LWEwY2MtNTE5YTQ2YTE0YWY12AIG4AIB&sid=a64fbcb8fed815b4f16d64e4735727bb&srpvid=134e50edc0b602bb&">
            Privacy and Policy
          </a>
        </div>
        <div className="divider" />
        <div className="slogan">
          <span className="text">
            Copyright © 2024 Booking.com™. All rights reserved.
          </span>
          <span className="textss">Developed by Prabakaran.</span>
        </div>
      </div>
    );
};

export default MailList;