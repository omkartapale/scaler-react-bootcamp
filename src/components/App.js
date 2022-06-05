import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: false,
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="mb-4 justify-content-center">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle ml-5"
            onClick={this.toggleHeader}
          >
            <i
              class={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
              aria-hidden="true"
            ></i>
          </button>
        </Header>
      </div>
    );
  }
}

export default App;
