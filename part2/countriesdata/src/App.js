import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import Country from './components/Country';



function App() {
    const [countries, setCountries] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() =>{
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
    }, []);

    const countriesSearch = (event) => {
        console.log(event.target.value);
        setInputSearch(event.target.value);
    }

    const showCountryInfo = (countryName) => {
        setInputSearch(countryName);
    }

    const shownCountryList = inputSearch && countries.filter(country => country.name.common.toLowerCase().includes(inputSearch.toLowerCase()));

    return (
        <>
            <Filter countryName={inputSearch} countriesSearch={countriesSearch}></Filter>
            { !shownCountryList ? null : shownCountryList.length === 1 ? (
                <Country country={shownCountryList[0]}></Country>
            ) : (
                <CountryList countryList={shownCountryList} showCountryInfo={showCountryInfo}></CountryList>
            )}
        </>
    )
}

export default App;
