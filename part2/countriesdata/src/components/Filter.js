import React from "react";

const Filter = ({countryName, countriesSearch}) =>{
    return (
        <div> 
            find countries <input value={countryName} onChange={countriesSearch}></input>
        </div>
    )
}

export default Filter;