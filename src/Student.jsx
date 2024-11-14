import React from "react";
import "./student.css";

function Student(props) {
  return (
    <div className="icard">
      <table>
        <tbody>
          <tr>
            <td colSpan={2}><strong>{props.college}</strong></td>
            <td rowSpan={3}>
              <img src={props.pic} alt="Student" width="100" height="100" />
            </td>
          </tr>
          <tr>
            <td><strong>Name</strong></td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td><strong>Branch</strong></td>
            <td>{props.Branch}</td>
          </tr>
          <tr>
            <td><strong>RollNo</strong></td>
            <td>{props.Rollno}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
