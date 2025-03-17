import { ChangeEvent, useState,useRef, useEffect } from 'react'
import Input from './form components/Input'
import TextArea from './form components/TextArea'
import emailjs from '@emailjs/browser'

type Props = {
  moreClasses:string|undefined
}

const MainForm = (props: Props) => {

  const form = useRef<HTMLFormElement>(null);
 
  const [isSent,setIsSent] = useState<boolean>()
  const [formName,setFormName] = useState<string>();
  const [formEmail,setFormEmail] = useState<string>();
  const [formMessage,setFormMessage] = useState<string>();

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value)
  }

  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormEmail(e.target.value)
  }
  
  const handleFormChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setFormMessage(e.target.value)
  }

  const handleSubmission = (e:React.FormEvent<HTMLFormElement>) =>{

    e.preventDefault();

    formName && formEmail && formMessage ? form.current ? emailjs.sendForm('service_df732ps', 'template_txv4cip', form.current, {
      publicKey: '9ReKBbRNDraeGtQBI',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setIsSent(true)
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    ) : alert('no!') : alert('Please see to it that all fields are filled')
  }



  useEffect(()=>{

    setFormEmail('')
    setFormMessage('')
    setFormName('')
  
  },[isSent])

  useEffect(()=>{
    setIsSent(false)
  },[formName,formEmail,formMessage])

  return (

    <form ref={form} onSubmit={handleSubmission} className={`font-ultra gap-4 grid grid-cols-2 rounded md:rounded-xl text-zinc-800  ${props.moreClasses}`}>
      <label htmlFor="" className="col-span-full md:col-span-1">
        <Input type={'text'} value={formName ? formName : ''} onChange={handleNameChange} placeholder={"Name please  "} additionalClasses={'bg-white'} name={'name'} />
      </label>

      <label htmlFor="" className="col-span-full md:col-span-1">
        <Input type={'email'} value={formEmail ? formEmail : ''} onChange={handleEmailChange} placeholder={"Enter email here "} additionalClasses={'bg-white'} name={'email'} />
      </label>

      <label htmlFor="" className='col-span-full'>
        <TextArea additionalClasses={'min-h-44 bg-white'} value={formMessage ? formMessage : ''} onChange={handleFormChange} placeholder={"Have something you want to say that cant fit in one line, let me know here please! "} name={'message'} />
      </label>

      <label htmlFor="" className="col-span-full p-0 top-0  hover:-top-4 active:-top-2 transition-all ease flex flex-col md:flex-row items-center justify-start md:gap-2   text-white  rounded tracking-wider relative rounded-b-none  after:w-full  after:bg-zinc-900 after:absolute after:-bottom-2 after:left-0 after:rounded-b-md hover:after:-bottom-6 active:after:-bottom-4 after:h-[calc(.5rem+1px)] hover:after:h-[calc(1.5rem+1px)] active:after:h-[calc(1rem+1px)] after:transition-all after:ease transform after:transform">
        <Input type={'submit'} value={'Send it!'} onChange={undefined} placeholder={undefined} additionalClasses={' !bg-zinc-800 !border-none !rounded col-span-full md:col-span-1 gap-4 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900 p-4 w-auto tracking-widest'} name={undefined} />
      </label>
    </form>
  )
}

export default MainForm