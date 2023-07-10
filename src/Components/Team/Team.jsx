/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Team.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Team() {
  function Card1({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return (
      <div
        ref={ref}
        className="card"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="images"
          />
        </div>
        <div className="details">
          <h2>
            SomeOne Famous
            <br />
            <span>Director</span>
          </h2>
        </div>
      </div>
    );
  }
  function Card2({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return (
      <div
        ref={ref}
        className="card"
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="images"
          />
        </div>
        <div className="details">
          <h2>
            SomeOne Famous
            <br />
            <span>Director</span>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="team-bg">
      <div className="title" id="team">
        <h1>Our Team</h1>
      </div>
      <div className="box">
        <div>
            <Card1/>
        </div>
        <div >
            <Card2/>
        </div>
      </div>
    </div>
  );
}
export default Team;
