import { InputProps } from "./inputTypes"
import styles from "./Input.module.scss"

export const Input = ({ name, id, type, placeholder, title }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{title}</label>
      <input name={name} type={type} placeholder={placeholder} id={id}></input>
    </div>
  )
}