import { ButtonProps } from "./buttonTypes"
import styles from "./Button.module.scss"

export const Button = ({ name, fill, route, id }: ButtonProps) => {
  return (
    <a
      href={route}
      className={fill ? styles.contained : styles.outlined}
      id={id}
    >
      {name}
    </a>
  )
}
