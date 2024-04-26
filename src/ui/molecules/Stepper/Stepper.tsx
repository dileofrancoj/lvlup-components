import * as React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'

import { useStepper } from '../../../hooks/useStepper'
import * as Styled from './Stepper.styled'
import type { Props } from './Stepper.types'

export const Stepper: React.FC<Props> = (props: Props) => {
  const {
    increment,
    decrement,
    shouldShowTrashIcon,
    counter
  } = useStepper({ ...props })
  return (
    <Styled.Container>
      <Styled.Button onClick={increment} data-testid='add-btn'>
        <FaPlus />
      </Styled.Button>
      {counter}
      <Styled.Button onClick={decrement} data-testid='minus-btn'>
        {shouldShowTrashIcon ? <FaTrash role='button' /> : <FaMinus role='button' />}
      </Styled.Button>
    </Styled.Container>
  )
}
