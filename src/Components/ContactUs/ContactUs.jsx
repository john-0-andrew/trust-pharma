/* eslint-disable no-unused-vars */
import "./ContactUs.css";
import { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from "@mui/system";

const Arrow = styled(ArrowForwardIcon)(({ theme }) => ({
    fontSize: "40px",
    color: "#25408f",
  }));
    const DURATION = 1500; // ms
const ContactUs = () => {
  useEffect(() => {
    let text = 'Contact Us';
    let HTMLtext = '';

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) !== ' ') {
        HTMLtext += `<div class="inscription">${text.charAt(i)}</div>`;
      } else {
        HTMLtext += '<div class="inscription">&nbsp</div>';
      }
    }

    const container = document.querySelector(".inscription-container");
    container.innerHTML = HTMLtext;

    const inscription = document.querySelectorAll(".inscription");
    inscription.forEach(letter => {
      letter.addEventListener("mouseover", function () {
        letter.classList.add("animation");
        setTimeout(function () {
          letter.classList.remove("animation");
        }, DURATION);
      });
    });

    // Clean up event listeners
    return () => {
      inscription.forEach(letter => {
        letter.removeEventListener("mouseover", function () {
          letter.classList.add("animation");
          setTimeout(function () {
            letter.classList.remove("animation");
          }, DURATION);
        });
      });
    };
  }, []);
    return (
    
        <div className="cu-page">
            <div className="title" id="contact">
                <h1 className="inscription-container">Contact Us</h1>
            </div>

            <div className="centered-div">
                <div className="content-box">
                <h5 className="text-cu">Contact us today with any question you have and we will get in touch with you as soon as possible.</h5>
                <Arrow />
                <p className="text-cu">For business inquiries and partnerships: Please email us on <a className="text-cu">test@trustpharma-eg.com</a></p>
                <Arrow />
                <p className="text-cu">For careers: Please email us on <a className="text-cu">hr@trustpharma-eg.com</a></p>
                </div>
            </div>
        </div>
  )
}


export default ContactUs