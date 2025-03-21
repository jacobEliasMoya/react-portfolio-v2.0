import { useEffect, useState } from "react";
import axios from "axios";

interface QuoteInterface {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string; 
}
const RandomQuote = () => {

    const [quote,setQuote] = useState<QuoteInterface >()

    useEffect(()=>{
        axios.get('https://api.quotable.io/random')
        .then(response=>{
            setQuote(response.data)
        })
        .catch(err=>{
            console.error(err)
        })

    },[])

    useEffect(()=>{
        console.log(quote)
    },[quote])


  return (
        <section className='z-100 absolute bg-cover bg-center min-h-25 w-[80dvw] md:w-100 text-balance pt-7 -top-20  sm:33 md:40 lg:left-55 bg-white scale-0 transition-all ease group-active:scale-100 flex-col items-start md:origin-bottom-left origin-bottom justify-center p-4 px-5 font-ultra rounded-4xl text-left'>
            <h2 className=" text-sm   px-4 " ><span className="text-2xl absolute top-3 left-3">"</span>{quote ? quote.content.split('.')[0] + "." : 'looking for your quote  '}<span className="text-2xl absolute bottom-3 right-3">"</span></h2>

            <h3 className="mt-3 text-md w-full text-blue-950/30 text-left px-4" >  
                {quote ? quote.author : 'looking for your author  '}    
            </h3>
         </section>  
    )
}

export default RandomQuote