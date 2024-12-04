// import React from 'react'

import { FaCaretDown } from "react-icons/fa"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
// import InfiniteScroll from 'react-infinite-scroll-component';
import Draggable from 'react-draggable';

import p1Img from "../assets/projects/kelseysplacebar.webp";
import p2Img from "../assets/projects/plazasbistro.jpg";
import p3Img from "../assets/projects/oceandrivedesigns.webp";
import p4Img from "../assets/projects/kidskingdom1.png";

const SkillsSection = () => {

  const spotlight = [
    {
        id:1,
        projectName: "Kelseys Bar",
        projectLink: p1Img,
        codeLink: "https://kelseysplacebar.com/",
        projectDexcription: "Are you searching for the perfect spot to have a fantastic night out with friends and family? Well look no further than Kelsey’s Place, the premier family-owned sports bar conveniently located in North Platte, NE.",
    },
    {
        id:2,
        projectName: "Plaza’s Italian Bistro",
        projectLink: p2Img,
        codeLink: "https://plazasbistro.com/",
        projectDexcription: "Welcome to Plaza’s Italian Bistro, where every bite offers you a little piece of Italy. We’re pleased that you decided to stop by our site and consider dining with us. We are not your typical run-of-the-mill pizza shop.",
    },
    {
        id:3,
        projectName: "Ocean Drive Designs",
        projectLink: p3Img,
        codeLink: "https://oceandrivedesigns.com/",
        projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
    },
    {
        id:4,
        projectName: "Kids Kingdom",
        projectLink: p4Img,
        codeLink: "https://kidskingdom1.com/",
        projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. We’re proud to teach the youngest minds skills that last a lifetime. Our supportive and dedicated staff are members of your community, fully invested in helping each student succeed in a loving, safe environment.",
    },
   
  ]  

  return (
    <section className='transition-all w-full min-h-max bg-zinc-800 flex items-center justify-start flex-wrap flex-col overflow-hidden py-6'>
            <div className="w-full flex gap-8 px-8 pb-10">

                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-white text-4xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[400px]'} headerText={"spot-"} spanClasses={'text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[400px]'} spanText={'light'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                    <div className="rounded md:rounded-xl h-2 md:h-4 lg:h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[400px]"></div>
                    <div className="rounded md:rounded-xl h-6 md:h-10 lg:h-20 bg-white w-full opacity-0 animate-fallThree relative -top-[400px]"></div>
                </div>
                
            </div>

            {/* <div className="w-full min-w-56 mx-auto text-white  justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 mb-6  "> */}
            <Draggable axis="x">
                <div className="w-full h-auto mx-auto text-white  justify-center flex px-4 gap-4 mb-6 pt-3 -mt-3 ">

                    {/* mapping out projects, no need to fetch anything */}
                    {spotlight.map((item)=>(
                        <div id={`${item.id}`} className="min-w-80 rounded-lg w-full relative drop-shadow-[-.25em_.25em_.05em_rgba(0,0,0,0.4)] overflow-hidden flex flex-col item-center justify-end hover:-translate-y-3 group/main group/alt h-[400px] transition-all duration-200 ">
                            
                            <div className="duration-500 transition-all bg-cover bg-center absolute top-0 left-0 w-full h-full"
                                style={{
                                backgroundImage:`url(${item.projectLink})`, 
                                }}
                            ></div>

                            <div className="duration-200 transition-all w-full h-20 bg-red-500 p-4 text-xl flex items-center text-opacity-30 text-white group-hover/main:text-opacity-100">
                                <H3element additionalClasses={'relative transition-all duration-'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                            </div>

                            <div className="bg-red-700 duration-200 transition-all w-full h-20 p-4 hover:h-2/3 text-opacity-20 text-white relative hover:text-opacity-100 group" >
                                {item.projectDexcription}
                                <FaCaretDown className="duration-200 transition-all group-hover:opacity-0 absolute text-3xl rounded-full bg-zinc-800 text-white text-opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                            </div>

                        </div>
                    ))}
                    
                </div>
            </Draggable>
    </section>
  )
}

export default SkillsSection