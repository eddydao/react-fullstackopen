import React from "react";

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
const Total = ({ course }) => {
    var parts  = course.parts;
    const total = parts.reduce( ((sum, part) => sum + part.exercises ), 0);
    return(
        <p><b>Number of exercises {total}</b></p>
    ) 
}

const Part = (props) => {
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>    
    )
}

const Content = ({ parts }) => {
    console.log(parts);
    return (
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Course = ({course})=>{
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total course={course} />
        </div>
    )
}

export default Course;