/* eslint-disable react/prop-types */
import "./AboutUsPage1.css";
const Card = ({ data }) => {
  const { imgSrc, title, subtitle, description, tags, color } = data;

  return (
    <div className={`projcard projcard-${color}`}>
      <div className="projcard-innerbox">
        <img className="projcard-img" src={imgSrc} alt={title} />
        <div className="projcard-textbox">
          <div className="projcard-title">{title}</div>
          <div className="projcard-subtitle">{subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{description}</div>
          <div className="projcard-tagbox">
            {tags.map((tag, index) => (
              <span key={index} className="projcard-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: "https://picsum.photos/800/600?image=1041",
      title: "Card Title",
      subtitle: "This explains the card in more detail",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["HTML", "CSS"],
      color: "blue",
    },
    {
      imgSrc: "https://picsum.photos/800/600?image=1080",
      title: "That's Another Card",
      subtitle: "I don't really think that I need to explain anything here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["PHP", "SQL", "Database"],
      color: "red",
    },
    {
      imgSrc: "https://picsum.photos/800/600?image=1039",
      title: "And a Third Card",
      subtitle: "You know what this is by now",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      tags: ["Excel", "VBA"],
      color: "green",
    }
  ];

  return (
    <div className="section projcard-container" id="about-us">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
};

export default CardContainer;
