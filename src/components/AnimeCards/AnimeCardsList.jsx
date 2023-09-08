import React, { useEffect, useState } from 'react'
import AnimeAPI from '../../Services/AnimeAPI'
import AnimeCard from './AnimeCard'

function AnimeCardsList() {
   const [animeList, setAnimeLists] = useState([])

    useEffect(() => {
        const fetchAnimeData = async () => {
        try{
            const response = await AnimeAPI.getAllAnime();
            console.log(response.data)
            setAnimeLists(response.data)
        }catch(error){
            console.error(error)
        }
    }
    fetchAnimeData()
    console.log(animeList)
    }, [])
    
  return (
    <>
        <div className='row'>
            <h2> Anime List</h2>
            {
            animeList && animeList.map((anime) =>(
                    <AnimeCard key={anime.id} anime={anime}></AnimeCard>
            ))
        }
        </div>
    </>
  )
}

export default AnimeCardsList