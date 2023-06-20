/* eslint-disable react/prop-types */
import './HomePage.css'
import DNA from './DNA/DNA'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import logo from '../../assets/LOGO.png'
import NavButton from '../NavButton/NavButton'
function HomePage() {
  function Div({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <div ref={ref} >
        <h1 className='header_text'
          style={{
            transform: isInView ? 'none' : 'translateY(500px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          {children}
        </h1>
      </div>
    )
  }
  function Section({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <div ref={ref} className='dna' >
        <div 
          style={{
            transform: isInView ? 'none' : 'translateY(500px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
          }}
          >
          {children}
        </div>
      </div>
    )
  }
  return (  
    <div className='section' >

      <div className='dnh'>
      <Div>
      Welcome to Trust Pharma LTD
      </Div>
      <Section >
      <DNA/>
      </Section>
      </div>
      <NavButton  />
    </div>
  )
}

export default HomePage