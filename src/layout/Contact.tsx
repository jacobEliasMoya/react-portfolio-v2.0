import H2element from '../components/headers/H2element'
import H3element from '../components/headers/H3element'
import Paragraph from '../components/Paragraph'
import Socials from '../components/Socials'
import MainForm from '../forms/MainForm'

type Props = {
    animationStart: number,
    opacityStart: number,
    id:string
}

const Contact = (props:Props) => {

  return (
 
    <section id={props.id} className="relative origin-bottom transition-all ease-out rounded-lg  duration-300 rounded-t-3xl bg-red-600 min-h-96 md: gap-8 md:gap-16 flex justify-between flex-wrap flex-col overflow-hidden pt-6 md:pt-10 px-6 md:px-8 pb-24 md:pb-28 " 
        style={{
            bottom:`${props.animationStart && props.animationStart >= 0 ? -props.animationStart : '0'}px`,
                opacity:props.opacityStart
            }}
        >
        <div className="w-full flex gap-8 relative z-30 bg-inherit">
            <div className="flex flex-col" >            
                <H2element additionalClasses={'text-5xl md:text-6xl lg:text-8xl flex flex-col text-left '} headerText={'Lets'} spanClasses={'text-white -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-14 '} spanText={'Talk'}/>
            </div> 
            <div className="flex flex-col gap-2 md:gap-4  w-full justify-center ">
                <div className="rounded md:rounded-xl h-4 lg:h-6 bg-zinc-800 w-full "></div>
                <div className="rounded md:rounded-xl h-10 lg:h-20 bg-white w-full "></div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 pb-4 font-ultra text-white gap-8 md:gap-12 lg:gap-24 items-start md:mx-11 text-center md:text-left ">
          
          <MainForm moreClasses={'order-2 lg:order-1'} />

          <div className="grid justify-evenly flex-col gap-6 h-full order-1 lg:order-2">

            <H3element additionalClasses={' text-xl md:text-2xl  xl:text-3xl bg-inherit capitalize'} headerText={'Send me a Message Today!'} spanClasses={undefined} spanText={undefined}/>
            <Paragraph text={'I would love to get to know more about you, your businesses needs, and what exactly your looking for. '} classes={'gap-8 text-sm md:text-md lg:text-lg tracking-wider '}/>
            <div className='grid grid-cols-5 md:grid-cols-4 gap-9 md:gap-12 mx-auto md:mx-0 md:w-max pt-1'><Socials additionalClasses={'text-3xl md:text-4xl'}/></div>

          </div>

        </div>
        
    </section>  
 
  )
}

export default Contact