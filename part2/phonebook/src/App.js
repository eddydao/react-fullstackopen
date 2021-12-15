import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Filter from "./components/Filter";
import NewPerson from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./service/PersonData";
import Alert from "./components/Alert";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchName, setSearchName] = useState('');
    const [alert, setAlert] = useState();
    const [errId, setErrId] = useState();

    useEffect(() =>{
        personService
            .getAll()
            .then(returnedData => setPersons(returnedData))
    }, [])


    const addNewName = (event) => {
        setNewName(event.target.value);
    }  

    const addNewNumber = (event) => {
        setNewNumber(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

        const existPersons = persons.filter(person => person.name === newName);
        console.log(existPersons);
        const personObject = {
            name: newName
            , number: newNumber
        }

        if(existPersons.length > 0 ){
            if(window.confirm(`${existPersons[0].name} is already added to phonebook, replace the old number with the new one?`)){
                const changedPerson = { ...existPersons[0], number: newNumber}
                personService
                    .updateNumber(changedPerson)
                    .then( returnedData => { 
                        setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedData));
                        setNewName('');
                        setNewNumber('');
                        setErrId('1');
                        setAlert(`Information of ${changedPerson.name} has changed`);
                        setTimeout(() => {
                            setAlert(null);
                            setErrId();
                        }, 2000)
                    })
                    .catch( error => {
                        setErrId('-1');
                        setAlert(`Information of ${changedPerson.name} is already removed from server`);
                        setTimeout(() => {
                            setAlert(null);
                            setErrId('1');
                        }, 2000)
                    })
                
                ;
            }
        }else {
            personService.create(personObject).then( returnedData => { 
                setPersons(persons.concat(returnedData));
                setNewName('');
                setNewNumber('');
                setAlert(`Added ${returnedData.name}`);
                setTimeout(() => {
                    setAlert(null)
                }, 2000)
            });
        }

    }

    const filterName = (event) => {
        setSearchName(event.target.value);
    }

    const deletePerson = (id, name) => {
        if(window.confirm(`Delete ${name}?`)){
            personService.deletePerson(id).then( returnedData => {
                setPersons(persons.filter(person => person.id !== id ))
            })
        }
    }
    const personsToShow = searchName === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchName));

  return (
    <div>
        <h2>Phonebook</h2>
        <Alert errId={errId} message={alert}></Alert>
        <Filter searchName={searchName} filterName={filterName}></Filter>
        <h3>Add a new </h3>
        <NewPerson submitForm={submitForm} addNewName={addNewName} addNewNumber={addNewNumber} newName={newName} newNumber={newNumber}></NewPerson>
        
        <h2>Numbers</h2>
        <Persons persons={personsToShow} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App