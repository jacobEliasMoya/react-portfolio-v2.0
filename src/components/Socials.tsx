import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope, FaGithub,  FaMobile } from "react-icons/fa"
import { HiClipboardDocumentCheck } from "react-icons/hi2"
import resume from "../assets/JacobResume.pdf"
import { ReactElement, useEffect, useState } from "react"

interface Socials {
    id:number
    name:string,
    url:string,
    title: string,
    icon: ReactElement,
    target:string|undefined,
    desktopHidden: boolean
 }

type Props = {
    additionalClasses:string 
}
    
const Socials = (props: Props) => {
    const initialSocials:Array<Socials> = [
        {
            id:0,
            name: 'Call Now',
            url: 'tel:+19096446073',
            title: 'Call Now',
            icon: <FaMobile className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`} />,
            target: undefined,
            desktopHidden: false
        },
        {
            id:1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jacob-moya-317998174/',
            title: 'View LinkedIn',
            icon: <FaLinkedin className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: false
        },
        {
            name: 'Email Me',
            url: 'mailto:jemoya1994@gmail.com',
            title: 'Email Me',
            icon: <FaEnvelope className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`} />,
            target: undefined,
            desktopHidden: false,
            id: 2
        },
        {
            name: 'Github',
            url: 'https://github.com/jacobEliasMoya/',
            title: 'My Github',
            icon: <FaGithub className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: false,
            id: 3
        },
        {
            name: 'Resume',
            url: resume,
            title: 'View Resume',
            icon: <HiClipboardDocumentCheck className={`transition-all  active:scale-125  md:hover:-translate-y-2 md:hover:drop-shadow-md ${props.additionalClasses}`} />,
            target: '_blank',
            desktopHidden: true,
            id: 4
        },
 
    ]

    const [socialElms,setSocialElms] = useState<Socials[]>();
    
    useEffect(()=>{
        initialSocials ? setSocialElms(initialSocials) : null;
    },[])

return (
<>
    {socialElms ? socialElms.map((item)=>(
        <a key={item.id} href={item.url} title={item.title} target={item.target} className={`md:cursor-none w-max h-max bg-blue-950 p-2 lg:p-3 rounded-full flex items-center justify-center ${item.desktopHidden ? 'md:hidden' : ''}`} aria-label={item.title} >
            {item.icon}
        </a>
    )):''}
</>
)
}

export default Socials