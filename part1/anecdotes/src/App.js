import './App.css';
import React, { useState } from 'react';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

const Button = ({handleClick, text}) =>{
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const VoteCount = ({voteCount}) => {
  return (
    <>
      <div>has <span>{voteCount}</span> votes</div>
    </>
  )
}

const MostVote = ({anecdotes, vote}) => {
  const votes  = vote.slice();
  let maxVote = votes[0];
  let maxVoteIndex  = 0;
  for(let i = 0 ; i < votes.length; i++){
    if(votes[i] >= maxVote){
      maxVote = votes[i];
      maxVoteIndex = i;
    }
  }

  return (
    <>
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[maxVoteIndex]}
        <br/>
        <div>has <span>{maxVote}</span> votes</div>
      </div>
    </>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const points = Array.apply(null, new Array(7)).map(Number.prototype.valueOf, 0);

  const [vote, setVote] = useState(points);
  
  const setNewVote = (selectedAnecdote) => {
    debugger
    const newPoints  = vote.slice();
    newPoints[selectedAnecdote] += 1;
    return newPoints;
  }


  return (
    <div>
      {anecdotes[selected]}
      <VoteCount voteCount={vote[selected]}></VoteCount>
      <br/>
      <Button handleClick={() => setVote(setNewVote(selected))} text="vote"></Button>
      <Button handleClick={() => setSelected(getRandomIntInclusive(0, anecdotes.length))} text="next anecdote"></Button>
      <br/>
      <br/>
      <MostVote anecdotes={anecdotes} vote = {vote}></MostVote>
    </div>
  )
}

export default App;
