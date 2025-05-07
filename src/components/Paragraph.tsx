type Props = {
    text: string,
    classes: string | undefined
}

const Paragraph = (props: Props) => {
  return (
    <p className={`text-balance  ${props.classes}`}>{props.text}</p>
  )
}

export default Paragraph