
type Props = {
    buttonText:string,
    additionalClasses:string,
    buttonLink:string | undefined,
    newWindow: boolean 

}

const ButtonWhite = (props: Props) => {
  return (
    <a href={props.buttonLink} target={props.newWindow ? '_blank':''} className={`${props.additionalClasses} px-5 py-3 bg-white w-max rounded-xl scale-95 hover:scale-100 transition-all ease-linear flex items-center justify-center duration-100 cursor-none`}>{props.buttonText}</a>
  )
}

export default ButtonWhite