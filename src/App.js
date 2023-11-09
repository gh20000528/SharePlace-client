import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/component/Nav/MainNavigation'
import UserPlace from './places/pages/UserPlace';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Users/>
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlace/>
            </Route>
            <Route path="/places/new" exact>
              <NewPlace/>
            </Route>
            <Route path="/place/:placeId" >
              <UpdatePlace/>
            </Route>
            <Redirect to='/'/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
