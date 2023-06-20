import './NavButton.css';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import {useState}from 'react'

const NavButton = () => {
    // eslint-disable-next-line no-unused-vars
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  // Change the color
  color: 'white', // Set the icon color
  backgroundColor: 'blue', // Set the background color
  borderRadius: '50%', // Set the border radius
  fontSize: '100px', // Set the font size
  padding: '8px', // Optional: Add padding if needed,
}));
const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownClicked = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuLabelClicked = (label) => {
    if (label) {
      const menuLabels = document.getElementsByClassName(
        'secondary-menu__labels'
      );
      for (let m of menuLabels) {
        m.classList.remove('open');
      }
      const dropdownMenuLabels = document.getElementById(label);
      dropdownMenuLabels.classList.add('open');
    }
    const primaryMenu = document.getElementById('primary-menu');
    primaryMenu.classList.toggle('open');
  };

  return (
    <section  className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`} id="dropdown-menu">
      <CustomMenuIcon  className='NavBtn' onClick={handleDropdownClicked}/>
      
      <section className="dropdown-menu__labels">
        <div id="primary-menu" className="primary-menu">
          <div className="primary-menu__labels">
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              Home
            </button></a>
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              About us
            </button></a>
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              Products
            </button></a>
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              Team
            </button></a>
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              Why Trust Pharma
            </button></a>
            <a href=""><button onClick={() => handleMenuLabelClicked('store')}>
              Contact us
            </button></a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NavButton;
