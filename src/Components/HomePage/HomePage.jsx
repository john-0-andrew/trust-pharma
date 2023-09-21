/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './HomePage.css'
import NavMenu from '../NavMenu/NavMenu';
import { useRef } from "react";
import { useInView } from "framer-motion";
function HomePage() {
     function Div({ children }) {
       const ref = useRef(null);
       const isInView = useInView(ref, { once: true });

       return (
         <div ref={ref} className="text-box">
           <div
             style={{
               transform: isInView ? "none" : "translateY(200px)",
               opacity: isInView ? 1 : 0,
               transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
             }}
           >
             {children}
           </div>
         </div>
       );
     }
  return (
    <div className=" container1" id="home">
      <NavMenu />
      <Div>
        <h1>Trust Pharma</h1>
        <h3>Bringing trust to health & personal care</h3>
      </Div>
    </div>
  );
}

export default HomePage
