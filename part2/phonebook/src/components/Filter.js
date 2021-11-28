import React from 'react'
const Filter = ({searchName, filterName}) => {
    return (
        <div>
            filter shown with <input value={searchName} onChange={filterName}></input>
        </div>
    )
}

export default Filter;