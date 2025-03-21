import { useEffect, useState } from "react";
import axios from "axios";

interface QuoteOfTheDay {
    message: string;
    quote: {
        id: number;
        category: string;
        quote: string;
        author: string;
        description: string;
    };
}
const RandomQuote = () => {

    const [quote,setQuote] = useState<QuoteOfTheDay >()

    const progQuote = async () =>{

        const options = {
          method: 'GET',
          url: 'https://get-quotes-api.p.rapidapi.com/random',
          headers: {
            'x-rapidapi-key': 'ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42',
            'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setQuote(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        progQuote()

    },[])

    return (
        <section className='z-100 absolute bg-cover bg-center min-h-25 w-[90dvw] md:w-100 text-balance pt-4 md:pt-7 -top-20  sm:33 md:40 lg:left-55 bg-white scale-0 transition-all ease group-active:scale-100 flex-col items-start md:origin-bottom-left origin-bottom justify-center p-4 px-5 font-ultra rounded-3xl text-left'>
            <h2 className=" text-sm px-4 " ><span className="text-2xl absolute top-3 left-3">"</span> {quote?.quote.category}: {quote?.quote.author} <span className="text-2xl absolute bottom-3 right-3">"</span></h2>

            <h3 className="mt-3 w-full text-blue-950/30 text-left px-4 text-sm" >  
                {quote ? quote.quote.quote : 'looking ...  '}    
            </h3>
        </section>  
    )
}

export default RandomQuote