/* eslint-disable no-unused-vars */
import './NavMenu.css'
import logo from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function NavMenu() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <img
        className={`logo ${scrolled ? "scrolled" : ""} `}
        src={logo}
        alt=""
      />
      <nav role="navigation">
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={navOpen}
            onChange={() => setNavOpen(!navOpen)}
          />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="home" smooth={true} duration={800} onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={800}
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="products"
                smooth={true}
                duration={800}
                onClick={closeNav}
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={800} onClick={closeNav}>
                Team
              </Link>
            </li>
            <li>
              <Link
                to="WhyTrust"
                smooth={true}
                duration={800}
                onClick={closeNav}
              >
                Why Trust Pharma ?
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                onClick={closeNav}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu
