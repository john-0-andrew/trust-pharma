/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./CoreValues.css";
// import { useEffect } from "react";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";
import BalanceSharpIcon from "@mui/icons-material/BalanceSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import VaccinesSharpIcon from "@mui/icons-material/VaccinesSharp";
import { styled } from "@mui/system";
import { useRef } from "react";
import { useInView } from "framer-motion";
import IntegrityImg from "../../assets/Integrity.png";
import RespectImage from "../../assets/respect.png";
import GrowthImage from "../../assets/growth.png";

function CoreValues() {
  // useEffect(() => {
  //   let animationTimeout = null;
  //   const handleScroll = () => {
  //     const section = document.getElementById("WhyTrust");
  //     const sectionRect = section.getBoundingClientRect();
  //     const viewportHeight =
  //       window.innerHeight || document.documentElement.clientHeight;

  //     if (sectionRect.top < viewportHeight && sectionRect.bottom >= 0) {
  //       if (!animationTimeout) {
  //         const paragraphs = document.getElementsByClassName("text");

  //         for (let i = 0; i < paragraphs.length; i++) {
  //           let words = paragraphs[i].innerText.split(" ");
  //           let newDom = ""; // Declare as mutable variable using let
  //           const animationDelay = 2;

  //           for (let j = 0; j < words.length; j++) {
  //             newDom +=
  //               '<span class="word">' +
  //               (words[j] === "" ? "&nbsp;" : words[j]) +
  //               "</span> ";
  //           }

  //           paragraphs[i].innerHTML = newDom;
  //           const length = paragraphs[i].children.length;

  //           for (let k = 0; k < length; k++) {
  //             paragraphs[i].children[k].style["animation-delay"] =
  //               animationDelay * k + "ms";
  //           }
  //         }

  //         animationTimeout = setTimeout(() => {
  //           animationTimeout = null;
  //         }, 10000); // 10 seconds delay
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(animationTimeout);
  //   };
  // }, []);

  const Bulb = styled(LightbulbSharpIcon)(({ theme }) => ({
    fontSize: "50px",
    color: "white",
  }));
  const Balance = styled(BalanceSharpIcon)(({ theme }) => ({
    fontSize: "50px",
    color: "white",
  }));
  const Market = styled(StoreSharpIcon)(({ theme }) => ({
    fontSize: "50px",
    color: "white",
  }));
  const Health = styled(VaccinesSharpIcon)(({ theme }) => ({
    fontSize: "50px",
    color: "white",
  }));
  function Boxes({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref} className="center">
        <div
          className="innovation boxes"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <img className="png" src={IntegrityImg} alt="" />
          <h1>Integrity</h1>
          <p className="text">
            Transparent and honest relationships also build a trustworthy
            reputation.
          </p>
        </div>
        <div
          className="fair-comp boxes"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <img className="png" src={RespectImage} alt="" />
          <h1>Respect</h1>
          <p className="text">
            Respect to every stakeholder either within the organization or
            externally.
          </p>
        </div>
        <div
          className="enriching-market boxes"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <img className="png" src={GrowthImage} alt="" />
          <h1>Sustainable Growth</h1>
          <p className="text">
            Focus on building sustainable and healthy growth that ensures
            longer-term impact and performance.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-trust">
      <div className="coreValues-title underline" id="CoreValues">
        <h1>Core Values</h1>
      </div>
      <div className="section3">
        <div >
          <Boxes/>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
