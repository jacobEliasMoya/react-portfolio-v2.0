import H1element from "../components/headers/H1element"
import H2element from "../components/headers/H2element"
import { useEffect, useState } from "react"
import Paragraph from "../components/Paragraph"
import Socials from "../components/Socials"
import organicBG from "../assets/goodone.png"


type Props = {
    animationStart: number,
    opacityStart: number,
    id: string
}

const MainBB = (props: Props) => {

    const [jakeMessage, setJakeMessage] = useState<string>();


    useEffect(() => {
        setJakeMessage('Hi, I am Jake, a Frontend Web Designer and Developer. ')
    }, [jakeMessage])


    return (
        <section id={props.id} className='z-10 origin-bottom transition-all ease-out duration-300 w-full min-h-screen  bg-center bg-cover flex items-center justify-center  p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl md:rounded-b-[3rem] relative '
            style={{
                backgroundImage: `url(${organicBG})`,
                bottom: `${props.animationStart && props.animationStart >= 0 ? props.animationStart : '0'}px`
            }}
        >
            <Paragraph
                text="Designed Like an Artist. Built Like an Engineer."
                classes="!text-balance text-3xl md:text-5xl lg:text-7xl text-white font-bold leading-tight bg-orange-500/80 backdrop-invert rounded-full px-8 py-4 "
            />
        </section>

    )
}

export default MainBB