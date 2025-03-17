import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import jakeCartoon from "../assets/cartoon-jm.webp"
import { useEffect, useState } from "react"
import Paragraph from "../components/Paragraph"
import Socials from "../components/Socials"

type Props = {
    animationStart: number,
    opacityStart: number,
    id:string
}

const MainBB = (props:Props) => {

    const [jakeMessage, setJakeMessage]  = useState<string>();


    useEffect(()=>{
        setJakeMessage('Hi, I am Jake, a Frontend ReactJS Dev and Designer! ')
    },[jakeMessage])


    return (
        <section id={props.id} className='z-9 origin-bottom transition-all ease-out duration-300 w-full min-h-screen  bg-red-700 flex items-center justify-between p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl md:rounded-b-[3rem] relative'
            style={{
                bottom:`${props.animationStart && props.animationStart >= 0 ? props.animationStart  : '0'}px`
                }}
        >
            <div className="w-full flex gap-8 relative ">
                <div className="flex flex-col" >            
                    <H1element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Design'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-10 '} spanText={'Develop'}/>
                </div> 
                <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-950 w-full "></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
                </div>
            </div>

            <div className="w-full text-center flex justify-self-start items-center flex-col md:flex-row  ">
                <div className="transition-all z-10 rounded-full relative w-full flex justify-center items-center flex-col md:flex-row opacity-100 p-4 gap-6  md:gap-12">

                    <div className="w-full md:gap-2 lg:gap-4 flex items-center justify-center flex-row flex-wrap text-white tracking-widest text-sm lg:text-lg  font-ultra !text-balance order-2">
                        <Paragraph text={jakeMessage ? jakeMessage : ''} classes={'w-full md:w-11/12 font-ultra tracking-widest !text-balance'}/>
                    </div>

                    <div className="shadow-[0em_0.25em_rgba(0,0,0,0.15)] hover:shadow-[0em_1em_rgba(0,0,0,0.15)] transition-all ease  bg-red-950  rounded-full min-w-52 min-h-52 md:min-w-72 md:min-h-72 lg:min-w-80 lg:min-h-80 relative md:hover:-translate-y-[15px] flex justify-center items-center z-10 group order-1 md:order-2">
                        <div className=" bg-white rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center animate-wiggle relative ">
                            <img src={jakeCartoon} alt="jake" width="150" height="220" className="w-1/2 pointer-events-none select-none"/>
                        </div>
                    </div>

                    <div className="w-2/3 md:w-full  order-2 md:order-3">
                        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto gap-6 md:gap-3 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-4  place-items-center text-white text-2xl md:text-3xl text-center ">
                            <Socials additionalClasses={''}/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full flex gap-8 pt-4">
            
                <div className="flex flex-col gap-2 md:gap-4 w-full justify-center"> 
                    <div className="rounded md:rounded-xl h-4 lg:h-6 bg-red-950 w-full"></div>
                    <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
                </div>

                <div className="flex flex-col">            
                    <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-right '} headerText={"Jake"} spanClasses={' text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-10'} spanText={'Moya'}/>
                </div>
            </div>

        </section>

    )
}

export default MainBB