import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setTextArea } from "../../rootSlice"

import type { InitialStateTypes } from "../../StoreTypes"

import {
  FormContainer,
  ButtonsGroup,
  Button,
  LinkButton,
  StepperLine,
} from "../../components"

import styles from "./StepTree.module.scss"

export default function StepTree() {
  const dispatc = useDispatch()
  const navigate = useNavigate()
  const textarea = useSelector((state: InitialStateTypes) => state.textarea)

  interface FormTypes {
    textarea: string
  }

  const { register, handleSubmit } = useForm<FormTypes>({
    defaultValues: {
      textarea,
    },
  })

  const onSubmit = (data: FormTypes) => {
    console.log("data :>> ", data)
    dispatc(setTextArea(data.textarea))
    navigate("/")
  }

  return (
    <FormContainer>
      <StepperLine step={3} total={3}></StepperLine>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <label htmlFor="field-about">About</label>
          <textarea
            {...register("textarea")}
            name="textarea"
            rows={5}
            cols={8}
            placeholder="placeholder"
            id="field-about"
            className={styles.textarea}
          ></textarea>
        </div>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/steptwo"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Отправить"
            type="submit"
            fill={true}
            id="button-send"
          ></Button>
        </ButtonsGroup>
      </form>
    </FormContainer>
  )
}
