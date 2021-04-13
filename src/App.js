import './App.css';
import {withRouter,Route,Switch} from 'react-router-dom'
import Auth from './Components/Auth/AuthForm'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Switch>
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/authentication" component={Auth} />
          <Route path="/" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
