import { useState } from "react";
import Header from "./components/Header"
import Userinput from "./components/Userinput"
import Results from "./components/Results";
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
      return{
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <Userinput userInput={userInput} onChange={handleChange} />
      {!inputValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
