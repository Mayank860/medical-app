import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function App(props) {
  console.log(props)
  // changeName = (e)=>{
  //     console.log(e.target.value);
  // }
 const Click = (e) => {
    console.log('this is:', e.target.value);
    props.Name = e.target.value;
  }
  return (
    <div className="App">
      <ul>
        <li>{props.Name}</li>
        <li>{props.contactInfo.tel}</li>
        <li>{props.contactInfo.email}</li>
        <li>{props.contactInfo.address.country}</li>
        <li>{props.contactInfo.address.state}</li>
        <li>{props.contactInfo.address.city}</li>
        <li>{props.contactInfo.address.houseno}</li>
        <input type="text" value={props.Name} onChange={Click}></input>
        <button onClick={()=>props.changeDetails(props)}>Change Details</button>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) =>{
   return {
    ...state
   }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      changeDetails: (hospitalDetails)=>{
        dispatch({type:'CHANGE_DETAILS',payload:hospitalDetails})
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
