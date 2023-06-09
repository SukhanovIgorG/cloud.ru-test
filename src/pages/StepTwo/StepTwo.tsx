import { useForm, useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAdvantages, setCheckbox, setRadio } from "../../rootSlice"
import {
  FormContainer,
  ButtonsGroup,
  LinkButton,
  StepperLine,
  Button,
} from "../../components"
import type { InitialStateTypes } from "../../StoreTypes"

import styles from "./StepTwo.module.scss"

export default function StepTwo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const advantages = useSelector((state: InitialStateTypes) => state.advantages)
  const checkbox = useSelector((state: InitialStateTypes) => state.checkbox)
  const radio = useSelector((state: InitialStateTypes) => state.radio)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      advantages,
      checkbox,
      radio,
    },
    mode: "onBlur",
  })
  const { fields, append, remove } = useFieldArray({
    name: "advantages",
    control,
  })
  type FormValues = {
    advantages: {
      field: string
    }[]
    checkbox: {
      one: string
      two: string
      tree: string
    }
    radio: string
  }

  const onSubmit = (data: FormValues) => {
    dispatch(setAdvantages(data.advantages))
    dispatch(setCheckbox(data.checkbox))
    dispatch(setRadio(data.radio))
    navigate("/steptree")
  }

  return (
    <FormContainer>
      <StepperLine step={2} total={3}></StepperLine>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <legend className={styles.legend}>{"Advantages"}</legend>
          {fields.map((field: { id: string }, index: number) => {
            return (
              <div key={field.id}>
                <section key={field.id}>
                  <div className={styles.input_container}>
                    <input
                      placeholder="Placeholder"
                      {...register(`advantages.${index}.field` as const, {
                        required: true,
                      })}
                      className={
                        errors?.advantages?.[index]?.field ? "error" : ""
                      }
                    />
                    <div
                      onClick={() => remove(index)}
                      className={styles.waste}
                    ></div>
                  </div>
                </section>
              </div>
            )
          })}

          <div
            onClick={() =>
              append({
                field: "",
              })
            }
            className={styles.append}
          ></div>
          <fieldset className={styles.container_group}>
            <legend className={styles.legend}>Checkbox group</legend>
            <div>
              <label htmlFor={"field-checkbox-group-option-1"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-1"}
                  {...register("checkbox.one" as const)}
                  name="checkbox.one"
                  value={1}
                />
                1
              </label>
            </div>
            <div>
              <label htmlFor={"field-checkbox-group-option-1"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-2"}
                  {...register("checkbox.two" as const)}
                  name="checkbox.two"
                  value={2}
                />
                2
              </label>
            </div>
            <div>
              <label htmlFor={"field-checkbox-group-option-3"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-3"}
                  {...register("checkbox.tree" as const)}
                  name="checkbox.tree"
                  value={3}
                />
                3
              </label>
            </div>
          </fieldset>
          <fieldset className={styles.container_group}>
            <legend className={styles.legend}>Radio group</legend>
            <div>
              <label htmlFor="pizza">
                <input
                  {...register("radio", { required: true })}
                  type="radio"
                  name="radio"
                  value="Pizza"
                  className="form-check-input"
                  id="pizza"
                />{" "}
                Pizza
              </label>
            </div>
            <div>
              <label htmlFor="burger">
                <input
                  {...register("radio", { required: true })}
                  type="radio"
                  name="radio"
                  value="Burger"
                  className="form-check-input"
                  id="burger"
                />{" "}
                Burger
              </label>
            </div>
            <div>
              <label htmlFor="fries">
                <input
                  {...register("radio", { required: true })}
                  type="radio"
                  name="radio"
                  value="Fries"
                  className="form-check-input"
                  id="fries"
                />
                French Fries
              </label>
            </div>
          </fieldset>
        </div>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/stepone"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Далее"
            fill={true}
            id="button-start"
            type={"submit"}
          ></Button>
        </ButtonsGroup>
      </form>
    </FormContainer>
  )
}
