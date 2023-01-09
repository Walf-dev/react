import logo from './logo.svg';
import './App.css';
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import React, { useState } from "react";


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email: "",
    message:"",
  });

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleInputData = input => e => {
const {value} = e.target;  
setFormData (prevState => ({
  ...prevState,
  [input]:value
}))
}

switch(step) {
  case 1:
    return(
      <StepOne values= {formData} nextStep= {nextStep} handleFormData= {handleInputData}/>
    );
    case 2:
      return(
        <StepTwo  values= {formData} nextStep= {nextStep} prevStep= {prevStep} handleFormData= {handleInputData}/>
      );
      default:
        return(
          <div className="App">
        
      </div>
        )
}
}

export default App;
