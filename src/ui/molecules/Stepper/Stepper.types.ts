export interface Props {
  defaultValue?: number
  max: number
  min?: number
  onStepperChange: (value: number) => void
  withTrashIcon?: boolean
}
