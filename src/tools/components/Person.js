import React from "react";
import "./Persons.css";

export default (props) => {
  return (
    <div className="person">
      <span className="person-delete" onClick={props.del}>
        <p>Delete</p>
      </span>

      <div className="person-container">
        <span className="person-name">{props.name}</span>
        <span className="person-age">{props.age}</span>
      </div>
    </div>
  );
};

/*

const jss = createUseStyles({
  person: {
    position: "relative",
    color: "#fff",
    personContainer: {
      position: "relative",
      left: "-80px",
    },
    personName: {
      display: "inline-block !important",
      paddingBottom: "40px",
      margin: "0 5px",
    },
    personAge: {
      display: "inline-block !important",
      paddingBottom: "40px",
      margin: "0 5px",
    },
    "person-delete": {
      display: "flex",
      width: "200px",
      position: "relative",
      left: "150px",
      top: "40px",
      backgroundColor: "red",
      cursor: "pointer",
      "& p": {
        padding: "5px",
        margin: "auto",
      },
    },
  },
});


*/
