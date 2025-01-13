type Props = {
    icon: string | undefined,
    linkText: string,
    linkTitle: string,
    linkHREF: string,
    linkClasses: string | undefined
}

const MiscLink = (props: Props) => {
  return (
    <a href={props.linkHREF} className={props.linkClasses} title={props.linkTitle}>{props.linkText}</a>
  )
}

export default MiscLink