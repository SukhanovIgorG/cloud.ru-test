import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNickName, setSerName, setName, setSex } from "../../store/rootSlice"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import type { InitialStateTypes, formValueTypes } from "../../store/StoreTypes"

import {
  ButtonsGroup,
  FormContainer,
  Button,
  LinkButton,
  StepperLine,
} from "../../components"

import styles from "./StepOne.module.scss"

const schema: any = yup.object({
  name: yup
    .string()
    .max(50)
    .matches(/^[aA-zZ\s]+$/, { message: "only alpha characters" }),
  nickname: yup
    .string()
    .max(30)
    .matches(/^[aA-zZ\s]+$/, { message: "only alpha characters" }),
  sername: yup
    .string()
    .max(50)
    .matches(/^[aA-zZ\s]+$/, { message: "only alpha characters" }),
  sex: yup
    .string()
    .max(50)
    .matches(/[man | woman | \s ]/, { message: "only man or woman" }),
})

export default function StepOne() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const nickname = useSelector(
    (state: InitialStateTypes) => state.formValue.nickname,
  )
  const name = useSelector((state: InitialStateTypes) => state.formValue.name)
  const sername = useSelector(
    (state: InitialStateTypes) => state.formValue.sername,
  )
  const sex = useSelector((state: InitialStateTypes) => state.formValue.sex)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValueTypes>({
    defaultValues: {
      nickname,
      name,
      sername,
      sex,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: formValueTypes) => {
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
          <p className={styles.errors}>{errors?.nickname?.message}</p>
        </div>
        <div className={styles.container_input}>
          <label>Name:</label>
          <input {...register("name")} placeholder="Placeholder" />
          <p className={styles.errors}>{errors?.name?.message}</p>
        </div>
        <div className={styles.container_input}>
          <label>Sername:</label>
          <input {...register("sername")} placeholder="Placeholder" />
          <p className={styles.errors}>{errors?.sername?.message}</p>
        </div>
        <div className={styles.container_select}>
          <label htmlFor={"sex"}>Sex</label>
          <select {...register("sex")} id="field-sex" className={styles.select}>
            <option value=" ">Не выбрано</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <p className={styles.errors}>{errors?.sex?.message}</p>
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
