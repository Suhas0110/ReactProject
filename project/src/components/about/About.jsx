import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us'  cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>

            <p>This is About session</p>
          </div>
         
        </div>
      </section>
    </>
  )
}

export default About
