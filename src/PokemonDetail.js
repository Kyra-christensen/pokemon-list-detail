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

  
}