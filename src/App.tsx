import { useEffect } from "react"
import MainBB from "./layout/MainBB"

function App() {

  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      console.log(`${e.clientX}, ${e.clientY}`)
    })
  },[])

  return (  

    <div className="font-retro text-zinc-800">
      <MainBB />
    </div>
  )
}

export default App
