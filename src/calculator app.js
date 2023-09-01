import { useState, useRef } from 'React'
function App() {
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");
    const operatorSigns = useRef(["+", "-", "/", "*"]);

    const inputChange1 = (event) => {
        setInput1(Number(event.target.value));
    };

    const inputChange2 = (event) => {
        setInput2(Number(event.target.value));
    };

    const buttonClick = () => {
        if (input1 !== null && input2 !== null && operator) {
            switch (operator) {
                case "+":
                    setResult(input1 + input2);
                    break;
                case "-":
                    setResult(input1 - input2);
                    break;
                case "*":
                    setResult(input1 * input2);
                    break;
                case "/":
                    setResult(input1 / input2);
                    break;
                default:
                    alert("Invalid operator");
            }
            setInput1(null)
            setInput2(null)
        }
    };

    return (
        <div>
            <div style={{ display: "flex", gap: "4px" }}>
                <input
                    type="number"
                    value={input1 || ""}
                    onChange={inputChange1}
                />
                <select
                    onChange={(event) => setOperator(event.target.value)}
                    value={operator}
                >
                    <option disabled value=""></option>
                    {operatorSigns.current.map((val) => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={input2 || ""}
                    onChange={inputChange2}
                />
                <button onClick={buttonClick}>Submit</button>
            </div>
            <p>{result}</p>
        </div>
    );
}

export default App;