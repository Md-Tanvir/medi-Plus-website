import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Error from './components/Error/Error';

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
        <Route path='/service/:serviceId'>
          <ServiceDetails>
          </ServiceDetails>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
     </Router>
     
    </div>
  );
}

export default App;
