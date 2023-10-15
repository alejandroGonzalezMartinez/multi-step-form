import checkmarkIcon from '../assets/images/icon-checkmark.svg'

export function Adds({ adds, addsSelected, duration, onAdds }) {
  return (
    <div className='adds'>
      {
        adds?.map((add, index) => (
          <Add 
            key={index}
            add={add}
            isSelected={addsSelected[index]}
            duration={duration}
            onAdd={onAdds}
            index={index}
          />
        ))
      }
    </div>
  )
}

export function Add({ add, isSelected, duration, onAdd, index }) {
  function handleAdd() {
    onAdd(index)
  }
  
  const { name, description, price } = add

  return (
    <div
      onClick={handleAdd}
      className={
        isSelected ? 'add is-selected' : 'add'
      }
    >
      <figure className='img-container'>
        <img src={checkmarkIcon} alt={name} className='img' />
      </figure>
      <h2 className='title'>{name}</h2>
      <p className='paragraph'>{description}</p>
      <span className='price'>+${price}/{duration}</span>
    </div>
  )
}