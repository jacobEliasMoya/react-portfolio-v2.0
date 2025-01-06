import { useEffect, useState } from "react"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import H4element from "../components/headers/H4element"
import varepLogo from "../assets/VAREP logo.webp"
import biziqLogo from "../assets/biziq-logo.webp"

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
            companyStartDate:'October 2022',
            companyEndDate: undefined,
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo ',
            companySkills: ['skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3'],
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
            companyStartDate:'October 2021',
            companyEndDate: 'October 2022',
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo ',
            companySkills: ['skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3'],
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
            companyStartDate:'October 2019',
            companyEndDate: 'October 2021',
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo ',
            companySkills: ['skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3','skill 1','skill 2','skill 3'],
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
        <section id="about" className="transition-all w-11/12 rounded-lg my-8 md:my-20 bg-white flex justify-start flex-wrap flex-col overflow-hidden mx-auto py-6 md:py-10 ">
                <div className="w-full flex gap-8 px-6 md:px-8 relative z-10">
                
                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Career"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'history'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full "></div>
                </div>
            </div>

            <div className="w-full gap-10 md:gap-20 py-10 md:py-14 lg:py-18 font-ultra text-center md:text-left  grid grid-cols-4 mx-auto px-6 md:px-8 relative z-10">

                {initialResume?.map((item)=>(
                    <div className="col-span-full grid grid-cols-1 gap-8 ">
                        <div className="items-start grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full md:col-span-3 ">

                            <div className=" col-span-full gap-4 md:gap-8 rounded grid grid-cols-8">

                                <div className="rounded col-span-full md:col-span-1 gap-4 flex items-center justify-center bg-zinc-200 ">
                                    <img src={item.experience.companyIcon} alt='' className="p-4 md:scale-110  md:-rotate-90  min-w-28 w-5/12 md:w-full "/>
                                </div>

                                <div className="grid grid-cols-1 col-span-full md:col-span-7 gap-4 items-start justify-end flex-col">

                                    <H4element additionalClasses={' font-ultra text-2xl md:text-32xl flex flex-col text-red-600  bg-inherit '} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>


                                    <p className=" grid text-zinc-5600  items-center md:items-start justify-center md:justify-start gap-8  md:text-xl">{item.experience.companyStartDate} - {item.experience.companyEndDate ? item.experience.companyEndDate : 'Still Kickin Butt'}</p>

                                    <p className="">{item.experience.smallExcerpt}</p>

                                    <ul className="grid gap-2 grid-cols-2 md:grid-cols-4 col-span-full  text-sm md:text-md xl:text-lg capitalize mt-2">
                                        {item.experience.companySkills.map((item)=>(
                                            <li className="flex flex-col md:flex-row items-center justify-start md:gap-2 bg-red-600 text-white p-2 px-3 rounded tracking-wider">{item}</li>
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