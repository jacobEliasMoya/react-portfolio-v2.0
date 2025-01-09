import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.png"
import { useEffect } from "react"
import Paragraph from "../components/Paragraph"
import Socials from "../components/Socials"

// type Props = {}

const MainBB = () => {

    useEffect(()=>{
    },[])

return (
<section id="home" className='gap-5 transition-all w-full min-h-screen  bg-red-600 flex items-center justify-between p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col  '>
    <div className="w-full flex gap-8 relative z-30 bg-inherit">
        <div className="flex flex-col" >            
            <H1element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Design'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Develop'}/>
        </div> 
        <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
            <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full "></div>
            <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
        </div>
    </div>

    <div className="w-full text-center flex justify-self-start items-center flex-col md:flex-row  ">

        <div className="transition-all z-10 rounded-full relative w-full flex justify-center items-center flex-col md:flex-row opacity-100 p-4 gap-6  md:gap-12">

            <div className="w-full md:gap-2 lg:gap-4 flex items-center justify-center flex-row flex-wrap text-white tracking-widest text-sm lg:text-lg  font-ultra !text-balance order-2 md:order-1">

                <Paragraph text={"Frontend."} classes={'w-full md:w-max'}/>
                <Paragraph text={"ReactJS."} classes={'w-full md:w-max'}/> 
                <Paragraph text={"California."} classes={'w-full md:w-max'}/>                

            </div>

            <div className="shadow-[0em_0.25em_rgba(0,0,0,0.15)] hover:shadow-[0em_1em_rgba(0,0,0,0.15)] transition-all ease  bg-red-500  rounded-full min-w-52 min-h-52 md:min-w-80 md:min-h-80 lg:min-w-96 lg:min-h-96 relative md:hover:-translate-y-[15px] flex justify-center items-center z-10 group order-1 md:order-2">
                
                <div className=" bg-white rounded-full w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center animate-wiggle relative ">
                    
                    <div className="absolute z-20 bg-white p-8 text-xl md:text-2xl lg:text-3xl -top-20 md:left-56 w-max rounded-lg before:content-[''] before:absolute before:w-0 before:h-0 before:top-full before:border-[20px] before:border-transparent before:border-t-white   scale-0 group-hover:scale-100 transition-all ">
                       I Love Code
                    </div>
                    
                    <img src={jakeCartoon} alt="jake" className="w-1/2 pointer-events-none select-none"/>

                </div>
            </div>

            <div className="w-full gap-4 lg:gap-12 flex items-center justify-center flex-row flex-wrap order-2 md:order-3 text-white text-3xl md:text-4xl ">
                <Socials additionalClasses={undefined}/>
            </div>

        </div>
    </div>

    <div className="w-full flex gap-8 pt-4">
    
        <div className="flex flex-col gap-2 md:gap-4 w-full justify-center"> 
            <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full"></div>
            <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
        </div>

        <div className="flex flex-col">            
            <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-right '} headerText={"Jake"} spanClasses={' text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Moya'}/>
        </div>
    </div>

</section>
)
}

export default MainBB