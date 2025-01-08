import Input from './form components/Input'
import TextArea from './form components/TextArea'

type Props = {
  moreClasses:string|undefined
}

const MainForm = (props: Props) => {
  return (
    <form className={`font-ultra gap-4 grid grid-cols-2 rounded md:rounded-xl ${props.moreClasses}`}>
        <label htmlFor="" className="col-span-full md:col-span-1">
          <Input type={'text'} value={''} onChange={undefined} placeholder={"Im Jake, whats your Name .."} additionalClasses={undefined} />
        </label>

        <label htmlFor="" className="col-span-full md:col-span-1">
          <Input type={'email'} value={''} onChange={undefined} placeholder={"Enter your email please .. "} additionalClasses={undefined} />
        </label>

        <label htmlFor="" className='col-span-full'>
          <TextArea additionalClasses={'min-h-44'} value={''} onChange={undefined} placeholder={"Have something you want to say that cant fit in one line, let me know here please! "} />
        </label>

        <label htmlFor="" className="col-span-full md:col-span-1">
          <Input type={'submit'} value={'Send it!'} onChange={undefined} placeholder={undefined} additionalClasses={'rounded col-span-full md:col-span-1 gap-4 flex items-center justify-center bg-zinc-800 p-4 w-auto'} />
        </label>
    </form>
  )
}

export default MainForm