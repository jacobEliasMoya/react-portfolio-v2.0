import {  FaBootstrap, FaFigma, FaHtml5,  FaReact, FaSass, FaShopify,  FaSquarespace, FaWix, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import { ReactElement,   useEffect, useState } from 'react'
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
    
    useEffect(()=>{
        setUsedTech(skillsArr);
    },[])

    const [usedTech,setUsedTech] = useState<Array<Skills>>();
    
    const [isVisible,setIsVisible] = useState(false);
    const [scrollBottom,setScrollBottom] = useState<number>(0);
    const [animationStart, setAnimationStart] = useState<number>(120)
    const [opacityStart, setOpacityStart] = useState<number>(0)

    const inView = (e:boolean) =>{
        e ? setIsVisible(true) :  setIsVisible(false) ;
    }

    const detectScrollDirection = () => {
        const currentScrollTop = window.scrollY; // Get current scroll position
        const direction = currentScrollTop > scrollBottom ? 'down' : 'up'; // Compare with the last position
        setScrollBottom(currentScrollTop); // Update the last position
        return direction;
    };

    const  setIt = (direction:string) =>{
        if(direction == 'up' && isVisible){
            setAnimationStart( prev => prev < 116 ? prev + 4 : prev )
            setOpacityStart(  prev => prev > .1 ? prev - .1 : prev)
        } else if(direction == 'down'){
            setAnimationStart( prev => prev > 0 ? prev - 5 : prev )
            setOpacityStart( prev =>  prev <= .9  ? prev + .1 : prev )
        }
    }
    useEffect(()=>{
        const scrollHandler = () => {
            const direction = detectScrollDirection(); // Get the current scroll direction
            setIt(direction)
        } 

        isVisible ? window.addEventListener("scroll", scrollHandler) : null;

        return () => {
            isVisible ? window.removeEventListener("scroll", scrollHandler) : null;  // Clean up listener
        };

    },[scrollBottom,isVisible])


    return (
        <ReactVisibilitySensor  
            partialVisibility={true}
            onChange={inView}
            minTopValue={0}
        > 
            <section id="coding" className="relative origin-right w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto pb-7 md:pb-12 pt-6 md:pt-10 px-6 md:px-8 [box-shadow:_.5em_.5em_#960707] md:[box-shadow:_1em_1em_#960707] transition-all ease-linear duration-[.1s]"             
            
                style={{
                bottom:`${animationStart && animationStart >= 0 ? -animationStart : '0'}px`,
                    opacity:opacityStart
                }}
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
            
                <div className="w-full p-0 mb-4 md:mb-0 px-0 !pl-0 rounded-2xl col-span-2">

                    {/* <Paragraph text={"I am a Frontend Developer who prides himself on the work I bring to the interwebs. I had to learn a lot of new technologies, loose countless hours of sleep ... Yet, I'm still doing the same - but its what I love, check out the tech I love ."} classes={'px-6 pt-6 md:pt-20 w-11/12 mx-auto font-ultra text-white text-lg  w-full md:w-max'} /> */}


                    <H2element additionalClasses={'  text-xl md:text-2xl flex flex-col pb-4  '} headerText={"Frontend Development"} spanClasses={undefined} spanText={undefined}/>
                    <ul className='grid grid-cols-2 gap-4 gap-x-2 md:gap-x-8 md:!gap-y-4 text-sm md:text-md xl:text-lg'>
                        {usedTech ? usedTech.filter((item=>item.category == 'programming')).map((item)=>(
                          <li className=' top-0  hover:-top-4 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] after:transition-all after:ease transform after:transform '>  
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                        </li>
                        )) : null}
                    </ul>
                    
                </div>

                <div className="w-full ">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col  '} headerText={"Web Design"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-4  '>
                    {usedTech ? usedTech.filter((item=>item.category == 'design')).map((item)=>(
                            <li className=' top-0  hover:-top-4 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] after:transition-all after:ease transform after:transform '>  
                            <span className='text-xl md:text-4xl'>{item.icon}</span>
                            {item.name} 
                            </li>
                        )) : null}
                </ul>
                
            </div>
        

            <div className="w-full ">

                <H2element additionalClasses={'text-md md:text-2xl pb-4 flex flex-col  '} headerText={"Web Builders"} spanClasses={undefined} spanText={undefined}/>
                <ul className='text-sm md:text-md xl:text-lg grid grid-cols-1 gap-4  '>
                    {usedTech ? usedTech.filter((item=>item.category == 'builder')).map((item)=>(
                            <li className=' top-0  hover:-top-4 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] after:transition-all after:ease transform after:transform '>  
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