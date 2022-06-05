import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Form from "./Form";

class App extends Component {
  state = {
    Dark: false,
    FormData: {
      FirstName: "Value of FirstName",
      LastName: "Value of LastName",
      Thumbnail: "Value of Thumbnail",
      URL: "Value of URL",
      Description: "Value of Description",
      KeyWords: "Value of KeyWords",
      Address: "Value of Address",
      Phone: "Value of Phone",
      Email: "Value of Email",
    },
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              class={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
              aria-hidden="true"
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6"><Form></Form></div>
            <div className="col-12 col-sm-6"><Code></Code></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
