import { useState } from "react"

export function changeSteps(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function mudarStep(i, e) {
        if (e) e.preventDefault();

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    mudarStep,
    isLastStep: currentStep + 1 === steps.length -1 ? true : false,
  };
}