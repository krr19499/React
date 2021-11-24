import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";


function FormPage() {
  const history=useHistory()
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
  const submitLogin = (e) => {
    e.preventDefault();

    
   
}
  return (
    
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form
          onSubmit={submitLogin}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput onChange={onChangeHandler} 
                label="Type your email"
                icon="envelope"
                group
                type="email" 
                validate
                error="wrong"
                success="right"
              />
              <MDBInput onChange={onChangeHandlerPwd}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
            <MDBBtn color="primary" onClick={submitLogin}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
   
  );
};

export default FormPage;