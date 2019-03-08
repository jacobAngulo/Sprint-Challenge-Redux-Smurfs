import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addSmurf } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount = () => {
    this.props.getData();
  };

  handleChanges = e => {
    e.preventDefault();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    if (
      this.state.smurf.name !== "" &&
      this.state.smurf.age !== "" &&
      this.state.smurf.height !== ""
    ) {
      this.props.addSmurf(this.state.smurf);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li>
                <div>
                  <p>{smurf.name}</p>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            value={this.state.smurf.name}
            placeholder="name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="age"
            value={this.state.smurf.age}
            placeholder="age"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="height"
            value={this.state.smurf.height}
            placeholder="height"
            onChange={this.handleChanges}
          />
          <button>add smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getData, addSmurf }
)(App);
