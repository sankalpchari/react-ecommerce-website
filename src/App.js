import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.componant';
import {Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/Shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Shop' component={Shop} />
      </Switch>
    </div>

  
  );
}

export default App;
