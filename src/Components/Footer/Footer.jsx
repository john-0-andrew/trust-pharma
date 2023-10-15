import "./Footer.css";
import fblogo from "../../assets/fb.png";
import linkedinlogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/Instagram.png";
import { Link} from "react-scroll";

function Footer() {
  return (
    <div className="center">
      <div className="footer">
        <div className="contain">
          <div className="col" id="company">
            <h1>Company:</h1>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={400}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={400}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  smooth={true}
                  duration={400}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={400}>
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="WhyTrust"
                  smooth={true}
                  duration={400}
                >
                  Why Trust Pharma ?
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={400}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col social" id="social">
            <h1>Fresh Kiddo</h1>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100091289721015&mibextid=LQQJ4d">
                  <img src={fblogo} width={32} style={{ width: "32px" }} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/trust-pharma-ltd/">
                  <img
                    src={linkedinlogo}
                    width={32}
                    style={{ width: "32px" }}
                  />
                </a>
              </li>
              <a href="https://instagram.com/freshkiddo.eg?igshid=MzRlODBiNWFlZA==">
                <img
                  src={instagramLogo}
                  width={32}
                  style={{ width: "32px" }}
                  alt=""
                />
              </a>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* END OF FOOTER */}
    </div>
  );
}

export default Footer