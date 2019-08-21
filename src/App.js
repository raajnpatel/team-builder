import React, { useState } from 'react';
import './App.css';
import Form from "./Form"

function App() {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [team, setTeam] = useState([
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
  ]);

  const handleChange = event => {
    setNewMember({...team, [event.target.name] : event.target.value});
    event.preventDefault();
    console.log(event.target);
  };

  return (
      <div className="App">
        <h1>The Team</h1>
        {team.map((member, index) => {
          return (
              <div key={member.email}>
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
              </div>
          )
        })}
        <Form handleChange={handleChange}/>

      </div>
  );
}

export default App;
