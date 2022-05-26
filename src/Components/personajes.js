import { useEffect, useState } from "react"

function Personajes(){
    const [characteres,setCharacteres] = useState(null)
    useEffect(function getCharacteres (){
        fetch( 'https://www.officeapi.dev/api/characters/random')
        .then(response => response.json())
        .then(data => setCharacteres(data.data))
    },[])
    if(!characteres){
        return null
    }
    return(
        <div>personajes <br></br>
            {characteres.firstname}<br></br>
            {characteres.lastname}</div>
    )
}

export default Personajes