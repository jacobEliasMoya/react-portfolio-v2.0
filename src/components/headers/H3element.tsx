type Props = {
    additionalClasses:string | undefined,
    headerText:string | undefined,
    spanClasses:string | undefined,
    spanText:string | undefined,
}

const H3element = (props: Props) => {
  return (
    <h3 className={`block ${props.additionalClasses}`}> {props.headerText} <span className={`${props.spanClasses}`}>{props.spanText}</span></h3>
  )
}

export default H3element