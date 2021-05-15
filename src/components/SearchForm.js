import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.searchTerm}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;









// function HelloBootstrap() {
//   return (
//     <div className="container">
//       <div className="jumbotron">
//         <h1>Hello, world!</h1>
//         <p>I'm a jumbotron!</p>
//         <p>
//           <button className="btn btn-primary btn-lg">Learn more</button>
//         </p>
//       </div>
//       <div className="card mb-4">
//         <div className="card-header">
//           <h3>Card title</h3>
//         </div>
//         <div className="card-body">
//           <p className="card-text">Card content</p>
//         </div>
//       </div>
//       <div className="card mb-4">
//         <div className="card-header">
//           <h3>Card title</h3>
//         </div>
//         <div className="card-body">
//           <p className="card-text">Card content</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HelloBootstrap;

