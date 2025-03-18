type Props = {
  type: string,
  value: string | number,
  onChange: any,
  placeholder:string|undefined,
  additionalClasses:string | undefined,
  name:string |undefined
}

const Input = (props: Props) => {
  return (
    <input
        type={props.type} 
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        className={`${props.additionalClasses} transition-all ease-in-out  cursor-none p-4  text-center md:text-left w-full placeholder-blue-950 text-sm lg:text-lg tracking-widest hover:bg-blue-200`}
    />
  )
}

export default Input