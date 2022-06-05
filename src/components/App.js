import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: false,
    Name: "",
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  changeHandler = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="mb-4">
          Portfolio Generator
        </Header>
        <div className="container">
          <div className="row">
            <div className="mb-4 col-12 text-center">
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                value={this.state.Name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="mb-4 col-12 text-center">
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                value={this.state.Name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-12 text-center">
              <button
                className={`btn btn${
                  this.state.Dark ? "-outline" : ""
                }-primary`}
                onClick={this.toggleHeader}
              >
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
