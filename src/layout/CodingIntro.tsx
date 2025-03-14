import H3element from '../components/headers/H2element'

type Props = {
    id:string
}

const CodingIntro = (props:Props) => {

    return (
        <section id={props.id} className='sticky top-0 origin-bottom transition-all ease-out duration-300 w-full min-h-screen   flex items-center justify-center p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl' >
            <div className="w-full text-center flex justify-center items-center ">
                <H3element additionalClasses={'text-3xl md:text-6xl lg:text-7xl flex flex-col text-center text-red-300 [word-spacing:10px] tracking-wide '} headerText={"I love code"} spanClasses={' text-white '} spanText={'View my tech'}/>
            </div>

        </section>

    )
}

export default CodingIntro