import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componente/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalDerails from './componente/PersonalDerails/PersonalDerails';
import Home from './componente/Home/Home/Home';


function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
