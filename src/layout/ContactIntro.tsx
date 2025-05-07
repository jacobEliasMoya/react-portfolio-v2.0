import H2element from '../components/headers/H2element'

type Props = {
    id:string
}

const ContactIntro = (props:Props) => {

    return (
        <section id={props.id} className='-z-1 sticky top-0 origin-bottom transition-all ease-out duration-300 w-full min-h-screen   flex items-center justify-center p-6 md:p-8 py-6 md:py-10 flex-wrap flex-col rounded-b-3xl bg-gradient-to-b from-blue-400 to-blue-600'
        >
            <div className="w-full text-center flex justify-center items-center flex-col md:flex-row  ">
                <H2element additionalClasses={'text-3xl md:text-6xl lg:text-7xl flex flex-col text-center text-white [word-spacing:10px]  tracking-wide'} headerText={" Need a pro? "} spanClasses={'   '} spanText={`contact me!`}/>
            </div>
        </section>

    )
}

export default ContactIntro