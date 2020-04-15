import React, {Component} from 'react';
import {BrowserRouter as Router,Route,
Link,
Switch} from "react-router-dom";
import "../CSS/dashsidebar.css";
import Courses from "../Components/courses";
import Messages from "../Components/chatDash"
import { Navbar, Nav, NavItem , Form, FormControl, Button } from 'react-bootstrap';


class Dashboard extends Component {

    constructor (props) {
        super(props)
        this.state = {
          menuOpen: true,
          disableClose:true,
          disableClick:true,
          diasbleTransition:true,
          disableOverlay:true
        }
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    render(){
        const navigate = this.Navigation();
        return(
            <div >
                {navigate}

            </div>
        )
        
    }

    Navigation(){
    return(
            
            <Router>
              
            <Nav className="flex-column">
            <div className="sidebar">
            <Nav.Link as={Link} to="/course" className="boxes">Courses</Nav.Link>         
            <Nav.Link as={Link} to="/addcourses" className="boxes">Add Courses</Nav.Link>
            <Nav.Link as={Link} to="/edit info"className="boxes" >Edit Info</Nav.Link>
            <Nav.Link as={Link} to="/Messages"className="boxes" >Messages</Nav.Link>
            </div>
            
            </Nav>
            <Switch>
                <div className="another">
                <Route path='/addcourses' component={Courses}>
                </Route>
                <Route path='/Messages' component={Messages}>
                </Route>
                </div>
            </Switch>
            
   
        </Router>

     
       
    );
}

}


/**
 *
 */

export default Dashboard