import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ButtonsGroup, Button } from "../../components"
import { Profile } from "../../components/Profile/Profile"
import { setEmail, setTell } from "../../rootSlice"

import type { InitialStateTypes } from "../../StoreTypes"

import styles from "./Main.module.scss"

export default function Main() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email: string = useSelector((state: InitialStateTypes) => state.email)
  const tell: string = useSelector((state: InitialStateTypes) => state.tell)
  const { register, handleSubmit } = useForm<InitialStateTypes>({
    defaultValues: {
      tell,
      email,
    },
  })

  const onSubmit = (data: InitialStateTypes) => {
    dispatch(setEmail(data.email))
    dispatch(setTell(data.tell))
    navigate("/stepone")
  }

  return (
    <div className={styles.container}>
      <Profile></Profile>
      <form className={styles.form_main} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_input}>
          <label>Номер телефона:</label>
          <input {...register("tell")} placeholder="+7 999 999-99-99" />
          <label>Email:</label>
          <input
            {...register("email")}
            placeholder="tim.jennings@example.com"
          />
        </div>
        <ButtonsGroup>
          <Button
            name="Начать"
            fill={true}
            id="button-start"
            type={"submit"}
          ></Button>
        </ButtonsGroup>
      </form>
    </div>
  )
}
