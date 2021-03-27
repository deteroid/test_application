import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"A1", name: "Onkar", age: 20 },
      {id:"A2", name: "Abhishek", age: 24 },
      {id:"A3", name: "Akash", age: 25 },
    ],
    Visible: false,
  }

  switchHandler = () => {
    const show = this.state.Visible;
    this.setState({ Visible: !show });
  }

  switchHandlerInput = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const Person = {...this.state.persons[personIndex]};

    Person.name = event.target.value;

    const Persons = [...this.state.persons];
    Persons[personIndex] = Person;

    this.setState( {persons : Persons });

  }

  deleteHandler = (index) => {
    const person = this.state.persons;
    person.splice(index, 1);
    this.setState({person: person});
  }


  render() {

    let persons = null;

    if (this.state.Visible) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person age={person.age} 
            name={person.name} 
            key={person.id}
            clicked={() => this.deleteHandler(index)}
            changed={(event) => this.switchHandlerInput(event, person.id)}
            ></Person>
          } )}
        </div>

      )
    }

    return (
      <div className="App">
        <h1>This is H1</h1>
        <button onClick={this.switchHandler} >Switch name</button>
        {persons}

      </div>
    )
  }
}

export default App;
