import React from 'react'

type Props = {
    text: string,
    classes: string | undefined
}

const Paragraph = (props: Props) => {
  return (
    <p className={`text-pretty  ${props.classes}`}>{props.text}</p>
  )
}

export default Paragraph