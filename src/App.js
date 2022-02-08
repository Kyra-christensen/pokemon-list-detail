import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PokemonPage from './PokemonPage';
import PokemonDetail from './PokemonDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/*This links back to home page, should list all pokemon*/}
            <PokemonPage />
          </Route>
          <Route exact path="/pokemon/:id">
            {/*This points to a particular pokemon by id and render that specific pokemonDetail page*/}
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
