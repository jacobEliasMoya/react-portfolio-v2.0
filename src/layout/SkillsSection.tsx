import { ReactElement, useEffect, useState } from "react";

import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import Draggable from 'react-draggable';

import p1Img from "../assets/projects/qrcode.webp";
import p2Img from "../assets/projects/pokedex.webp";
import p3Img from "../assets/projects/smithins.webp";
import p4Img from "../assets/projects/medex.webp";
import p5Img from "../assets/projects/franklins.webp";
import p6Img from "../assets/projects/oceandrivedesigns.webp";
import p7Img from "../assets/projects/venolosapparel.webp";
import p8Img from "../assets/projects/kidskingdom1.png";

import ButtonWhite from "../components/buttons/ButtonWhite";
import Paragraph from "../components/Paragraph";
import ReactVisibilitySensor from "react-visibility-sensor";
import { FaGithub } from "react-icons/fa6";
 
interface CodeLink{
    icon:ReactElement,
    link:string
}

interface Spotlight {
    id:number,
    animation:string,
    projectName: string,
    projectLink: string,
    liveLink: string,
    projectDexcription: string,
    codelinks: CodeLink[] | undefined,
    isActive: boolean,
    isApp: boolean,
}

const SkillsSection = () => {
  
    const initialProjects = [
        {
            id:1,
            animation:'animate-growProjectOne',
            projectName: "Qr Code Generator",
            projectLink: p1Img,
            liveLink: "https://qrclone.netlify.app/",
            projectDexcription: "My passion project uses React, TypeScript, Tailwind, Redux, and libraries for color selection and canvas-to-image downloads.",
            codelinks:[{
                icon: <FaGithub/>,
                link: 'https://github.com/jacobEliasMoya/QR-Clone'
            }],
            isActive: false,
            isApp: true,
        },
        {
            id:2,
            animation:'animate-growProjectTwo',
            projectName: "Pokedex v2",
            projectLink: p2Img,
            liveLink: "https://main--pokedex-vmax.netlify.app/",
            projectDexcription: "My kids' love for Pokémon inspired me to create a more robust second version of my Pokédex, now built with Bootstrap. ",
            codelinks:[{
                icon:<FaGithub/>,
                link:'https://github.com/jacobEliasMoya/Pokedex-TypeScript'
            }],
            isActive: false,
            isApp: true,
            

        },
        {
            id:3,
            animation:'animate-growProjectThree',
            projectName: "Smith Insurance",
            projectLink: p3Img,
            liveLink: "https://insurancesic.com/",
            projectDexcription: "Welcome to Smith Insurance, your reliable partner for comprehensive insurance solutions in Pagosa Springs, CO, and beyond.",
            codelinks:undefined,
            isActive: false,
            isApp: false,
            

        },
        {
            id:4,
            animation:'animate-growProjectFour',
            projectName: "MedEstheticsRX",
            projectLink: p4Img,
            liveLink: "https://medestheticsrx.com/",
            projectDexcription: "At MedEstheticsRX, we believe that beautiful, healthy skin is more than just an aesthetic goal—it’s a science. ",
            codelinks:undefined,
            isActive: false,
            isApp: false,
            


        },
        {
            id:5,
            animation:'animate-growProjectTwoNoDelay',
            projectName: "Ocean Drive Designs",
            projectLink: p6Img,
            liveLink: "https://oceandrivedesigns.com/",
            projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
            codelinks:undefined,

            isActive: false,
            isApp: false,
            

        },
        {
            id:6,
            animation:'animate-growProjectFourNoDelay',
            projectName: "Kids Kingdom",
            projectLink: p8Img,
            liveLink: "https://kidskingdom1.com/",
            projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. ",
            codelinks:undefined,
            isActive: false,
            isApp: false,
            


        },
        {
            id:7,
            animation:'animate-growProjectOneNoDelay',
            projectName: "Franklin’s",
            projectLink: p5Img,
            liveLink: "https://franklinsinproctor.com/",
            projectDexcription: "Welcome to Franklin’s, where the motto “Food, Friends, and Fun” truly comes to life! Located in the heart of Proctor, VT.",
            codelinks:undefined,
            isActive: false,
            isApp: false,
            

        },
        {
            id:8,
            animation:'animate-growProjectThreeNoDelay',
            projectName: "Venlos Apparal",
            projectLink: p7Img,
            liveLink: "https://venolosapparel.com/",
            projectDexcription: "At Venolos Apparel, we believe that apparel, art, and music go hand in hand. Drawing inspiration from hip hop.",
            codelinks:undefined,
            isActive: false,
            isApp: false,
            

        },

    ]  


    // commented out code not needed for now, just to set the bounds limit 

    // initial count of items in array to base measurements on
    // const [scrollItemLeft, setScrollItemLeft] = useState<number>();
    // const [scrollItemRight, setScrollItemRight] = useState<number>();
    // handling the drag limites based on projects
    // event handlers here
    // const handleScroll = () => {
    //     setScrollItemLeft(document.querySelector("#drag-item")?.getBoundingClientRect().left)
    //     setScrollItemRight(document.getElementById("drag-item")?.getBoundingClientRect().right)
    // }

    const [spotlight,setSpotlight] = useState<Array<Spotlight>>() 
    const [containerWidth, setContainerWidth] = useState<number>();
    const [dragBoundsLeft,setDragBoundsLeft] = useState<number>();
    

        // all useeffects below here --------------------------------------------------------

        useEffect(()=>{
            // setting spotlight
            setSpotlight(initialProjects)
        },[])

        useEffect(()=>{
            // set the width of the container
            setContainerWidth(document.getElementById("outer-scroll")?.offsetWidth)
        },[spotlight])

        useEffect(()=>{
            if(containerWidth){
                let x:any = document.getElementById("drag-item")?.offsetWidth;
                x && containerWidth ? setDragBoundsLeft(containerWidth - x) : '';
            }
        },[containerWidth])


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
            if(direction === 'up'  && isVisible){
                let x = document.querySelector('#outer-scroll');
                if( x && window.innerHeight*.65 < x.getBoundingClientRect().top){
                    setAnimationStart( prev => prev < 110 ? prev + 5 : prev )
                    setOpacityStart(  prev => prev > .2 ? prev - .2 : prev)
                }
    
            } else if(direction === 'down' && isVisible){
                setAnimationStart( prev => prev > 0 ? prev - 5 : prev )
                setOpacityStart( prev =>  prev <= .8  ? prev + .2 : prev )
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
            <section id="outer-scroll" className="relative origin-left [box-shadow:_.5em_.5em_#960707] md:[box-shadow:_1em_1em_#960707] w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto py-6 md:py-10 transition-all ease-linear duration-0"        

            style={{
                bottom:`-${animationStart && animationStart >= 0 ? animationStart : '0'}px`,
                    opacity:opacityStart
                }}
            >


                <div className="w-full flex gap-8 px-6 md:px-8 relative z-10">

                    <div className="flex flex-col text-center" >            
                        <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Spot"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Light'}/>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                        <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full"></div>
                        <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full"></div>
                    </div>
                    
                </div>

                <Draggable 
                    axis="x"
                    cancel=".cancel-me-now"
                    // onDrag={handleScroll}
                    bounds={{right:0, left:dragBoundsLeft}}
                >
                    <div id="drag-item" className="mt-12 md:mt-16 gap-4 z-10 min-w-full md:w-max h-auto mx-auto justify-self-end flex justify-start items-start pt-3 px-4 ">
                        {/* mapping out projects, no need to fetch anything */}
                        {spotlight ? spotlight
                        // .filter((item=>item.id < startingArrNum))
                        .map((item)=>(

                            <div id={`${item.id}`} className={`rounded-xl text-center w-[450px] max-w-[75vw] relative transition-all duration-200  font-ultra p-4 grid grid-cols-4 gap-4 `}>
                                

                                <H3element additionalClasses={' font-retro drop-shadow-xl shadow-red-900 absolute -top-28 -right-5 -z-10 text-[10em] transition-all tracking-widest text-red-700'} headerText={`${item.id}`} spanClasses={''} spanText={''}/>

                                <div className="col-span-full relative">
                                    {item.codelinks?.map((item=>(
                                        <a className="flex items-center justify-start gap-2 absolute left-0 -top-8   md:cursor-none transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md cancel-me-now" href={item.link} target="_blank" rel="noopener noreferrer"><span className=" text-3xl md:text-4xl " >{item.icon}</span> View Git</a>
                                    )))}
                                </div>

                                <div className="rounded col-span-3 duration-500 transition-all bg-cover bg-left w-full min-h-72 translate brightness-90"
                                    style={{
                                    backgroundImage:`url(${item.projectLink})`, 
                                    }}
                                ></div>

                                <div className="rounded  flex justify-center items-center duration-100 text-md transition-all w-full  p-4 text-white bg-zinc-800 z-10">
                                    <H3element additionalClasses={'relative transition-all tracking-widest !text-nowrap rotate-90'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                                </div>

                                <div className="col-span-4  duration-200 transition-all w-full p-0 flex flex-col items-center justify-between relative z-10 h-3/6" >

                                    <ButtonWhite buttonText={item.isApp ? `View App` : `View Website`} additionalClasses={"!rounded text-sm md:text-md lg:text-lg   !w-full   z-10 !bg-red-600  !text-white !py-3 top-0  hover:-top-4 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2  p-2 px-3  tracking-wider relative !rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] after:transition-all after:ease transform after:transform"} buttonLink={item.liveLink ? item.liveLink : ''} newWindow={true} clickHandle={undefined}/> 

                                    <Paragraph text={item.projectDexcription} classes={'mt-6 md:text-left text-sm md:text-md md:text-lg '}/>

                                </div>

                            </div>
                        )) : null}
                    </div>
                </Draggable>
             </section>
        </ReactVisibilitySensor>
    )
}

export default SkillsSection