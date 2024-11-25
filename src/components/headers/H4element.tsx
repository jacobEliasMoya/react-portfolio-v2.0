type Props = {
    additionalClasses:string | undefined,
    headerText:string | undefined,
    spanClasses:string | undefined,
    spanText:string | undefined,
}

const H4element = (props: Props) => {
  return (
    <h4 className={`block ${props.additionalClasses}`}> {props.headerText} <span className={`${props.spanClasses}`}>{props.spanText}</span></h4>
  )
}

export default H4element