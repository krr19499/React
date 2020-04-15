import React, { Component } from 'react';
import Home from './Pages/home';
import signup from './Components/ModalComponent';
import Dashboard from './Pages/Dashboard';
import { Navbar, Nav, NavItem , Form, FormControl, Button } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./CSS/home.css";
import{BrowserRouter as Router ,
  Route,  
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render(){
    return (
        <div>
          <Router>
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand as= {Link} to="/">Tutoring</Navbar.Brand>
              <Navbar.Collapse>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to ="/">Home</Nav.Link>  
              <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} component={signup}></Nav.Link>
              </Nav>
              </Navbar.Collapse> 
            </Navbar>
          </div>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
              </Switch>
          </Router>
          
        </div>

    );
  }
  
  }
  

export default App;
