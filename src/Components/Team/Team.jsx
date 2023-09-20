/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Team.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Team() {
  const teamCardData = [
    {
      memberImage:
        "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name: "SomeOne Famous",
      position: "Director",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, earum. Ipsa, optio distinctio! Repellendus aperiam ex eum magnam alias nulla recusandae animi nihil possimus, magni, iure, vitae itaque aliquid neque.",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name: "SomeOne Famous",
      position: "Director",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, earum. Ipsa, optio distinctio! Repellendus aperiam ex eum magnam alias nulla recusandae animi nihil possimus, magni, iure, vitae itaque aliquid neque.",
    },
  ];
  const TeamCard = ({ teamData, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { memberImage, name, position, description } = teamData;
    return (
      <div className="blog">
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
            <img src={memberImage} alt="images" />
            {/* <div className="black-tape"></div> */}
          </div>
          <div className="details">
            <h2>
              {name}
              <br />
              <span>{position}</span>
            </h2>
          </div>
        </div>
        <div className="card__content">
          <span>{position}</span>
          <hr className="solid" />
          {description}
        </div>
      </div>
    );
  };
  return (
    <div className="team-bg">
      <div className="title" id="team">
        <h1>Our Team</h1>
      </div>
      <div className="box">
          {teamCardData.map((item, index) => (
            <TeamCard key={index} teamData={item} />
          ))}
      </div>
    </div>
  );
}
export default Team;
