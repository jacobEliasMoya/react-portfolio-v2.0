import Input from './form components/Input'
import TextArea from './form components/TextArea'

type Props = {}

const MainForm = (props: Props) => {
  return (
    <form className='font-ultra gap-4 grid grid-cols-2 bg-red-500 p-8 rounded md:rounded-xl md:[box-shadow:_1em_1em_#960707] '>
        <label htmlFor="" className="col-span-full md:col-span-1">
          <Input type={'text'} value={''} onChange={undefined} placeholder={"Im Jake, whats your Name .."} additionalClasses={undefined} />
        </label>

        <label htmlFor="" className="col-span-full md:col-span-1">
          <Input type={'email'} value={''} onChange={undefined} placeholder={"Enter your email please .. "} additionalClasses={undefined} />
        </label>

        <label htmlFor="" className='col-span-full'>
          <TextArea additionalClasses={'min-h-44'} value={''} onChange={undefined} placeholder={"Have something you want to say that cant fit in one line, let me know here please! "} />
        </label>
    </form>
  )
}

export default MainForm