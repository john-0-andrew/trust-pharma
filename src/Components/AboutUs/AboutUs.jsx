import AboutUsCrew from "../../assets/AboutUsCrew.jpg";
import AboutUsMolecules from "../../assets/AboutUsMolecules.jpg";

import './AboutUs.css'

function AboutUs() {
  return (
    <div className="we-are-block" id="about-us">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div id="about-us-section">
        <div className="about-us-image">
          <img src={AboutUsCrew} width="808" height="458" alt="Lobby Image" />
        </div>

        <div className="about-us-info">
          <h2>We Are Trust Pharma</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta
            sint assumenda quam blanditiis debitis? Commodi aperiam adipisci a
            eaque quo, dignissimos doloribus cumque totam, quia recusandae
            tempora voluptatibus itaque?
          </p>
        </div>
      </div>

      <div id="history-section">
        <div className="history-image">
          <img
            src={AboutUsMolecules}
            width="808"
            height="458"
            alt="Building Pic"
          />
        </div>

        <div className="history-info">
          <h2>We Are Trust Pharma</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            commodi voluptatibus tempora voluptate officia ut in dolorum nemo
            rerum sequi, quae ullam voluptatem illum quia hic magni, cum itaque
            nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
