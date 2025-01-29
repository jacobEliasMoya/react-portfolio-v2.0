import { useEffect, useState,ReactElement } from 'react'
import { FaCode, FaHome } from 'react-icons/fa'
import {  MdEmail } from 'react-icons/md'
import {  HiClipboardDocumentCheck, HiQuestionMarkCircle } from 'react-icons/hi2'
import { GiRoundStar } from 'react-icons/gi'
import { TiThMenu } from 'react-icons/ti'
import resume from "../assets/JacobResume.pdf"


interface Nav {
  id: number,
  name:string,
  url:string,
  title: string,
  icon: ReactElement,
  target:string|undefined,
  additionalClasses:string 
}

const Header = () => {

  const initialNav:Array<Nav> = [
    {
      id: 0,
      name: 'Home',
      url: '/#home',
      title: 'test',
      icon: <FaHome />,
      target: undefined,
      additionalClasses: ''
    },
    {
      name: 'Tech',
      url: '/#coding',
      title: 'Technology I use',
      icon: <FaCode />,
      target: undefined,
      additionalClasses: '',
      id: 1
    },
    {
      name: 'Spotlight',
      url: '/#outer-scroll',
      title: 'Spotlight Work',
      icon: <GiRoundStar />,
      target: undefined,
      additionalClasses: '',
      id: 2
    },
    {
      name: 'About',
      url: '/#about',
      title: 'About My Work',
      icon: <HiQuestionMarkCircle />,
      target: undefined,
      additionalClasses: '',
      id: 3
    },
    {
      name: 'Contact',
      url: '/#contact',
      title: 'Contact Me Today',
      icon: <MdEmail />,
      target: undefined,
      additionalClasses: '',
      id: 4
    },
    {
      name: 'Resume',
      url: resume,
      title: 'View My Resume',
      icon: <HiClipboardDocumentCheck />,
      target: '_blank',
      additionalClasses: 'hidden md:block',
      id: 5
    },




    
  ]

  const [navigationElms,setNavigationElms] = useState<Nav[]>();
  const [headerActive,setHeaderActive] = useState<boolean>();
  const [isActive,setIsActive ] = useState<boolean>(false);

  const handleClick = () => {
    setHeaderActive(prev=>!prev)
  }

  const handleMobileNav = () => {
      window.innerWidth < 768 ? setHeaderActive(true) : setHeaderActive(false)
  }

  useEffect(()=>{
    setTimeout(handleMobileNav, 975);

    initialNav ? setNavigationElms(initialNav) : '';

    !isActive ? setTimeout(()=>setIsActive(true),550) : null;
    
    window.addEventListener('resize',handleMobileNav);
  },[])

  return (
    <header className={`${headerActive ? 'min-w-[calc(100%-1em)]  pl-6 md:pl-0 bg-opacity-85  ' : 'min-w-14 md:min-w-[65vw] lg:min-w-[55vw] '} min-h-14 text-white  flex items-center justify-center bg-zinc-800 bg-opacity-85 backdrop-blur-lg  mx-auto fixed bottom-[.5em] md:bottom-0 left-[.5em] md:left-1/2 md:-translate-x-1/2 md:rounded-b-none  z-40 rounded-full flex-row transition-all ease-out duration-300 font-ultra overflow-hidden md:overflow-visible shadow-[0em_0.25em_rgba(0,0,0,0.15)] mb-2 md:mb-0`}
      style={{
            bottom:`${isActive ? 0 : -200}px`,
            opacity: isActive ? 1 : 0
        }}
    >

      <button aria-label="mobile-navigation-toggle" onClick={window.innerWidth < 768 ? handleClick : undefined} className='absolute left-0 md:hidden z-10 ' >
          <TiThMenu className={`${headerActive ? 'scale-75' : 'scale-100'} rounded-full text-white p-2 border-8 border-white bg-red-600 h-14 w-14 active:scale-110 transition-all` }/>
      </button>

      <ul className={` flex justify-center items-center gap-6 w-full max-w-0 `}>
        { navigationElms?.map((item)=>(
          <li key={`nav-${item.id}`} className="cursor-none text-2xl tracking-widest lg:text-3xl group ">
            <a aria-label={item.title} href={item.url} target={item.target ? item.target : '' } className={`flex flex-row items-center justify-center gap-2 md:gap-4 md:p-4 relative cursor-none ${item.additionalClasses}`}>{item.icon} <span className='hidden transition-all ease-out duration-200 -top-2 group-hover:-top-20 opacity-0 group-hover:opacity-100 group-hover:text-2xl  md:absolute md:inline text-sm bg-zinc-800  p-4 rounded-md '>{item.name}</span> </a>
          </li>
        )) }  
      </ul>
    </header>
  )
}

export default Header