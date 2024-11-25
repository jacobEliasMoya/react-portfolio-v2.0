type Props = {
    additionalClasses:string | undefined,
    headerText:string | undefined,
    spanClasses:string | undefined,
    spanText:string | undefined,
}

const H5element = (props: Props) => {
  return (
    <h5 className={`block ${props.additionalClasses}`}> {props.headerText} <span className={`${props.spanClasses}`}>{props.spanText}</span></h5>
  )
}

export default H5element