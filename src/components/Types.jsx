export function Types({ types, typeSelected, duration, onTypes }) {
  return (
    <div className='types'>
      {
        types?.map((type, index) => (
          <Type
            key={index}
            type={type}
            isSelected={typeSelected[index]}
            duration={duration}
            onType={onTypes}
            index={index}
          />
        ))
      }
    </div>
  )
}

export function Type({ type, isSelected, duration, onType, index}) {
  function handleType() {
    onType(index)
  }
  
  const { image, name, price} = type

  return (
    <div
      onClick={handleType}
      className={
        isSelected ? 'type is-selected' : 'type'
      }
    >
      <img src={image} alt={name} className='img' />
      <h2 className='title'>{name}</h2>
      <span className='price'>${price}/{duration}</span>
      <span 
        className={
          duration === 'ye'
            ? 'offer is-active'
            : 'offer'
        }
      >
        2 months free
      </span>
    </div>
  )
}