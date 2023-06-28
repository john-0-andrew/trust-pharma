/* eslint-disable react/prop-types */
import "./Products.css";
import StartImage from "../../assets/Start.jpg";
// import VisionImage from "../../assets/Vision.jpg";
// import MissionImage from "../../assets/Mission.jpg";

const Card = ({ data }) => {
  const { imgSrc, title, subtitle, description, color } = data;
  
  return (
    
    <div className={`projcard projcard-${color}` }>
      <div className="projcard-innerbox">
        <img className="projcard-img" src={imgSrc} alt={title} />
        <div className="projcard-textbox">
          <div className="projcard-title">{title}</div>
          <div className="projcard-subtitle">{subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: `${StartImage}`,
      title: "When Trust Pharma started?",
      description:
        "Two sentences about launch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet autem beatae enim fuga laudantium voluptatibus, a officiis minus necessitatibus.",
      color: "blue",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Vision statement",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
      color: "red",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Mission",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
      color: "green",
    },
  ];

  return (
   <div>
   <div className="p-title" id="products">
    <h1>Products</h1>
    </div> 
    <div className="section1 projcard-container" id="about-us">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
    </div>
    
  );
};

export default CardContainer;
