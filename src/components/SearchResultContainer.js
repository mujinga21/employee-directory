import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import NavTabs from "./NavTabs";
import Contact from "./pages/Contact";

class SearchResultContainer extends Component {
  state = {
    searchTerm: "",
    search: "",
    results: [],
    filteredResults: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy();
  }

  searchGiphy = () => {
    API.search()
      .then((res) => {
        // console.log(res);
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
    const filteredEmployees = this.state.results.filter((employee) => {
      return employee.name.last.indexOf(event.target.value) !== -1;
    });
    console.log(filteredEmployees);
    this.setState({ filteredResults: filteredEmployees });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          results={this.state.filteredResults}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
