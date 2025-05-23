import { useEffect, useState } from "react"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import varepLogo from "../assets/varepMainWhite-300x109.webp"
import biziqLogo from "../assets/biziq-logo.webp"

interface Experience{
    id:number
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
type Props = {
    opacityStart: number,
    id:string
}

const ProfessionalExperience = (props:Props) => {
    
    const resumeData = [{

        experience: {
            id:0,
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
            id:1,
            companyIcon:biziqLogo,
            companyName:'BIZIQ',
            companyRole:'Web Developer I',
            companyStartDate:'10/2021',
            companyEndDate: '10/2022',
            smallExcerpt: 'While working remotely, I developed 100+ websites, earning accolades for quality, clear communication, and client-focused execution in order to develop into Web Developer II',
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
            id:2,
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

 
    return (
         
        <section id={props.id} className="z-10 relative origin-right w-full rounded-3xl md:rounded-[3rem] bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto pt-10 pb-4 md:pb-10 transition-all ease-out  duration-300" >

            <div className="w-full flex gap-8 px-6 md:px-8 relative z-10">
            
                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-blue-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Career"} spanClasses={'text-blue-950 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'history'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-blue-600 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-blue-950 w-full "></div>
                </div>
            </div>

            <div className="w-full gap-10 md:gap-16 py-10 md:py-14 lg:py-18 font-ultra text-center md:text-left  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto px-6 md:px-8 relative z-10">

                {initialResume?.map((item)=>(
                    <div className=""  key={`exp-${item.experience.id}`}>
                        <div className="items-start grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full md:col-span-3 group ">
                            <H3element additionalClasses={'col-span-full font-ultra text-2xl md:text-[1.8em] hidden md:flex flex-colbg-inherit group-hover:text-blue-600 text-blue-200  '} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>

                            <div className=" col-span-full gap-2 md:gap-5 rounded grid grid-cols-5">

                                <div className="rounded-xl md:rounded-2xl col-span-full md:col-span-1 gap-4 flex items-center justify-center bg-blue-950 group-hover:bg-blue-900 p-4 w-auto ">
                                    <img src={item.experience.companyIcon} alt='' className="md:-rotate-90  min-w-28 w-3/12 md:w-full invert brightness-0"/>
                                </div>

                                <H3element additionalClasses={'col-span-full font-ultra text-xl flex md:hidden   flex-col group-hover:text-blue-600 text-blue-900 bg-inherit mt-2 '} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>

                                <div className="grid grid-cols-1 col-span-full md:col-span-4 gap-2 items-start justify-end flex-col mt-0">

                                    <p className=" grid text-blue-950  items-center md:items-start justify-center md:justify-start gap-8  md:text-xl">{item.experience.companyStartDate} - {item.experience.companyEndDate ? item.experience.companyEndDate : 'Present'}</p>

                                    <p className="text-sm md:text-md md:text-lg ">{item.experience.smallExcerpt}</p>

                                    <ul className="grid gap-2 gap-y-4  md:gap-4 grid-cols-2 col-span-full text-sm lg:text-md capitalize mt-2 mb-2">
                                        {item.experience.companySkills.map((item)=>(
                                            <li key={`exp-${item}`} className='  top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2 bg-blue-600 text-white p-3 rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-blue-700 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)]  active:after:h-[calc(1rem+1px)] active:after:-bottom-4 after:transition-all after:ease transform after:transform'>  {item}</li>
                                        ))}
                                    </ul>

                                </div>

                            </div>
                        </div>     
                    </div>
                ))}
            </div>
        </section>
 
    )
}

export default ProfessionalExperience