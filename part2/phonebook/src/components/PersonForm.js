import React from 'react'

const PersonFrom = (props) =>{
    return (
        <form onSubmit={props.submitForm}>
            <div>
                name: <input value={props.newName} onChange={props.addNewName}/>
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.addNewNumber}></input>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonFrom;