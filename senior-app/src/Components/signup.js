import React, {useState} from "react";
import { useHistory } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import ModalComponent from "./ModalComponent";
import SignIn from "./signin";



function FormPage () {
  const history =useHistory()
  const[email,setEmail]=useState("")
  const[pwd,setPwd]=useState("")
  const onChangeHandler = e => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  const onChangeHandlerPwd = e => {
    setPwd(e.target.value)
    console.log(e.target.value)
  }
  const formIsValid = () => pwd !== null
  const submitSignup = (e) =>  {
    e.preventDefault();
    
    if(!formIsValid()) {
        console.log("error");
        return;
    }
}
  return (
    
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form
          >
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">

              <MDBInput onChange={onChangeHandler} 
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput onChange={onChangeHandlerPwd} 
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" onClick={submitSignup}>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="6">
          <SignIn />
        </MDBCol>
      </MDBRow>
    </MDBContainer> 
    
  ); 
} 

export default FormPage;