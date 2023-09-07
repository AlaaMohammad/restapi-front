import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthentication } from '../../Context/AuthenticationContext';
import JokeCard from './JokeCard';

function JokeCardList() {
    const [error, setError] = useState('');
    const [jokesList, setJokeList] = useState([]);


    useEffect(() => {
        const fetchJokesData = async () => {
            try {
                const request = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
                console.log(request.data);
                setJokeList(request.data)
            } catch {
                error => setError(error.message)
            }
        }
       fetchJokesData()
       
    }, [])
  return (
              <div className='row'>
                  <h2> Jokes List</h2>
                  {
                      jokesList && jokesList.map((joke) => (
                          <JokeCard key={joke.id} joke={joke}></JokeCard>
                      ))
                      }
              </div>
  )
}

export default JokeCardList