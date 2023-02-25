import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PokemonDetails = () => {

  const [dataPokemon, setDataPokemon] = useState([])
  
  let { name } = useParams()

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()

    // console.log(data)
    setDataPokemon(data)

    return data
  }
  
  useEffect(() => {
    fetchPokemon()
  }, [])
  
  console.log(dataPokemon);

  const type = dataPokemon?.types?.[0].type?.name

  const style = `detail-box ${type}`

  return (
    <>
      <Navbar />
      <div className='detail-wrapper'>
        <div className={style}>
          <div className="poke-content">
            <img src={dataPokemon?.sprites?.other?.dream_world?.front_default} alt={dataPokemon.name + " picture"} />
            <div className='poke-content-text'>
              <h1 style={{textTransform: 'uppercase'}}>{dataPokemon.name}</h1>
              <p>Weight: {dataPokemon?.weight}</p>
              <h3>Abilities : </h3>
              {dataPokemon?.abilities?.map((ability) => {
                return (
                  <>
                  <ul>
                    <li>{ability.ability.name}</li>
                  </ul>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails