/* eslint-disable react/prop-types */
import './HomePage.css'
import DNA from './DNA/DNA'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
function HomePage() {
  function Div({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <div ref={ref} >
        <h1 className='header_text'
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          {children}
        </h1>
      </div>
    )
  }
  return (  
    <div className='section'>
      <div className='dnh'>
      <Div>
      Welcome to Trust Pharma LTD
      </Div>
      <div className='dna'>
      <DNA/>
      </div>
      </div>
      
    </div>
  )
}

export default HomePage