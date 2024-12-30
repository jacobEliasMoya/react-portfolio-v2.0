import { useState } from 'react'
import jakeCartoon from '../assets/favi.png'

const Header = () => {

  const [headerActive,setHeaderActive] = useState(false);

  const handleClick = () => {
    setHeaderActive(prev=>!prev)
  }

  return (
    <header className={`${headerActive ? 'min-w-[calc(100%-2em)]' : 'min-w-12'} flex items-center justify-start bg-zinc-800 mx-auto fixed bottom-[1em] left-[1em]  z-40 rounded-full flex-row transition-all ease duration-200 drop-shadow border-2 border-white `}>
      <button onClick={handleClick}>
          <img src={jakeCartoon} alt="" className={`${headerActive ? 'scale-75' : 'scale-100'} h-12 w-12 active:scale-110 transition-all` }/>
      </button>



    </header>
  )
}

export default Header