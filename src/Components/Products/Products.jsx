/* eslint-disable react/prop-types */
import "./Products.css";
import Drug1 from "../../assets/Integrol1.png";
import Drug2 from "../../assets/Riscure1.png";
import Drug3 from "../../assets/Serpass1.png";
import Drug4 from "../../assets/Start.jpg";
import Drug5 from "../../assets/Start.jpg";
import Drug6 from "../../assets/Start.jpg";
import FreshKiddo from "../../assets/Fresh Kiddo.jpg";
function Products() {
  const Card = ({ data }) => {
    const { imgSrc, title, subtitle , description } = data;

    return (
      <div className="product-card">
        <div className="product-tumb">
          <img src={imgSrc} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{title}</span>
          <h4>
            <a>{subtitle}</a>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  const cardData = [
    {
      imgSrc: `${Drug2}`,
      title: "Riscure",
      subtitle: "Risperidone – Available In 1, 2 & 4 Mg",
      description:
        "Indications: Risperidone is used for treatment of Schizophrenia, Bipolar mania and irritability associated with Autistic Disorder.",
    },
    {
      imgSrc: `${Drug3}`,
      title: "Serpass",
      subtitle: "Sertraline – Available In 50 & 100 Mg",
      description:
        "Indications: Sertraline is used for Major depressive disorder, Panic disorder, Premenstrual dysphoric disorder, Posttraumatic stress disorder, Social anxiety disorder and Obsessive compulsive disorder.",
    },
    {
      imgSrc: `${Drug1}`,
      title: "Integrol",
      subtitle: "Olanzapine – Available In 5 & 10 Mg",
      description:
        "Indications: Olanzapine is used for treatment of Schizophrenia and Bipolar mania.",
    },
    {
      imgSrc: `${Drug4}`,
      title: "Puracit",
      subtitle: "Citalopram – Available In 20 Mg",
      description:
        "Indications: Citalopram is used for the treatment of major depression, social phobia, panic disorder and obsessive-compulsive disorder.",
    },
    {
      imgSrc: `${Drug6}`,
      title: "Magicpiclone",
      subtitle: "Eszopiclone – Available in 2mg & 3mg",
      description:
        "Indications: Eszopiclone is used for the treatment of insomnia (sleep problems). Eszopiclone acts on the brain to produce a calming effect.",
    },
    {
      imgSrc: `${FreshKiddo}`,
      title: "Fresh Kiddo",
      subtitle: "Kids Personal Care range",
      description:
        "Fresh Kiddo is a kids personal care brand that is locally manufactured with focus on quality and natural ingredients. Fresh Kiddo provides a wide range of products covering hair, skin and dental care.",
    },
    {
      imgSrc: `${Drug5}`,
      title: "Paroxetine",
      subtitle: "Available In 20 Mg",
      description:
        "Indications: Paroxetine is used for the treatment of Depression, Obsessive-compulsive disorder, Panic disorder, Social phobia, Generalized anxiety disorder, Posttraumatic stress disorder and Premenstrual dysphoric disorder.",
    },

    {
      imgSrc: `${Drug6}`,
      title: "Fatyslim",
      subtitle: "Orlistat – Available in 120mg",
      description:
        "Indications: Orlistat is used for the management of obesity. It can help overweight adults lose weight.",
    },
  ];
  return (
    <div className="products-page" id="products">
      <div className="title" id="products">
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

export default Products;
