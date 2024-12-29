import H2element from "../components/headers/H2element"
import Paragraph from "../components/Paragraph"

const ProfessionalExperience = () => {
    return (
        <section className="transition-all w-full bg-white flex justify-start flex-wrap flex-col overflow-hidden   p-6 md:p-8 py-6 md:py-10">
            <div className="w-full flex gap-8 relative z-10">
                
                <div className="flex flex-col" >            
                    <H2element additionalClasses={'text-red-600 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={"Career"} spanClasses={'text-zinc-800 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'history'}/>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full "></div>
                </div>
            </div>

            <div className="w-full flex-col gap-8 flex py-10 md:py-14 lg:py-18 font-ultra text-zinc-800 text-center md:text-left justify-between z-10">
                
                <Paragraph text={"I am just using some text for now, will fill in later and add a few different elements later."} classes={' text-md md:text-lg lg:text-xl xl:text-2xl  w-full mx-auto rounded-2xl'}/>

                <Paragraph text={"I am just using some text for now, will fill in later and add a few different elements later."} classes={' text-md md:text-lg lg:text-xl xl:text-2xl  w-full mx-auto rounded-2xl'}/>

                <Paragraph text={"I am just using some text for now, will fill in later and add a few different elements later."} classes={' text-md md:text-lg lg:text-xl xl:text-2xl  w-full mx-auto rounded-2xl'}/>

            </div>
                

        </section>
    )
}

export default ProfessionalExperience