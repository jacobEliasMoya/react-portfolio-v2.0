type Props = {
    buttonText:string,
    additionalClasses:string,
    buttonLink:string | undefined,
    newWindow: boolean 
}

const ButtonWhite = (props: Props) => {
  return (
    <a href={props.buttonLink} target={props.newWindow ? '_blank':''} className={`${props.additionalClasses} p-6 text-zinc-800 bg-white w-max rounded-xl transition-all ease-linear flex items-center justify-center duration-100 cursor-none`}>{props.buttonText}</a>
  )
}

export default ButtonWhite