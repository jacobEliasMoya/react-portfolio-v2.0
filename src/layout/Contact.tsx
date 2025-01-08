import H2element from '../components/headers/H2element'
import MainForm from '../forms/MainForm'

const Contact = () => {
  return (
    <section id="contact" className="transition-all rounded-lg mt-8 mt:my-20 bg-red-600 min-h-96 md: gap-10 md:gap-20 flex justify-between flex-wrap flex-col overflow-hidden pt-6 md:pt-10 px-6 md:px-8 pb-14 md:pb-0">
        <div className="w-full flex gap-8 relative z-30 bg-inherit">
            <div className="flex flex-col" >            
                <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Lets'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Talk'}/>
            </div> 
            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full "></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 pb-6">
          <MainForm/>
        </div>

        <div className="grid lg:grid-cols-4 ">
          <div className="bg-red-500 p-6 col-span-1 rounded-full rounded-b-none hidden"></div>
          <div className="bg-red-500 p-6 col-span-1 col-start-4 rounded-full rounded-b-none hidden"></div>
        </div>
        
    </section>      
  )
}

export default Contact