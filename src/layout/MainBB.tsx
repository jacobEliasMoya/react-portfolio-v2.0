import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.png"

// type Props = {}

const MainBB = () => {
    
  return (
    <section className='transition-all w-full min-h-screen flex-col bg-red-600 flex items-center justify-between py-4 px-8'>
        <div className="w-full flex gap-8 ">
            <div className="flex flex-col">            
                <H1element additionalClasses={'text-3xl sm:text-4xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Design'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Develop'}/>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-2/5 lg:h-3/6 bg-white w-full"></div>
            </div>
        </div>

        <div className="w-full text-center flex justify-between items-center ">
            <div className="bg-zinc-800 rounded-full w-48 h-48"></div>
            <div className="bg-red-500 w-4/6 h-20 max-h-20 flex justify-center relative">
                <div className="bg-white rounded-full w-72 h-72 absolute top-1/2 -translate-y-1/2 flex items-center justify-center ">
                    <div className="bg-red-600 rounded-full w-3/4 h-3/4 flex items-center justify-center">
                        <img src={jakeCartoon} alt="jake" className="w-1/2"/>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-800 rounded-full w-48 h-48"></div>
        </div>

        <div className="w-full flex gap-8">
      
            <div className="flex flex-col gap-2 md:gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-2/5 lg:h-3/6 bg-white w-full"></div>
            </div>

            <div className="flex flex-col">            
                <H2element additionalClasses={'text-3xl sm:text-4xl md:text-6xl lg:text-8xl flex flex-col text-right '} headerText={"Jake"} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Moya'}/>
            </div>
        </div>
 
    </section>
  )
}

export default MainBB