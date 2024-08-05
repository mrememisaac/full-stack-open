import { useState } from "react";

const Button = ({ onClick, text, value }) => <button onClick={onClick} value={value}>{text}</button>

const StatisticsLine = ({ name, value, style }) => name === undefined && value == undefined ? "" : <tr>
  <td style={style}>{name}</td>
  <td style={style}>{value}</td>
</tr>

const Statistics = ({ feedback }) => {
  const tableStyle = { borderStyle: "solid", borderWidth: "1px", borderColor: "black", textAlign: "left" }


  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableStyle}>Key</th>
            <th style={tableStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine name={"good"} value={feedback.good} style={tableStyle} />
          <StatisticsLine name={"neutral"} value={feedback.neutral} style={tableStyle} />
          <StatisticsLine name={"bad"} value={feedback.bad} style={tableStyle} />
          <StatisticsLine name={"all"} value={feedback.all} style={tableStyle} />
          <StatisticsLine name={"average"} value={feedback.average} style={tableStyle} />
          <StatisticsLine name={"positive"} value={feedback.positive} style={tableStyle} />
        </tbody>
      </table >
    </>
  );
}

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0, all: 0, average: 0, positive: 0 });

  function handleFeedback(e) {
    // const entry = { [e.target.text]: e.target.value };
    console.log(e.target.innerText, ":", e.target.value);
    const good = e.target.innerText === "good" ? feedback.good + 1 : feedback.good;
    const neutral = e.target.innerText === "neutral" ? feedback.neutral + 1 : feedback.neutral;
    const bad = e.target.innerText === "bad" ? feedback.bad + 1 : feedback.bad;
    const all = good + bad + neutral;
    const average = all / 3;
    const positive = (good / all) * 100;
    setFeedback({ good, neutral, bad, all, average, positive })
  }

  return (
    <>
      <h3>give feedback</h3>
      <Button text="good" value={1} onClick={handleFeedback} />
      <Button text="neutral" value={1} onClick={handleFeedback} />
      <Button text="bad" value={1} onClick={handleFeedback} />
      <Statistics feedback={feedback} />
    </>
  );
}

export default App