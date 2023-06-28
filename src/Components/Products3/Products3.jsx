import "./Products3.css";
import StartImage from "../../assets/Start.jpg";
function Products3() {
	  const Card = ({ data }) => {
      const { imgSrc, title, description } = data;

      return (
        <div className="product-card">
          <div className="product-tumb">
            <img src={imgSrc} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">lorem</span>
            <h4>
              <a>{title}</a>
            </h4>
            <p>{description}</p>
          </div>
        </div>
      );
    };
	const cardData = [
    {
      imgSrc: `${StartImage}`,
      title: "When Trust Pharma ?",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.dasdsda",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Vision statement",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Mission",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Mission",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
    },
    {
      imgSrc: `${StartImage}`,
      title: "Mission",
      description:
        "To provide superior quality healthcare services that: PATIENTS recommend to family and friends, PHYSICIANS prefer for their patients, PURCHASERS select for their clients, EMPLOYEES are proud of, and INVESTORS seek for long-term returns.",
    },
  ];
  return (
    <div className="products-page" id="products">
      <div className="p-title" id="products">
        <h1>Products</h1>
      </div>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}

export default Products3
