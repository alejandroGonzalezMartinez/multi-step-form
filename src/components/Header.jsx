export function Header({ step }) {
  return (
    <header className='header'>
      <div>
        <HeaderCircle step={step}>1</HeaderCircle>
        <div className='info'>
          <span>STEP 1</span>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div>
        <HeaderCircle step={step}>2</HeaderCircle>
        <div className='info'>
          <span>STEP 2</span>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div>
        <HeaderCircle step={step}>3</HeaderCircle>
        <div className='info'>
          <span>STEP 3</span>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div>
        <HeaderCircle step={step}>4</HeaderCircle>
        <div className='info'>
          <span>STEP 4</span>
          <span>SUMMARY</span>
        </div>
      </div>
    </header>
  )
}

export function HeaderCircle({ step, children }) {
  return (
    <div 
      className={
        children == step
          ? 'header-circle is-active'
          : 'header-circle'
      }
    >
      {children}
    </div>
  )
}