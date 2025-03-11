import H2element from '../components/headers/H2element'

type Props = {
    id:string
}

const CareerIntro = (props:Props) => {

    return (
        <section id={props.id} className='sticky top-0 origin-bottom transition-all ease-out duration-300 w-full min-h-screen   flex items-center justify-center p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl bg-red-800'>
            <div className="w-full text-center flex justify-center items-center flex-col md:flex-row  ">
                <H2element additionalClasses={'tracking-wide text-4xl md:text-6xl lg:text-7xl flex flex-col text-center text-red-300 [word-spacing:10px] text-balance'} headerText={"Certified Professional "} spanClasses={' text-white  '} spanText={`Currently Creating for BIZIQ`}/>
            </div>
        </section>

    )
}

export default CareerIntro