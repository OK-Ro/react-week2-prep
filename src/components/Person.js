import React from "react";
function Person({ person }) {
  if (!person) {
    return null;
  }

  const { name, email } = person;
  return (
    <div>
      <h2>Random Person</h2>
      <ul>
        <li>First Name: {name.first}</li>
        <li>Last Name: {name.last}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
}

export default Person;
