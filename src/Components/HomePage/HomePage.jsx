/* eslint-disable react/no-unescaped-entities */
import './HomePage.css'
// import NavBar from '../NavBar/NavBar';
import NavMenu from '../NavMenu/NavMenu';
function HomePage() {
  return (
    <div className=" container1" id="home">
        {/* <NavBar/> */}
        <NavMenu/>
      <div className="text-box">
        <p>Trust Pharma LTD</p>
        <h1>Slogan</h1>
        <h3>SLOGAN SLOGAN SLOGAN</h3>
      </div>
    </div>
  );
}

export default HomePage
