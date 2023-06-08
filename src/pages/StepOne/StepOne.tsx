import {
  ButtonsGroup,
  FormContainer,
  Button,
  StepperLine,
  Input,
  Select,
} from "../../components"

import styles from "./StepOne.module.scss"

export default function StepOne() {
  return (
    <FormContainer>
      <StepperLine step={1} total={3}></StepperLine>
      <form className={styles.form_so}>
        <Input
          name="nickname"
          id="field-nickname"
          placeholder="Placeholder"
          type="text"
          title="Nickname"
        />
        <Input
          name="name"
          id="field-name"
          placeholder="Placeholder"
          type="text"
          title="Name"
        />
        <Input
          name="sername"
          id="field-sername"
          placeholder="Placeholder"
          type="text"
          title="Sername"
        />
        <Select
          name="sex"
          id="field-sex"
          placeholder="Placeholder"
          title="Sex"
          options={["man", "woman"]}
        />
      </form>
      <ButtonsGroup>
        <Button name="Назад" route="/" fill={false} id="button-back"></Button>
        <Button
          name="Далее"
          route="/steptwo"
          fill={true}
          id="button-next"
        ></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
