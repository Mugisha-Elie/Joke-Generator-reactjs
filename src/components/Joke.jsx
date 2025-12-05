import '../index.css'
import Button from "./Button"
import {useState, useEffect} from 'react'

const Joke = () => {
    const [joke, setJoke] = useState("Loading Joke...")

    const fetchJoke = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke))
        .catch((error) => {
            console.log("Error fetching your joke: ", error)
            setJoke("Sorry there was an issue loading your joke please try again!")
        })
    }

    useEffect(() => {
        fetchJoke();
    }, [])

    return (
        <div className="flex flex-col items-center gap-5">
            <Button callAPI={fetchJoke}/>
            <p className="text-center">{joke}</p>
        </div>
    )
}

export default Joke;


    
