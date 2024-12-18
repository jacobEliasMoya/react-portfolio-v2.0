import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import H2element from '../components/headers/H2element'
import Paragraph from '../components/Paragraph'

const CodingLanguages = () => {



  return (
 
    <section className="transition-all w-full bg-white flex justify-center flex-wrap flex-col overflow-hidden py-10 ">
        <div className="w-full flex gap-8 px-8   relative z-10">

            <div className="flex flex-col text-center" >            
                <H2element additionalClasses={'text-zinc-800 text-5xl md:text-6xl lg:text-8xl flex flex-col text-left opacity-0 animate-fall relative -top-[200px]'} headerText={"Tech -"} spanClasses={'text-red-600 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 opacity-0 animate-fallOne relative -top-[200px]'} spanText={'Stack'}/>
            </div>

            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-600 w-full opacity-0 animate-fallTwo relative -top-[200px]"></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-zinc-800 w-full opacity-0 animate-fallThree relative -top-[200px]"></div>
            </div>
        </div>

        <div className="w-full flex px-8 py-10 md:py-20 font-ultra text-zinc-800  justify-between z-10 opacity-0 animate-fallFour relative -top-[200px]">
            
            <Paragraph text={"I utilize HTML5, CSS, SCSS, Tailwind, React, WordPress to create. Adobe Suite for the artsy stuff, and Figma for design."} classes={'!text-balance text-md lg:text-2xl text-center w-full mx-auto rounded-2xl'}/>

        </div>
                
        <div className="w-full gap-4 md:gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-wrap px-8 text-white  relative z-10 text-5xl lg:text-9xl">
            <div className="opacity-0 animate-fallFive relative -top-[200px] flex items-center justify-center gap-4 bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all " >
                <FaHtml5/>
            </div>

            <div className="opacity-0 animate-fallSix relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaBootstrap/>
            </div>

            <div className="opacity-0 animate-fallSeven relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaCss3Alt/>
            </div>

            <div className="opacity-0 animate-fallEight relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaSass/>
            </div>

            <div className="opacity-0 animate-fallNine md:animate-fallTwelve relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaJs />
            </div>

            <div className="opacity-0 animate-fallTen1 md:animate-fallEleven relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaReact/>
            </div>

            <div className="opacity-0 animate-fallEleven md:animate-fallTen1 relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaWordpress/>
            </div>

            <div className="opacity-0 animate-fallTwelve md:animate-fallNine relative -top-[200px] flex items-center justify-center bg-red-600 p-4 rounded-2xl md:hover:-translate-y-2 md:hover:drop-shadow-md transition-all" >
                <FaFigma/>
            </div>

        </div>


    </section>
    )
}

export default CodingLanguages