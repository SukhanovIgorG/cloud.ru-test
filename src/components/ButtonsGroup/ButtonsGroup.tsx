import styles from "./ButtonsGroup.module.scss"

interface ButtonsGroupProps {
  children: any
}

export const ButtonsGroup = ({ children }: ButtonsGroupProps) => {
  return <div className={styles.buttons_container}>{children}</div>
}
