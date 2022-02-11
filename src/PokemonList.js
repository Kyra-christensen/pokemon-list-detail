import Pokemon from './Pokemon';
import { Component } from 'react';

// export default function PokemonList({ pokemonArray }) {
//   return (
//     <div className='pokemon'>
//       {pokemonArray.map((pokemon, i) => <Pokemon key={`${pokemon.id}-${i}`} pokemon={pokemon} />)}
//     </div>
//   );
// }

export default class PokemonList extends Component {
  render() {
    const { pokemonArray } = this.props;
    return (
      <>
        <div className='pokemon'>
          {pokemonArray.map((pokemon, i) => <Pokemon key={`${pokemon.id}-${i}`} pokemon={pokemon} />)}
        </div>
      </>
    );
  }
}