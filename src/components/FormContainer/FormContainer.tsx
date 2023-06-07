import styles from "./FormContainer.module.scss"

interface FormContainerProps {
  children: any
}

export function FormContainer({ children }: FormContainerProps) {
  return <div className={styles.container}>{children}</div>
}
