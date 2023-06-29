/* eslint-disable no-unused-vars */
import "./WhyTrust.css";
// import { useEffect } from "react";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";
import BalanceSharpIcon from "@mui/icons-material/BalanceSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import VaccinesSharpIcon from "@mui/icons-material/VaccinesSharp";
import { styled } from "@mui/system";

function WhyTrust() {
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

  return (
    <div className="w-trust">
      <div className="title" id="Team">
        <h1>Why Trust Pharma LTD?</h1>
      </div>
      <div className="section3" id="WhyTrust">
        <div className="center">
          <div className="innovation boxes">
            <Bulb />
            <h1>Innovation</h1>
            <p className="text">New innovations in the field of pharma</p>
          </div>
          <div className="fair-comp boxes">
            <Balance />
            <h1>Fair Competition</h1>
            <p className="text">
              Fair competition in favor of the Egyptian patient.
            </p>
          </div>
          <div className="enriching-market boxes">
            <Market />
            <h1>Enriching Market</h1>
            <p className="text">
              To enrich the Egyptian market with new classes.
            </p>
          </div>
          <div className="support boxes">
            <Health />
            <h1>Support HCPs</h1>
            <p className="text">
              Support HCPs with innovative disease management options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTrust;
