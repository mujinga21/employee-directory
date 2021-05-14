import React from "react";

function ResultList(props) {
  // console.log(props.searchTerm);
  //create a function
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id.value}>
          {result.name.first} {result.name.last} {result.email}{" "}
          <img
            alt="mypicture"
            className="img-fluid"
            src={result.picture.thumbnail}
          />
          {console.log("result", result)}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;

// cell: "48057728"
// dob: {date: "1955-10-16T02:54:30.607Z", age: 66}
// email: "chloe.ekker@example.com"
// gender: "female"
// id: {name: "FN", value: "16105542899"}
// location: {street: {…}, city: "Hafslo", state: "Nord-Trøndelag", country: "Norway", postcode: "5709", …}
// login: {uuid: "6e07918f-c6cd-432f-bed3-7eb9c0fc3ee1", username: "bigfish384", password: "tabatha", salt: "TJXb0Vo6", md5: "2289869b62b1f477fd3c15dd91a20bfc", …}
// name: {title: "Ms", first: "Chloe", last: "Ekker"}
// nat: "NO"
// phone: "35106935"
// picture: {large: "https://randomuser.me/api/portraits/women/15.jpg", medium: "https://randomuser.me/api/portraits/med/women/15.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg"}
// registered: {date: "2015-04-25T02:40:20.468Z", age: 6}
// __proto__: Object
