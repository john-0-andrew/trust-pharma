import { useState, useEffect } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/HomePage";
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team";
import CoreValues from "./Components/CoreValues/CoreValues";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  };

  useEffect(() => {
    handleLoading();
  }, []);


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="site">
          <HomePage />
          <AboutUs />
          <CoreValues />
          <Products />
          <Team />
          <ContactUs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
