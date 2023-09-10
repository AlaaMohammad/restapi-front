import React from 'react'
import { Link } from 'react-router-dom'

function AnimeCard({ anime }) {
  const fallbackImage = '/img/fallback.png'

  return (
    <div className="col-md-2 col-sm-4 my-5 shadow-sm" style={{}}>
      <Link to={`/anime/${anime.id}`}>
      <div className="card img-card" style={{
        backgroundImage: `url(${anime.attributes.posterImage== null ? fallbackImage : anime.attributes.posterImage.original})`
      }}>
        <div className="card-body">
          <p className="card-title">{anime.attributes.canonicalTitle}</p>
          <p className="card-text">{anime.attributes.subtype}</p>
        </div>
      </div>

        </Link>
    </div>
  )
}

export default AnimeCard