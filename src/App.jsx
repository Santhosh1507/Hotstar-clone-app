import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Slider from './component/Slider page/Slider'
import Lateatr from './component/viewsliderall/Latest Releases/Lateatr'
import Top10movies from './component/viewsliderall/Top 10 in india Today - Hindi/Top10movies'


function App() {

  return (
    <div className="bg-zinc-950">
      <Navbar />
      <Slider />
      <Lateatr />
      <Top10movies />
      <Footer />
    </div>
  )
}

export default App
