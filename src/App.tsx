import { useEffect, useState } from "react"
import MainBB from "./layout/MainBB"
import CodingLanguages from "./layout/CodingLanguages"
import Header from "./layout/Header"
import ProfessionalExperience from "./layout/ProfessionalExperience"
import Contact from "./layout/Contact"
import SkillsSection from "./layout/SkillsSection"
import CodingIntro from "./layout/CodingIntro"
import SkillsIntro from "./layout/SkillsIntro"
import CareerIntro from "./layout/CareerIntro"
import ContactIntro from "./layout/ContactIntro"

interface MouseXY{
  x:number | undefined,
  y:number | undefined,
}

function App() {

  const [mouseCoordinates, setMouseCoordinates] = useState<MouseXY>()

  useEffect(()=>{
 
    
    const handleMove = (e:MouseEvent) => window.innerWidth > 768 ? setMouseCoordinates({ x:e.pageX, y:e.pageY}) : null; // cleaned up the handleMove function by adding a conditional statement to check if the window width is greater than 768px
    window.addEventListener('mousemove', handleMove); 
    return () => window.removeEventListener('mousemove', handleMove);// cleaned up by adding a return statement in the useEffect to prevent memory leaks

  },[])

  // const checkIfInView = (section:Section) => {  

  //   const item = document.querySelector(`#${section.section.props.id}`) as HTMLElement;

  //   if(!item){
  //     return;
  //   }

  //   const itemBottom:number = item.getBoundingClientRect().bottom;
  //   const isPast = itemBottom < 0 && !section.isVisible ? true : false;
  //   return isPast;
  // }

  // const inView = (e:boolean,section:Section) =>{

  //   const isPast = checkIfInView(section);
  //   if(!isPast){
  //     setAppSections(prev => prev?.map((item)=> 
  //       item.section ==  section.section ? {...item, isVisible:e} : item)
  //     )
  //   }

  // }

  return (  

    <div className="scroll-smooth [background-image:radial-gradient(#91060c,#210303)] bg-fixed font-retro text-red-950 w-full h-max relative md:cursor-none min-h-screen">
      <Header/>
      
      <MainBB id={"home"} animationStart={0} opacityStart={1} />

      <CodingIntro id={"coding-intro"} />
      
      <CodingLanguages opacityStart={1} id={"coding"} />

      <SkillsIntro id={"skills-intro"} />

      <SkillsSection opacityStart={1} id={"outer-scroll"} />

      <CareerIntro id={"professional-intro"} />

      <ProfessionalExperience opacityStart={1} id={"about"} />

      <ContactIntro id={"professional-intro"} />

      <Contact opacityStart={1} id={"contact"} />

      <div className="[filter:_drop-shadow(rgba(0,_0,_0,_0.5)_2px_4px_6px);] backdrop-invert  hidden md:block after:content-[''] after:w-[150%] after:h-[150%] after:absolute after:rounded-[100%] after:-translate-y-1/2 after:-translate-x-1/2 after:left-1/2 after:scale-125 after:top-1/2 after:border-4 after:border-zinc-900 w-8 h-8 bg-white bg-opacity-0 rounded-full absolute z-40 -translate-y-1/2 -translate-x-1/2 pointer-events-none" 
        style={{
          top:mouseCoordinates?.y, 
          left:mouseCoordinates?.x
        }}
      ></div>
    </div>
  )
}

export default App