import { ButtonsGroup, Button, Input } from "../../components"
import { Profile } from "../../components/Profile/Profile"

import styles from "./Main.module.scss"

export default function Main() {
  return (
    <div className={styles.container}>
      <Profile></Profile>
      <form className={styles.form_main}>
        <Input
          name="tell"
          id="tell"
          placeholder="+7 999 999-99-99"
          type="text"
          title="Номер телефона"
        />
        <Input
          name="email"
          id="email"
          placeholder="tim.jennings@example.com"
          type="text"
          title="Email"
        />
      </form>
      <ButtonsGroup>
        <Button
          name="Начать"
          route="/stepone"
          fill={true}
          id="button-start"
        ></Button>
      </ButtonsGroup>
    </div>
  )
}
