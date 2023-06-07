import styles from "./Button.module.scss"

interface ButtonProps {
  name: string
  fill: boolean
  route: string
}

export const Button = ({ name, fill, route }: ButtonProps) => {
  return (
    <a href={route} className={fill ? styles.contained : styles.outlined}>
      {name}
    </a>
  )
}
