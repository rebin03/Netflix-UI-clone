import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
    const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <div className='navbar'>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
       <ul className={`nav-list ${scroll ? "hide" : ""}`}>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>TV Shows</li>
        <li className='nav-item'>Movies</li>
        <li className='nav-item'>Latest</li>
        <li className='nav-item'>My List</li>
      </ul>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
