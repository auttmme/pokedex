import React from 'react'
import { Link } from 'react-router-dom'

const PokemonThumbnails = ({id, name, image, type}) => {

  const style = `thumb-container ${type}`

  return (
  <Link to={{pathname: `/pokemon/${name}`, state:"hai"}} className='link-wrapper'>
      <div className={style}>
        <div className="number">
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="thumbnail-wrapper">
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
    </Link>
  )
}

export default PokemonThumbnails