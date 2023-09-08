import React from 'react'
import { Link } from 'react-router-dom'

function AnimeCard({ anime }) {
  const fallbackImage = '/img/fallback.png'

  return (
    <div className="col-2 mb-4">
      <div className="card">
        <img src={anime.attributes.coverImage == null ? fallbackImage : anime.attributes.coverImage.original} className="card-img-top" alt={anime.attributes.slug} />
        <div className="card-body">
          <p className="card-title">{anime.attributes.slug}</p>
          <p className="card-text">{anime.attributes.subtype}</p>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard