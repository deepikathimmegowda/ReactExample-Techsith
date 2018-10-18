import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col"><span>A:</span><span>{this.props.a}</span>
          <br/><button onClick={() => this.props.UpdateA(this.props.b)}>Update A</button>
        </div>
        <div className="col"><span>B:</span><span>{this.props.b}</span>
          <br/><button onClick={() => this.props.UpdateB(this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) =>{
  return{
    a : store.rA.a,
    b : store.rB.b
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    UpdateA : (b) => dispatch({type : 'UPDATE_A', b : b}),
    UpdateB : (a) => dispatch({type : 'UPDATE_B',  a : a}),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
