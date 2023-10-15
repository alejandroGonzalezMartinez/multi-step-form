import { useStep } from './custom_hooks/useStep'
import { usePlan } from './custom_hooks/usePlan'
import { Header } from './components/Header'
import { SectionBox } from './components/SectionBox'
import { Buttons } from './components/Buttons'
import './App.css'

function App() {
  const { step, handleNext, handleBack, handleChangeType } = useStep()
  const { plan, handleTypes, handleDuration, handleAdds } = usePlan()

  return (
    <main className='main'>
      <Header step={step} />
      <section className='main-section'>
        <SectionBox 
          step={step}
          plan={plan}
          onTypes={handleTypes}
          onDuration={handleDuration}
          onAdds={handleAdds}
          onChangeType={handleChangeType}
        />
      </section>
      {
        step <= 4 && 
        <section className='buttons-section'>
          <Buttons
            step={step}
            onBack={handleBack}
            onNext={handleNext}
          />
        </section>
      }
    </main>
  )
}

export default App
