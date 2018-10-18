import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>
        <div>History</div>
        <ul>
            {this.props.history.map(el => (
              <li key={el.id} 
              onClick={() => this.props.onDelItem(el.id)}>  {el.age}
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history : state.history 
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 10 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 5 }),
    onDelItem: (id) => dispatch( { type : "DEL" , key : id})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);