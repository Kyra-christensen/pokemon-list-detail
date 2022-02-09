import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [singlePokemon, setSinglePokemon] = useState('');
  const params = useParams();

  useEffect(() => {
    async function fetchPokemon() {
      const data = await getSinglePokemon(params.id);

      setSinglePokemon(data);
    }
    fetchPokemon();
  }, [params.id]);

  function handlePokemonClick() {
    window.open(singlePokemon.pokedex);
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='pokemon-detail' onClick={handlePokemonClick}>
        <div className='pokemon-data'>
          <img className='pokemon-img' src={singlePokemon.url_image}/>
          <p>{singlePokemon.pokemon}</p>
          <p>Height: {singlePokemon.height}</p>
          <p>weight: {singlePokemon.weight}</p>
          <p>Base XP: {singlePokemon.base_experience}</p>
          <p>Type: {singlePokemon.type_1}, {singlePokemon.type_2}</p>
          <p>Attack: {singlePokemon.attack}</p>
          <p>Defense: {singlePokemon.defense}</p>
          <p>HP: {singlePokemon.hp}</p>
          <p>Special Attack: {singlePokemon.special_attack}</p>
          <p>Special Defense: {singlePokemon.special_defense}</p>
          <p>Speed: {singlePokemon.speed}</p>
          <p>Abilities: {singlePokemon.ability_1}, {singlePokemon.ability_2}</p>
          <p>Hidden Abilities: {singlePokemon.ability_hidden}</p>
          <p>Colors: {singlePokemon.color_1}, {singlePokemon.color_2}, {singlePokemon.color_f}</p>
          <p>Egg Group(s): {singlePokemon.egg_group_1}, {singlePokemon.egg_group_2}</p>
          <p>Generation: {singlePokemon.generation_id}</p>
          <p>Evolves From Species Who&apos;s id is: {singlePokemon.evolves_from_species_id}</p>
          <p>Evolution chain id: {singlePokemon.evolves_from_chain_id}</p>
          <p>Shape id: {singlePokemon.shape_id}</p>
          <p>Shape: {singlePokemon.shape}</p>
          <p>Pokebase: {singlePokemon.pokebase}</p>
        </div>
      </div>
    </>
  );
}