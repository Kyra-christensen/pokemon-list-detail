import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return <Link to={`/pokemon/${pokemon.id}`}>
    <div className='single-pokemon'>
      {pokemon.pokemon}
      <img src={pokemon.url_image} className='pokemon-img' />
    </div>
  </Link>;
}
