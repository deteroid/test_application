import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "Onkar", age: 20 },
      { name: "Abhishek", age: 24 },
      { name: "Akash", age: 25 },

    ]
  }

  switchHandler = () => {
    this.setState({
      person: [
        { name: "Raju", age: 24 },
        { name: "Abhishek", age: 20 },
        { name: "Akash", age: 25 },

      ]
    })
  }

  switchHandlerInput = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: 24 },
        { name: "Abhishek", age: 20 },
        { name: "Akash", age: 25 },

      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>This is H1</h1>
        <button onClick={this.switchHandler} >Switch name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age} 
          click={this.switchHandlerInput}
          />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age} 
          />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age} 
          />

      </div>
    )
  }
}

export default App;
