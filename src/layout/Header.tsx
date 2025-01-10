import { useEffect, useState,ReactElement } from 'react'
import jakeCartoon from '../assets/favi.png'
import { FaCode, FaHome } from 'react-icons/fa'
import {  MdEmail } from 'react-icons/md'
import { HiClipboardDocumentCheck, HiQuestionMarkCircle } from 'react-icons/hi2'
import resume from "../assets/JacobResume.pdf"
import { GiRoundStar } from 'react-icons/gi'


interface Nav {
  name:string,
  url:string,
  title: string,
  icon: ReactElement,
  target:string|undefined
}

const Header = () => {

  const initialNav:Array<Nav> = [
    {
      name: 'Home',
      url: '/#home',
      title: 'test',
      icon: <FaHome/>,
      target: undefined

    },
    {
      name: 'Tech',
      url: '/#coding',
      title: 'Technology I use',
      icon: <FaCode/>,
      target: undefined

    },
    {
      name: 'Spotlight',
      url: '/#outer-scroll',
      title: 'Spotlight Work',
      icon: <GiRoundStar  />,
      target: undefined,

    },
    {
      name: 'About',
      url: '/#about',
      title: 'About My Work',
      icon: <HiQuestionMarkCircle/>,
      target: undefined,

    },
    {
      name: 'Contact',
      url: '/#contact',
      title: 'Contact Me Today',
      icon: <MdEmail />,
      target: undefined,
    },
    {
      name: 'Resume',
      url: resume,
      title: 'View My Resume',
      icon: <HiClipboardDocumentCheck  />,
      target: '_blank'
    },




    
  ]

  const [navigationElms,setNavigationElms] = useState(initialNav);
  const [headerActive,setHeaderActive] = useState<boolean>();

  const handleClick = () => {
    setHeaderActive(prev=>!prev)
  }

  useEffect(()=>{
      window.innerWidth < 768 ? setHeaderActive(true) : setHeaderActive(false)

      window.addEventListener('resize',()=>{
        window.innerWidth < 768 ? setHeaderActive(true) : setHeaderActive(false)
      })

    },[])

  return (
    <header className={`${headerActive ? 'min-w-[calc(100%-1em)]  pl-10 md:pl-0' : 'min-w-16 md:min-w-[65vw] lg:min-w-[55vw]'} min-h-16 flex items-center justify-center bg-zinc-800 bg-opacity-85 backdrop-blur-lg text-white mx-auto fixed bottom-[.5em] md:bottom-0 left-[.5em] md:left-1/2 md:-translate-x-1/2 md:rounded-b-none  z-40 rounded-full flex-row transition-all ease duration-500  font-ultra overflow-hidden md:overflow-visible `}>

      <button onClick={handleClick} className='absolute left-0 md:hidden z-10'>
          <img src={jakeCartoon} alt="" className={`${headerActive ? 'scale-75' : 'scale-100'} h-16 w-16 active:scale-110 transition-all` }/>
      </button>
                                    

      <ul className={` flex justify-center items-center gap-6 w-full max-w-0 `}>
        { navigationElms?.map((item)=>(
          <li className="cursor-none text-2xl tracking-widest lg:text-3xl group ">
            <a href={item.url} target={item.target ? item.target : '' } className='flex flex-row items-center justify-center gap-2 md:gap-4 md:p-4 relative cursor-none'>{item.icon} <span className='hidden transition-all ease duration-200 -top-2 group-hover:-top-20 opacity-0 group-hover:opacity-100 group-hover:text-2xl  lg:absolute lg:inline text-sm bg-zinc-800  p-4 rounded-md '>{item.name}</span> </a>
          </li>
        )) }
      </ul>
    </header>
  )
}

export default Header