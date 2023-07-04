import { useState, useEffect } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/HomePage";
import Products3 from "./Components/Products3/Products3";
import Team from "./Components/Team/Team";
import WhyTrust from "./Components/WhyTrust/WhyTrust";
import Contact from "./Components/Contact/Contact";
import Loading from "./Components/Loading/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
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
          <Contact />
        </div>
      )}
    </div>
    // <div className="site">
    //   <Loading />
    // </div>
  );
}

export default App;
