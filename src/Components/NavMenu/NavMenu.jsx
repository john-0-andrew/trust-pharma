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
      <Link to="home" smooth={true} duration={400}>
        <img
          className={`logo ${scrolled ? "scrolled" : ""} `}
          src={logo}
          alt=""
        />
      </Link>
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
              <Link to="home" smooth={true} duration={400} onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={400}
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>
            <ul id="sub-section">
              <li>
                <Link
                  to="Vision"
                  smooth={true}
                  duration={400}
                  onClick={closeNav}
                >
                  ‣ Vision
                </Link>
              </li>
              <li>
                <Link
                  to="Mission"
                  smooth={true}
                  duration={400}
                  onClick={closeNav}
                >
                  ‣ Mission
                </Link>
              </li>
              <li>
                <Link
                  to="CoreValues"
                  smooth={true}
                  duration={400}
                  onClick={closeNav}
                >
                  ‣ Core Values
                </Link>
              </li>
            </ul>
            <li>
              <Link
                to="products"
                smooth={true}
                duration={400}
                onClick={closeNav}
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={400} onClick={closeNav}>
                Team
              </Link>
            </li>
            <li>
              <Link
                to="WhyTrust"
                smooth={true}
                duration={400}
                onClick={closeNav}
              >
                Why Trust Pharma ?
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={400}
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
