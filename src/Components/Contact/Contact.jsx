import "./Contact.css";
import fblogo from "../../assets/fb.png";
import linkedinlogo from "../../assets/linkedin.png";
import emaillogo from "../../assets/e-mail.png";

function Contact() {
  return (
    <div className="center" id="contact">
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1 >Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1 >Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1 >Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </div>
        <div className="col">
          <h1 >Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div className="col social">
          <h1 >Social</h1>
          <ul>
            <li><img src={fblogo} width={32} style={{width: '32px'}} /></li>
            <li><img src={linkedinlogo} width={32} style={{width: '32px'}} /></li>
            <li><img src={emaillogo} width={32} style={{width: '32px'}} /></li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    {/* END OF FOOTER */}
  </div>
  )
}

export default Contact