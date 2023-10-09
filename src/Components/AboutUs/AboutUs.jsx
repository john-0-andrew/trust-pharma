/* eslint-disable react/prop-types */
import Foundation from "../../assets/foundation.jpg";
import Expertise from "../../assets/expertise.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CoreValues from "../CoreValues/CoreValues";
import MissionVision from "../MissionVision/MissionVision";


import "./AboutUs.css";

function AboutUs() {
  function Title1({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <h2
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {children}
        </h2>
      </div>
    );
  }
  function Title2({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <h2
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {children}
        </h2>
      </div>
    );
  }
  function Paragraph1({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <p
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          {children}
        </p>
      </div>
    );
  }
  function Paragraph2({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <p
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          {children}
        </p>
      </div>
    );
  }
  function Image1({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <img
          src={Foundation}
          width="808"
          height="458"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          {children}
        </img>
      </div>
    );
  }
  function Image2({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <img
          src={Expertise}
          width="808"
          height="458"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          {children}
        </img>
      </div>
    );
  }
  return (
    <div className="about-page" id="about-us">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <Image1 />
          </div>

          <div className="about-us-info">
            <Title1>Foundation</Title1>

            <Paragraph1>
              Founded in the year 2000, Trust Pharma is focused on building
              pharmaceutical and personal care brands that are trusted by
              various stakeholders; HCPs, patients, individuals and different
              commercial partners.
            </Paragraph1>
          </div>
        </div>

        <div id="history-section">
          <div className="history-image">
            <Image2 />
          </div>

          <div className="history-info">
            <Title2>Expertise</Title2>

            <Paragraph2>
              Within the pharmaceutical market, Trust Pharma has focused its
              expertise on building brands in the areas of CNS. In addition to
              that, there has been further focus on sleep disorder and obesity
              management. On the other hand, Trust Pharma has particularly
              focused on the area of kids personal care and built a strong brand
              that encompasses a wide range of products.
            </Paragraph2>
          </div>
        </div>
      </div>
      <div className="m-v-core">
        <MissionVision />
        <CoreValues />
      </div>
    </div>
  );
}

export default AboutUs;
