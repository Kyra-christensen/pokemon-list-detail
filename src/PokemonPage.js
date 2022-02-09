import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const pokemon = await getPokemon(from, to);

      setPokemonArray(pokemon);
    }

    fetch();

  }, [page]);

  return (
    <>
      <h3>Current Page: {page}</h3>
      <div className='buttons'>
        <button 
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        <button 
          onClick={() => setPage(page + 1)}
          disabled={pokemonArray.length < perPage}>Next Page</button>
      </div>
      <PokemonList pokemonArray={pokemonArray} />
    </>
  );
}
export default App;