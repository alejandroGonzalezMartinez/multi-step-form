import { useState } from 'react'
import { formFields } from '../services/data'

export function useStep() {
  const [step, setStep] = useState(1)

  function handleNext() {
    if (step === 1 && !validateForm()) return
    setStep(step + 1)
  }

  function handleBack() {
    setStep(step - 1)
  }

  function handleChangeType() {
    setStep(2)
  }

  return {step, handleNext, handleBack, handleChangeType}
}

function validateForm() {
  const inputs = document.querySelectorAll('.input')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let error = false

  inputs.forEach((input, index) => {
    if (!input.value.trim().length) {
      input.parentNode.classList.add('is-empty')
      error = true
    } else if (index === 1 && !emailRegex.test(input.value)) {
      input.parentNode.classList.add('is-invalid')
      error = true
    } else {
      input.parentNode.classList.remove('is-empty')
      input.parentNode.classList.remove('is-invalid')
      formFields[index].value = input.value
    }
  })

  return !error
}
