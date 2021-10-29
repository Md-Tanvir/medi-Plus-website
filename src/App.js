import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header>
        </Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/services'>
        <Services></Services>
        </Route>
      </Switch>
     </Router>
     
    </div>
  );
}

export default App;
