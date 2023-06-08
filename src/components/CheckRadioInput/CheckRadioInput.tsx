import { CheckRadioInputProps } from "./checkRadioInputTypes"
import styles from "./CheckRadioInput.module.scss"

export const CheckRadioInput = ({
  title,
  options,
  type,
}: CheckRadioInputProps) => {
  return (
    <fieldset className={styles.container}>
      <legend className={styles.legend}>{title}</legend>
      {options.map((option, i) => {
        return (
          <div key={Math.random() * i}>
            <input
              type={type}
              id={`field-${type}-group-option-${option}`}
              name={option}
              value={option}
            />
            <label htmlFor={`field-${type}-group-option-${option}`}>
              {option}
            </label>
          </div>
        )
      })}
    </fieldset>
  )
}
