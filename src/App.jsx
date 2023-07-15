import { useState, useEffect } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/HomePage";
import Products3 from "./Components/Products3/Products3";
import Team from "./Components/Team/Team";
import WhyTrust from "./Components/WhyTrust/WhyTrust";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="site">
          <HomePage />
          <AboutUs />
          <Products3 />
          <Team />
          <WhyTrust />
          <ContactUs/>
          <Footer />
        </div>
      )}
    </div>
    // <div className="site">
    //   <Loading />
    // </div>
  );
}

export default App;
