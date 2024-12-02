import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.png"
import { FaEnvelope, FaGithub, FaMobile } from "react-icons/fa"
import { useEffect } from "react"
import { FaLinkedin } from "react-icons/fa6"

// type Props = {}

const MainBB = () => {

    useEffect(()=>{

    },[])

return (
<section className='transition-all w-full min-h-screen  bg-red-600 flex items-center justify-between py-4 px-8 flex-wrap flex-col overflow-hidden'>
    <div className="w-full flex gap-8 ">
        <div className="flex flex-col" >            
            <H1element additionalClasses={'text-4xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[400px]'} headerText={'Design'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[400px]'} spanText={'Develop'}/>
        </div>
        <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
            <div className="rounded md:rounded-xl h-1/6 bg-zinc-800 w-full opacity-0 animate-fallTwo relative -top-[400px]"></div>
            <div className="rounded md:rounded-xl h-2/5 lg:h-3/6 bg-white w-full opacity-0 animate-fallThree relative -top-[400px]"></div>
        </div>
    </div>

    <div className="w-full text-center flex justify-between items-center flex-col md:flex-row ">

        <div className="transition-all z-10 rounded-full md:left-1/2 md:-translate-x-1/2 relative md:absolute bg-red-500 md:w-[0%] md:animate-expand md:h-24 w-16 h-[0rem] animate-expandOne flex justify-between items-center flex-col md:flex-row opacity-100 p-0">

            <div className="w-2/3 flex items-center justify-start gap-4 flex-col md:flex-row opacity-[inherit]">

                <FaMobile className="[scale:0] animate-grow text-4xl md:text-5xl  text-white transition-all cursor-pointer active:scale-110  md:hover:-translate-y-2 md:hover:drop-shadow-md"/> 

                <FaEnvelope className="[scale:0] animate-growOne text-4xl md:text-5xl lg:text-7xl text-white transition-all cursor-pointer active:scale-110  md:hover:-translate-y-2 md:hover:drop-shadow-md"/> 
            </div>

            <div className="opacity-0 cursor-pointer active:scale-105 animate-fallTen -top-[200%] shadow-[0em_0.25em_rgba(0,0,0,0.15)] hover:shadow-[0em_1em_rgba(0,0,0,0.15)] transition-all ease  bg-red-500  rounded-full w-72 h-72 md:w-80 md:h-80 lg:min-w-96 lg:min-h-96 absolute -translate-y-[50%] -translate-x-[50%] md:hover:-translate-y-[calc(50%+15px)] md:hover:drop-shadow-lg flex justify-center left-1/2 items-center z-10 group ">
                
                <div className="bg-white rounded-full w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center animate-wiggle relative ">
                    <div className="absolute z-20 bg-white p-8 text-3xl -top-20 left-52 w-max  rounded-lg before:content-[''] before:absolute before:w-0 before:h-0 before:top-full before:border-[20px] before:border-transparent before:border-t-white before:border-l-0 scale-0 group-hover:scale-100 transition-all ">
                        Learn More About Me
                    </div>
                    
                    <img src={jakeCartoon} alt="jake" className="w-1/2 pointer-events-none select-none"/>
                </div>
            </div>

            <div className="w-2/3 flex items-center justify-end gap-4 flex-col md:flex-row">
                <FaLinkedin className=" [scale:0] animate-growTwo  text-4xl md:text-5xl lg:text-7xl text-white transition-all cursor-pointer active:scale-110  md:hover:-translate-y-2 md:hover:drop-shadow-md "/> 

                <FaGithub className="[scale:0] animate-growThree  text-4xl md:text-5xl lg:text-7xl text-white transition-all cursor-pointer active:scale-110  md:hover:-translate-y-2 md:hover:drop-shadow-md"/> 
            </div>

        </div>
    </div>

    <div className="w-full flex gap-8 ">
    
        <div className="flex flex-col gap-2 md:gap-4 w-full justify-center"> 
            <div className="rounded md:rounded-xl h-1/6 bg-zinc-800 w-full opacity-0 animate-fallFour relative -top-[400px]"></div>
            <div className="rounded md:rounded-xl h-2/5 lg:h-3/6 bg-white w-full opacity-0 animate-fallFive relative -top-[400px]"></div>
        </div>

        <div className="flex flex-col">            
            <H2element additionalClasses={'opacity-0 text-4xl md:text-6xl lg:text-8xl flex flex-col text-right animate-fallSix relative -top-[400px]'} headerText={"Jake"} spanClasses={'opacity-0 animate-fallSeven relative -top-[400px] text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Moya'}/>
        </div>
    </div>

</section>
)
}

export default MainBB