import { useState } from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercise }) => {
  return (
    <p>{name} {exercise}</p>
  );
}

const Content = ({ parts }) => {
  const content = parts.map(part => <Part key={part.name} {...part} />)
  return (content);
}

const Total = ({ parts }) => {
  const count = parts.reduce((accumulator, part) => {
    part.exercise !== undefined ? accumulator = accumulator + 1 : accumulator;
    return accumulator;
  }, 0)
  return <p>Number of exercises {count}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const course_parts = [
    {
      name: 'Fundamentals of React', exercise: 10
    },
    {
      name: 'Using props to pass data', exercise: 7
    },
    {
      name: 'State of a component', exercise: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={course_parts} />
      <Total parts={course_parts} />
    </div>
  )
}

export default App