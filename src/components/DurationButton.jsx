export function DurationButton({ duration, handleDuration }) {
    return (
      <div className='duration-button-container'>
      <span
        className={
          duration === 'mo' 
            ? 'duration is-active'
            : 'duration'
        }
      >
        Monthly
        </span>
      <button onClick={handleDuration} className='duration-button'>
        <span className={
          duration === 'ye'
            ? 'duration-button-circle is-active'
            : 'duration-button-circle'
        } />
      </button>
      <span
        className={
          duration === 'ye' 
            ? 'duration is-active'
            : 'duration'
        }
      >
        Yearly
      </span>
      </div>
    )
}