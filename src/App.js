import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.componant';
import {Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/Shop.component.jsx';
import Header from './components/header/Header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Shop' component={Shop} />
      </Switch>
    </div>

  
  );
}

export default App;
