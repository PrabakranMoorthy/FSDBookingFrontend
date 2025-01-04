import React from "react";
import "./Maillist.css";

const MailList = () => {
  const Alert = () => {
    window.alert(
      "Thank you for subscribing! Your Gmail address is now part of our mailing list."
    );
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and well send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button onClick={Alert}>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
