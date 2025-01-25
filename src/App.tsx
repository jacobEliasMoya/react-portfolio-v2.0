import { useEffect, useState } from "react"
import MainBB from "./layout/MainBB"
import CodingLanguages from "./layout/CodingLanguages"
import Header from "./layout/Header"
// import ProfessionalExperience from "./layout/ProfessionalExperience"
// import Contact from "./layout/Contact"
// import SkillsSection from "./layout/SkillsSection"

import ReactVisibilitySensor from "react-visibility-sensor"
 
interface MouseXY{
  x:number | undefined,
  y:number | undefined,
}

function App() {

  const  [ mouseCoordinates, setMouseCoordinates] = useState<MouseXY>()
 
  
  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      window.innerWidth > 768 ? setMouseCoordinates({ x:e.pageX, y:e.pageY}) : null
    })
  },[])

 
  const [isVisible,setIsVisible] = useState(false);
  const [scrollBottom,setScrollBottom] = useState<number>(0);
  const [animationStart, setAnimationStart] = useState<number>(120)
  const [opacityStart, setOpacityStart] = useState<number>(0)


  const inView = (e:boolean) =>{
      e ? setIsVisible(true) :  setIsVisible(false) ;
  }

  const detectScrollDirection = () => {
      const currentScrollTop = window.scrollY; // Get current scroll position
      const direction = currentScrollTop > scrollBottom ? 'down' : 'up'; // Compare with the last position
      setScrollBottom(currentScrollTop); // Update the last position
      return direction;
  };

  const  setIt = (direction:string) =>{
      if(direction === 'up'  && isVisible){
          let x = document.querySelector('#coding');
          if( x && window.innerHeight*.65 < x.getBoundingClientRect().top){
              setAnimationStart( prev => prev < 110 ? prev + 5 : prev )
              setOpacityStart(  prev => prev > .2 ? prev - .2 : prev)
          }

      } else if(direction === 'down' && isVisible){
          setAnimationStart( prev => prev > 0 ? prev - 5 : prev )
          setOpacityStart( prev =>  prev <= .8  ? prev + .2 : prev )
      } 
  }

  useEffect(()=>{
      const scrollHandler = () => {
          const direction = detectScrollDirection(); // Get the current scroll direction
          setIt(direction)
      } 

      isVisible ? window.addEventListener("scroll", scrollHandler) : null;

      return () => {
          isVisible ? window.removeEventListener("scroll", scrollHandler) : null;  // Clean up listener
      };

  },[scrollBottom,isVisible])
 
  return (  

    <div className=" scroll-smooth bg-red-800 font-retro text-zinc-800 w-full h-max relative md:cursor-none overflow-hidden">
      <Header/>
      <div className="perspective-[2500px]  perspective-origin-center">
        <MainBB /> 

        <ReactVisibilitySensor  
            partialVisibility={true}
            onChange={inView}
            minTopValue={0}
        > 
          <CodingLanguages animationStart={animationStart} opacityStart={opacityStart} />

        </ReactVisibilitySensor>

        {/* <SkillsSection />
        <ProfessionalExperience/>
        <Contact/> */}
      </div>
      
      <div className="[filter:_drop-shadow(rgba(0,_0,_0,_0.5)_2px_4px_6px);] backdrop-invert  hidden md:block after:content-[''] after:w-[150%] after:h-[150%] after:absolute after:rounded-[100%] after:-translate-y-1/2 after:-translate-x-1/2 after:left-1/2 after:scale-125 after:top-1/2 after:border-4 after:border-white w-8 h-8 bg-zinc-900 bg-opacity-0 rounded-full absolute z-40 -translate-y-1/2 -translate-x-1/2 pointer-events-none" 
        style={{
          top:mouseCoordinates?.y, 
          left:mouseCoordinates?.x
        }}
      ></div>
    </div>
  )
}

export default App
