/* eslint-disable react/prop-types */
import AboutUsCrew from "../../assets/AboutUsCrew.jpg";
import AboutUsMolecules from "../../assets/AboutUsMolecules.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
          src={AboutUsCrew}
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
          src={AboutUsMolecules}
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
    <div className="we-are-block" id="about-us">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div id="about-us-section">
        <div className="about-us-image">
          <Image1/>
        </div>

        <div className="about-us-info">
          <Title1>We Are Trust Pharma</Title1>

          <Paragraph1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta
            sint assumenda quam blanditiis debitis? Commodi aperiam adipisci a
            eaque quo, dignissimos doloribus cumque totam, quia recusandae
            tempora voluptatibus itaque?
          </Paragraph1>
        </div>
      </div>

      <div id="history-section">
        <div className="history-image">
          <Image2/>
        </div>

        <div className="history-info">
          <Title2>We Are Trust Pharma</Title2>

          <Paragraph2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            commodi voluptatibus tempora voluptate officia ut in dolorum nemo
            rerum sequi, quae ullam voluptatem illum quia hic magni, cum itaque
            nisi.
          </Paragraph2>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
