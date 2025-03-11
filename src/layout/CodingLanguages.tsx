import {  FaBootstrap, FaFigma, FaHtml5,  FaReact, FaSass, FaShopify,  FaSquarespace, FaWix, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import { ReactElement,   useEffect, useState } from 'react'
import { SiAdobeillustrator, SiAdobephotoshop, SiKrita, SiRedux, SiTailwindcss } from 'react-icons/si'
import {  BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'

interface Skills {
    id:number,
    name: string,
    icon: ReactElement,
    animation: string,
    category: string,
}
 
type Props = {
    opacityStart: number,
    id:string
}

const CodingLanguages = (props:Props) => {

    const skillsArr:Array<Skills> = [
       
        {
            icon: <FaHtml5 />,
            animation: 'animate-fallFive',
            name: 'HTML5',
            category: 'programming',
            id:0,
        },
        {
            icon: <FaBootstrap />,
            animation: 'animate-fallSix',
            name: 'Bootstrap',
            category: 'programming',
            id: 1
        },
        {
            icon: <FaSass />,
            animation: 'animate-fallEight',
            name: 'SCSS/ CSS',
            category: 'programming',
            id: 2
        },
        {
            icon: <SiTailwindcss />,
            animation: 'animate-fallSeven',
            name: 'Tailwind',
            category: 'programming',
            id: 3
        },
        {
            icon: <RiJavascriptFill />,
            animation: 'animate-fallNine md:animate-fallTwelve',
            name: 'JavaScript',
            category: 'programming',
            id: 4
        },
        {
            icon: <BiLogoTypescript />,
            animation: 'animate-fallNine md:animate-fallTwelve',
            name: 'Typescript',
            category: 'programming',
            id: 5
        },
        {
            icon: <FaReact />,
            animation: 'animate-fallTen1 md:animate-fallEleven',
            name: 'ReactJS',
            category: 'programming',
            id: 6
        },       
        {
            icon: <SiRedux />,
            animation: 'animate-fallTen1 md:animate-fallEleven',
            name: 'Redux',
            category: 'programming',
            id: 7
        },
        {
            icon: <FaShopify />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Squarespace',
            category: 'builder',
            id: 8
        },
        {
            name: 'Wordpress',
            icon: <FaWordpress />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            category: 'builder',
            id: 9
        },
        {
            icon: <FaSquarespace />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Shopify',
            category: 'builder',
            id: 10
        },
        {
            name: 'WIX',
            icon: <FaWix />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            category: 'builder',
            id: 11
        },
        {
            icon: <SiAdobephotoshop />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            name: 'Photoshop',
            category: 'design',
            id: 12
        },
        {
            icon: <SiAdobeillustrator />,
            animation: 'animate-fallEleven md:animate-fallTen1',
            name: 'Illustrator',
            category: 'design',
            id: 13
        },
        {
            icon: <FaFigma />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Figma',
            category: 'design',
            id: 14
        },
        
        {
            icon: <SiKrita />,
            animation: 'animate-fallTwelve md:animate-fallNine',
            name: 'Krita',
            category: 'design',
            id: 15
        },
    ]
    
    useEffect(()=>{
        setUsedTech(skillsArr);
    },[])

    const [usedTech,setUsedTech] = useState<Array<Skills>>();

    return (

            <section id={props.id} className=" relative origin-right w-full rounded-3xl md:rounded-[3rem] bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto pb-14 md:pb-24 pt-10 md:pt-16 px-6 md:px-8 [box-shadow:_.5em_.5em_#960707] md:[box-shadow:_1em_1em_#960707] transition-all ease-out duration-300"             
          
            >


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
            
                <div className="w-full p-0 mb-4 md:mb-0 px-0 !pl-0 rounded-2xl col-span-2 group">

                    <H2element additionalClasses={'  text-xl md:text-2xl flex flex-col pb-4 group-hover:text-red-600 text-red-900 '} headerText={"Frontend Development"} spanClasses={undefined} spanText={undefined}/>
                    <ul className='grid grid-cols-2 gap-4 gap-x-2 md:gap-x-8 md:!gap-y-4 text-sm md:text-md xl:text-lg'>
                        {usedTech ? usedTech.filter((item=>item.category == 'programming')).map((item)=>(
                          <li key={`prg-${item.id}`} className=' top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)]  active:after:h-[calc(1rem+1px)] active:after:-bottom-4 after:transition-all after:ease transform after:transform'>  
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                        </li>
                        )) : null}
                    </ul>
                    
                </div>

                <div className="w-full group">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col group-hover:text-red-600 text-red-900 '} headerText={"Web Design"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-4  '>
                    {usedTech ? usedTech.filter((item=>item.category == 'design')).map((item)=>(
                            <li key={`design-${item.id}`} className='top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)]  active:after:h-[calc(1rem+1px)] active:after:-bottom-4 after:transition-all after:ease transform after:transform'>  
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                            </li>
                        )) : null}
                </ul>
                
            </div>
        

            <div className="w-full group">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col group-hover:text-red-600 text-red-900 '} headerText={"Web Builders"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-4  '>
                    {usedTech ? usedTech.filter((item=>item.category == 'builder')).map((item)=>(
                            <li key={`builder-${item.id}`} className=' top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)]  active:after:h-[calc(1rem+1px)] active:after:-bottom-4 after:transition-all after:ease transform after:transform '>  
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                        </li>
                        )) : null}
                </ul>

            </div>
            </div>
            </section>
    )
}

export default CodingLanguages