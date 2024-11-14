import React from 'react';
import Student from './Student';

export default function App() {
  const saurav = <h1>Hello World</h1>;
  const mystyle = {
    color: 'red',
    backgroundColor: 'yellow',
  };

  return (
    <div style={{ backgroundColor: 'cyan' }}>
      {saurav}
      <div style={mystyle}>
        <h1>Abes Engineering College</h1>
      </div>
      <div>
        <Student
          college="ABES Engineering College"
          name="Saurav"
          Branch="CSE"
          Rollno="124334"
          pic="https://via.placeholder.com/100" // Add an image URL if needed
        />
      </div>
      <div>
        <Student
          college="ABES Engineering College"
          name="John Doe"
          Branch="IT"
          Rollno="124335"
          pic="https://via.placeholder.com/100"
        />
      </div>
    </div>
  );
}
