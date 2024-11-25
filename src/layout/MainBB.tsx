// import H1element from "../components/headers/H1element"

import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"

// type Props = {}

const MainBB = () => {
    
  return (
    <section className='w-full min-h-screen flex-col bg-red-600 flex items-center justify-between py-4 px-8'>
        <div className="w-full flex gap-8 ">
            <div className="flex flex-col">            
                <H1element additionalClasses={'text-9xl flex flex-col text-left '} headerText={'Design'} spanClasses={'text-white -mt-20'} spanText={'Develop'}/>
            </div>
            <div className="flex flex-col gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-3/5 bg-white w-full"></div>
            </div>
        </div>

        <div className="w-full text-center"></div>

        <div className="w-full flex gap-8">
      
            <div className="flex flex-col gap-4 w-full justify-center">
                <div className="h-1/6 bg-zinc-800 w-full"></div>
                <div className="h-3/5 bg-white w-full"></div>
            </div>

            <div className="flex flex-col">            
                <H2element additionalClasses={'text-9xl flex flex-col text-right '} headerText={"Jake"} spanClasses={'text-white -mt-20'} spanText={'Moya'}/>
            </div>
        </div>
 
    </section>
  )
}

export default MainBB