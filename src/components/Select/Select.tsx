import { SelectProps } from "./selectTypes"
import styles from "./Select.module.scss"

export const Select = ({
  name,
  id,
  placeholder,
  title,
  options,
}: SelectProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{title}</label>
      <select
        name={name}
        placeholder={placeholder}
        id={id}
        className={styles.select}
      >
        <option value="">Не выбрано</option>
        {options.map((option) => {
          return (
            <option value={option} id={`field-sex-option${option}`}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}
