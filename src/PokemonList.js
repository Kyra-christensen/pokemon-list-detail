import Pokemon from './Pokemon';

export default function PokemonList({ pokemonArray }) {
  return (
    <div className='pokemon'>
      {pokemonArray.map((pokemon, i) => <Pokemon key={`${pokemon.id}-${i}`} pokemon={pokemon} />)}
    </div>
  );
}