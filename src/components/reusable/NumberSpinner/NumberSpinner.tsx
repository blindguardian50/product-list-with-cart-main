import {FiMinusCircle, FiPlusCircle} from "react-icons/fi";
import {HTMLProps} from "react";
import './NumberSpinner.css'

type NumberSpinnerProps = HTMLProps<HTMLDivElement> & {
  onPlus: () => void
  onMinus: () => void
  num: number
}

export const NumberSpinner = (props: NumberSpinnerProps) => {
  const { onPlus, onMinus, num, className, ...rest } = props
  return (
    <div className={`number-spinner ${className}`} {...rest}>
      <button className={'number-spinner__minus-button'} onClick={onMinus}><FiMinusCircle/></button>
      <div className={'number-spinner__selection-number'}>{num}</div>
      <button className={'number-spinner__plus-button'} onClick={onPlus}><FiPlusCircle/></button>
    </div>
  )
}
