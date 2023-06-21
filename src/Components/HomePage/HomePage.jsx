/* eslint-disable react/prop-types */
import "./HomePage.css";
import DNA from "./DNA/DNA";
import { useRef } from "react";
import { useInView } from "framer-motion";
import logoPNG from "../../../src/assets/trust-logo.png";
import ButtonMenu from "../BtnMenu/BtnMenu";

function Logo({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="logo">
      <div
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Div({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="header_text"
      style={{
        transform: isInView ? "none" : "translateY(500px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
      }}
    >
      {children}
    </div>
  );
}

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref); // Removed { once: true }

  return (
    <div ref={ref} className="dna">
      <div
        style={{
          transform: isInView ? "none" : "translateX(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function NavAnimated({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="nav-btn">
      <div
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="section" id="home">
      <Logo>
        <img className="logo" src={logoPNG} alt="" />
      </Logo>
      <div className="dnh">
        <Div>Welcome to Trust Pharma LTD</Div>
        <Section>
          <DNA />
        </Section>
      </div>
      <NavAnimated>
        <ButtonMenu />
      </NavAnimated>
    </div>
  );
}

export default HomePage;
