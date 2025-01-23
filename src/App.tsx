import { useEffect, useState } from "react"
import MainBB from "./layout/MainBB"
import SkillsSection from "./layout/SkillsSection"
import CodingLanguages from "./layout/CodingLanguages"
import Header from "./layout/Header"
import ProfessionalExperience from "./layout/ProfessionalExperience"
import Contact from "./layout/Contact"
 
interface MouseXY{
  x:number | undefined,
  y:number | undefined,
}

function App() {

  const  [ mouseCoordinates, setMouseCoordinates] = useState<MouseXY>()
 
  
  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      setMouseCoordinates({ x:e.pageX, y:e.pageY})
    })
  },[])

 

 
  return (  

    <div className=" scroll-smooth bg-red-700 font-retro text-zinc-800 w-full h-max relative cursor-none overflow-hidden">
      <Header/>
      <div className="perspective-[2500px]  perspective-origin-center">
        <MainBB /> 
        <CodingLanguages />
        <SkillsSection />
        <ProfessionalExperience/>
        <Contact/>
      </div>
      
      <div className="[filter:_drop-shadow(rgba(0,_0,_0,_0.5)_2px_4px_6px);] backdrop-invert  block after:content-[''] after:w-[150%] after:h-[150%] after:absolute after:rounded-[100%] after:-translate-y-1/2 after:-translate-x-1/2 after:left-1/2 after:scale-125 after:top-1/2 after:border-4 after:border-white w-8 h-8 bg-zinc-900 bg-opacity-0 rounded-full absolute z-40 -translate-y-1/2 -translate-x-1/2 pointer-events-none" 
        style={{
          top:mouseCoordinates?.y, 
          left:mouseCoordinates?.x
        }}
      ></div>
    </div>
  )
}

export default App
