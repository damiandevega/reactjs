import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Damian', age: 29 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    this.setState({ 
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Damian', age: 29},
        { name: 'Francesca', age: 26 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
