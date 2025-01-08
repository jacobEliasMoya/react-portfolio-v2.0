type Props = {

    type: string,
    value: string | number,
    onChange: any,
    placeholder:string|undefined,
    additionalClasses:string | undefined,

}

const Input = (props: Props) => {
  return (
    <input
        type={props.type} 
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}

        className={`${props.additionalClasses} p-4 rounded border-none w-full placeholder-zinc-700 text-sm lg:text-lg tracking-widest`}
    />
  )
}

export default Input