import { useEffect, useState } from "react"
import MainBB from "./layout/MainBB"

interface MouseXY{
  x:number | undefined,
  y:number | undefined,
}

function App() {

  const  [ mouseCoordinates, setMouseCoordinates] = useState<MouseXY>()

  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      window.innerWidth > 768 ? setMouseCoordinates({ x:e.clientX, y:e.clientY}) : null
    })
  },[])

  useEffect(()=>{
    console.log(mouseCoordinates)
  },[mouseCoordinates])

  return (  

    <div className="bg-zinc-800 font-retro text-zinc-800 w-full h-max relative cursor-default md:cursor-none">
      <MainBB />
      
      <div className="backdrop-invert hidden md:block after:content-[''] after:w-[150%] after:h-[150%] after:absolute after:rounded-[100%] after:-translate-y-1/2 after:-translate-x-1/2 after:left-1/2 after:scale-125 after:top-1/2 after:border-4 after:border-white w-8 h-8 bg-zinc-900 bg-opacity-85  rounded-full absolute z-10 -translate-y-1/2 -translate-x-1/2 pointer-events-none" 
      
        style={{
          top:mouseCoordinates?.y, 
          left:mouseCoordinates?.x
        }}
        
      ></div>

    </div>
  )
}

export default App
