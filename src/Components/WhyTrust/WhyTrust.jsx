import "./WhyTrust.css";
import React, { useEffect } from 'react';


function WhyTrust() {
  useEffect(() => {
    let animationTimeout = null;
    const handleScroll = () => {
      const section = document.getElementById('WhyTrust');
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (sectionRect.top < viewportHeight && sectionRect.bottom >= 0) {
        if (!animationTimeout) {
          const text = document.getElementById('text');
          let newDom = ''; // Declare as mutable variable using let
          const animationDelay = 2;
  
          for (let i = 0; i < text.innerText.length; i++) {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
          }
  
          text.innerHTML = newDom;
          const length = text.children.length;
  
          for (let i = 0; i < length; i++) {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
          }
  
          animationTimeout = setTimeout(() => {
            animationTimeout = null;
          }, 10000); // 10 seconds delay
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimeout);
    };
  }, []);
  

  
  return (
   <div>
      <div className="title" id="Team">
        <h1>Why Trust Pharma LTD?</h1>
      </div>
        <div className="section3" id="WhyTrust">
            <div className="center">
              <p id="text">Trust Pharma LTD is your premier destination for top-quality medicinal drugs.
              We pride ourselves on being your trusted partners in health,
              providing a wide array of safe and effective medications at competitive prices. 
              Choose Trust Pharma LTD for a seamless and reliable pharmaceutical experience that puts your well-being first.</p>
            </div>
        </div>
  </div>
  );
}

export default WhyTrust