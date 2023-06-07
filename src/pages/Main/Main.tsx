import { ButtonsGroup, Button } from "../../components"

import styles from "./Main.module.scss"

export default function Main() {
  return (
    <div className={styles.container}>
      <p>profile</p>
      <ButtonsGroup>
        <Button name="Начать" route="/stepone" fill={true}></Button>
      </ButtonsGroup>
    </div>
  )
}
