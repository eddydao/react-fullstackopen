import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const getTotal = (good, neutral, bad) => {
  return good+neutral+bad;
}

const getAverage = (good, neutral, bad) => {
  return getTotal(good, neutral, bad) !== 0 ? (good - bad) / getTotal(good, neutral, bad) : 0;
}

const getPositiveFeedbackPercentage = (good, neutral, bad) => {
  return getTotal(good, neutral, bad) !== 0 ? good / getTotal(good, neutral, bad) * 100 : 0;
}

const StatisticLine = ({text, value}) =>{
  if(text === 'positive'){
    return (
      <>
        <tr>
        <td>{text}</td>
        <td>{value} <span>%</span></td>
      </tr>
      </>
    )
  }
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistic = (props) => {
  var countGood = props.countGood;
  var countBad = props.countBad;
  var countNeutral = props.countNeutral;

  if((countGood + countBad + countNeutral) === 0){
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={countGood}/>
          <StatisticLine text="neutral" value={countNeutral}/>
          <StatisticLine text="bad" value={countBad}/>
          <StatisticLine text="all" value={getTotal(countGood,countNeutral, countBad)}/>
          <StatisticLine text="average" value={getAverage(countGood,countNeutral, countBad)}/>
          <StatisticLine text="positive" value={getPositiveFeedbackPercentage(countGood,countNeutral, countBad)}/>
        </tbody>
      </table>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>
      <h1>statistic</h1>
      <Statistic countGood={good} countBad ={bad} countNeutral={neutral}></Statistic>
    </div>
  )
}

export default App