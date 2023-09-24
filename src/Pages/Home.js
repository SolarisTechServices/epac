import React from 'react'
import Navibar from '../Components/Navibar'
import Hero from '../Components/Hero'
import Footeri from '../Components/Footer'
import Recruit from '../Components/Recruit'
import Msg from '../Components/Msg'
import Autoslider from '../Components/Autoslider'
function Home() {
  return (
    <div className=' bg-green-50'>
    <Navibar/>
    <Recruit/>
    <Hero/>
    <Autoslider/>
    <Msg/>
    
    <Footeri/>
    </div>
  )
}

export default Home