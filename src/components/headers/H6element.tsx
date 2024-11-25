type Props = {
    additionalClasses:string | undefined,
    headerText:string | undefined,
    spanClasses:string | undefined,
    spanText:string | undefined,
}

const H6element = (props: Props) => {
  return (
    <h6 className={`block ${props.additionalClasses}`}> {props.headerText} <span className={`${props.spanClasses}`}>{props.spanText}</span></h6>
  )
}

export default H6element