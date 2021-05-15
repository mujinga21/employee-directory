import logo from "./logo.svg";
import "./App.css";
import ResultList from "./pages/ResultList";
import SearchForm from "./pages/SearchForm";
import SearchResultContainer from "./pages/SearchResultContainer";

import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
      
        <Wrapper>
        
          <Route exact path="/resultList" component={ResultList} />
          <Route exact path="/searchForm" component={SearchForm} />
          <Route exact path="/searchResultContainer" component={SearchResultContainer} />
        </Wrapper>
        
      </div>
    </Router>
  );
}







// import SearchResultContainer from "./components/SearchResultContainer";

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header"></header> */}
//       <SearchResultContainer></SearchResultContainer>
//     </div>
//   );
// }

export default App;

