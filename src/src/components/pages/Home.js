import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"

import DestinationHome from "../HomeSection/Destina/DestinationHome"

import Works from "../HomeSection/Works/Works"


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Works />
      
      <DestinationHome />
      
      
      
    </>
  )
}

export default Home