import { useEffect, useState } from "react";

function Episodes() {
    const [episodes, setEpisodes] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch(`https://api.sampleapis.com/avatar/episodes`)
        .then(response => response.json())
        .then(episodes => {
            setEpisodes(episodes)
        })
        .catch(message => {
            console.error(message)
        })
    }, [])

    let handleOnChange = (event) => {
        let title = event.target.value
        let selectedEpisode = episodes.find(episode => {
            return episode.Title === title
        })
        setSelected(selectedEpisode)
    }

    return (
        <div className="episodes">
            <h3>Avatar Episodes</h3>
            <select onChange={handleOnChange}>
                {episodes.map((episode) => {
                    return (
                        <option key={episode.id}>{episode.Title}</option>
                    )
                })}
            </select>
            {selected ? (
                <div>
                    <h3>Title: {selected.Title}</h3>
                    <h4>Director: {selected.DirectedBy}</h4>
                </div>
            ) : null}
        </div>
    );
  }
  
  export default Episodes;