import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import Paragraph from '../components/Paragraph'
import { ReactElement, useEffect, useState } from 'react'

interface Skills {
    icon: ReactElement,
    animation: string
}

const CodingLanguages = () => {

    const skillsArr:Array<Skills> = [

        {
            icon:<FaHtml5/>,
            animation: 'animate-fallFive'
        },
        {
            icon:<FaBootstrap/>,
            animation: 'animate-fallSix'
        },
        {
            icon:<FaCss3Alt/>,
            animation: 'animate-fallSeven'
        },
        {
            icon:<FaSass/>,
            animation: 'animate-fallEight'
        },
        {
            icon:<FaJs/>,
            animation: 'animate-fallNine md:animate-fallTwelve'
        },
        {
            icon:<FaReact/>,
            animation: 'animate-fallTen1 md:animate-fallEleven'
        },
        {
            icon:<FaWordpress/>,
            animation: 'animate-fallEleven md:animate-fallTen1'
        },
        {
            icon:<FaFigma/>,
            animation: 'animate-fallTwelve md:animate-fallNine'
        },
    ]

    const [usedTech,setUsedTech] = useState<Array<Skills>>();

    useEffect(()=>{
        setUsedTech(skillsArr)
    },[])

    return (
 
    <section className="transition-all w-full bg-white flex justify-center flex-wrap flex-col overflow-hidden py-10 ">
        <div className="w-full flex gap-8 px-8   relative z-10">

            <div className="flex flex-col text-center" >            
                <H2element additionalClasses={'text-zinc-800 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[200px]'} headerText={"Tech -"} spanClasses={'text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[200px]'} spanText={'Stack'}/>
            </div>

            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[200px]"></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full opacity-0 animate-fallThree relative -top-[200px]"></div>
            </div>
        </div>

        <div className="w-full flex px-8 py-10 md:py-14 lg:py-20 font-ultra text-zinc-800  justify-between z-10 opacity-0 animate-fallFour relative -top-[200px]">
            
            <Paragraph text={"I utilize HTML5, CSS, SCSS, Tailwind, React, WordPress to create. Adobe Suite for the artsy stuff, and Figma for design."} classes={'!text-balance text-md md:text-lg lg:text-xl xl:text-2xl text-center w-full mx-auto rounded-2xl'}/>

        </div>
                
        <div className="w-full gap-4 md:gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-wrap px-8 text-white  relative z-10 text-5xl lg:text-9xl">

            {usedTech ? usedTech.map((item)=>(
                <div className={`opacity-0 ${item.animation} relative -top-[200px] flex items-center justify-center gap-4 bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all`} >
                    {item.icon}
                </div>
            )) : null}

        </div>

    </section>
    )
}

export default CodingLanguages