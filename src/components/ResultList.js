import React from "react";

// function ResultList(props) {
class ResultList extends React.Component {
  state = {
    results: [],
  };
  

  render() {
    console.log(this.state.results);

  
    return (
      <table>
        <thead>
          <tr>
            <th>first Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>image</th>
          </tr>
        </thead>

        <tbody>
          {this.props.results.map((result) => {
            return (
              <tr className="list-group-item" key={result.login.uuid}>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.email}</td>
                <td>
                  <img
                    alt="mypicture"
                    className="img-fluid"
                    src={result.picture.thumbnail}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      // <div className= "container">

      // </div>
    );
  }
}

export default ResultList;
