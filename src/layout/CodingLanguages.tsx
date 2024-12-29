import { FaArtstation, FaBootstrap, FaCss3Alt, FaDrupal, FaFigma, FaHtml5, FaJs, FaPhp, FaReact, FaSass, FaShopify, FaSquare, FaSquarespace, FaWix, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import Paragraph from '../components/Paragraph'
import { ReactElement, useEffect, useState } from 'react'
import { DiPhotoshop } from 'react-icons/di'
import { SiAdobephotoshop } from 'react-icons/si'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'

interface Skills {
    name: string,
    icon: ReactElement,
    animation: string,
    category: string,
}

const CodingLanguages = () => {

    const skillsArr:Array<Skills> = [
       
        {
            icon: <FaHtml5 />,
            animation: 'animate-fallFive',
            name: 'HTML5',
            category: 'programming'
        },
        {
            icon: <FaBootstrap />,
            animation: 'animate-fallSix',
            name: 'Bootstrap',
            category: 'programming'
        },
        {
            icon: <FaCss3Alt />,
            animation: 'animate-fallSeven',
            name: 'CSS3',
            category: 'design'
        },
        {
            icon: <FaSass />,
            animation: 'animate-fallEight',
            name: 'SCSS',
            category: 'design'
        },
        {
            icon: <RiJavascriptFill />,
            animation: 'animate-fallNine md:animate-fallTwelve',
            name: 'JavaScript',
            category: 'programming'
        },
        {
            icon: <BiLogoTypescript />,
            animation: 'animate-fallNine md:animate-fallTwelve',
            name: 'Typescript',
            category: 'programming'
        },
        {
            icon: <FaReact />,
            animation: 'animate-fallTen1 md:animate-fallEleven',
            name: 'ReactJS',
            category: 'programming'
        },
       
        {
            icon: <FaPhp />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'PHP',
            category: 'programming'
        },
        {
            icon: <FaShopify />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Shopify',
            category: 'builder'
        },
        {
            name: 'Wordpress',
            icon: <FaWordpress />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            category: 'builder'
        },
        {
            icon: <SiAdobephotoshop />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            name: 'Photoshop',
            category: 'design'
        },
        {
            icon: <FaFigma />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Figma',
            category: 'design'
        },
        
        
    ]

    const [usedTech,setUsedTech] = useState<Array<Skills>>();

    useEffect(()=>{
        setUsedTech(skillsArr)
    },[])

    return (
 
        <section className="transition-all w-[calc(100vw_-_3em)] md:w-[calc(100vw_-_6em)] bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto pb-6 md:pb-12 pt-6 md:pt-10 mt-8 md:mt-12 rounded-xl px-6 md:px-8">
        <div className="flex w-full gap-8  relative z-10 ">

            <div className="flex flex-col text-center" >            
                <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Tech -"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Stack'}/>
            </div>

            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full"></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full"></div>
            </div>
        </div>

        <div className=" mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 pb-10 font-ultra text-zinc-800 text-left justify-between z-10 ">
           
            {/* <Paragraph text={"I utilize HTML5, CSS, SCSS, Tailwind, React, JavaScript, TypeScript, & WordPress to create. Adobe Suite for the artsy stuff, and Figma for design."} classes={' text-sm md:text-lg lg:text-xl xl:text-2xl text-center md:text-left w-full mx-auto w-1/2 text-pretty'}/> */}

            <div className="w-full p-6 md:p-8 rounded-2xl  bg-stone-200 ">

                <H2element additionalClasses={'text-red-600 text-2xl flex flex-col pb-4  font-retro'} headerText={"Programming"} spanClasses={undefined} spanText={undefined}/>
                <Paragraph text={""} classes={' text-sm md:text-lg lg:text-xl xl:text-2xl text-center w-full mx-auto   text-pretty '}/>

                <ul className=' columns-2 text-sm md:text-md xl:text-lg tracking-widest'>
                    {usedTech ? usedTech.filter((item=>item.category == 'programming')).map((item)=>(
                        <li className=' flex flex-row items-center gap-4'> {item.name} </li>
                    )) : null}
                </ul>
                
            </div>

           <div className="w-full bg-stone-200 p-8 rounded-2xl">

            <H2element additionalClasses={'text-red-600 text-2xl pb-4 flex flex-col  font-retro'} headerText={"Web Design"} spanClasses={undefined} spanText={undefined}/>
            <Paragraph text={""} classes={' text-sm md:text-lg lg:text-xl xl:text-2xl text-center md:text-left w-full mx-auto  text-pretty'}/>

            <ul className='columns-2 text-sm md:text-md xl:text-lg tracking-widest'>
                {usedTech ? usedTech.filter((item=>item.category == 'design')).map((item)=>(
                    <li className=' flex flex-row items-center gap-4'> {item.name} </li>
                )) : null}
            </ul>
            
           </div>
     

           <div className="w-full bg-stone-200 p-8 rounded-2xl">

            <H2element additionalClasses={'text-red-600 text-2xl pb-4 flex flex-col  font-retro'} headerText={"website builders"} spanClasses={undefined} spanText={undefined}/>
            <Paragraph text={""} classes={' text-sm md:text-lg lg:text-xl xl:text-2xl text-center w-full mx-auto text-pretty '}/>

            <ul className='columns-2  text-sm md:text-md xl:text-lg tracking-widest'>
                {usedTech ? usedTech.filter((item=>item.category == 'builder')).map((item)=>(
                    <li className=' flex flex-row items-center gap-4'> {item.name} </li>
                )) : null}
            </ul>


           </div>

        </div>
                
        <div className="w-full gap-2 md:gap-4 lg:gap-6 xl:gap-8 grid grid-cols-3 md:grid-cols-6 flex-wrap text-white  relative z-10 text-5xl md:text-3xl  lg:text-8xl ">

            {usedTech ? usedTech.map((item)=>(
                <div className={` flex items-center justify-center gap-4 bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all`} >
                    {item.icon}
                </div>
            )) : null}

        </div>

    </section>
    )
}

export default CodingLanguages