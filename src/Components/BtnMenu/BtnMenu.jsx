import  { useState } from "react";
import "./BtnMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const BtnMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: "white",
    backgroundColor: "#F79517",
    borderRadius: "50%",
    fontSize: "100px",
    padding: "8px",
    transition: "transform 0.3s ease",
  }));

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="op"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="lower">
        <label htmlFor="op">
          <CustomMenuIcon />
        </label>
      </div>
      <div className="overlay overlay-hugeinc" >
        <label htmlFor="op"></label>
        <nav>
          <ul>
            <li>
              <a href="#home" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" onClick={handleMenuItemClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={handleMenuItemClick}>
                Products
              </a>
            </li>
            <li>
              <a href="#" onClick={handleMenuItemClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#" onClick={handleMenuItemClick}>
                Why Trust Pharma ?
              </a>
            </li>
            <li>
              <a href="#" onClick={handleMenuItemClick}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BtnMenu;
