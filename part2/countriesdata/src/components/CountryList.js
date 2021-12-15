import React from "react";


const CountryList = ({countryList, showCountryInfo}) =>{
    let countryListCount = countryList.length;
    if(countryListCount > 1 && countryListCount <= 10) {
        return (
            countryList.map(country => 
                    <div key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => showCountryInfo(country.name.common)}>show</button>
                    </div>
            )
        )
    }else if(countryList > 10){
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    return (
        <></>
    )
}

export default CountryList;