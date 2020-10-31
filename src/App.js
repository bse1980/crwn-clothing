import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch> {/* renders the first matched Route */}
        <Route exact path='/' component={HomePage} /> {/* 'exact' or none attribute */}
        <Route path='/shop' component={ShopPage} /> { /* passing params like this. get from props*/}
      </Switch>
    </div>
  );
}

export default App;
