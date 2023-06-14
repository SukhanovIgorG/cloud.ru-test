import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ButtonsGroup, Button } from "../../components"
import { Profile } from "../../components/Profile/Profile"
import { setEmail, setTell } from "../../store/rootSlice"

import type { formValueTypes, InitialStateTypes } from "../../store/StoreTypes"

import styles from "./Main.module.scss"

export default function Main() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email: string = useSelector(
    (state: InitialStateTypes) => state.formValue.email,
  )
  const tell: string = useSelector(
    (state: InitialStateTypes) => state.formValue.tell,
  )
  const { register, handleSubmit } = useForm<formValueTypes>({
    defaultValues: {
      tell,
      email,
    },
  })

  const onSubmit = (data: formValueTypes) => {
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
          <input
            {...register("tell")}
            placeholder="+7 999 529-55-96"
            disabled={true}
          />
          <label>Email:</label>
          <input
            {...register("email")}
            placeholder="sukhanovgarik@yandex.ru"
            disabled={true}
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
