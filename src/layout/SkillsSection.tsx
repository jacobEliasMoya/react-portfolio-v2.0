import { useEffect, useState } from "react";

import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import Draggable from 'react-draggable';

import p1Img from "../assets/projects/kelseysplacebar.webp";
import p2Img from "../assets/projects/plazasbistro.jpg";
import p3Img from "../assets/projects/oceandrivedesigns.webp";
import p4Img from "../assets/projects/kidskingdom1.png";
import p5Img from "../assets/projects/wonderelectric.jpg";
import p6Img from "../assets/projects/venolosapparel.webp";
import p7Img from "../assets/projects/parsonsvalero.jpg";
import p8Img from "../assets/projects/kidskingdom1.png";

import ButtonWhite from "../components/buttons/ButtonWhite";
import Paragraph from "../components/Paragraph";
 
interface Spotlight {
    id:number,
    animation:string,
    projectName: string,
    projectLink: string,
    codeLink: string,
    projectDexcription: string,
    categories: string[],
    isActive: boolean
}

const SkillsSection = () => {
  
    const initialProjects = [
        {
            id:1,
            animation:'animate-growProjectOne',
            projectName: "Kelseys Bar",
            projectLink: p1Img,
            codeLink: "https://kelseysplacebar.com/",
            projectDexcription: "Are you searching for the perfect spot to have a fantastic night out with friends and family? Well look no further than Kelsey’s Place.",
            categories:['test','test1','test2'],
            isActive: false
        },
        {
            id:2,
            animation:'animate-growProjectTwo',
            projectName: "Plaza’s Italian Bistro",
            projectLink: p2Img,
            codeLink: "https://plazasbistro.com/",
            projectDexcription: "Welcome to Plaza’s Italian Bistro, where every bite offers you a little piece of Italy. We’re pleased that you decided to stop by our site and consider dining with us.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:3,
            animation:'animate-growProjectThree',
            projectName: "Ocean Drive Designs",
            projectLink: p3Img,
            codeLink: "https://oceandrivedesigns.com/",
            projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:4,
            animation:'animate-growProjectFour',
            projectName: "Kids Kingdom",
            projectLink: p4Img,
            codeLink: "https://kidskingdom1.com/",
            projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. ",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:5,
            animation:'animate-growProjectOneNoDelay',
            projectName: "Wonder Electric",
            projectLink: p5Img,
            codeLink: "https://wonderelectric.com/",
            projectDexcription: "For those that are either working on creating a new home or business or just revamping their old home, an electrical contractor is a necessity.",
            categories:['test','test1','test2'],
            isActive: false


        },
        {
            id:6,
            animation:'animate-growProjectTwoNoDelay',
            projectName: "Venolos Apparel",
            projectLink: p6Img,
            codeLink: "https://venolosapparel.com/",
            projectDexcription: "Drawing inspiration from the rich and diverse culture of hip hop, we create unique and authentic designs that resonate with the soul of the genre.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:7,
            animation:'animate-growProjectThreeNoDelay',
            projectName: "Parsons Valero",
            projectLink: p7Img,
            codeLink: "https://parsonsvalero.com/",
            projectDexcription: "Pitts Exxon is a full-service gas station in Mountain View, AR, committed to keeping local-area drivers on the road in a vehicle they can rely on.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:8,
            animation:'animate-growProjectFourNoDelay',
            projectName: "Kids Kingdom",
            projectLink: p8Img,
            codeLink: "https://kidskingdom1.com/",
            projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. ",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:9,
            animation:'animate-growProjectOneNoDelay',
            projectName: "Wonder Electric",
            projectLink: p5Img,
            codeLink: "https://wonderelectric.com/",
            projectDexcription: " At Wonder Electric Co. Inc, we work to help provide each and every customer with attention to detail and individual solutions that are going to work for you.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:10,
            animation:'animate-growProjectTwoNoDelay',
            projectName: "Venolos Apparel",
            projectLink: p6Img,
            codeLink: "https://venolosapparel.com/",
            projectDexcription: "Drawing inspiration from the rich and diverse culture of hip hop, we create unique and authentic designs that resonate with the soul of the genre.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:11,
            animation:'animate-growProjectThreeNoDelay',
            projectName: "Parsons Valero",
            projectLink: p7Img,
            codeLink: "https://parsonsvalero.com/",
            projectDexcription: "Pitts Exxon is a full-service gas station in Mountain View, AR, committed to keeping local-area drivers on the road in a vehicle they can rely on.",
            categories:['test','test1','test2'],
            isActive: false

        },
        {
            id:12,
            animation:'animate-growProjectFourNoDelay',
            projectName: "Kids Kingdom",
            projectLink: p8Img,
            codeLink: "https://kidskingdom1.com/",
            projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, ",
            categories:['test','test1','test2'],
            isActive: false
        },

    ]  

    const [spotlight,setSpotlight] = useState<Array<Spotlight>>() 

    // initial count of items in array to base measurements on
    const [startingArrNum,setStartingArrNum] = useState<number>();
    const [scrollItemLeft, setScrollItemLeft] = useState<number>();
    const [scrollItemRight, setScrollItemRight] = useState<number>();
    const [containerWidth, setContainerWidth] = useState<number>();

    // handling the drag limites based on projects
    const [dragBoundsLeft,setDragBoundsLeft] = useState<number>();
    const [boundsLocked,setBoundsLocked] = useState<boolean>(false);

    // event handlers here
    const handleScroll = () => {
        setScrollItemLeft(document.querySelector("#drag-item")?.getBoundingClientRect().left)
        setScrollItemRight(document.getElementById("drag-item")?.getBoundingClientRect().right)
    }

    // handles additional items/ will stop at end of project list
    const handleAdditionalItems = () =>{
        // need to get inner width of container, if left is less the screens inner width add more
        if(containerWidth && startingArrNum && scrollItemRight && scrollItemRight < containerWidth * 1.35){
            setStartingArrNum( startingArrNum + 4);
        }
    }

    const allowClickThrough = () =>{
        console.log('mouse is down')
    }

    // all useeffects below here --------------------------------------------------------

    useEffect(()=>{
        // setting spotlight
        setSpotlight(initialProjects)
    },[])

    useEffect(()=>{
        // when spotlight is set, set number of items to show
        spotlight ? setStartingArrNum(5) : null;
        // set the width of the container
        setContainerWidth(document.getElementById("outer-scroll")?.offsetWidth)
    },[spotlight])

    useEffect(()=>{
        // on either scroll left or right, runs a check to increase the starting Arr num to show more projects
        handleAdditionalItems();

        // setting slightly before to ensure bounds are set seamlessly
        if(!boundsLocked && scrollItemRight && scrollItemRight - window.innerWidth <= 30){
            setBoundsLocked(true)
        } 

    },[scrollItemLeft,scrollItemRight])

    useEffect(()=>{
        if(boundsLocked){
            let x:any = document.getElementById("drag-item")?.offsetWidth;
            x && containerWidth ? setDragBoundsLeft(containerWidth - x) : '';
        }
    },[boundsLocked])

    return (
        <section id="outer-scroll" className="transition-all w-full md:min-h-screen bg-zinc-800 flex justify-start flex-wrap flex-col overflow-hidden py-10 rounded-tl-2xl">
                <div className="w-full flex gap-8 px-8 relative z-10">
                    <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                        <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[200px]"></div>
                        <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full opacity-0 animate-fallThree relative -top-[200px]"></div>
                    </div>
                    
                    <div className="flex flex-col" >            
                        <H2element additionalClasses={'text-white text-5xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[200px]'} headerText={"spot-"} spanClasses={'text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[200px]'} spanText={'light'}/>
                    </div>
                </div>

                <div className="w-full flex gap-8 px-8 py-10 md:py-14 lg:py-20 font-ultra text-white  justify-center  relative z-10 opacity-0 animate-fallFour  -top-[200px]">

                    <Paragraph text={"Drag or swipe right to view my selected work, enjoy, and if you like it so we can create some amazing work together. "} classes={'!text-balance text-md md:text-lg lg:text-xl xl:text-2xl text-center w-full mx-auto rounded-2xl'}/>

                </div>

                <Draggable 
                    axis="x"
                    cancel=".cancel-me-now"
                    onDrag={handleScroll}
                    bounds={{right:0, left:dragBoundsLeft}}
                >
                    <div id="drag-item" className=" z-30  min-w-full md:w-max h-auto mx-auto  justify-self-end flex justify-start items-start px-8 gap-8 md:gap-12 mb-6 pt-3 ">
                        {/* mapping out projects, no need to fetch anything */}
                        {spotlight && startingArrNum ? spotlight
                        .filter((item=>item.id < startingArrNum))
                        .map((item)=>(

                            <div id={`${item.id}`} className={`${item.animation} text-center [scale:0] rounded-2xl w-[85vw]  max-w-[450px] relative drop-shadow-[-.25em_.25em_.05em_rgba(0,0,0,0.4)] flex flex-col item-center justify-end md:hover:-translate-y-3  transition-all duration-200 `}>
                                
                                <div className="duration-500 transition-all bg-cover bg-center w-full rounded-tl-3xl rounded-tr-3xl md:rounded-tr-xl md:rounded-tl-xl min-h-96 "
                                    style={{
                                    backgroundImage:`url(${item.projectLink})`, 
                                    }}
                                ></div>

                                <div className=" duration-100 text-2xl md:text-3xl transition-all w-full bg-red-500 p-4 flex justify-center items-center text-white z-10">
                                    <H3element additionalClasses={'relative transition-all tracking-normal'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                                </div>

                                <div className="rounded-bl-3xl rounded-br-3xl md:rounded-bl-xl md:rounded-br-xl font-ultra  bg-red-700 duration-200 transition-all w-full p-4 flex flex-col items-center justify-between text-white relative z-10 h-3/6" >

                                    {/* <div className="flex w-full items-center justify-center py-3 min-h-36">
                                        <Paragraph text={item.projectDexcription} classes={' md:text-md lg:text-lg text-center w-full mx-auto rounded-2xl'}/>
                                    </div>
                                    */}

                                    <ButtonWhite buttonText={`View ${item.projectName}`} additionalClasses={"text-sm md:text-lg text-black !w-full relative z-10"} buttonLink={item.codeLink ? item.codeLink : ''} newWindow={true} clickHandle={allowClickThrough}/> 
                                   
                                </div>

                            </div>
                        )) : null}
                    </div>
                </Draggable>
        </section>
    )
}

export default SkillsSection