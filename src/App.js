import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            {/*This links back to home page, should list all pokemon*/}

          </Route>
          <Route>
            {/*This points to a particular pokemon by id and render that specific pokemonDetail page*/}
            
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
