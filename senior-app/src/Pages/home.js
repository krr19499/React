import React, {Component} from 'react';
import signup from "../Components/signup";
import "../CSS/home.css";
import { Navbar, Nav, NavItem , Form, FormControl, Button, Col } from 'react-bootstrap';
import{BrowserRouter as Router ,
    Route,  
    Link,
    Switch,
    Redirect
  } from "react-router-dom";

 class Home extends Component{
   
    render(){
        return(
            <div>
            <BackgroundIm />
          </div>
          
        )
    }
}
function BackgroundIm(){
    return(
        <div className="Home">
            <div className="header">
                <div className="background-image">
                    <SearchClasses />
                </div>
            </div>
        </div>
    );
}
const divStyle={
    position: 'absolute',
    top: 300,
}
function SearchClasses(){
    return(
        <div style={divStyle}>
            <Col md={{ span: 12, offset: 5 }} >
            <Navbar>
                <Form inline>
                    <FormControl type="text" placeholder="State" className="mr-ms-2"></FormControl>
                    <FormControl type="text" placeholder="University" className="mr-ms-2"></FormControl>
                    <FormControl type="text" placeholder="Major" className="mr-ms-2"></FormControl>
                    <Button variant ="outline-info">Search</Button>
                </Form>
            </Navbar>
            </Col>
            
        </div>
    );
}


export default Home;
