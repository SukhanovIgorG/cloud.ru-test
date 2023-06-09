import type { ModalWindowType } from "./modalWindowTypes"

import styles from "./ModalWindow.module.scss"

export const ModalWindow = ({ children, onClose }: ModalWindowType) => {
  return <div className={styles.modal_wrapper}>{children}</div>
}
