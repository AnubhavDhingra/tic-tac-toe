import React from 'react';
import './App.css';
import Game from './containers/Game/Game';
import Landing from './containers/Landing/Landing';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/game' component={Game}/>
        <Route path='/' exact component={Landing}/>
      </Switch>
    </div>
  );
}

export default App;
