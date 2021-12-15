import React from "react";

const CapitalWeather = ({capital, weather}) => {
    return (
        <>
            {!weather ? 
                <div></div> :
                <div>
                    <h2>Weather in {capital}</h2>

                    <span><b>temperature: </b>{weather.main.temp}</span>
                    <br></br>
                    <img src={weather.weather[0].icon} alt="" />
                    <br></br>
                    <span><b>wind: </b>{weather.wind.speed}</span><span> direction {weather.wind.deg}</span>
                </div>
            }
        </>
    )
}

export default CapitalWeather;