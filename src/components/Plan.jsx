import { listOfAdds, listOfTypes } from '../services/data'

export function Plan({ plan, onChangeType }) {
  let type,
  duration = plan.duration === 'mo' ? 'Monthly' : 'Yearly'
  
  for (let i in listOfTypes) {
    if (plan.types[i]) {
      type = {
        name: listOfTypes[i].name,
        price: listOfTypes[i].price
      }
      break
    }
  }

  return (
    <>
      <div className='plan'>
        <div className='type'>
          <h2 className='title'>{type.name} ({duration})</h2>
          <button onClick={onChangeType} className='change'>Change</button>
          <span className='price'>${type.price}/{plan.duration}</span>
        </div>
        <hr className='divider' />
        <div className='adds'>
          {
            listOfAdds?.map((add, index) => (
              plan.adds[index] && 
              <div key={index} className='add'>
                <span className='name'>{add.name}</span>
                <span className='price'>+${add.price}/{plan.duration}</span>
              </div>
            ))
          }
        </div>
      </div> 
      <div className='total-price'>
        <span className='total'>
          Total (per {duration.toLocaleLowerCase().slice(0, duration.length - 2)})
        </span>
        <span className='price'>+${plan.price}/{plan.duration}</span>
      </div>
    </>
  )
}