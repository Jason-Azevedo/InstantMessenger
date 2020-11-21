import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SecureRoute from './Components/SecureRoute';
import './App.css';

function App() {

	// Temp login
	const tempLogin = () => <h1>Please login!</h1>

  return (
    <Router>
      {/* Navbar component here! */}
	  {/* TODO: Create navbar component1 */}

      <Switch>
		  {/* TODO: Create login component: */}
        <Route exact path="/login" component={tempLogin}/>

		<SecureRoute isAuth={false} path='/' redirectPath='/login' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
