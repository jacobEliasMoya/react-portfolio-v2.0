import {  FaBootstrap, FaFigma, FaHtml5,  FaReact, FaSass, FaShopify,  FaSquarespace, FaWix, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import { ReactElement, useEffect, useState } from 'react'
import { SiAdobeillustrator, SiAdobephotoshop, SiKrita, SiRedux, SiTailwindcss } from 'react-icons/si'
import {  BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'
import ReactVisibilitySensor from 'react-visibility-sensor'

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
            icon: <FaSass />,
            animation: 'animate-fallEight',
            name: 'SCSS/ CSS',
            category: 'programming'
        },
        {
            icon: <SiTailwindcss />,
            animation: 'animate-fallSeven',
            name: 'Tailwind',
            category: 'programming'
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
        },       {
            icon: <SiRedux />,
            animation: 'animate-fallTen1 md:animate-fallEleven',
            name: 'Redux',
            category: 'programming'
        },
        {
            icon: <FaShopify />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Squarespace',
            category: 'builder'
        },
        {
            name: 'Wordpress',
            icon: <FaWordpress />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            category: 'builder'
        },
        {
            icon: <FaSquarespace />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Shopify',
            category: 'builder'
        },
        {
            name: 'WIX',
            icon: <FaWix />,
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
            icon: <SiAdobeillustrator />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            name: 'Illustrator',
            category: 'design'
        },
        {
            icon: <FaFigma />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Figma',
            category: 'design'
        },
        
        {
            icon: <SiKrita />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Krita',
            category: 'design'
        },
    ]

    const [usedTech,setUsedTech] = useState<Array<Skills>>();

    useEffect(()=>{
        setUsedTech(skillsArr)
    },[])

    const [scrollBottom,setScrollBottom] = useState<number>();
  
    useEffect(()=>{

    },[])
  
    const inView = () =>{
        window.addEventListener('scroll',()=>{
            document.querySelector('#home')?.getBoundingClientRect().top ? 
            setScrollBottom(document.querySelector('#home')?.getBoundingClientRect().top) : null
          })
    }
    // useEffect(()=>{
    // },[scrollBottom])

    return (
        <ReactVisibilitySensor 
            onChange={inView}
        > 
            <section id="coding" className=" w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto pb-7 md:pb-12 pt-6 md:pt-10 px-6 md:px-8 [box-shadow:_.5em_.5em_#960707] md:[box-shadow:_1em_1em_#960707]"             style={{
                transform:` rotateX(${scrollBottom ? ( scrollBottom/-99 ):'0'}deg)`
            }}>

            <div className=" w-full gap-8  relative z-10 flex">
            

                <div className="flex flex-col text-center" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Dev"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'kit.'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full"></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full"></div>
                </div>
            </div>

            <div className="gap-2 md:gap-8 mt-8 w-full grid grid-cols-2 lg:grid-cols-4 font-ultra text-zinc-700  z-10 text-center md:text-left justify-start ">
            
                <div className="w-full p-0 mb-2 md:mb-0 px-0 !pl-0 rounded-2xl col-span-2">

                    {/* <Paragraph text={"I am a Frontend Developer who prides himself on the work I bring to the interwebs. I had to learn a lot of new technologies, loose countless hours of sleep ... Yet, I'm still doing the same - but its what I love, check out the tech I love ."} classes={'px-6 pt-6 md:pt-20 w-11/12 mx-auto font-ultra text-white text-lg  w-full md:w-max'} /> */}


                    <H2element additionalClasses={'  text-md md:text-2xl flex flex-col pb-4  '} headerText={"Frontend Development"} spanClasses={undefined} spanText={undefined}/>
                    <ul className='grid grid-cols-2 gap-2 md:gap-x-6 md:!gap-y-4 text-sm md:text-md xl:text-lg'>
                        {usedTech ? usedTech.filter((item=>item.category == 'programming')).map((item)=>(
                            <li className='flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider'> 
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                        </li>
                        )) : null}
                    </ul>
                    
                </div>

                <div className="w-full ">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col  '} headerText={"Web Design"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-0 md:gap-2  '>
                    {usedTech ? usedTech.filter((item=>item.category == 'design')).map((item)=>(
                            <li className='flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider mb-2'> 
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                            </li>
                        )) : null}
                </ul>
                
            </div>
        

            <div className="w-full  ">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col  '} headerText={"Web Builders"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-0 md:gap-2 '>
                    {usedTech ? usedTech.filter((item=>item.category == 'builder')).map((item)=>(
                            <li className='flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider mb-2'> 
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                        </li>
                        )) : null}
                </ul>

            </div>
            </div>
            </section>
        </ReactVisibilitySensor>
    )
}

export default CodingLanguages