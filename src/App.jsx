import { useState } from 'react'
import './App.css'

function Backwords() {
  const [inputSentence, setInputSentence] = useState('');
  const [reversedSentence, setReversedSentence] = useState('');

  const reverseWords = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedResult = reversedWords.join(' ');
    return reversedResult;
  };

  const handleInput = (event) => {
    setInputSentence(event.target.value);
  };

  const handleReverse = () => {
    const reversedResult = reverseWords(inputSentence);
    setReversedSentence(reversedResult);
  };

  return (
    <div>
      <h1>Make a Sentence</h1>
      <textarea
        rows="4"
        cols="50"
        value={inputSentence}
        onChange={handleInput}
        placeholder="Enter a sentence..."
      />
      <br />
      <button onClick={handleReverse}>Reverse Words</button>
      <h2>Reversed Sentence:</h2>
      <p>{reversedSentence}</p>
    </div>
  );
}

export default Backwords;