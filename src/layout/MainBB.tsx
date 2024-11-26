import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.png"

// type Props = {}

const MainBB = () => {
    
  return (
    <section className='transition-all w-full min-h-screen  bg-red-600 flex items-center justify-between py-4 px-8 flex-wrap flex-col'>
        <div className="w-full flex gap-8 ">
            <div className="flex flex-col">            
                <H1element additionalClasses={'text-4xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Design'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Develop'}/>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-2/5 lg:h-3/6 bg-white w-full"></div>
            </div>
        </div>

        <div className="w-full text-center flex justify-between items-center flex-col md:flex-row ">

            <div className="relative -bottom-10 bg-zinc-800 rounded-full w-36 h-36 m-w-36 m-h-36 md:w-52 md:h-52 md:m-w-52 md:m-h-52 lg:w-60 lg:h-60 lg:m-w-60 lg:m-h-60"></div>
            
            <div className="z-10 md:left-1/2 md:-translate-x-1/2 relative md:absolute bg-red-500   md:w-5/6 md:h-24 w-12 h-96 flex justify-center ">
                <div className="transition-all  bg-white rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute top-1/2 -translate-y-1/2 flex items-center justify-center ">
                    <div className="bg-red-600 rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                        <img src={jakeCartoon} alt="jake" className="w-1/2 pointer-events-none"/>
                    </div>
                </div>
            </div>

            <div className="relative -top-10 bg-zinc-800 rounded-full w-36 h-36 m-w-36 m-h-36 md:w-52 md:h-52 md:m-w-52 md:m-h-52 lg:w-60 lg:h-60 lg:m-w-60 lg:m-h-60"></div>

        </div>

        <div className="w-full flex gap-8">
      
            <div className="flex flex-col gap-2 md:gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-2/5 lg:h-3/6 bg-white w-full"></div>
            </div>

            <div className="flex flex-col">            
                <H2element additionalClasses={'text-4xl md:text-6xl lg:text-8xl flex flex-col text-right '} headerText={"Jake"} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Moya'}/>
            </div>
        </div>
 
    </section>
  )
}

export default MainBB