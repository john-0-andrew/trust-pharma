/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ContactUs.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from "@mui/system";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Arrow = styled(ArrowForwardIcon)(({ theme }) => ({
    fontSize: "35px",
    color: "#25408f",
    marginTop: '-5px'
  }));
    const DURATION = 1500; // ms
const ContactUs = () => {
    function ContactCard({ children }) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      return (
        <div ref={ref} className="cu-page">
          <div
            className="centered-div"
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="content-box">
              <h5 className="text-cu head-line">
                Contact us today with any question you have and we will get in
                touch with you as soon as possible.
              </h5>
              <div className="line">
                <Arrow />
                <p className="text-cu">
                  For business inquiries and partnerships: Please email us on{" "}
                  <a className="text-cu link">test@trustpharma-eg.com</a>
                </p>
              </div>
              <div className="line">
                <Arrow />
                <p className="text-cu">
                  For careers: Please email us on{" "}
                  <a className="text-cu link">hr@trustpharma-eg.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="title" id="contact">
          <h1>Contact Us</h1>
        </div>
        <ContactCard/>
      </div>
    );
}


export default ContactUs