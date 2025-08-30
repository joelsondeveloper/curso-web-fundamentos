import { ReactElement, FormEvent, useState } from "react";

export function userform(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i: number, e?: FormEvent) {
        if(e) {
            e.preventDefault()
        }
        if (i < 0 || i > steps.length - 1) {
            return false
        }
        
        setCurrentStep(i)
    }

    return {
        changeStep,
        currentComponent: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true : false
    }
}
