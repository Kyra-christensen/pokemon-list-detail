import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 100;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokemon = await getPokemon(from, to);

      setPokemonArray(pokemon);
    }
    fetch();
  }, [page]);

  return (
    
  )

}