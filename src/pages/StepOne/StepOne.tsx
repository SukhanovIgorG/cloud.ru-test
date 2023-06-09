import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNickName, setSerName, setName, setSex } from "../../rootSlice"

import type { InitialStateTypes } from "../../StoreTypes"

import {
  ButtonsGroup,
  FormContainer,
  Button,
  LinkButton,
  StepperLine,
} from "../../components"

import styles from "./StepOne.module.scss"

export default function StepOne() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const nickname = useSelector((state: InitialStateTypes) => state.nickname)
  const name = useSelector((state: InitialStateTypes) => state.name)
  const sername = useSelector((state: InitialStateTypes) => state.sername)
  const sex = useSelector((state: InitialStateTypes) => state.sex)
  const { register, handleSubmit } = useForm<InitialStateTypes>({
    defaultValues: {
      nickname,
      name,
      sername,
      sex,
    },
  })

  const onSubmit = (data: InitialStateTypes) => {
    dispatch(setNickName(data.nickname))
    dispatch(setSerName(data.name))
    dispatch(setName(data.sername))
    dispatch(setSex(data.sex))
    navigate("/steptwo")
  }
  return (
    <FormContainer>
      <StepperLine step={1} total={3}></StepperLine>
      <form className={styles.form_so} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_input}>
          <label>Nickname:</label>
          <input {...register("nickname")} placeholder="Placeholder" />
        </div>
        <div className={styles.container_input}>
          <label>Name:</label>
          <input {...register("name")} placeholder="Placeholder" />
        </div>
        <div className={styles.container_input}>
          <label>Sername:</label>
          <input {...register("sername")} placeholder="Placeholder" />
        </div>
        <div className={styles.container_select}>
          <label htmlFor={"sex"}>Sex</label>
          <select {...register("sex")} id="field-sex" className={styles.select}>
            <option value="">Не выбрано</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
        </div>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Далее"
            fill={true}
            id="button-next"
            type="submit"
          ></Button>
        </ButtonsGroup>
      </form>
    </FormContainer>
  )
}
