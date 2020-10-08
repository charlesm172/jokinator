import React, {useEffect, useState } from 'react';
import axios from "axios";
import spinner from "../img/spinner.svg";
import Joke from "./Joke";

const Card = () => {

    // Creating state variables for Card
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const [loading, setLoading] = useState(true);
    const [fetch, setFetch] = useState(false);
    

    // This will run once when the site loads, and whenever the 'fetch' variable changes.
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            // Get data from the API
            const result = await axios.get("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general");

            setLoading(false);

            setSetup(result.data[0].setup);
            setPunchline(result.data[0].punchline);
        }

        fetchData();

    }, [fetch]);

    return (
        <div className="card">
            {loading ? <img src={spinner} alt="loading..."/> : <Joke setup={setup} punchline={punchline}/>}

            <button className="btn" onClick={() => setFetch(!fetch)}>Another joke!</button>
        </div>
    );
}

export default Card;