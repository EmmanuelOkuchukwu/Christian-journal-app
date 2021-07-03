import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BackgroundImage from './assets/pexels-pixabay-355770.jpg';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/pages/signin/Signin';
import Signup from './components/pages/signup/Signup';
import Journal from './components/pages/journalDashboard/Journal';
import { PrivateRoute } from './PrivateRoute';
import Profile from "./components/pages/profile/Profile";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Cardo', serif;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    padding: 0;
    margin: 0;
    h1 {
      font-family: 'Tourney', cursive;
    }
  }
`

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/journal" component={Journal} />
            <PrivateRoute path="/profile/:name" component={Profile} />
        </Switch>
    </div>
  );
}

export default App;
