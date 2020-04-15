import React,{Component, useState} from 'react';
import Selector from 'react-awesome-selector'
import 'react-awesome-selector/dist/style.css'
import isEmpty from "lodash/isEmpty";
import axios from 'axios';
import Board from 'react-trello/dist'
import update from 'immutability-helper'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const firebase = require("firebase");
const classes=[{}];
class courses extends Component{
  
  constructor(props, context){
    super(props, context);
    this.state={
      test:[],
      another:[],
      response:[],
      table:[],
      setUp:null,
      dragged: undefined,
      user:""
    };
  }
  componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/senior/universities/californiastateuniversitynorthridge?format=json",{
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then(response =>{
        const classes = response.data;
        const id =response.data.filter(input=>input.californiastateuniversitynorthridge_courses !== null);
        const data ={
          lanes: [
            {
              id: "Courses",
              title: "Courses",
              style:{backgroundColor:'#343a40', color:'white', textAlign:'center' },
              cards:id.map(point=>({
                id:point.californiastateuniversitynorthridge_id.toString(),
                title:point.californiastateuniversitynorthridge_courses
              }))
              
             
            },
            {
              id: 'lane2',
              style:{backgroundColor:'#343a40', color:'white', textAlign:'center'},
              title: 'Current Courses',
              cards: []
            }
          ]
        };        this.setState({
          test: classes,
          another: id,
          table: [],
          response:[],
          setUp:data
        },
        function(){console.log("response",this.state.test, this.state.another, this.state.setUp)}
        );
        
        
      })
      
      .catch(error => this.setState({ error }));
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("user is in",user)
          var check = firebase.auth().currentUser;
          if(check){
            console.log(check)
          }
        } else {
          // No user is signed in.
        }
      });
  }

  onDragEnd = (cardId, sourceLandId, targetLaneId, card) => {
    console.log('Calling onDragENd')
    let draggedData =this.state.setUp
    console.log('Calling onDragENd',draggedData)
    const laneIndex = draggedData.lanes.findIndex(lane => lane.id === sourceLandId)
    const cardIndex = draggedData.lanes[laneIndex].cards.findIndex(card => card.id === cardId)
    const cardTitle  = draggedData.lanes[laneIndex].cards[cardIndex].title;
    console.log("cardTitle",cardTitle)
   // const updatedData = draggedData.lanes[1].cards.push(cardTitle)
   //  this.setState({setUp: updatedData})
    this.addToState(cardTitle)
    console.log("response state", this.state.response)
  }
  addToState(input){
    if(input===null){return}
    if(this.state.response.indexOf(input)===-1){
      this.state.response.push(input)
    }
    else{
      alert("course has already been added")
    }
  }
  updateBoard = newData => {
    console.log('calling updateBoard')
    this.setState({dragged: newData})
  }


  render(){
    if(this.state.setUp!==null){
      return(
        <div>
          <Board  
        style={{backgroundColor:'#6c757d', fontFamily:'Verdana'}}
        selectedTitle='Current Courses'
        data={this.state.setUp} 
        draggable
       // onDataChange={this.updateBoard}
        handleDragEnd={this.onDragEnd}
        />
        <MDBBtn color="primary" >Submit</MDBBtn>
        </div>
      )
    }
    else{
      return( 
        <div>
          { this.state && this.state.setUp &&
            alert(this.state.setUp)
          }
        </div>  
            
        )
    }
      
    }
    
}

export default courses;