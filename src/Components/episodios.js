import {  useState,useEffect } from "react"

function Episodios(){
    const [episode, setEpisode] = useState(null)
    useEffect(function getEpisode(){
        fetch('https://www.officeapi.dev/api/episodes/random')
        .then(response => response.json())
        .then(data => setEpisode(data.data));
    },[])
    if(!episode){
        return null
    }
    return(
        <div>
            CITAS<br></br>
            {episode.title}
        </div>
    )
}

export default Episodios