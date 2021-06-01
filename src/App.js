import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ExercisesList from './ExercisesList';
import AddExercise from './AddExercise';
import EditExercise from './EditExercise';


function App() {
  return (
    <div className="App">
      <h1>Exercise App</h1>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/add" exact component={AddExercise} />
            <Route path="/edit/:id" component={EditExercise} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
