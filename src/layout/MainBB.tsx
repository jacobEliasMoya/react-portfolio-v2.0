import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.png"

// type Props = {}

const MainBB = () => {
    
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

            <div className="relative -bottom-10 md:-bottom-0 animate-grow [scale:0] opacity-0 bg-gradient-to-tr from-zinc-950 to bg-zinc-700 rounded-full w-32 h-32 m-w-36 m-h-36 md:w-52 md:h-52 md:m-w-52 md:m-h-52 lg:w-60 lg:h-60 lg:m-w-60 lg:m-h-60"></div>
            
            <div className="transition-all z-10 rounded-full md:left-1/2 md:-translate-x-1/2 relative md:absolute bg-red-500 md:w-[0%] md:animate-expand md:h-24 w-12 h-[0rem] animate-expandOne flex justify-center ">
                
                <div className="opacity-0 cursor-pointer active:scale-105 animate-fallTen -top-[200%] shadow-[0em_0.25em_rgba(0,0,0,0.15)] hover:shadow-[0em_1em_rgba(0,0,0,0.15)] transition-all ease  bg-white rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute -translate-y-[50%] hover:-translate-y-[calc(50%+15px)]  hover:drop-shadow-lg flex items-center justify-center ">
                    <div className="bg-red-600 rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center animate-wiggle">
                        <img src={jakeCartoon} alt="jake" className="w-1/2 pointer-events-none select-none"/>
                    </div>
                </div>

            </div>

            <div className="relative -top-10 md:-top-0 animate-growOne [scale:0] opacity-0  bg-gradient-to-tr from-zinc-950 to bg-zinc-700 rounded-full w-32 h-32 m-w-36 m-h-36 md:w-52 md:h-52 md:m-w-52 md:m-h-52 lg:w-60 lg:h-60 lg:m-w-60 lg:m-h-60"></div>

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