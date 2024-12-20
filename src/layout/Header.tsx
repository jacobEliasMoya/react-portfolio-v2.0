import jakeCartoon from '../assets/favi.png'

const Header = () => {
  return (
    <header className='hidden w-[98vw] p-3 bg-white mx-auto fixed top-2 left-1/2 -translate-x-1/2 z-40 rounded-full flex-row drop-shadow-lg '>
        <button>
            <img src={jakeCartoon} alt="" className='h-16 hover:scale-110 transition-all'/>
        </button>
    </header>
  )
}

export default Header