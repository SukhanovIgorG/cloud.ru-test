import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ButtonsGroup, LinkButton, Input, Button } from "../../components"
import { Profile } from "../../components/Profile/Profile"
import { setEmail, setTell } from "../../rootSlice"

import styles from "./Main.module.scss"

export default function Main() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state) => state.email)
  const tell = useSelector((state) => state.tell)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      tell,
      email,
    },
  })

  interface DataStepMain {
    email: string
    tell: string
  }

  const onSubmit = (data: DataStepMain) => {
    dispatch(setEmail(data.email))
    dispatch(setTell(data.tell))
    navigate("/steptwo")
  }

  return (
    <div className={styles.container}>
      <Profile></Profile>
      <form className={styles.form_main} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="tell"
          id="tell"
          placeholder="+7 999 999-99-99"
          type="text"
          title="Номер телефона"
          references={register}
        />
        <Input
          name="email"
          id="email"
          placeholder="tim.jennings@example.com"
          type="text"
          title="Email"
          references={register}
        />
        <ButtonsGroup>
          <Button
            name="Начать"
            // route="/stepone"
            fill={true}
            id="button-start"
            type={"submit"}
          ></Button>
        </ButtonsGroup>
      </form>
    </div>
  )
}
