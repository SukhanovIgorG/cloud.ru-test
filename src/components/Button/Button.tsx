import { ButtonProps } from "./buttonTypes"
import styles from "./Button.module.scss"

export const Button = ({ name, fill, route }: ButtonProps) => {
  return (
    <a href={route} className={fill ? styles.contained : styles.outlined}>
      {name}
    </a>
  )
}
