import React from 'react'
import { Link } from 'react-router-dom'

function AnimeCard({anime}) {
  const fallbackImage = '/img/fallback.png'

  return (
        <div className="col-md-4 mb-4">
            <div className="card">
        <img src={anime.attributes.coverImage == null ? fallbackImage : anime.attributes.coverImage.original}  className="card-img-top" alt={anime.attributes.slug} />
                <div className="card-body">
                  <h5 className="card-title">{anime.attributes.slug}</h5>
                    <p className="card-text">{anime.description}</p>
                    {/* Add more details or actions as needed */}
                </div>
            </div>
        </div>
  )
}

export default AnimeCard