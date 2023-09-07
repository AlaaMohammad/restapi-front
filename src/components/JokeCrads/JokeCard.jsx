import React from 'react'
import { Link } from 'react-router-dom'

function JokeCard({joke}) {
  return (
    <div className="col-md-4 mb-4">
    <div className="card text-center">
  <div className="card-header">
    {joke.type}
  </div>
  <div className="card-body">
    <h5 className="card-title">{joke.setup}</h5>
    <p className="card-text">{joke.punchline}</p>
  </div>

</div>
   
    </div>
  )
}

export default JokeCard