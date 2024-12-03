// import React from 'react'

import { FaCaretDown } from "react-icons/fa"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"

const SkillsSection = () => {


  const spotlight = [
    {
        id:1,
        projectName: "Kelseys Bar",
        projectLink: "../../src/assets/projects/kelseysplacebar.webp",
        codeLink: "https://kelseysplacebar.com/",
        projectDexcription: "Are you searching for the perfect spot to have a fantastic night out with friends and family? Well look no further than Kelsey’s Place, the premier family-owned sports bar conveniently located in North Platte, NE.",
    },
    {
        id:2,
        projectName: "Plaza’s Italian Bistro",
        projectLink: "../../src/assets/projects/plazasbistro.jpg",
        codeLink: "https://plazasbistro.com/",
        projectDexcription: "Welcome to Plaza’s Italian Bistro, where every bite offers you a little piece of Italy. We’re pleased that you decided to stop by our site and consider dining with us. We are not your typical run-of-the-mill pizza shop.",
    },
    {
        id:3,
        projectName: "Ocean Drive Designs",
        projectLink: "../../src/assets/projects/oceandrivedesigns.webp",
        codeLink: "https://oceandrivedesigns.com/",
        projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
    },
    {
        id:4,
        projectName: "Kids Kingdom",
        projectLink: "../../src/assets/projects/kidskingdom1.png",
        codeLink: "https://kidskingdom1.com/",
        projectDexcription: "Kids Kingdom Early Learning Center is the premier Biblically-based early child care center in Greenwood, IN. We’re proud to teach the youngest minds skills that last a lifetime. Our supportive and dedicated staff are members of your community, fully invested in helping each student succeed in a loving, safe environment.",
    },
    
  ]  




  return (
    <section className='transition-all w-full min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-start flex-wrap flex-col overflow-hidden'>
        <div className="w-full flex flex-col bg-white py-16 relative mt-32 h-96">

            <div className="w-full flex gap-8 px-8 pb-10">

                <div className="flex flex-col gap-2 md:gap-4 w-3/12 justify-center ">
                    <div className="rounded md:rounded-xl h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[400px]"></div>
                    <div className="rounded md:rounded-xl h-20 bg-zinc-800 w-full opacity-0 animate-fallThree relative -top-[400px]"></div>
                </div>

                <div className="flex justify-center w-3/12">
                    <H2element additionalClasses={'text-center opacity-0 text-4xl md:text-6xl lg:text-8xl flex flex-col text-right animate-fallFour relative -top-[400px]'} headerText={"spot-"} spanClasses={'opacity-0 animate-fallFive relative -top-[400px] text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'light'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 min-h-3.5 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-6 bg-red-600 w-full opacity-0 animate-fallSix relative -top-[400px]"></div>
                    <div className="rounded md:rounded-xl h-20 bg-zinc-800 w-full opacity-0 animate-fallSeven relative -top-[400px]"></div>
                </div>
                
            </div>

            <div className="w-full absolute text-white flex p-8 top-2/3 justify-center pl-20 ">

                {/* mapping out projects, no need to fetch anything */}
                
                {spotlight.map((item)=>(
                    <div id={`${item.id}`} className=" w-1/4 bg-red-700 rounded-xl relative -ml-20 drop-shadow-[-.25em_.25em_.05em_rgba(0,0,0,0.4)] overflow-hidden flex flex-col item-center justify-start hover:translate-y-3 group/main group/alt h-[450px] transition-all ">
                        
                        <div className="duration-700 transition-all w-full h-72 bg-cover bg-center"
                            style={{
                            backgroundImage:`url(${item.projectLink})`, 
                            }}
                        ></div>

                        <div className="duration- transition-all w-full h-20 bg-red-500 p-4 text-xl flex items-center text-opacity-30 text-white group-hover/main:text-opacity-100">
                            <H3element additionalClasses={'relative transition-all duration-75'} headerText={item.projectName} spanClasses={''} spanText={''}/>
                        </div>

                        <div className="duration-700 transition-all w-full h-10 p-4 hover:h-1/2 text-opacity-20 text-white relative hover:text-opacity-100 group" >
                            {item.projectDexcription}
                            <FaCaretDown className="transition-all duration-600 group-hover:opacity-0 absolute text-3xl rounded-full bg-zinc-800 text-white text-opacity-100 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 group-hover/alt:top-2/3"/>
                        </div>

                    </div>
                 ))}
            </div>
        </div>
    </section>
  )
}

export default SkillsSection