import React, { Component } from "react";
import NavTabs from "./NavTabs";
// import logo from "./logo.svg";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Result from "./pages/Result";
import Contact from "./pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "employees") {
      return <Employees />;
    } else if (this.state.currentPage === "Result") {
      return <Result />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
