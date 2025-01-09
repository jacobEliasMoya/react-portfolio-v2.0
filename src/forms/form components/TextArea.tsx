type Props = {
    value: string | number,
    onChange: any,
    placeholder:string|undefined,
    additionalClasses:string | undefined,
    name:string |undefined

}

const TextArea = (props: Props) => {
  return (
    <textarea
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        className={`${props.additionalClasses} cursor-none p-4 rounded border-none w-full placeholder-zinc-600  text-sm lg:text-lg tracking-widest`}></textarea>
  )
}

export default TextArea