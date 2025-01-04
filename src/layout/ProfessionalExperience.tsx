import { useEffect, useState } from "react"
import H2element from "../components/headers/H2element"
import H3element from "../components/headers/H3element"
import Paragraph from "../components/Paragraph"
import H4element from "../components/headers/H4element"


interface Experience{
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
            companyIcon:'string',
            companyName:'BIZIQ - pt.2',
            companyRole:'Web Developer II',
            companyStartDate:'October 2022',
            companyEndDate: undefined,
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo',
            companySkills: ['skill 1','skill 2','skill 3'],
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
            companyIcon:'string',
            companyName:'BIZIQ - pt.1',
            companyRole:'Web Developer I',
            companyStartDate:'October 2021',
            companyEndDate: 'October 2022',
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo',
            companySkills: ['skill 1','skill 2','skill 3'],
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
            companyIcon:'string',
            companyName:'VAREP',
            companyRole:'JR Web Developer',
            companyStartDate:'October 2019',
            companyEndDate: undefined,
            smallExcerpt: 'Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo Loving it wordpress, the works woohoo',
            companySkills: ['skill 1','skill 2','skill 3'],
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
        <section id="about" className="transition-all w-full min-h-screen bg-white flex justify-start flex-wrap flex-col overflow-hidden   p-6 md:p-8 py-6 md:py-10">
            <div className="w-full flex gap-8 relative z-10">
                
                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Career"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'history'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full "></div>
                </div>
            </div>

            <div className="w-11/12 gap-8 py-10 md:py-14 lg:py-18 font-ultra text-white text-center z-10 grid grid-cols-4  mx-auto">

                {initialResume?.map((item)=>(

                    <div className="odd:bg-red-600 even:bg-red-700 rounded-lg py-6 md:py-10  overflow-hidden !pt-0 col-span-3 odd:col-start-2 even:col-start-1 grid">
                        
                        <H3element additionalClasses={'font-ultra text-3xl md:text-4xl flex flex-col  col-span-2 bg-white text-red-700  p-4'} headerText={item.experience.companyName} spanClasses={undefined} spanText={undefined}/>
                       
                        <H4element additionalClasses={' mt-4 font-ultra text-2xl md:text-4xl flex flex-col  col-span-2 bg-inherit   px-4 py-2 md:py-4 rounded-t-lg'} headerText={item.experience.companyRole} spanClasses={undefined} spanText={undefined}/>

                        <div className="w-full  items-start grid grid-cols-1 md:grid-cols-2  pt-4  px-8 md:pt-2 pb-0">

                                <p className="mb-4 col-span-2">{item.experience.smallExcerpt}</p>

                                <p className="flex items-center justify-center h-full gap-8 col-span-2 md:col-span-1">{item.experience.companyStartDate} - {item.experience.companyEndDate ? item.experience.companyEndDate : 'Still Kickin Butt'}</p>

                                <ul className="columns-3 text-center py-5">
                                    {item.experience.companySkills.map((item)=>(
                                        <li className="p-2 bg-white text-zinc-800 rounded">{item}</li>
                                    ))}
                                </ul>
                        </div>                     
                    </div>

                ))}

            </div>
                

        </section>
    )
}

export default ProfessionalExperience