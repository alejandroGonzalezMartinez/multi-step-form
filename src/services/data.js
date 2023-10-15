import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

export const stepsDescription = {
  step1: {
    h: 'Personal info',
    p: 'Please provide your name, email address, and phone number.'
  },
  step2: {
    h: 'Select your plan',
    p: 'You have the option of monthly or yearly billing.'
  },
  step3: {
    h: 'Pick add-ons',
    p: 'Add-ons help enhance your gaming experience.'
  },
  step4: {
    h: 'Finishing up',
    p: 'Double-check everything looks OK before confirming.'
  },
  getStep(step) {
    return this[`step${step}`] || true
  }
}

export const formFields = [
  {
    title: 'Name',
    name: 'name',
    placeholder: 'e.g. Stephen King'
  },
  {
    title: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com'
  },
  {
    title: 'Phone Number',
    name: 'phone',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890'
  },
]

export const listOfTypes = [
  {
    name: 'Arcade',
    price: 9,
    image: arcadeIcon
  },
  {
    name: 'Advanced',
    price: 12,
    image: advancedIcon
  },
  {
    name: 'Pro',
    price: 15,
    image: proIcon
  }
]

export const listOfAdds = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
]