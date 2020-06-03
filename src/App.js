import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.componant';
import {Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/Shop.component.jsx';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsuscribeFromAuth=null;

  componentDidMount(){
    this.unsuscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user}) ; 
      console.log(user);
    })
  }


  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
        return (
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/Shop' component={Shop} />
                <Route exact path='/Signin' component={SignInAndSignUp} />
            </Switch>
          </div>
        );
    }
}

export default App;
