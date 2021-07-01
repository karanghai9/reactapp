import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Matches from './Matches/Matches';
import Tournaments from './Tournaments/Tournaments';
import Upcoming from './Upcoming/Upcoming';
import TipsNTricks from './TipsNTricks/TipsNTricks';
import Help from './Help/Help';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">
                <Router>
                    <Navbar className="navb" collapseOnSelect expand="lg">
                    <Navbar.Brand>
                      <Link to="/">Game Heist</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto'>
                        <Nav.Link><Link to="/matches">Matches</Link></Nav.Link>
                        <Nav.Link><Link to="/tournaments">Tournaments</Link></Nav.Link>
                        <Nav.Link><Link to="/upcoming">Upcoming</Link></Nav.Link>
                        <Nav.Link><Link to="/tipsNtricks">Tips and Tricks</Link></Nav.Link>
                        <Nav.Link><Link to="/help">Help</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage}></Route>
                        <Route exact path='/matches' component={Matches}></Route>
                        <Route exact path='/tournaments' component={Tournaments}></Route>
                        <Route exact path='/upcoming' component={Upcoming}></Route>
                        <Route exact path='/tipsNtricks' component={TipsNTricks}></Route>
                        <Route exact path='/help' component={Help}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/signup' component={Signup}></Route>
                    </Switch>
            </Router> 
        </div>
  );
}

export default App;
