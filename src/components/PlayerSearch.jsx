import { useState } from "react";
import PlayerCard from './PlayerCard';

function PlayerSearch(){
    //// const [search, setSearch] = useState({ name:'', tag:'' })
    const [search, setSearch] = useState('')
    const [results, setResults] = useState({});

    function handleChange(e){
        // setSearch({...search, [e.target.name]: e.target.value })
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        //// fetch(`http://localhost:4000/accounts/by-riot-id/${search.name}%23${search.tag}`)
        fetch(`http://localhost:4000/accounts/by-riot-id/${encodeURIComponent(search)}`)
        .then(r => r.json())
        .then(setResults)
    }

    function handleClear(e){
        e.preventDefault();
        setSearch('');
    }

    return(
        <div className="player-search">
            <form>
                {/*                 
                    //// <label>
                    ////    Exact Player Name # Tag
                    ////    <br />
                    ////    <input type="text" onChange={handleChange} value={search.name} name="name" />
                    //// </label>
                    //// <label>
                    ////     &nbsp;#&nbsp;
                    ////     <input type="text" onChange={handleChange} value={search.tag} name="tag" />
                    //// </label>
                    ////  <br />
                */}

                <label>
                    Search for Player's Unique User IDentifier <br />
                    <input type="text" onChange={handleChange} value={search} name="search" placeholder="name#tag..."/>
                </label>
                <button onClick={handleSubmit}>🔍</button>
                <button onClick={handleClear}>⊘</button>
            </form>
            <div>
                {!!Object.keys(results).length && <PlayerCard results={results} />}
            </div>
        </div>
    )
}

export default PlayerSearch;