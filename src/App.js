import React, { useState } from 'react';
import './App.css';
import Form from "./Form"

function App() {
  const teamMembers = [
    {
      name: "Raajn",
      email: "raajn@lambdaschool.com",
      role: "Full-Stack Developer"
    },
    {
      name: "Olive",
      email: "olive@lambdaschool.com",
      role: "Full-Stack Dogveloper"
    },
    {
      name: "Casper",
      email: "casper@lambdaschool.com",
      role: "Web Design"
    }
  ];

  const[team, setTeam] = useState(teamMembers);


  return (
    <div className = "App">
      <h1>The Team</h1>
      {team.map((member, index) => {
        return (
            <div key = {member.email}>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
              </div>
        )})}
      <Form />

    </div>
  );
}

export default App;
