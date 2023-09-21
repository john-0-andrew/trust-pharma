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
      name: "Dr. Ehab Tanas",
      position: "General Manager",
      description:
        "With strong previous experience in Pharma, Dr. Ehab focuses on strategic leadership and growth of the organization. Also, Dr. Ehab pays strong attention to ensuring that the Trust Pharma core values are followed in everything the organization does.",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Ramy Karam",
      position: " National Sales Manager",
      description:
        "Dr. Ramy is a tenured and successful commercial and sales leader. His role within the organization as a senior sales commercial leader ensure guidance on strategic management and execution of sales plans to safeguard the organization's financial objectives.",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Maria Nabil",
      position: " New Products & Supply Chain Manager",
      description:
        "Dr. Maria has extensive experience in building new products in the area of nutraceuticals, personal care and cosmeceuticals. She leads this areas with passion towards bringing concepts to live and finding innovations that are of market fit.",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name: "Yara ElZayat",
      position: " Brand Manager, Fresh Kiddo",
      description:
        "Yara is a passionate marketer that finds pleasure in brand building. She devotes her energy towards positioning a brand right and ensuring marketing strategies and tactics are developed to support the organization with achieving its commercial objectives.",
    },
  ];
  const TeamCard = ({ teamData, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { memberImage, name, position, description } = teamData;
    return (
      <div
        className="blog"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="card">
          <div className="imgBx">
            <img src={memberImage} alt="images" />
            {/* <div className="black-tape"></div> */}
          </div>
          <div className="details">
            <h2>
              {name}
              <br />
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
