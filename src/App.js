import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Users/>
          </Route>
          <Route path="/place/new">
            <NewPlace/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
