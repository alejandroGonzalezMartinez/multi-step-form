export function Buttons({ step, onBack, onNext }) {
  return (
    <div className='buttons-section-container'>
      <button
        onClick={onNext} 
        className={
          step === 4
            ? 'next-button is-active'
            : 'next-button'
        }
      >
        {step !== 4 ? 'Next Step' : 'Confirm'}
      </button>
      {
        step > 1 &&
        <button onClick={onBack} className='back-button'>
          Go Back
        </button>
      }
    </div>
  )
}