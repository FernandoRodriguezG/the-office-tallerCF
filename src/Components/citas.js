import {  useState,useEffect } from "react"

function Citas(){
    const [quote, setQuote] = useState()
    useEffect( function getQuotes(){
        fetch('https://www.officeapi.dev/api/quotes/random')
        .then(response => response.json())
        .then(data => setQuote(data.data))
    },[])
    if(!quote){
        return null
    }
    return(
        <div>
            CITAS<br></br>
            {quote.content}
        </div>
    )
}

export default Citas