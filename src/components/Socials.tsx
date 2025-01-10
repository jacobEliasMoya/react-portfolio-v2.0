import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope, FaGithub, FaMobile } from "react-icons/fa"

type Props = {
    additionalClasses:string|undefined
}

const Socials = (props: Props) => {
  return (
    <>
        <a href="tel:+19096446073" title=" Call Jacob Now" className="cursor-none w-max" aria-label="Call Jacob Now">
            <FaMobile className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`}/> 
        </a>
        
        <a href="https://www.linkedin.com/in/jacob-moya-317998174/" target="_blank" rel="noopener noreferrer" title="" className="cursor-none w-max" aria-label="JacobMoya Linked-In">
            <FaLinkedin className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`}/>
        </a>
        
        <a href="mailto:jemoya1994@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Jacob Now" title="JacobMoya Email" className="cursor-none w-max">
            <FaEnvelope className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`}/>
        </a>

        <a href="https://github.com/jacobEliasMoya/" target="_blank" rel="noopener noreferrer" title="JacobMoya Github" className="cursor-none w-max" aria-label="JacobMoya Github">
            <FaGithub className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`}/>
        </a>

    </>
  )
}

export default Socials