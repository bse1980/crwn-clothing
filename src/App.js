import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch> {/* renders the first matched Route */}
        <Route exact path='/' component={HomePage} /> {/* 'exact' or none attribute */}
        <Route path='/hats' component={HatsPage} /> { /* passing params like this. get from props*/}
      </Switch>
    </div>
  );
}

export default App;
