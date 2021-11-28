import React, { useState } from 'react'

const Person = ({name, number}) => {
    return (
        <p>
            {name} {number}
        </p>
    )
}

const PhoneBook = ({persons}) =>{
    return (
        <div>
            {
                persons.map(person => 
                        <Person key={person.name} name={person.name} number={person.number}></Person>
                    )
            }
        </div>
    )
}

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

    const personsToShow = searchName === '' ? persons : persons.filter(person => person.name.includes(searchName));

  return (
    <div>
        <h2>Phonebook</h2>
            <div>
                filter shown with <input value={searchName} onChange={filterName}></input>
            </div>
        <form onSubmit={submitForm}>
            <div>
                name: <input value={newName} onChange={addNewName}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={addNewNumber}></input>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        <h2>Numbers</h2>
        <PhoneBook persons={personsToShow}></PhoneBook>
    </div>
  )
}

export default App