import { useState } from 'react'
import { listOfTypes, listOfAdds } from '../services/data'

export function usePlan() {
  const [plan, setPlan] = useState(
    {
      duration: 'mo',
      types: [true, false, false],
      adds: [true, true, false],
      price: 12
    }
  )

  function handleDuration() {
    let newDuration, 
    newPrice = plan.price

    if (plan.duration === 'mo') {
      newDuration = 'ye'
      newPrice *= 10
    } else {
      newDuration = 'mo'
      newPrice /= 10
    }

    setPlan(
      {
        ...plan,
        price: newPrice,
        duration: newDuration
      }
    )
  }

  function handleTypes(index) {
    let newTypes = [...plan.types],
    newPrice = plan.price
    
    listOfTypes.forEach((type, index) => {
      if (newTypes[index]) {
        newPrice -= type.price
        newTypes[index] = false
      }
    })
    
    newTypes[index] = true
    newPrice += listOfTypes[index].price

    setPlan(
      {
        ...plan,
        types: [...newTypes],
        price: newPrice
      }
    )
  }

  function handleAdds(index) {
    let newAdds = [...plan.adds],
    newPrice = plan.price
    
    if (newAdds[index]) {
      newAdds[index] = false
      newPrice -= listOfAdds[index].price
    } else {
      newAdds[index] = true
      newPrice += listOfAdds[index].price
    }

    setPlan(
      {
        ...plan,
        adds: [...newAdds],
        price: newPrice
      }
    )
  }

  return {plan, handleTypes, handleDuration, handleAdds}
}