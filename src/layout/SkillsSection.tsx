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
        <section id="outer-scroll" className="transition-all w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto py-6 md:py-10 ">


                <div className="w-full flex gap-8 px-6 md:px-8 relative z-10">

                <div className="flex flex-col text-center" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Spot"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Light'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full"></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full"></div>
                </div>
                    
                </div>

                {/* <div className="w-full flex gap-8 px-6 md:px-8  py-12 md:py-14 lg:py-18 font-ultra   justify-center  relative z-10 ">

                    <Paragraph text={"Drag or swipe right to view my selected works. I have been helping small mom and pop business grow with a, to business with multiple locations across the US. "} classes={' text-md md:text-lg lg:text-xl xl:text-2xl text-center md:text-left w-full mx-auto rounded-2xl tracking-wider'}/>

                </div> */}

                <Draggable 
                    axis="x"
                    cancel=".cancel-me-now"
                    onDrag={handleScroll}
                    bounds={{right:0, left:dragBoundsLeft}}
                >
                    <div id="drag-item" className="mt-12 md:mt-16 gap-4 z-10 min-w-full md:w-max h-auto mx-auto justify-self-end flex justify-start items-start pt-3 px-4 ">
                        {/* mapping out projects, no need to fetch anything */}
                        {spotlight && startingArrNum ? spotlight
                        // .filter((item=>item.id < startingArrNum))
                        .map((item)=>(

                            <div id={`${item.id}`} className={`rounded-xl text-center w-[450px] max-w-[75vw] relative transition-all duration-200  font-ultra p-4 grid grid-cols-4 gap-2 `}>
                                
                                <H3element additionalClasses={' font-retro drop-shadow-xl shadow-red-900 absolute -top-28 -right-5 -z-10 text-[10em] transition-all tracking-widest text-red-700'} headerText={`${item.id}`} spanClasses={''} spanText={''}/>


                                <div className="rounded-md col-span-3 duration-500 transition-all bg-cover bg-center w-full min-h-72 translate"
                                    style={{
                                    backgroundImage:`url(${item.projectLink})`, 
                                    }}
                                ></div>

                                <div className="rounded-md  flex justify-center items-center duration-100 text-md transition-all w-full text-white p-4  bg-zinc-800 z-10">
                                    <H3element additionalClasses={'relative transition-all tracking-widest !text-nowrap rotate-90'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                                </div>

                                <div className="col-span-4  duration-200 transition-all w-full p-0 flex flex-col items-center justify-between relative z-10 h-3/6" >

                                    
                                    <ButtonWhite buttonText={`View Website`} additionalClasses={"rounded-md text-sm md:text-md !w-full relative z-10 !bg-red-600 hover:!bg-red-700 !text-white !py-3"} buttonLink={item.codeLink ? item.codeLink : ''} newWindow={true} clickHandle={allowClickThrough}/> 
                                   
                                    <Paragraph text={item.projectDexcription} classes={'mt-2 !text-balance'}/>

                                </div>

                            </div>
                        )) : null}
                    </div>
                </Draggable>

                
        </section>
    )
}

export default SkillsSection