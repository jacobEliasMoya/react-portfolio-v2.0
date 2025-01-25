import { useEffect, useState } from "react"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import varepLogo from "../assets/varepMainWhite-300x109.webp"
import biziqLogo from "../assets/biziq-logo.webp"
import ReactVisibilitySensor from "react-visibility-sensor"

interface Experience{
    companyIcon: string,
    companyName:string,
    companyRole:string,
    companyStartDate:string,
    companyEndDate:string | undefined,
    smallExcerpt: string,
    companySkills: string[],
}

interface Education {
    educationName:string,
    educationDegree:string,
    educationStartDate:string,
    educationEndDate:string
}

interface Data {
    experience : Experience,
    education : Education,
    certifications: string[]
}


const ProfessionalExperience = () => {
    
    const resumeData = [{

        experience: {
            companyIcon: biziqLogo,
            companyName:'BIZIQ',
            companyRole:'Web Developer II',
            companyStartDate:'10/2022',
            companyEndDate: undefined,
            smallExcerpt: 'As Web Developer II, I’ve excelled in creating SEO-driven & accessible websites. All while enhancing UI/UX for high conversions, and growing my skills for team success.'
            ,
            companySkills: ['UI/UX','Mobile','SEO','RackSpace','Accessibility','Plugins','Themes','Migrations'],
        },

        education: {
            educationName:'University Of Phoenix',
            educationDegree:'Bachelors of Scient - IT',
            educationStartDate:'August 2024',
            educationEndDate:'August 2017',
        },

        certifications: [ 'Cert1' , 'Cert2', 'Cert3' ]

    },
    {

        experience: {
            companyIcon:biziqLogo,
            companyName:'BIZIQ',
            companyRole:'Web Developer I',
            companyStartDate:'10/2021',
            companyEndDate: '10/2022',
            smallExcerpt: 'While working remotely, I developed 100+ websites, earning accolades for quality, clear communication, and client-focused execution.',
            companySkills: ['UI/UX','Mobile','SEO','RackSpace','Accessibility','Plugins','Themes','Migrations'],
        },

        education: {
            educationName:'University Of Phoenix',
            educationDegree:'Bachelors of Scient - IT',
            educationStartDate:'August 2024',
            educationEndDate:'August 2017',
        },

        certifications: [ 'Cert1' , 'Cert2', 'Cert3' ]

    },
    {

        experience: {
            companyIcon:varepLogo,
            companyName:'VAREP',
            companyRole:'JR Web Developer',
            companyStartDate:'10/2019',
            companyEndDate: '10/2021',
            smallExcerpt: 'Led the transition from Joomla to WordPress, collaborating with designers to deliver a visually striking, functional website with seamless execution.',
            companySkills: ['UI/UX','Mobile','Wireframing','RackSpace','Migrations','Deadlines','FTP','Hosting'],
        },

        education: {
            educationName:'University Of Phoenix',
            educationDegree:'Bachelors of Scient - IT',
            educationStartDate:'August 2024',
            educationEndDate:'August 2017',
        },
        certifications: [ 'Cert1' , 'Cert2', 'Cert3' ]
    }
]

    const [initialResume,setInitialResume] = useState<Data[]>(); 

    useEffect(()=>{
        setInitialResume(resumeData)
    },[])


    const [isVisible,setIsVisible] = useState(false);
    const [scrollBottom,setScrollBottom] = useState<number>(0);
    const [animationStart, setAnimationStart] = useState<number>(120)
    const [opacityStart, setOpacityStart] = useState<number>(0)

    const inView = (e:boolean) =>{
        e ? setIsVisible(true) : setIsVisible(false);
    }

    const detectScrollDirection = () => {
        const currentScrollTop = window.scrollY; // Get current scroll position
        const direction = currentScrollTop > scrollBottom ? 'down' : 'up'; // Compare with the last position
        setScrollBottom(currentScrollTop); // Update the last position
        return direction;
    };

    const  setIt = (direction:string) =>{
        if(direction === 'up'  && isVisible){
            let x = document.querySelector('#about');
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
        
        <section id="about" className="relative origin-right w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto py-6 md:py-10 [box-shadow:_.5em_.5em_#960707] md:[box-shadow:_1em_1em_#960707] transition-all ease-linear duration-0"        
            style={{
                bottom:`-${animationStart && animationStart >= 0 ? animationStart : 0}px`,
                opacity:opacityStart
            }}
        >

            <div className="w-full flex gap-8 px-6 md:px-8 relative z-10">
            
                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Career"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'history'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full "></div>
                </div>
            </div>

            <div className="w-full gap-10 md:gap-16 py-10 md:py-14 lg:py-18 font-ultra text-center md:text-left  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto px-6 md:px-8 relative z-10">

                {initialResume?.map((item)=>(
                    <div className="">
                        <div className="items-start grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full md:col-span-3 ">
                            <H3element additionalClasses={'col-span-full font-ultra text-2xl md:text-[1.8em] hidden md:flex flex-col text-red-600  bg-inherit '} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>

                            <div className=" col-span-full gap-2 md:gap-5 rounded grid grid-cols-5">

                                <div className="rounded col-span-full md:col-span-1 gap-4 flex items-center justify-center bg-zinc-800 p-4 w-auto">
                                    <img src={item.experience.companyIcon} alt='' className="md:-rotate-90  min-w-28 w-3/12 md:w-full invert brightness-0"/>
                                </div>

                                <H3element additionalClasses={'col-span-full font-ultra text-xl flex md:hidden flex-col text-red-600 bg-inherit mt-2 '} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>

                                <div className="grid grid-cols-1 col-span-full md:col-span-4 gap-2 items-start justify-end flex-col mt-0">

                                    <p className=" grid text-zinc-700  items-center md:items-start justify-center md:justify-start gap-8  md:text-xl">{item.experience.companyStartDate} - {item.experience.companyEndDate ? item.experience.companyEndDate : 'Present'}</p>

                                    <p className="text-sm md:text-md md:text-lg ">{item.experience.smallExcerpt}</p>

                                    <ul className="grid gap-2 gap-y-4  md:gap-4 grid-cols-2 col-span-full text-sm lg:text-md capitalize mt-2 mb-2">
                                        {item.experience.companySkills.map((item)=>(
                                            <li className=' top-0  hover:-top-4 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-red-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] after:transition-all after:ease transform after:transform p-3'>  {item}</li>
                                        ))}
                                    </ul>

                                </div>

                            </div>
                        </div>     
                    </div>
                ))}
            </div>
        </section>

        </ReactVisibilitySensor>

    )
}

export default ProfessionalExperience