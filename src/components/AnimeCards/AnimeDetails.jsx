import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeAPI from '../../Services/AnimeAPI';

function AnimeDetails() {
    let { animeId } = useParams();
    const [anime, setAnime] = useState([])

    useEffect(() => {
        const fetchAnimeDetailsData = async () => {
            try {
                const reponse = await AnimeAPI.getAnimeById(animeId)
                console.log(reponse.data)
                setAnime(reponse.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAnimeDetailsData()
    }, [animeId])

    const fallbackImage = '/img/fallback.png'

    return (
        anime == null ? <div>Loading...</div> :
            <>
                <div className="p-5 mb-4 hero-img" style={{
                    backgroundImage: `url(${anime.attributes?.coverImage == null ? fallbackImage : anime.attributes?.coverImage.original})`
                }}>
                    <div className="container-fluid p-5" style={{zIndex:5,position:'relative'}} >
                        <div className='row'>
                            <div className='col-12'>
                                <h1>{anime.attributes?.titles.en}</h1>
                                <h2>{anime.attributes?.titles.ja_jp}</h2>
                                <p className="col-md-8 fs-6">{anime.attributes?.description}</p>
                                <button className="btn btn-secondary btn-lg" type="button">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='hero-overlay'></div>
                </div>
            </>
    )
}
export default AnimeDetails