import React , {useEffect, useState}  from "react";
import axios from "axios";
import CapitalWeather from "./CapitalWeather";

const Country = ({country}) => {
    let languages = country.languages;
    let languageArr = Object.values(languages);
    let capital = country.capital;
    const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const [weather, setWeather] = useState(null);
    const weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+ country.capital + '&units=metric&appid=' + api_key;
    useEffect(() => {
        axios.get(weatherApiUrl)
            .then(response => 
                setWeather(response.data)
            )
    }, [capital])
    console.log("looping");
    return(
        <>
            <h3>{country.name.common}</h3>
            <br></br>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <br></br>
            <h3>languages</h3>
            <ul>
                {   languageArr.map(language => 
                        <li key={languages.length+1}>{language}</li>)
                }
            </ul>
            <br></br>
            <div>{country.flag}</div>
            <CapitalWeather capital={country.capital} weather={weather}></CapitalWeather>
        </>
    )
}

export default Country;