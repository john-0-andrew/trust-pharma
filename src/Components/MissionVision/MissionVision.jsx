/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./MissionVision.css";
// import { useEffect } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MissionImg from "../../assets/MissionIcon.png";
import VisionImg from "../../assets/VisionIcon.png";

function MissionVision() {
 
  function Boxes({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref} className="centers">
        <div
          className="innovation boxes"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <img className="png" src={MissionImg} alt="" />
          <h1>Mission</h1>
          <p className="text">
          To provide affordable, quality pharmaceuticals for a healthier, happier life, fostering strong relationships with stakeholders like employees, investors, distributors, partners, suppliers, and HCPs</p>
        </div>
        <div
          className="fair-comp boxes"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <img className="png" src={VisionImg} alt="" />
          <h1>Vision</h1>
          <p className="text">
          To support every patient and individual with a medication or product that makes their lives better.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="mv-bg" id="Vision">
      <div className="mv-title" id="Mission">
        <h1>Misson & Vision </h1>
      </div>
      <div className="section3">
        <div >
          <Boxes/>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
