import React, { useState } from 'react';
import Filter from "./components/Filter";
import NewPerson from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
        ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchName, setSearchName] = useState('');

    const addNewName = (event) => {
        setNewName(event.target.value);
    }  

    const addNewNumber = (event) => {
        setNewNumber(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

        const existPersons = persons.filter(person => person.name === newName);

        if(existPersons.length > 0 ){
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const personObject = {
            name: newName
            , number: newNumber
        }

        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');

    }

    const filterName = (event) => {
        console.log(event.target.value);
        setSearchName(event.target.value);
    }

    const personsToShow = searchName === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchName));

  return (
    <div>
        <h2>Phonebook</h2>
        <Filter searchName={searchName} filterName={filterName}></Filter>
        <h3>Add a new </h3>
        <NewPerson submitForm={submitForm} addNewName={addNewName} addNewNumber={addNewNumber} newName={newName} newNumber={newNumber}></NewPerson>
        
        <h2>Numbers</h2>
        <Persons persons={personsToShow}></Persons>
    </div>
  )
}

export default App