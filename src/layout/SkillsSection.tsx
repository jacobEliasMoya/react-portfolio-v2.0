import { ReactElement, useEffect, useState } from "react";

import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import Draggable from 'react-draggable';

import p1Img from "../assets/projects/qrcode.webp";
import p2Img from "../assets/projects/pokedex.webp";
import p3Img from "../assets/projects/smithins.webp";
import p4Img from "../assets/projects/americanpridesecurity.webp";
import p6Img from "../assets/projects/oceandrivedesigns.webp";
import p9Img from "../assets/projects/tuner-main.webp";
import p10Img from "../assets/projects/mygalleryfurniture.webp";
import p11Img from "../assets/projects/cookpaintardmore.webp";

import ButtonWhite from "../components/buttons/ButtonWhite";
import Paragraph from "../components/Paragraph";
import { FaGithub } from "react-icons/fa6";

interface CodeLink {
id: number,
icon: ReactElement,
link: string
}

interface Spotlight {
id: number,
animation: string,
projectName: string,
projectLink: string,
liveLink: string,
projectDexcription: string,
codelinks: CodeLink[] | undefined,
isActive: boolean,
isApp: boolean,
}

type Props = {
opacityStart: number,
id: string
}
const SkillsSection = (props: Props) => {

const initialProjects = [

    {
        id: 1,
        animation: 'animate-growProjectThree',
        projectName: "Guituner",
        projectLink: p9Img,
        liveLink: "https://guituner.netlify.app/",
        projectDexcription: "Musicians gather round and test it out - Using ReactJS, TypeScript (no 'any') , Tailwind, Redux, Web Audio API. Lets get tuned.",
        codelinks: [{
            id: 2,
            icon: <FaGithub />,
            link: 'https://github.com/jacobEliasMoya/ReactGuitarTuner'
        },],
        isActive: false,
        isApp: true,
    },
    {
        id: 2,
        animation: 'animate-growProjectOne',
        projectName: "Qr Code Generator",
        projectLink: p1Img,
        liveLink: "https://qrclone.netlify.app/",
        projectDexcription: "My passion project uses React, TypeScript, Tailwind, Redux, and libraries for color selection and canvas-to-image downloads.",
        codelinks: [{
            id: 0,
            icon: <FaGithub />,
            link: 'https://github.com/jacobEliasMoya/QR-Clone'
        }],
        isActive: false,
        isApp: true,
    },
    {
        id: 3,
        animation: 'animate-growProjectTwo',
        projectName: "Pokedex v2",
        projectLink: p2Img,
        liveLink: "https://main--pokedex-vmax.netlify.app/",
        projectDexcription: "My kids' love for Pokémon inspired me to create a more robust second version of my Pokédex, now built with Bootstrap. ",
        codelinks: [{
            id: 1,
            icon: <FaGithub />,
            link: 'https://github.com/jacobEliasMoya/Pokedex-TypeScript'
        }],
        isActive: false,
        isApp: true,


    },
    {
        id: 4,
        animation: 'animate-growProjectThree',
        projectName: "Smith Insurance",
        projectLink: p3Img,
        liveLink: "https://insurancesic.com/",
        projectDexcription: "Welcome to Smith Insurance, your reliable partner for comprehensive insurance solutions in Pagosa Springs, CO, and beyond.",
        codelinks: undefined,
        isActive: false,
        isApp: false,
    },
    {
        id: 5,
        animation: 'animate-growProjectFourNoDelay',
        projectName: "Cook Paint & Home",
        projectLink: p11Img,
        liveLink: "https://cookpaintardmore.com/",
        projectDexcription: "Welcome to Cook Paint and Home Accents, where we help homeowners and businesses transform their spaces.",
        codelinks: undefined,
        isActive: false,
        isApp: false,
    },
    {
        id: 6,
        animation: 'animate-growProjectTwoNoDelay',
        projectName: "Ocean Drive Designs",
        projectLink: p6Img,
        liveLink: "https://oceandrivedesigns.com/",
        projectDexcription: "Ocean Drive Designs has been a premiere provider of high-end turnkey residential and hospitality interiors across the globe.",
        codelinks: undefined,
        isActive: false,
        isApp: false,
    },
    {
        id: 7,

        animation: 'animate-growProjectFourNoDelay',
        projectName: "Gallery Furniture",
        projectLink: p10Img,
        liveLink: "https://mygalleryfurniture.com/",
        projectDexcription: "Proudly serving the Medford, NY community and beyond for over 40 years with exceptional service and unbeatable prices. ",
        codelinks: undefined,
        isActive: false,
        isApp: false,

    },
    {
        id: 8,
        animation: 'animate-growProjectFourNoDelay',
        projectName: "American Pride ",
        projectLink: p4Img,
        liveLink: "https://americanpridesecurity.net/",
        projectDexcription: "American Pride Security Services Inc. isn’t your average security company we're a trusted leader in security and protection.",
        codelinks: undefined,
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

const [spotlight, setSpotlight] = useState<Array<Spotlight>>()
const [containerWidth, setContainerWidth] = useState<number>();
const [dragBoundsLeft, setDragBoundsLeft] = useState<number>();


useEffect(() => {
    // setting spotlight
    setSpotlight(initialProjects)
}, [])

useEffect(() => {
    setContainerWidth(document.getElementById("outer-scroll")?.offsetWidth)
}, [spotlight])

useEffect(() => {
    if (containerWidth) {
        let x: any = document.getElementById("drag-item")?.offsetWidth;
        x && containerWidth ? setDragBoundsLeft(containerWidth - x) : '';
    }
}, [containerWidth])

return (

    <section id={props.id} className="z-10 relative origin-left w-full flex justify-start flex-wrap flex-col overflow-hidden mx-auto transition-all ease-out duration-300  ">

        <Draggable
            axis="x"
            cancel=".cancel-me-now"
            bounds={{ right: 0, left: dragBoundsLeft }}
        >
            <div id="drag-item" className=" mt-12 md:mt-16 gap-8 z-10 min-w-full md:w-max h-auto mx-auto justify-self-end flex justify-start items-start pt-3 px-4 ">
                {/* mapping out projects, no need to fetch anything */}
                {spotlight ? spotlight
                    // .filter((item=>item.id < startingArrNum))
                    .map((item) => (

                        <div key={`drag-${item.id}`} id={`${item.id}`} className={` bg-white group rounded-xl text-center w-[450px] max-w-[75vw] relative transition-all duration-200  font-ultra grid grid-cols-4 gap-4 `}>

                            <H3element additionalClasses={'font-retro text-5xl transition-all tracking-widest group-hover:text-blue-600 text-blue-200 md:text-blue-200 bg-white flex p-4'} headerText={`${item.id}`} spanClasses={''} spanText={''} />
                                <H3element additionalClasses={'relative transition-all tracking-widest'} headerText={item.projectName} spanClasses={''} spanText={''} />

                                {item.codelinks?.map((item => (
                                    <a key={`codelinks-${item.id}`} className="group-hover:-top-9 flex items-center justify-start gap-2 absolute left-0 -top-7   md:cursor-none transition-all  active:scale-105  md:hover:-translate-y-1 hover:drop-shadow-md cancel-me-now text-blue-200 group-hover:text-blue-950" href={item.link} target="_blank" rel="noopener noreferrer"><span className=" text-3xl md:text-4xl " >{item.icon}</span> View Git</a>
                                )))}

                                
                            <div className="rounded col-span-full duration-500 bg-left transition-all bg-cover w-full min-h-72 translate brightness-90 bg-opacity-0 "
                                style={{
                                    backgroundImage: `url(${item.projectLink})`,
                                }}
                            ></div>


                            <div className="col-span-4  duration-200 transition-all w-full p-0 flex flex-col items-center justify-between relative z-10 h-3/6" >

                                <Paragraph text={item.projectDexcription} classes={' md:text-left text-sm md:text-md md:text-lg p-4'} />

                                <ButtonWhite buttonText={item.isApp ? `View App` : `View Website`} additionalClasses={"!rounded text-sm md:text-md lg:text-lg   !w-full   z-10 !bg-blue-600  !text-white !py-3  top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-blue-600 text-white p-2 px-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-blue-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+3px)] hover:after:h-[calc(1.5rem+3px)]  active:after:h-[calc(1rem+3px)] active:after:-bottom-4 after:transition-all after:ease transform after:transform"} buttonLink={item.liveLink ? item.liveLink : ''} newWindow={true} clickHandle={undefined} />


                            </div>

                        </div>
                    )) : null}
            </div>
        </Draggable>
    </section>
)
}

export default SkillsSection