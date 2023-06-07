import { ButtonsGroup, Button } from "../../components"
import { Profile } from "../../components/Profile/Profile"

import styles from "./Main.module.scss"

export default function Main() {
  return (
    <div className={styles.container}>
      <Profile></Profile>
      <ButtonsGroup>
        <Button name="Начать" route="/stepone" fill={true}></Button>
      </ButtonsGroup>
    </div>
  )
}
