import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// <link /> - superpower which is given by react router dom 
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // Whole header gets rendered or called
  // console.log("Header rendered");

  // If no dependency array => useEffect is called on every render.
  // If dependency array is empty = [] => useEffect is called on initial render(just Once).
  // If dependency array is [btnName] => called everytime btnName is updated
  useEffect(() => {
    // console.log("useEffect Called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
