import { Form } from './Form'
import { Types } from './Types'
import { DurationButton } from './DurationButton'
import { Adds } from './Adds'
import { Plan } from './Plan'
import { stepsDescription, formFields, listOfTypes, listOfAdds } from '../services/data'
import thanksIcon from '../assets/images/icon-thank-you.svg'

export function SectionBox({ step, plan, onTypes, onDuration, onAdds, onChangeType }) {
  
  
  const { h: title, p: paragraph } = stepsDescription.getStep(step)

  const { duration, types, adds } = plan

  function handleDuration() {
    onDuration()
    if (duration === 'ye') {
      listOfTypes.map(type => type.price /= 10)
      listOfAdds.map(add => add.price /= 10)
    } else {
      listOfTypes.map(type => type.price *= 10)
      listOfAdds.map(add => add.price *= 10)
    }
  }

  return (
    <div className='section-box'>
      {
        step <= 4 &&
        <div className='section-box-header'>
          <h2 className='title'>{title}</h2>
          <p className='paragraph'>{paragraph}</p>
        </div>
      }
      {step === 1 && <Form fields={formFields} />}
      {
        step === 2 &&
        <>
          <Types
            types={listOfTypes}
            typeSelected={types}
            duration={duration}
            onTypes={onTypes}
          />
          <DurationButton
            duration={duration} 
            handleDuration={handleDuration}
          />
        </>
      }
      {
        step === 3 &&
        <Adds 
          adds={listOfAdds}
          addsSelected={adds}
          duration={duration}
          onAdds={onAdds}
        />
      }
      {
        step === 4 && 
        <Plan plan={plan} onChangeType={onChangeType} />
      }
      {
        step === 5 &&
        <div className='step5'>
          <img src={thanksIcon} alt='thanks icon' />
          <h2 className='title'>Thank you!</h2>
          <p className='paragraph'>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      }
    </div>
  )
}