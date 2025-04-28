import { useEffect, useState, ReactElement } from 'react'
import { FaCode, FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiQuestionMarkCircle } from 'react-icons/hi2'
import { GiRoundStar } from 'react-icons/gi'
import { TiThMenu } from 'react-icons/ti'
import jakeCartoon from "../assets/cartoon-jm.webp"
import H1element from '../components/headers/H1element'


interface Nav {
  id: number,
  name: string,
  url: string,
  title: string,
  icon: ReactElement,
  target: string | undefined,
  additionalClasses: string
}

const Header = () => {

  const initialNav: Array<Nav> = [
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
  ]

  const [navigationElms, setNavigationElms] = useState<Nav[]>();
  const [headerActive, setHeaderActive] = useState<boolean>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setHeaderActive(prev => !prev)
  }

  const handleMobileNav = () => {
    window.innerWidth < 768 ? setHeaderActive(true) : setHeaderActive(false)
  }

  useEffect(() => {
    setTimeout(handleMobileNav, 975);

    initialNav ? setNavigationElms(initialNav) : '';

    !isActive ? setTimeout(() => setIsActive(true), 550) : null;

    window.addEventListener('resize', handleMobileNav);
  }, [])

  return (
    <header className={`${headerActive ? 'min-w-[calc(100%-1em)]  pl-6 md:pl-0 bg-opacity-85' : 'w-full p-4'} min-h-10 h-max text-white  flex items-center justify-between bg-blue-800/85 backdrop-blur-lg  mx-auto fixed top-0 md:rounded-t-none rounded-4xl z-40 flex-row transition-all ease-out duration-300 overflow-hidden md:overflow-visible mb-2 md:mb-0`}
      style={{
        bottom: `${isActive ? 0 : -200}px`,
        opacity: isActive ? 1 : 0
      }}
    >

      <button aria-label="mobile-navigation-toggle" onClick={window.innerWidth < 768 ? handleClick : undefined} className='absolute left-0 md:hidden z-10 ' >
        <TiThMenu className={`${headerActive ? 'scale-75' : 'scale-100'} rounded-full text-white p-2 border-8 border-white bg-blue-500 h-14 w-14 active:scale-110 transition-all`} />
      </button>

      <div className="flex flex-row gap-4 align-items-center justify-start w-1/2">

        <div className="transition-all ease  bg-white  rounded-full min-w-18 min-h-18 relative md:hover:-translate-y-[15px] flex justify-center items-center z-10 group">
          <div className=" rounded-full w-16 h-16 flex items-center justify-center  relative group ">
            <img src={jakeCartoon} alt="jake" width="150" height="220" className="w-1/2 pointer-events-none select-none" />
          </div>
        </div>

        <H1element additionalClasses={'text-5xl flex flex-row gap-2 items-center justify-center text-white '} headerText={'True'} spanClasses={''} spanText={'Pixel'} />

      </div>

      <ul className="flex gap-2 justify-end items-center w-1/2">
        {navigationElms?.map((item) => (
          <li key={`nav-${item.id}`} className="first:bg-orange-500  group cursor-none text-xl rounded-full overflow-hidden hover:bg-blue-950 ">
            <a
              aria-label={item.title}
              href={item.url}
              target={item.target ? item.target : ''}
              className={` flex text-lg flex-row items-center justify-center  backdrop-blur-xs p-2 min-w-30 relative cursor-none transition-all ease-out duration-300  text-white ${item.additionalClasses}`}
            >
              <span className="hidden">{item.icon}</span>
              <span className="transition-all ease-out duration-300">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>

    </header>
  )
}

export default Header