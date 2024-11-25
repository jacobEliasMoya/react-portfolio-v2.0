type Props = {
    additionalClasses:string | undefined,
    headerText:string | undefined,
    spanClasses:string | undefined,
    spanText:string | undefined,
}

const H2element = (props: Props) => {
  return (
    <h2 className={` ${props.additionalClasses}`}> {props.headerText} <span className={`${props.spanClasses}`}>{props.spanText}</span></h2>
  )
}

export default H2element