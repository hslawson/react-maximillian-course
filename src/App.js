import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Ishmael", age: 28},
      {name: "Ahab", age: 59},
      {name: "Starbuck", age: 34}
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //Don't do this: this.state.persons[0].name = "Maximillian";
    this.setState( {
      persons: [
        {name: newName, age: 32},
        {name: "Ahab", age: 59},
        {name: "Starbuck", age: 34}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Ishmael", age: 32},
        {name: "Ahab", age: 59},
        {name: event.target.value, age: 34}
      ]
    })

  }


  render() {
    return (
      <div className="App">
        <h1>Moby Dick; or the Whale</h1>
        <p>By Herman Melville</p>
        <button onClick={() => this.switchNameHandler("Max")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies: Writing</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "The Sailor")} />
        <Person   
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app!'));
  }
}

export default App;
