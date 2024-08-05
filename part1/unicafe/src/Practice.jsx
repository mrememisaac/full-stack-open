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

const Counter = ({ initialValue, incrementBy = 1 }) => {
  const [increment, setIncrement] = useState(incrementBy);
  const [counter, setCounter] = useState(initialValue);
  console.log('rendering with counter value', counter)

  // setTimeout(() => {
  //   setCounter(Number(counter) + increment);
  // }, 1000);

  const operationMap = new Map();
  operationMap.set('+', () => setCounter(Number(counter) + Number(increment)));
  operationMap.set('-', () => setCounter(Number(counter) - Number(increment)));

  function handleClick(e) {
    operationMap.get(e.target.value)();
    console.log('changing value by ', increment, ' value before ', counter)
  }

  const handleReset = () => {
    setCounter(0);
    console.log('resetting to zero, value before', counter)
  }

  return (
    <>
      <Display counter={counter} />
      <input type="number" value={increment} onChange={e => setIncrement(e.target.value)}></input>
      <Button onClick={handleClick} text={`+`} value={`+`} />
      <Button onClick={handleClick} text={`-`} value={`-`} />
      <Button onClick={handleReset} text={`Reset`} />
    </>)
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text, value }) => <button onClick={onClick} value={value}>{text}</button>

const History = ({ history }) => {
  return (<div>
    <span>Total Clicks: {history?.length} | </span> <span>Click Pattern: {clicks.history.join(' ')}</span>
  </div>);
}

const ClicksTracker = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0, history: [], total: 0 });

  function handleClick(source) {
    const left = source.target.value === 'L' ? clicks.left + 1 : clicks.left;
    const right = source.target.value === 'R' ? clicks.right + 1 : clicks.right;
    const history = clicks.history.concat(source.target.value); // === [...clicks.history, source.target.value];
    setClicks({ ...clicks, left: left, right: right, history: history, total: left + right });
  }


  return (
    <div>
      <h3>Clicks Tracker</h3>
      <hr />
      <div>Click the buttons</div>
      <History history={clicks.history} />
      <Button onClick={handleClick} value="L" text={`Left: ${clicks.left}`} />
      <Button onClick={handleClick} value="R" text={`Right: ${clicks.right}`} />
    </div>
  );
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
      <Counter initialValue={1} increment={2} />
      <ClicksTracker />
    </div>
  )
}

export default App