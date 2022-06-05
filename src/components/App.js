import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Form from "./Form";

class App extends Component {
  state = {
    Dark: false,
    FormData: {
      FirstName: "Omkar",
      LastName: "Tapale",
      Thumbnail: "https://avatars.githubusercontent.com/u/1477542?v=4",
      URL: "https://omkartapale@github.io",
      Description:
        "Huge fan of open source software and an active contributor on Github. I can help you with building your business solution portals, e-commerce websites, portfolio websites, beautiful illustrations for your branding and could help you automate your stuff.",
      KeyWords: "Omkar, Tapale",
      Address: "Pune, India",
      Phone: "+91 9990909123",
      Email: "omkartapale@github.com",
      Socials: {
        Facebook: "omkartapale",
        WhatsApp: "omkar",
        Instagram: "omkartapale",
        Twitter: "omkartapale",
        LinkedIn: "omkartapale",
        GitHub: "omkartapale",
        StackOverflow: "123456"
      },
      Experience: [
        {
          Role: "Founder",
          Company: "Tech4Geek Solutions",
          Desc: "I can help you with building your business solution portals, e-commerce websites, portfolio websites, and beautiful illustrations for your branding and could help you automate your stuff.",
          Start: "2011",
          End: "Present",
        },
      ],
      Education: [
        {
          Degree: "Masters in Computer Application",
          Institute: "TMU, Pune",
          Desc: "Computer Science - Web Development Track",
          Start: "August 2012",
          End: "May 2015",
        },
      ],
      Skills: {
        Tools: ['html','css','react'],
        Workflow: [
          "Mobile-First, Responsive Design",
          "Cross Browser Testing & Debugging",
          "Cross Functional Teams",
          "Agile Development & Scrum",
        ],
      },
      Interests: [
        "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",
      ],
      Awards: [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005",
      ],
    },
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  handleChange = (e) => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value,
      },
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
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
              aria-hidden="true"
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <Form
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData,
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Code
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                {...this.state.FormData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
