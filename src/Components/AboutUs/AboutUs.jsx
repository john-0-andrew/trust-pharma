import "./AboutUs.css";
import StartImage from "../../assets/Start.jpg";
import VisionImage from "../../assets/Vision.jpg";
import MissionImage from "../../assets/Mission.jpg";
import ValuesImage from "../../assets/Values.jpg";
import ObjectivesImage from "../../assets/Objectives.png";

import { useRef } from "react";
import { useInView } from "framer-motion";
const cardData = [
  {
    imageSrc: `${StartImage}`,
    title: "When Trust Pharma started?",
    description:
      "Two sentences about launch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet autem beatae enim fuga laudantium voluptatibus, a officiis minus necessitatibus.",
  },
  {
    imageSrc: `${VisionImage}`,
    title: "Vision statement",
    description:
      "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
  },
  {
    imageSrc: `${MissionImage}`,
    title: "Mission",
    description:
      "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
  },
  {
    imageSrc: `${ValuesImage}`,
    title: "Our Values",
    description:
      "Ethics, Integrity, People Development, Results Driven, Long-Term Relationships",
  },
  {
    imageSrc: `${ObjectivesImage}`,
    title: "Our Objectives",
    description:
      "Maintain its partnership for current products partnership,Establishing its own products in the market (already registered),Launching / Registration of new products (Pharmaceutical & Cosmeceutical) with high quality,Specialize in Sales & Marketing operations for products of reputable multinationals and local giants (Outsourcing)",
  },
];

const Card = () => {
  let zindex = 10;

  const handleClick = (e) => {
    e.preventDefault();

    let isShowing = false;

    if (e.currentTarget.classList.contains("show")) {
      isShowing = true;
    }

    if (document.querySelector("div.cards").classList.contains("showing")) {
      // a card is already in view
      document.querySelector("div.card.show").classList.remove("show");

      if (isShowing) {
        // this card was showing - reset the grid
        document.querySelector("div.cards").classList.remove("showing");
      } else {
        // this card isn't showing - get in with it
        e.currentTarget.style.zIndex = zindex;
        e.currentTarget.classList.add("show");
      }

      zindex++;
    } else {
      // no cards in view
      document.querySelector("div.cards").classList.add("showing");
      e.currentTarget.style.zIndex = zindex;
      e.currentTarget.classList.add("show");

      zindex++;
    }
  };


  // eslint-disable-next-line react/prop-types
  function Div({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <div
        className="cards"
        ref={ref}
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

  return (
    <div className="section" id="about-us">
      <Div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index} onClick={handleClick}>
            <div className="card__image-holder">
              <img className="card__image" src={card.imageSrc} />
            </div>
            <div className="card-title">
              <a href="#" className="toggle-info btn">
                <span className="left"></span>
                <span className="right"></span>
              </a>
              <h2>
                {card.title}
              </h2>
            </div>
            <div className="card-flap flap1">
              <div className="card-description">{card.description}</div>
            </div>
          </div>
        ))}
      </Div>
    </div>
  );
};

export default Card;
