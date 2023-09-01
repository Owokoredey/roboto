import { useState } from 'react'

function EvenOrOddChecker() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const checkEvenOdd = () => {
        const Number = parseInt(number);

        if (isNaN(Number)) {
            setResult('Please enter a valid number');
        } else {
            setResult(Number % 2 === 0 ? 'Even' : 'Odd');
        }
    };

    const handleInput = (event) => {
        setNumber(event.target.value);
    };

    return (
        <div>
            <h1>Even Odd Checker</h1>
            <input
                type="text"
                value={number}
                onChange={handleInput}
                placeholder="Enter a number..."
            />
            <button onClick={checkEvenOdd}>Check</button>
            <h2>Result:</h2>
            <p>{result}</p>
        </div>
    );
}

export default EvenOrOddChecker;
