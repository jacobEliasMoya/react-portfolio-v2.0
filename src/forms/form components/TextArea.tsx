import React from 'react'

type Props = {
    value: string | number,
    onChange: any,
    placeholder:string|undefined,
    additionalClasses:string | undefined,
}

const TextArea = (props: Props) => {
  return (
    <textarea
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`${props.additionalClasses} p-4 rounded border-none w-full placeholder-zinc-700  text-sm lg:text-lg tracking-widest`}></textarea>
  )
}

export default TextArea