import { useEffect, useState } from "react";

import { FaCaretDown, FaGithub } from "react-icons/fa"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import Draggable from 'react-draggable';

import p1Img from "../assets/projects/kelseysplacebar.webp";
import p2Img from "../assets/projects/plazasbistro.jpg";
import p3Img from "../assets/projects/oceandrivedesigns.webp";
import p4Img from "../assets/projects/kidskingdom1.png";
import ButtonWhite from "../components/buttons/ButtonWhite";

const SkillsSection = () => {
 
    const [spotlight,setSpotlight] = useState([
        {
            id:1,
            animation:'animate-growProjectOne',
            projectName: "Kelseys Bar",
            projectLink: p1Img,
            codeLink: "https://kelseysplacebar.com/",
            projectDexcription: "Are you searching for the perfect spot to have a fantastic night out with friends and family? Well look no further than Kelsey’s Place, the premier family-owned sports bar conveniently located in North Platte, NE.",
        },
        {
            id:2,
            animation:'animate-growProjectTwo',
            projectName: "Plaza’s Italian Bistro",
            projectLink: p2Img,
            codeLink: "https://plazasbistro.com/",
            projectDexcription: "Welcome to Plaza’s Italian Bistro, where every bite offers you a little piece of Italy. We’re pleased that you decided to stop by our site and consider dining with us. We are not your typical run-of-the-mill pizza shop.",
        },
        {
            id:3,
            animation:'animate-growProjectThree',
            projectName: "Ocean Drive Designs",
            projectLink: p3Img,
            codeLink: "https://oceandrivedesigns.com/",
            projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
        },
        {
            id:4,
            animation:'animate-growProjectFour',
            projectName: "Kids Kingdom",
            projectLink: p4Img,
            codeLink: "https://kidskingdom1.com/",
            projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. We’re proud to teach the youngest minds skills that last a lifetime. Our supportive and dedicated staff are members of your community, fully invested in helping each student succeed in a loving, safe environment.",
        },
      ]  
    ) 

    // initial count of items in array to base measurements on
    const [startingArrNum,setStartingArrNum] = useState<number>();
    const [scrollItemLeft, setScrollItemLeft] = useState<number>();
    const [scrollItemRight, setScrollItemRight] = useState<number>();
    const [containerWidth, setContainerWidth] = useState<number>();

    const handleScroll = () => {
        setScrollItemLeft(document.querySelector("#drag-item")?.getBoundingClientRect().left)
        setScrollItemRight(document.querySelector("#drag-item")?.getBoundingClientRect().right)
    }

    const handleAdditionalItems = () =>{
        // need to get inner width of container, if left is less the screens inner width add more
        if(containerWidth && startingArrNum&& scrollItemRight && scrollItemRight < containerWidth / 1.2){
            setSpotlight(prev=>[...prev, ...spotlight])        
        }
    }

    useEffect(()=>{
    },[spotlight])

    useEffect(()=>{
        handleAdditionalItems();
    },[scrollItemLeft,scrollItemRight])

    useEffect(()=>{
        spotlight ? setStartingArrNum(spotlight.length) : null;
        setContainerWidth(document.querySelector("#outer-scroll")?.getBoundingClientRect().width)
    },[])

    return (
        <section id="outer-scroll" className='transition-all w-full min-h-max bg-zinc-800 flex justify-start flex-wrap flex-col overflow-hidden py-6'>
                <div className="w-full flex gap-8 px-8 pb-10 ">

                    <div className="flex flex-col" >            
                        <H2element additionalClasses={'text-white text-4xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[400px]'} headerText={"spot-"} spanClasses={'text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[400px]'} spanText={'light'}/>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                        <div className="rounded md:rounded-xl h-2 md:h-4 lg:h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[400px]"></div>
                        <div className="rounded md:rounded-xl h-6 md:h-10 lg:h-20 bg-white w-full opacity-0 animate-fallThree relative -top-[400px]"></div>
                    </div>
                    
                </div>

                <Draggable 
                    axis="x"
                    onDrag={handleScroll}
                    bounds={{right:0}}
                >
                    <div id="drag-item" className=" min-w-full md:w-max h-auto mx-auto text-white justify-self-end flex justify-start items-start px-8 gap-8 mb-6 pt-3 ">
                        {/* mapping out projects, no need to fetch anything */}
                        {spotlight.map((item)=>(

                            <div id={`${item.id}`} className={`${item.animation} text-center [scale:0] rounded-lg w-[80vw] max-h-[70vh] max-w-[500px] relative drop-shadow-[-.25em_.25em_.05em_rgba(0,0,0,0.4)] flex flex-col item-center justify-end hover:-translate-y-3 group/main group/alt h-[600px] transition-all duration-200 overflow-hidden`}>
                                
                                <div className="duration-500 transition-all bg-cover bg-center absolute top-0 left-0 w-full h-full group-hover/main:opacity-100 opacity-85 rounded-lg"
                                    style={{
                                    backgroundImage:`url(${item.projectLink})`, 
                                    }}
                                ></div>

                                <div className=" duration-200 text-xl md:text-2xl transition-all w-full h-20 bg-red-500 p-4  flex justify-center items-center text-opacity-30 text-white group-hover/main:text-opacity-100">
                                    <H3element additionalClasses={'relative transition-all tracking-normal group-hover/main:tracking-wider'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                                </div>

                                <div className="rounded-bl-lg font-ultra rounded-br-lg bg-red-700 duration-200 transition-all w-full h-20 p-4 hover:h-2/3 text-opacity-20 text-white relative hover:text-opacity-100 group" >

                                    <div className="flex w-full items-center justify-center py-3">
                                        {item.projectDexcription}
                                    </div>
                                    
                                    <div className="flex w-full items-center justify-center mt-3">
                                         <ButtonWhite buttonText={`View ${item.projectName}'s Website`} additionalClasses={"text-black !w-full"} buttonLink={item.codeLink} newWindow={true}/> 
                                    </div>
                                   
                                    <FaCaretDown className="duration-200 transition-all group-hover:opacity-0 absolute text-4xl rounded-full bg-zinc-800 text-white text-opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                                </div>

                            </div>
                        ))}
                    </div>
                </Draggable>
        </section>
    )
}

export default SkillsSection