import H2element from '../components/headers/H2element'

const Contact = () => {
  return (
    <section id="contact" className="transition-all rounded-lg mt-8 mt:my-20 bg-red-600 min-h-screen flex justify-between flex-wrap flex-col overflow-hidden pb-7 md:pb-12 pt-6 md:pt-10 px-6 md:px-8">
        <div className="w-full flex gap-8 relative z-30 bg-inherit">
            <div className="flex flex-col" >            
                <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Lets'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Talk'}/>
            </div> 
            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full "></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
            </div>
        </div>

        <div className="w-full flex gap-8 pt-4">
        
            <div className="flex flex-col gap-2 md:gap-4 w-full justify-center"> 
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full"></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
            </div>

            <div className="flex flex-col">            
                <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-right '} headerText={"MSG"} spanClasses={' text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14'} spanText={'Me.'}/>
            </div>
        </div>

    </section>      
  )
}

export default Contact