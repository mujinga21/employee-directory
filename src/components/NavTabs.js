import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Employees"
          onClick={() => props.handlePageChange("Employees")}
          className={props.currentPage === "Employees" ? "nav-link active" : "nav-link"}
        >
    
          Employee
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#result"
          onClick={() => props.handlePageChange("Result")}
          className={props.currentPage === "Result" ? "nav-link active" : "nav-link"}
        >
        Results
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
    
  );
}

export default NavTabs;
