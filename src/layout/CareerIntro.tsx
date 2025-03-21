import H2element from '../components/headers/H2element'

type Props = {
    id:string
}

const CareerIntro = (props:Props) => {

    return (
        <section id={props.id} className='-z-1 sticky top-0 origin-bottom transition-all ease-out duration-300 w-full min-h-screen   flex items-center justify-center p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl [background-image:radial-gradient(circle_at_center,_#0b162e,_#010511)] bg-fixed'>
            <div className="w-full text-center flex justify-center items-center flex-col md:flex-row  ">
            <H2element additionalClasses={'tracking-wide text-3xl md:text-6xl lg:text-7xl flex flex-col text-center text-white [word-spacing:10px] '} headerText={"what do I do?"} spanClasses={'   '} spanText={`Code for BIZIQ`}/>
            </div>
        </section>

    )
}

export default CareerIntro