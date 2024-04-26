import React from 'react'

import type { Props } from '../ui/molecules/Stepper/Stepper.types'

interface UseStepperProps {
  increment: () => void
  decrement: () => void
  isRemovePressed: boolean
  isAddPressed: boolean
  shouldShowTrashIcon: boolean
  counter: number
}

export const useStepper = (props: Props): UseStepperProps => {
  const { defaultValue = 1, min = 1, withTrashIcon = true, max, onStepperChange } = props
  const [counter, setCounter] = React.useState(defaultValue)
  const [isRemovePressed, setIsRemovedPressed] = React.useState(false)
  const [isAddPressed, setIsAddPressed] = React.useState(false)

  const shouldShowTrashIcon = counter === min && withTrashIcon

  React.useEffect(() => {
    onStepperChange(counter)
  }, [counter])

  const increment = (): void => {
    if (counter >= max) return
    setCounter((prev) => prev + 1)
    setIsAddPressed(true)
  }

  const decrement = (): void => {
    if (counter > 0 && counter > min) {
      setCounter((prev) => prev - 1)
      setIsRemovedPressed(true)
    }
  }

  return {
    increment,
    decrement,
    shouldShowTrashIcon,
    counter,
    isAddPressed,
    isRemovePressed

  }
}
