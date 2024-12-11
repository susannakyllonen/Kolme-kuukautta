import { useState } from "react";
import styled from "styled-components";
import Reset from "./Reset";
import { Button, Typography } from "@mui/material";

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 1em 1em 2em;
  margin: 2em;
  background-color: #f5e1be;
`;

// const Header = styled.h1`
//   color: blue;
//   padding-bottom: 10px;
// `;

const CalculatorWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1em;
  padding: 0.75em;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

// const Button = styled.button`
//   display: block;
//   width: 100%;
//   margin-bottom: 1em;
//   padding: 0.75em;
//   font-size: 1em;
//   border-radius: 5px;
//   border: none;
//   background-color: #007bff;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: -0.5em;
`;

const Result = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-top: 0.5em;
`;

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);

    if (isNaN(value1) || isNaN(value2)) {
      setError("Anna molemmat numerot!");
      setResult(null);
    } else {
      setError("");
      setResult(value1 + value2);
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
    setError("");
  };

  return (
    <Container>
      <Typography variant="h2">Laskin</Typography>
      <CalculatorWrapper>
        <Input
          type="number"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
          placeholder="Anna ensimmäinen numero"
        />
        <Input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Anna toinen numero"
        />
        <Button
          sx={{ width: "200px" }}
          variant="outlined"
          onClick={handleCalculate}
          size={"large"}
        >
          Laske
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {result !== null && !error && <Result>Tulos: {result}</Result>}
        <Reset onReset={handleReset} />
      </CalculatorWrapper>
    </Container>
  );
}

export default Calculator;
