import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const generateRandomColor = () => {
    const hexidecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    const color = new Array(6)
      .fill('')
      .map(() => hexidecimal[Math.floor(Math.random() * hexidecimal.length)])
      .join("");
    // console.log(color);
    return `#${color}`;
  }

  const pickNewColor = () => {
    //TODO: generate a random color here
    const actualColor = generateRandomColor();
    console.log(actualColor);

    setColor(actualColor);
    setAnswers(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(() => 0.5 - Math.random()));

  }

  useEffect(() => {
    pickNewColor();
  }, []);

  function handleAnswerClick(answers: string) {
    if (answers === color) {
      //TODO: correct answer
      setIsWrong(false);
      pickNewColor();
    }
    else {
      //TODO: wrong answer
      setIsWrong(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>What is the hex color of the box?</h2>
        <div className="guess-me-box" style={{ background: color }}>

        </div>
        <div>
          {answers.map(answers =>
            <button onClick={() => handleAnswerClick(answers)}
              key={answers}>{answers}</button>
          )}
        </div>
        {isWrong && <p className='wrong'>Wrong Answer</p>}
      </header>
    </div>
  );
}

export default App;
